export interface RoadmapSubtopic {
  label: string;
  resource?: string;
}

export interface RoadmapBranch {
  title: string;
  color: string;
  items: RoadmapSubtopic[];
}

export interface Roadmap {
  id: string;
  title: string;
  icon: string;
  centerColor: string;
  branches: RoadmapBranch[];
}

const ROADMAPS: Roadmap[] = [
  {
    id: 'java',
    title: 'Java Developer',
    icon: '☕',
    centerColor: 'from-red-500 to-orange-500',
    branches: [
      {
        title: 'Learn the Fundamentals',
        color: 'from-blue-500 to-cyan-500',
        items: [
          { label: 'Basic Syntax' },
          { label: 'Data Types, Variables' },
          { label: 'Loops' },
          { label: 'Exception Handling' },
          { label: 'Conditionals' },
          { label: 'Functions' },
          { label: 'Data Structures' },
          { label: 'OOP, Interfaces, Classes' },
          { label: 'Packages' },
          { label: 'Working with Files, APIs' },
        ],
      },
      {
        title: 'Getting Deeper',
        color: 'from-pink-500 to-rose-500',
        items: [
          { label: 'Memory Management' },
          { label: 'Collection Framework' },
          { label: 'Serialization' },
          { label: 'Networking & Sockets' },
          { label: 'JVM Internal Working' },
          { label: 'Garbage Collection' },
          { label: 'Thread Basics' },
          { label: 'Generics' },
          { label: 'Streams' },
          { label: 'Lambda' },
        ],
      },
      {
        title: 'Build Tools',
        color: 'from-green-500 to-emerald-500',
        items: [
          { label: 'Gradle' },
          { label: 'Maven' },
          { label: 'Ant' },
        ],
      },
      {
        title: 'Web Frameworks',
        color: 'from-red-400 to-orange-400',
        items: [
          { label: 'Spring' },
          { label: 'Spring Boot' },
          { label: 'Play Framework' },
          { label: 'Struts' },
        ],
      },
      {
        title: 'JDBC',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'JDBC' },
          { label: 'JDBC Template' },
        ],
      },
      {
        title: 'ORM',
        color: 'from-yellow-500 to-amber-500',
        items: [
          { label: 'Spring Data JPA' },
          { label: 'JPA' },
          { label: 'EBean' },
          { label: 'Hibernate' },
        ],
      },
      {
        title: 'Testing your APIs',
        color: 'from-purple-500 to-violet-500',
        items: [
          { label: 'Cucumber-JVM' },
          { label: 'Cukes' },
          { label: 'JBehave' },
          { label: 'Mockito' },
          { label: 'JMeter' },
          { label: 'Rest Assured' },
          { label: 'TestNG' },
          { label: 'JUnit' },
        ],
      },
      {
        title: 'Logging Frameworks',
        color: 'from-amber-400 to-yellow-400',
        items: [
          { label: 'Log4j2' },
          { label: 'SLF4J' },
          { label: 'Logback' },
          { label: 'TinyLOG' },
        ],
      },
    ],
  },
  {
    id: 'python',
    title: 'Python Developer',
    icon: '🐍',
    centerColor: 'from-blue-500 to-cyan-500',
    branches: [
      {
        title: 'Core Python',
        color: 'from-blue-400 to-cyan-400',
        items: [
          { label: 'Variables & Data Types' },
          { label: 'Loops & Conditionals' },
          { label: 'Functions & Decorators' },
          { label: 'List Comprehensions' },
          { label: 'Generators & Iterators' },
          { label: 'File I/O' },
        ],
      },
      {
        title: 'OOP & Modules',
        color: 'from-emerald-500 to-teal-500',
        items: [
          { label: 'Classes & Objects' },
          { label: 'Inheritance' },
          { label: 'Polymorphism' },
          { label: 'Modules & Packages' },
          { label: 'Virtual Environments' },
        ],
      },
      {
        title: 'Data Structures',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'Lists' },
          { label: 'Dicts' },
          { label: 'Sets' },
          { label: 'Tuples' },
          { label: 'Stacks & Queues' },
          { label: 'Trees & Graphs' },
        ],
      },
      {
        title: 'Web Frameworks',
        color: 'from-green-500 to-emerald-500',
        items: [
          { label: 'Flask' },
          { label: 'FastAPI' },
          { label: 'Django' },
        ],
      },
      {
        title: 'Databases',
        color: 'from-amber-500 to-orange-500',
        items: [
          { label: 'SQLite' },
          { label: 'PostgreSQL' },
          { label: 'SQLAlchemy' },
          { label: 'Alembic' },
        ],
      },
      {
        title: 'Testing & Tools',
        color: 'from-purple-500 to-pink-500',
        items: [
          { label: 'pytest' },
          { label: 'unittest' },
          { label: 'Mocking' },
          { label: 'Logging' },
        ],
      },
      {
        title: 'Data Science / ML',
        color: 'from-rose-500 to-pink-500',
        items: [
          { label: 'NumPy' },
          { label: 'Pandas' },
          { label: 'Matplotlib' },
          { label: 'Scikit-learn' },
          { label: 'TensorFlow' },
        ],
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript / Frontend',
    icon: '⚡',
    centerColor: 'from-yellow-400 to-orange-500',
    branches: [
      {
        title: 'Core JavaScript',
        color: 'from-yellow-400 to-orange-400',
        items: [
          { label: 'Variables & Scopes' },
          { label: 'Closures' },
          { label: 'Promises & Async/Await' },
          { label: 'ES6+ Features' },
          { label: 'Event Loop' },
          { label: 'DOM Manipulation' },
        ],
      },
      {
        title: 'Frameworks',
        color: 'from-cyan-500 to-blue-500',
        items: [
          { label: 'React' },
          { label: 'Next.js' },
          { label: 'Vue.js' },
          { label: 'Angular' },
          { label: 'Svelte' },
        ],
      },
      {
        title: 'Build Tools',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'Vite' },
          { label: 'Webpack' },
          { label: 'Babel' },
          { label: 'ESBuild' },
        ],
      },
      {
        title: 'Styling',
        color: 'from-pink-500 to-rose-500',
        items: [
          { label: 'Tailwind CSS' },
          { label: 'CSS Modules' },
          { label: 'Styled Components' },
          { label: 'Framer Motion' },
        ],
      },
      {
        title: 'State Management',
        color: 'from-emerald-500 to-teal-500',
        items: [
          { label: 'Redux Toolkit' },
          { label: 'Zustand' },
          { label: 'Context API' },
          { label: 'TanStack Query' },
        ],
      },
      {
        title: 'TypeScript',
        color: 'from-blue-500 to-indigo-500',
        items: [
          { label: 'Types & Interfaces' },
          { label: 'Generics' },
          { label: 'Utility Types' },
          { label: 'Type Narrowing' },
        ],
      },
      {
        title: 'Testing',
        color: 'from-green-500 to-emerald-500',
        items: [
          { label: 'Jest' },
          { label: 'Vitest' },
          { label: 'React Testing Library' },
          { label: 'Playwright' },
        ],
      },
    ],
  },
  {
    id: 'dsa',
    title: 'DSA & Competitive',
    icon: '🧠',
    centerColor: 'from-purple-500 to-violet-600',
    branches: [
      {
        title: 'Linear Structures',
        color: 'from-blue-400 to-cyan-400',
        items: [
          { label: 'Arrays' },
          { label: 'Strings' },
          { label: 'Linked Lists' },
          { label: 'Stacks' },
          { label: 'Queues' },
          { label: 'HashMap' },
        ],
      },
      {
        title: 'Trees & Graphs',
        color: 'from-emerald-500 to-teal-500',
        items: [
          { label: 'Binary Trees' },
          { label: 'BST' },
          { label: 'Trie' },
          { label: 'DFS & BFS' },
          { label: 'Shortest Path' },
          { label: 'Topological Sort' },
        ],
      },
      {
        title: 'Algorithms',
        color: 'from-pink-500 to-rose-500',
        items: [
          { label: 'Binary Search' },
          { label: 'Two Pointers' },
          { label: 'Sliding Window' },
          { label: 'Recursion' },
        ],
      },
      {
        title: 'Dynamic Programming',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'Memoization' },
          { label: 'Tabulation' },
          { label: 'Knapsack' },
          { label: 'LCS' },
          { label: 'DP on Trees' },
        ],
      },
      {
        title: 'Advanced',
        color: 'from-amber-500 to-orange-500',
        items: [
          { label: 'Union-Find' },
          { label: 'Segment Tree' },
          { label: 'BIT' },
          { label: 'Kruskal / Prim' },
        ],
      },
      {
        title: 'Greedy & Backtrack',
        color: 'from-rose-500 to-pink-500',
        items: [
          { label: 'Interval Scheduling' },
          { label: 'N-Queens' },
          { label: 'Sudoku Solver' },
          { label: 'Permutations' },
        ],
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    icon: '🏗️',
    centerColor: 'from-emerald-500 to-teal-500',
    branches: [
      {
        title: 'Fundamentals',
        color: 'from-blue-400 to-cyan-400',
        items: [
          { label: 'Client-Server Model' },
          { label: 'HTTP & REST APIs' },
          { label: 'Load Balancing' },
          { label: 'Caching' },
          { label: 'CDN' },
        ],
      },
      {
        title: 'Databases',
        color: 'from-amber-500 to-orange-500',
        items: [
          { label: 'SQL vs NoSQL' },
          { label: 'Indexing' },
          { label: 'Sharding' },
          { label: 'Replication' },
          { label: 'CAP Theorem' },
        ],
      },
      {
        title: 'Distributed Systems',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'Consistency Models' },
          { label: 'Consensus (Raft/Paxos)' },
          { label: 'RPC' },
          { label: 'Eventual Consistency' },
        ],
      },
      {
        title: 'Messaging & Streaming',
        color: 'from-pink-500 to-rose-500',
        items: [
          { label: 'Kafka' },
          { label: 'RabbitMQ' },
          { label: 'Pub/Sub' },
          { label: 'Event-Driven' },
        ],
      },
      {
        title: 'Design Problems',
        color: 'from-green-500 to-emerald-500',
        items: [
          { label: 'URL Shortener' },
          { label: 'WhatsApp' },
          { label: 'Netflix' },
          { label: 'Uber' },
          { label: 'Twitter' },
        ],
      },
      {
        title: 'Observability',
        color: 'from-cyan-500 to-blue-500',
        items: [
          { label: 'Metrics' },
          { label: 'Tracing' },
          { label: 'Logging' },
          { label: 'Alerting' },
        ],
      },
    ],
  },
  {
    id: 'react',
    title: 'React Developer',
    icon: '⚛️',
    centerColor: 'from-cyan-500 to-blue-500',
    branches: [
      {
        title: 'Core React',
        color: 'from-cyan-400 to-blue-400',
        items: [
          { label: 'JSX' },
          { label: 'Components' },
          { label: 'Props & State' },
          { label: 'Event Handling' },
          { label: 'Conditional Rendering' },
          { label: 'Lists & Keys' },
        ],
      },
      {
        title: 'Hooks',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'useState' },
          { label: 'useEffect' },
          { label: 'useRef' },
          { label: 'useMemo' },
          { label: 'useCallback' },
          { label: 'Custom Hooks' },
        ],
      },
      {
        title: 'State Management',
        color: 'from-emerald-500 to-teal-500',
        items: [
          { label: 'Context API' },
          { label: 'Zustand' },
          { label: 'Redux Toolkit' },
          { label: 'TanStack Query' },
        ],
      },
      {
        title: 'Routing',
        color: 'from-amber-500 to-orange-500',
        items: [
          { label: 'React Router' },
          { label: 'Nested Routes' },
          { label: 'Protected Routes' },
          { label: 'Lazy Loading' },
        ],
      },
      {
        title: 'Full Stack (Next.js)',
        color: 'from-pink-500 to-rose-500',
        items: [
          { label: 'SSR / SSG' },
          { label: 'App Router' },
          { label: 'API Routes' },
          { label: 'Middleware' },
          { label: 'Server Components' },
        ],
      },
      {
        title: 'Styling & UI',
        color: 'from-green-500 to-emerald-500',
        items: [
          { label: 'Tailwind CSS' },
          { label: 'shadcn/ui' },
          { label: 'Framer Motion' },
          { label: 'Radix UI' },
        ],
      },
      {
        title: 'Testing',
        color: 'from-purple-500 to-pink-500',
        items: [
          { label: 'Jest' },
          { label: 'React Testing Library' },
          { label: 'Cypress / Playwright' },
        ],
      },
    ],
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    icon: '🤖',
    centerColor: 'from-pink-500 to-rose-500',
    branches: [
      {
        title: 'Math Foundations',
        color: 'from-blue-400 to-cyan-400',
        items: [
          { label: 'Linear Algebra' },
          { label: 'Calculus' },
          { label: 'Probability' },
          { label: 'Statistics' },
        ],
      },
      {
        title: 'Python for Data',
        color: 'from-yellow-400 to-orange-400',
        items: [
          { label: 'NumPy' },
          { label: 'Pandas' },
          { label: 'Matplotlib' },
          { label: 'Seaborn' },
        ],
      },
      {
        title: 'Machine Learning',
        color: 'from-emerald-500 to-teal-500',
        items: [
          { label: 'Regression' },
          { label: 'Classification' },
          { label: 'Clustering' },
          { label: 'Ensemble Methods' },
        ],
      },
      {
        title: 'Deep Learning',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'Neural Networks' },
          { label: 'CNNs' },
          { label: 'RNNs' },
          { label: 'PyTorch' },
          { label: 'TensorFlow' },
        ],
      },
      {
        title: 'NLP & Transformers',
        color: 'from-pink-500 to-rose-500',
        items: [
          { label: 'Text Processing' },
          { label: 'Embeddings' },
          { label: 'BERT' },
          { label: 'GPT / LLMs' },
          { label: 'Hugging Face' },
        ],
      },
      {
        title: 'Deployment & MLOps',
        color: 'from-amber-500 to-orange-500',
        items: [
          { label: 'Model Serving' },
          { label: 'Docker' },
          { label: 'MLflow' },
          { label: 'Feature Stores' },
        ],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: '☁️',
    centerColor: 'from-amber-500 to-yellow-500',
    branches: [
      {
        title: 'Linux & Scripting',
        color: 'from-blue-400 to-cyan-400',
        items: [
          { label: 'Command Line' },
          { label: 'Bash Scripting' },
          { label: 'File Permissions' },
          { label: 'Process Management' },
        ],
      },
      {
        title: 'Version Control',
        color: 'from-orange-400 to-amber-400',
        items: [
          { label: 'Git Basics' },
          { label: 'Branching & Merging' },
          { label: 'Rebasing' },
          { label: 'Git Flow' },
        ],
      },
      {
        title: 'Containers',
        color: 'from-cyan-500 to-blue-500',
        items: [
          { label: 'Docker' },
          { label: 'Docker Compose' },
          { label: 'Multi-stage Builds' },
          { label: 'Registries' },
        ],
      },
      {
        title: 'Orchestration',
        color: 'from-violet-500 to-purple-500',
        items: [
          { label: 'Kubernetes' },
          { label: 'Pods & Services' },
          { label: 'Helm' },
          { label: 'ArgoCD' },
        ],
      },
      {
        title: 'CI/CD',
        color: 'from-green-500 to-emerald-500',
        items: [
          { label: 'GitHub Actions' },
          { label: 'GitLab CI' },
          { label: 'Jenkins' },
        ],
      },
      {
        title: 'Cloud (AWS/GCP)',
        color: 'from-amber-500 to-orange-500',
        items: [
          { label: 'IAM' },
          { label: 'EC2 / Compute' },
          { label: 'S3 / Storage' },
          { label: 'RDS / Databases' },
          { label: 'Networking' },
        ],
      },
      {
        title: 'IaC & Monitoring',
        color: 'from-pink-500 to-rose-500',
        items: [
          { label: 'Terraform' },
          { label: 'Ansible' },
          { label: 'Prometheus' },
          { label: 'Grafana' },
        ],
      },
    ],
  },
];

export default ROADMAPS;
