import { Project } from '../types';

export const portfolioProjects: Project[] = [
  {
    id: 'omniflow-cloud-os',
    title: 'OmniFlow Cloud OS',
    client: 'OmniFlow Enterprise Inc.',
    industry: 'Cloud Infrastructure & Developer Tools',
    category: 'Enterprise SaaS',
    tagline: 'Distributed workflow automation engine orchestrating 50M+ background jobs daily',
    description:
      'We engineered a mission-critical workflow platform that allows global enterprises to design, execute, and monitor complex asynchronous DAG pipelines with zero cold-start overhead.',
    challenge:
      'The client had outgrown their legacy monolithic event queue. It suffered from frequent deadlocks, cascading worker failovers, and slow UI updates that left enterprise customers waiting 8+ seconds for pipeline status.',
    solution:
      'We designed an event-driven distributed engine using Go microservices, Redis Streams, and a reactive React 19 frontend over WebSocket protocols. We implemented optimistic state reconciliations and an interactive canvas visualizer.',
    impactMetrics: [
      { label: 'Job Throughput', value: '+340%', subtext: 'From 12M to 50M+ daily events' },
      { label: 'Compute Cost', value: '-42%', subtext: '$2.4M saved in annual cloud spend' },
      { label: 'Pipeline Latency', value: '18ms', subtext: 'Reduced from 8.2s median wait time' },
      { label: 'System Uptime', value: '99.995%', subtext: 'Zero unplanned downtime across 18 months' },
    ],
    techStack: ['Go', 'TypeScript', 'React 19', 'Tailwind CSS', 'Redis Streams', 'PostgreSQL', 'Docker', 'Kubernetes'],
    year: '2025',
    duration: '6 Months',
    deliverables: [
      'High-throughput Event Processing Core in Go',
      'Visual Node-Based Workflow Canvas in React',
      'Real-time Telemetry & Dead-Letter Queue Dashboard',
      'Multi-tenant RBAC & Audit Compliance Logs',
    ],
    bannerGradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accentColor: '#4f46e5',
    featured: true,
    mockupType: 'dashboard',
    highlights: [
      'Interactive canvas rendering thousands of nodes at 60 FPS',
      'Zero-downtime blue/green deployment strategy on GKE',
      'Row-level security with sub-millisecond query evaluation',
    ],
  },
  {
    id: 'pulsepay-fintech',
    title: 'PulsePay Global Wallet & POS',
    client: 'PulsePay Financial Technologies',
    industry: 'Fintech & Cross-Border Payments',
    category: 'Mobile App',
    tagline: 'Next-generation biometric payments app & merchant settlement portal handling $1.8B in volume',
    description:
      'A cross-platform mobile wallet and merchant point-of-sale system that supports instant settlement across 34 currencies with bank-grade biometric encryption and fraud scoring.',
    challenge:
      'PulsePay required a seamless consumer mobile app and tablet POS that met strict PCI-DSS Level 1 compliance while delivering sub-second payment confirmation even in low-connectivity areas.',
    solution:
      'Built with React Native and native Swift/Kotlin biometric modules, backed by Node.js microservices. Integrated offline cryptographic receipt signing and an instantaneous QR transaction protocol.',
    impactMetrics: [
      { label: 'Active Users', value: '1.4M+', subtext: 'Across 14 international markets' },
      { label: 'Transaction Speed', value: '0.14s', subtext: 'Average tap-to-clear latency' },
      { label: 'App Store Rating', value: '4.9 ★', subtext: 'Over 48,000 verified user reviews' },
      { label: 'Chargeback Rate', value: '0.01%', subtext: '90% lower than standard industry average' },
    ],
    techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'AWS KMS', 'Tailwind', 'Redis'],
    year: '2025',
    duration: '8 Months',
    deliverables: [
      'Consumer iOS & Android Native Wallet Applications',
      'Merchant iPad POS & Web Reconciliation Hub',
      'Real-time Fraud Anomaly Detection Pipeline',
      'Biometric Secure Enclave Authentication System',
    ],
    bannerGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    accentColor: '#059669',
    featured: true,
    mockupType: 'mobile',
    highlights: [
      'Hardware secure enclave integration for key generation',
      'Offline-first synchronization with deterministic conflict resolution',
      'Multi-currency dynamic FX conversion engine',
    ],
  },
  {
    id: 'aether-health-workspace',
    title: 'Aether Clinical Intelligence',
    client: 'Aether Health Systems',
    industry: 'Healthcare & Clinical Diagnostics',
    category: 'Web Platform',
    tagline: 'HIPAA-compliant diagnostic intelligence & unified electronic health records workspace',
    description:
      'A clinical decision support platform for hospital networks, unifying EHR data, medical imaging viewports, and algorithmic triage flags into an ergonomic physician interface.',
    challenge:
      'Physicians were spending up to 3.5 hours per shift navigating fragmented legacy EHR software, causing diagnostic fatigue, missed lab alerts, and immense cognitive burden.',
    solution:
      'Engineered a lightning-fast web application using Next.js, FHIR/HL7 streaming connectors, and WebGL image viewing. Designed a distraction-free dark interface with hotkeys and semantic search.',
    impactMetrics: [
      { label: 'Chart Review Time', value: '-68%', subtext: 'Saved ~2.1 hours per doctor daily' },
      { label: 'Alert Detection', value: '99.4%', subtext: 'Critical lab abnormalities caught earlier' },
      { label: 'Clinician NPS', value: '+74', subtext: 'Adopted across 12 regional hospital systems' },
      { label: 'Data Latency', value: '45ms', subtext: 'Instantaneous medical history query' },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Python', 'FHIR API', 'PostgreSQL', 'Docker'],
    year: '2024',
    duration: '7 Months',
    deliverables: [
      'Web-based DICOM & PACS High-Res Image Viewer',
      'FHIR v4 Streaming Patient Data Aggregator',
      'Keyboard-First Diagnostic Review UI',
      'Audit-Proof HIPAA Compliance & Field Encryption',
    ],
    bannerGradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    accentColor: '#0284c7',
    featured: false,
    mockupType: 'dashboard',
    highlights: [
      'Sub-50ms query speeds across 100M+ historical patient records',
      'Strict Zero-Knowledge encryption at rest and in transit',
      'Keyboard-driven navigation inspired by professional trading desks',
    ],
  },
  {
    id: 'strata-spatial-studio',
    title: 'Strata 3D Spatial Configurator',
    client: 'Strata Architectural Labs',
    industry: 'Architecture & Industrial Design',
    category: 'UI/UX & Design',
    tagline: 'Interactive WebGL architectural customizer with photorealistic physically based rendering',
    description:
      'A cutting-edge browser-based 3D workspace empowering architects and enterprise clients to customize modular buildings, calculate real-time structural loads, and export CAD files.',
    challenge:
      'Previous 3D tools required heavy desktop workstation installations or suffered from sluggish 15fps browser rendering with long initial download bundles exceeding 80MB.',
    solution:
      'Built a progressive WebGL pipeline using Three.js and custom GLSL shaders with Draco compression, reducing asset payloads by 85% while sustaining solid 60fps on mobile browsers.',
    impactMetrics: [
      { label: 'Sales Conversion', value: '+310%', subtext: 'Direct digital quote configurations' },
      { label: 'Bundle Size', value: '4.8 MB', subtext: 'Compressed down from 80MB' },
      { label: 'Frame Rate', value: '60 FPS', subtext: 'Smooth performance on mobile and desktop' },
      { label: 'Client Engagement', value: '14 min', subtext: 'Average active session duration' },
    ],
    techStack: ['Three.js', 'WebGL', 'TypeScript', 'React', 'Tailwind CSS', 'Rust/Wasm', 'Vite'],
    year: '2025',
    duration: '5 Months',
    deliverables: [
      'Draco-Compressed 3D Asset Pipeline & Custom Shaders',
      'Parametric Dimensioning & Material Customizer',
      'Automated Bill-of-Materials & PDF Quote Generator',
      'Universal Touch & Mouse Interaction System',
    ],
    bannerGradient: 'from-amber-600 via-orange-600 to-rose-700',
    accentColor: '#d97706',
    featured: true,
    mockupType: 'web',
    highlights: [
      'WebAssembly geometric calculations running at native speed',
      'Physically based rendering (PBR) with environment reflections',
      'Instant CAD DWG/DXF vector export',
    ],
  },
  {
    id: 'kinetic-headless-commerce',
    title: 'Kinetic Headless Commerce',
    client: 'Kinetic Athletic Gear',
    industry: 'E-Commerce & High-Volume Retail',
    category: 'Web Platform',
    tagline: 'Global headless storefront with sub-150ms page loads and real-time inventory synchronization',
    description:
      'A global high-performance commerce platform engineered for an ultra-fast apparel brand during peak drop sales with over 200,000 concurrent shoppers.',
    challenge:
      'During Black Friday drops, the client previous storefront suffered from checkout timeouts, out-of-stock race conditions, and sluggish product filtering that dropped mobile conversions.',
    solution:
      'Engineered an edge-rendered headless frontend on Cloudflare Workers and React, backed by Shopify Plus Storefront GraphQL and a distributed inventory reservation queue.',
    impactMetrics: [
      { label: 'Mobile Conversion', value: '+54%', subtext: 'Jumped from 2.2% to 3.4%' },
      { label: 'Global TTFB', value: '110ms', subtext: 'Cached and served at edge locations' },
      { label: 'Peak Capacity', value: '250k', subtext: 'Concurrent shoppers with 0 errors' },
      { label: 'Revenue Lift', value: '$8.6M', subtext: 'Attributed directly to improved speed' },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Cloudflare Workers', 'GraphQL'],
    year: '2024',
    duration: '4 Months',
    deliverables: [
      'Edge-Rendered Headless Commerce Frontend',
      'Micro-Cart & Instant Apple/Google Pay Integration',
      'Real-Time Inventory Hold Engine',
      'Comprehensive Design System & Component Library',
    ],
    bannerGradient: 'from-purple-600 via-pink-600 to-rose-600',
    accentColor: '#9333ea',
    featured: false,
    mockupType: 'web',
    highlights: [
      'Sub-second instant search with typo-tolerant fuzzy matching',
      'Edge-cached static assets with localized pricing for 40+ countries',
      'Zero layout shift (CLS score 0.002)',
    ],
  },
  {
    id: 'aura-predictive-fleet',
    title: 'Aura Autonomous Fleet Control',
    client: 'Aura Logistics Worldwide',
    industry: 'Transportation & Supply Chain IoT',
    category: 'Enterprise SaaS',
    tagline: 'Real-time telemetry and algorithmic routing dashboard for 45,000 commercial vehicles',
    description:
      'An enterprise operations hub displaying real-time vehicle diagnostics, weather radar overlays, driver duty hours, and dynamic re-routing algorithms.',
    challenge:
      'Dispatchers were juggling 5 distinct software portals to track vehicles, calculate fuel-optimal paths, and ensure compliance, resulting in delayed reroutes during severe weather.',
    solution:
      'Unified all fleet telemetry into an ultra-responsive web dashboard with high-density Mapbox vector tiling, Kafka event streaming, and automated route re-computation.',
    impactMetrics: [
      { label: 'Fuel Savings', value: '-28%', subtext: 'Cut $14M in annual diesel expenditure' },
      { label: 'On-Time Delivery', value: '98.8%', subtext: 'Improved by 16 percentage points' },
      { label: 'Active Fleets', value: '45,000+', subtext: 'Monitored with 1-second ping accuracy' },
      { label: 'Incident Response', value: '-60%', subtext: 'Dispatchers notified in under 3 seconds' },
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Mapbox GL', 'Apache Kafka', 'Go', 'PostgreSQL', 'TimescaleDB'],
    year: '2025',
    duration: '9 Months',
    deliverables: [
      'Real-Time High-Density Vector Map Visualization',
      'Predictive Route Optimization Algorithm Module',
      'IoT Sensor Anomaly Detector & Maintenance Warnings',
      'Driver Mobile Companion Application',
    ],
    bannerGradient: 'from-sky-600 via-teal-600 to-emerald-700',
    accentColor: '#0284c7',
    featured: false,
    mockupType: 'dashboard',
    highlights: [
      'Real-time ingestion of 120,000 telemetry messages per second',
      'Adaptive map rendering clustering 50,000 markers without lag',
      'Custom geofencing triggers with instant SMS and push notifications',
    ],
  },
];
