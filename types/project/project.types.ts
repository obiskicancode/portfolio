export enum ProjectType {
  API = 'api',
  WEB = 'web',
  MOBILE = 'mobile',
}

export enum ProjectStatus {
  LIVE = 'live',
  IN_PROGRESS = 'in progress',
}

export type StackTypes =
  | 'MongoDB'
  | 'PostgreSQL'
  | 'MySQL'
  | 'Redis'
  | 'AWS S3'
  | 'Cloudinary'
  | 'Prisma'
  | 'Mastra'
  | 'TypeORM'
  | 'Tailwind CSS'
  | 'Shadcn/UI'
  | 'Zustand'
  | 'Next.js'
  | 'React'
  | 'NestJS'
  | 'Express'
  | 'Fastify'
  | 'Gemini'
  | 'Node.js'
  | 'TypeScript'
  | 'JavaScript'
  | 'Python'
  | 'Docker'
  | 'RabbitMQ'
  | 'Consul'
  | 'Prometheus'
  | 'Grafana'
  | 'Elasticsearch'
  | 'Logstash'
  | 'Kibana'
  | 'Jaeger'
  | 'Ollama'
  | 'Gemma 4'
  | 'Whisper'
export interface IProjectStack {
  backend?: {
    languages?: StackTypes[]
    tools?: StackTypes[]
    frameworks?: StackTypes[]
  }

  frontend?: {
    languages?: StackTypes[]
    tools?: StackTypes[]
    frameworks?: StackTypes[]
  }

  infrastructure?: {
    virtualization?: StackTypes[]
    discovery?: StackTypes[]
    messaging?: StackTypes[]
  }

  persistence?: {
    databases?: StackTypes[]
    caches?: StackTypes[]
    orm?: StackTypes[]
    storages?: StackTypes[]
  }

  networking?: {
    monitoring?: StackTypes[]
    logging?: StackTypes[]
    tracing?: StackTypes[]
  }
}

export interface IProject {
  abbreviation?: string
  image: string
  name: string
  type: ProjectType
  status: ProjectStatus
  description: string
  stack: IProjectStack
  links: {
    github: string
    live: string
  }
}
