export const solutionsPage = {
  title: "Our Solutions",
  description: "Discover our comprehensive range of space communication solutions designed for the next generation of satellite technology."
};

export const solutions = [
  {
    title: "5G NTN Networks",
    description: "Next-generation network optimization solutions for enhanced performance and energy efficiency.",
    icon: "Network",
    color: "green",
    link: "/solutions/networks",
    points: [
      "Ultra-low latency communication",
      "Dynamic resource allocation",
      "Seamless terrestrial integration"
    ]
  },
  {
    title: "Cubesat Payloads",
    description: "Advanced satellite payloads optimized for maximum efficiency in space communications.",
    icon: "Satellite",
    color: "blue",
    link: "/solutions/cubesats",
    points: [
      "Multi-band receiver technology",
      "Power-efficient transmitters",
      "Compact, lightweight design"
    ]
  },
  {
    title: "SDR Solutions",
    description: "Software-defined radio solutions for flexible and efficient satellite communications.",
    icon: "Radio",
    color: "purple",
    link: "/solutions/sdr",
    points: [
      "High-precision emulation",
      "Multi-channel support",
      "Real-time processing"
    ]
  },
  {
    id: 'network-automation',
    title: 'Network Automation',
    description: 'QoS-Driven network performance optimization through AI-driven controllers',
    icon: 'network',
    color: 'accent-quaternary',
    url: '/solutions/automation',
    points: [
      "AI-driven optimization",
      "Automated configuration",
      "Predictive maintenance"
    ]
  },
  {
    title: "Custom Development",
    description: "Tailored development services for unique satellite communication challenges.",
    icon: "Globe",
    color: "amber",
    link: "/solutions/development",
    points: [
      "Agile development process",
      "Custom software solutions",
      "System integration"
    ]
  },
  {
    title: "6G Research",
    description: "Pioneering research into next-generation space communication technologies.",
    icon: "Zap",
    color: "rose",
    link: "/solutions/research",
    points: [
      "Quantum communications",
      "Photonic integration",
      "Advanced beamforming"
    ]
  }
];

// Color configuration for solution cards using custom accent colors
export const colorConfig = {
  green: {
    icon: "text-green-400", // Keep green for 5G NTN as it's distinct
    glow: "bg-green-500/20",
    hover: "hover:bg-green-500/5",
    border: "group-hover:border-green-500/20"
  },
  blue: {
    icon: "text-accent-tertiary", // Blue for Cubesat Payloads (uses Multi-orbit diagram color)
    glow: "bg-accent-tertiary/20",
    hover: "hover:bg-accent-tertiary/5",
    border: "group-hover:border-accent-tertiary/20"
  },
  purple: {
    icon: "text-accent-quaternary", // Purple for SDR Solutions (uses QoS optimization color)
    glow: "bg-accent-quaternary/20",
    hover: "hover:bg-accent-quaternary/5",
    border: "group-hover:border-accent-quaternary/20"
  },
  teal: {
    icon: "text-teal-400", // Keep teal for Network Automation
    glow: "bg-teal-500/20",
    hover: "hover:bg-teal-500/5",
    border: "group-hover:border-teal-500/20"
  },
  amber: {
    icon: "text-amber-400", // Keep amber for Custom Development
    glow: "bg-amber-500/20",
    hover: "hover:bg-amber-500/5",
    border: "group-hover:border-amber-500/20"
  },
  rose: {
    icon: "text-accent-secondary", // Rose/Red for 6G Research (uses 5G payload color)
    glow: "bg-accent-secondary/20",
    hover: "hover:bg-accent-secondary/5",
    border: "group-hover:border-accent-secondary/20"
  }
};
