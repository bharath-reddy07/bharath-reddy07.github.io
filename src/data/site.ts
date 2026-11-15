/**
 * Single source of truth for everything that appears in more than one place.
 * Edit here, not in the templates.
 */

export const site = {
  name: 'D K Bharath Reddy',
  shortName: 'Bharath Reddy',
  // The positioning line. Mirrors the thesis of the SOP on purpose — an admissions
  // reader who sees the same sentence in both reads it as conviction, not repetition.
  tagline:
    'I work on how intelligent systems retrieve, validate, and deliver information reliably at scale.',
  blurb:
    'Software engineer at RingCentral, building the AI-facing interfaces and retrieval infrastructure behind enterprise analytics. Previously: computer-vision research at RV College of Engineering — two publications and design patents granted in Germany, the UK, and India.',
  email: 'dkbharathreddy9@gmail.com',
  location: 'Bangalore, India',
  links: {
    github: 'https://github.com/bharath-reddy07',
    linkedin: 'https://www.linkedin.com/in/d-k-bharath-reddy-bb2b4a247',
    // TODO: create a Google Scholar profile and paste the URL here, then
    // remove this comment. If you'd rather not, delete the `scholar` key
    // entirely and the link disappears from the header.
    scholar: '',
    cv: '/cv.pdf',
  },
} as const;

/**
 * The "at a glance" panel beside the hero. Deliberately the four rarest
 * things on the CV — these are what separate this application from a
 * competent-backend-engineer one, and they were previously buried.
 */
export const glance = [
  {
    stat: '3',
    label: 'design patents granted',
    detail: 'Germany · United Kingdom · India',
  },
  {
    stat: '2',
    label: 'peer-reviewed publications',
    detail: 'Springer CCIS · IEEE',
  },
  {
    stat: '1st',
    label: 'e-Yantra, IIT Bombay',
    detail: 'Multi-robot ROS coordination',
  },
  {
    stat: '9.50',
    label: 'CGPA, RV College of Engineering',
    detail: 'B.E. Computer Science',
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  authors: string;
  url: string; // TODO: real DOI / Xplore / SpringerLink URL
  summary: string;
};

export const publications: Publication[] = [
  {
    title: 'Dynamic Image Analysis of Microscopic Particles',
    venue: 'Springer CCIS — MIND Conference',
    year: '2024',
    // TODO: confirm exact author order as published.
    authors: 'D K Bharath Reddy, et al.',
    url: '', // TODO: SpringerLink DOI
    summary:
      'Follow-up research extending dynamic image-analysis techniques to the evaluation of microscopic particles in motion.',
  },
  {
    title: 'Micro-Particle Anomaly Detection & Shape Classification',
    venue: 'IEEE Conference, Vellore',
    year: '2023',
    authors: 'D K Bharath Reddy, et al.',
    url: '', // TODO: IEEE Xplore DOI
    summary:
      'Foundational work applying computer-vision techniques to identify anomalies, analyse shape, and classify micro-sized particles.',
  },
  {
    title: 'Web-Based Application for Healthy Lifestyle',
    venue: '12th Project Innovation Contest (PIC), KIIT Odisha — pp. 49–60',
    year: '2023',
    authors: 'D K Bharath Reddy, et al.',
    url: '',
    summary:
      'A digital health platform combining ML food classification, QR-based record sharing, and ESP8266 IoT hardware.',
  },
];

export const experience = [
  {
    role: 'Software Development Engineer',
    org: 'RingCentral',
    period: 'Jul 2025 — present',
    points: [
      'Develop major parts of the ACE Model Context Protocol server, the interface through which AI applications query enterprise analytics under real permission and accuracy constraints.',
      'Redesigned Elasticsearch query and aggregation strategies across a data-model migration, cutting complex dashboard latency from several seconds to under one second.',
      'Built event-driven export and reporting pipelines on Kafka, Redis, and PostgreSQL with streaming CSV transformation.',
    ],
  },
  {
    role: 'Software Development Engineer, Intern',
    org: 'RingCentral',
    period: 'Jan 2025 — Jul 2025',
    points: [
      'Built REST APIs and Elasticsearch analytics for call, deal, scorecard, and performance dashboards over large volumes of interaction data.',
      'Designed search and aggregation queries for metrics, trends, breakdowns, filters, and pagination.',
      'Refactored legacy backend services for performance, error handling, and backward compatibility.',
    ],
  },
  {
    role: 'Embedded Systems Intern',
    org: 'Si++ (custom RISC-V microprocessors)',
    period: 'Mar 2024 — Sep 2024',
    points: [
      'Integrated and developed MicroPython functions for a custom board built on the RISC-V architecture.',
    ],
  },
];

export const education = [
  {
    school: 'R V College of Engineering',
    qualification: 'B.E., Computer Science and Engineering',
    detail: 'CGPA 9.50',
    period: 'Nov 2021 — Jul 2025',
  },
  {
    school: 'R V PU College',
    qualification: 'Pre-University',
    detail: '98.7% · JEE Advanced AIR 6783 · JEE Main AIR 12177 · KCET 83',
    period: 'Jun 2019 — Jun 2021',
  },
  {
    school: 'Baldwin Co-Education Extension High School',
    qualification: 'ICSE',
    detail: '97.8%',
    period: 'Mar 2019',
  },
];

export const awards = [
  {
    title: '1st place — e-Yantra Robotics Competition, IIT Bombay',
    year: '2023',
    detail:
      'Multi-robot ROS system drawing vector images autonomously without collisions, using overhead ArUco-marker tracking to replan paths in real time.',
  },
  {
    title: "1st place — ICHack '22, IEEE India Council",
    year: '2022',
    detail:
      'Nutritional tracking platform estimating caloric intake directly from user-uploaded food photographs.',
  },
  {
    title: 'Design patents granted — Germany, United Kingdom, India',
    year: '2024',
    detail:
      'DigiPick, an AI-powered pick-reader for fabric analysis. Utility patent pending in India.',
  },
];
