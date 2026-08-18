import {
  IProject,
  IProjectStack,
  ProjectStatus,
  ProjectType,
} from '@/types/project/project.types'

export const coreCompetencies = [
  'Backend Architecture',
  'API Design',
  'Database Management',
  'Functional Frontend',
]

export const stack: IProjectStack = {
  backend: {
    languages: ['TypeScript', 'JavaScript', 'Python'],
    tools: ['Node.js'],
    frameworks: ['NestJS', 'Fastify', 'Express'],
  },
  frontend: {
    languages: ['TypeScript', 'JavaScript'],
    tools: ['Tailwind CSS', 'Shadcn/UI', 'Zustand'],
    frameworks: ['Next.js', 'React'],
  },
  infrastructure: {
    virtualization: ['Docker'],
    // orchestration: ['Kubernetes'],
    messaging: ['RabbitMQ'],
    discovery: ['Consul'],
  },
  persistence: {
    databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    orm: ['Prisma', 'TypeORM'],
    caches: ['Redis'],
    storages: ['AWS S3', 'Cloudinary'],
  },
  networking: {
    monitoring: ['Prometheus', 'Grafana'],
    logging: ['Elasticsearch', 'Logstash', 'Kibana'],
    tracing: ['Jaeger'],
  },
}

export const projects: IProject[] = [
  {
    name: 'W-Commerce',
    image: 'w-commerce.webp',
    description:
      'W-Commerce is a headless commerce engine built for social sellers, designed to power sales through messaging platforms like WhatsApp using AI',
    type: ProjectType.API,
    status: ProjectStatus.IN_PROGRESS,
    stack: {
      backend: {
        languages: ['TypeScript'],
        frameworks: ['NestJS'],
      },
      persistence: {
        databases: ['PostgreSQL', 'Redis'],
      },
      infrastructure: {
        messaging: ['RabbitMQ'],
        virtualization: ['Docker'],
      },
    },
    links: {
      github: 'https://github.com/Obiski15/Headless-Commerce-Engine',
      live: '',
    },
  },
  {
    name: 'Origin',
    image: 'origin.webp',
    description:
      'An AI-powered student evaluation system utilizing local LLMs and transcription models to automatically verify student defenses.',
    type: ProjectType.API,
    status: ProjectStatus.LIVE,
    stack: {
      backend: {
        languages: ['TypeScript', 'Python'],
        frameworks: ['NestJS'],
        tools: ['Ollama', 'Gemma 4', 'Whisper'],
      },
      frontend: {
        languages: ['TypeScript'],
        frameworks: ['Next.js'],
      },
      infrastructure: {
        virtualization: ['Docker'],
      },
    },
    links: {
      github: 'https://github.com/Obiski15/Origin',
      live: '',
    },
  },
  {
    name: 'Distributed Notification System',
    abbreviation: 'DNS',
    image: 'dns.webp',
    description:
      'A scalable microservice system that can handle high volumes of notifications across multiple channels (Email, push)',
    status: ProjectStatus.LIVE,
    type: ProjectType.API,
    stack: {
      backend: {
        languages: ['TypeScript'],
        frameworks: ['NestJS'],
      },
      infrastructure: {
        messaging: ['RabbitMQ'],
        virtualization: ['Docker'],
      },
      persistence: {
        databases: ['MySQL', 'Redis'],
      },
    },
    links: {
      github: 'https://github.com/Obiski15/Distributed-Notification-System',
      live: '',
    },
  },
  {
    name: 'Log Analyser Agent',
    image: 'log-analyser.webp',
    description:
      'An intelligent AI-powered log analysis system built that analyzes server logs, detects issues, and provides actionable recommendations.',
    type: ProjectType.API,
    status: ProjectStatus.LIVE,
    stack: {
      backend: {
        languages: ['TypeScript'],
        tools: ['Gemini'],
        frameworks: ['Mastra', 'Node.js'],
      },
    },
    links: {
      github: 'https://github.com/Obiski15/log-analyzer-agent',
      live: '',
    },
  },
  {
    name: 'Paystack Wallet Service',
    image: 'paystack-wallet.webp',
    type: ProjectType.API,
    status: ProjectStatus.LIVE,
    description:
      'A RESTful API for managing Paystack wallet transactions and user accounts',
    stack: {
      backend: {
        languages: ['TypeScript'],
        frameworks: ['NestJS'],
      },
      persistence: {
        databases: ['PostgreSQL'],
        orm: ['TypeORM'],
      },
    },
    links: {
      github: 'https://github.com/Obiski15/Paystack-Wallet-Service',
      live: '',
    },
  },
  {
    name: 'DevLinks',
    image: 'devlinks.webp',
    type: ProjectType.WEB,
    status: ProjectStatus.LIVE,
    description:
      'Link management system for developers to organize and share their resources',
    stack: {
      backend: {
        languages: ['TypeScript'],
        frameworks: ['NestJS', 'Express'],
      },
      frontend: {
        languages: ['TypeScript'],
        tools: ['Tailwind CSS'],
        frameworks: ['Next.js'],
      },
      persistence: {
        orm: ['MongoDB'],
      },
    },
    links: {
      github: 'https://github.com/Obiski15/link-sharing-app/',
      live: 'https://tinyurl.com/cah2yhdh',
    },
  },
  {
    name: 'Notes',
    image: 'notes.webp',
    description:
      'A cross-platform notes app to capture, manage, and sync your ideas across all devices.',
    type: ProjectType.WEB,
    status: ProjectStatus.LIVE,
    stack: {
      frontend: {
        languages: ['TypeScript'],
        tools: ['Tailwind CSS'],
        frameworks: ['Next.js'],
      },
      backend: {
        languages: ['TypeScript'],
        frameworks: ['Express'],
      },
      persistence: {
        databases: ['MongoDB'],
      },
    },
    links: {
      github: 'https://github.com/Obiski15/notes',
      live: 'https://tinyurl.com/e65r9cdd',
    },
  },
] as const
