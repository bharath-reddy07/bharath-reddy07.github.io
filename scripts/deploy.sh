#!/usr/bin/env bash
#
# Publish the built site to the gh-pages branch.
#
# Needed because GitHub Actions is unavailable on this account (billing lock),
# so the site can't be built on CI. Pages is instead set to "Deploy from a
# branch" -> gh-pages -> / (root), and this script pushes the built output there.
#
# Usage:  npm run deploy
#
# If Actions becomes available again, delete this and switch Pages back to
# "GitHub Actions" — .github/workflows/deploy.yml already does the same job.

set -euo pipefail

cd "$(dirname "$0")/.."

REMOTE="$(git remote get-url origin)"
BRANCH="gh-pages"

# The CA bundle is only needed on the corporate network; harmless elsewhere.
if [ -f .ca-bundle.pem ]; then
  export NODE_EXTRA_CA_CERTS="$PWD/.ca-bundle.pem"
fi

echo "==> Building"
npm run build

if [ ! -f dist/index.html ]; then
  echo "Build produced no dist/index.html — aborting." >&2
  exit 1
fi

# Astro emits assets into _astro/. Jekyll ignores any directory starting with
# an underscore, which would silently strip every stylesheet. .nojekyll stops
# Pages from running Jekyll over the output at all.
touch dist/.nojekyll

echo "==> Publishing to $BRANCH"
cd dist
rm -rf .git
git init -q
git checkout -qB "$BRANCH"
git add -A
git -c user.name="$(git -C .. config user.name)" \
    -c user.email="$(git -C .. config user.email)" \
    commit -qm "Deploy site"
git push -q -f "$REMOTE" "$BRANCH"

echo "==> Done. Live at https://bharath-reddy07.github.io/ in ~1 minute."
echo "    Pages must be set to: Deploy from a branch -> $BRANCH -> / (root)"
