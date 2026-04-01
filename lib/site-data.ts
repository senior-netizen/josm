import {
  Activity,
  Bolt,
  BriefcaseBusiness,
  Factory,
  Leaf,
  Pickaxe,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Wrench
} from 'lucide-react';

export const stats = [
  { label: 'Projects Delivered', value: '240+', icon: BriefcaseBusiness },
  { label: 'Years of Experience', value: '14', icon: ShieldCheck },
  { label: 'Industries Served', value: '11', icon: Factory },
  { label: 'System Uptime Reliability', value: '99.8%', icon: Activity }
];

export const services = [
  {
    title: 'Power Distribution Systems',
    description: 'End-to-end LV and MV distribution architecture for mission-critical facilities.',
    icon: Bolt
  },
  {
    title: 'Control Panels & Switchboards',
    description: 'Precision-built assemblies engineered for durability, compliance, and serviceability.',
    icon: SlidersHorizontal
  },
  {
    title: 'PLC & Automation',
    description: 'Integrated automation logic with robust control strategies for industrial throughput.',
    icon: Settings
  },
  {
    title: 'Industrial Maintenance',
    description: 'Preventive and corrective maintenance programs to sustain production reliability.',
    icon: Wrench
  },
  {
    title: 'Energy Monitoring',
    description: 'Instrumentation and analytics pipelines for power quality and consumption visibility.',
    icon: Activity
  },
  {
    title: 'Custom Electrical Fabrication',
    description: 'Special-purpose fabrication for non-standard industrial environments and constraints.',
    icon: ShieldCheck
  }
];

export const projects = [
  {
    title: 'Mining Processing Plant Retrofit',
    image:
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80',
    problem: 'Aging switchgear caused frequent unplanned shutdowns.',
    solution: 'Deployed modular switchboards and PLC-based load balancing.',
    outcome: 'Reduced downtime by 37% within the first operating quarter.'
  },
  {
    title: 'Agri-Processing Expansion',
    image:
      'https://images.unsplash.com/photo-1581093469316-56ee6a0a3dfb?auto=format&fit=crop&w=1400&q=80',
    problem: 'Seasonal demand exceeded existing panel capacity.',
    solution: 'Engineered dual-source distribution with automated transfer logic.',
    outcome: 'Secured uninterrupted production through peak harvesting cycles.'
  },
  {
    title: 'Manufacturing Plant Power Upgrade',
    image:
      'https://images.unsplash.com/photo-1565438049492-55d8ffb89fd1?auto=format&fit=crop&w=1400&q=80',
    problem: 'Voltage instability compromised CNC line quality.',
    solution: 'Installed filtered control panels with real-time power quality monitoring.',
    outcome: 'Improved process consistency and reduced defect rates by 22%.'
  }
];

export const industries = [
  { name: 'Agriculture', description: 'Power systems for irrigation, storage, and processing.', icon: Leaf },
  { name: 'Manufacturing', description: 'High-availability infrastructure for production lines.', icon: Factory },
  { name: 'Mining', description: 'Ruggedized electrical systems for harsh extraction environments.', icon: Pickaxe },
  { name: 'Commercial', description: 'Reliable distribution and controls for critical facilities.', icon: BriefcaseBusiness }
];

export const trustLogos = ['ZimSteel', 'AgriCore', 'MineAxis', 'Harare Industrial Park', 'Delta Systems'];
