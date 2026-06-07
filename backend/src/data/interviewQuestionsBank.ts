export interface BankQuestion {
  question: string;
  answer: string;
  tags: string[];
}

export interface SubjectBank {
  basic: BankQuestion[];
  intermediate: BankQuestion[];
  advanced: BankQuestion[];
}

const BANK: Record<string, SubjectBank> = {
  'Data Structures & Algorithms': {
    basic: [
      { question: 'What is the difference between an array and a linked list?', answer: 'Array stores elements in contiguous memory with O(1) index access and fixed size. Linked list stores elements in nodes with pointers, O(n) access but O(1) insertion/deletion at known position, and dynamic size.', tags: ['array', 'linked-list', 'memory'] },
      { question: 'Explain the stack data structure and its common use cases.', answer: 'Stack follows Last-In-First-Out (LIFO) principle. Common uses: function call management, undo/redo, expression evaluation, backtracking algorithms.', tags: ['stack', 'lifo'] },
    ],
    intermediate: [
      { question: 'Implement a function to detect if a linked list has a cycle.', answer: "Use Floyd's cycle detection (tortoise and hare): two pointers, one moves 1 step, the other 2 steps. If they meet, there is a cycle. Time O(n), space O(1).", tags: ['linked-list', 'cycle-detection', 'two-pointers'] },
      { question: 'What is the sliding window technique? When would you use it?', answer: 'Sliding window maintains a window over a subset of data and slides it to track a condition. Used for substring problems (longest substring without repeating chars), subarray sums, or any contiguous sequence problem where brute force is O(n2) but sliding window gives O(n).', tags: ['sliding-window', 'optimization'] },
    ],
    advanced: [
      { question: 'Design a LRU (Least Recently Used) cache from scratch.', answer: 'Use a doubly linked list + hash map. The hash map stores key->node mapping for O(1) lookup. The linked list maintains usage order: most recently used at head, least at tail. On get(): move node to head. On put(): if full, evict tail node, insert new at head.', tags: ['cache', 'system-design', 'linked-list'] },
    ],
  },

  'Object-Oriented Programming': {
    basic: [
      { question: 'What are the four pillars of OOP?', answer: 'Encapsulation (hiding data), Inheritance (reusing parent class), Polymorphism (many forms via override/overload), Abstraction (hiding implementation details via abstract classes/interfaces).', tags: ['oop', 'fundamentals'] },
      { question: 'What is the difference between a class and an object?', answer: 'A class is a blueprint defining properties and behaviors. An object is a concrete instance of a class, with actual memory allocated for its state.', tags: ['class', 'object'] },
    ],
    intermediate: [
      { question: 'What is the diamond problem in multiple inheritance? How do Java/C++ handle it?', answer: 'Diamond problem: class D inherits from B and C, both inherit from A, causing ambiguity. C++ uses virtual inheritance. Java avoids multiple inheritance of classes but allows multiple interfaces with default methods using explicit override.', tags: ['inheritance', 'diamond-problem'] },
      { question: 'Explain the SOLID principles of OOP design.', answer: 'S: Single Responsibility, O: Open/Closed (open for extension, closed for modification), L: Liskov Substitution, I: Interface Segregation (thin interfaces), D: Dependency Inversion (depend on abstractions, not concretions).', tags: ['solid', 'design-principles'] },
    ],
    advanced: [
      { question: 'Design a thread-safe singleton pattern. What are the pros and cons?', answer: 'Use double-checked locking with volatile keyword (Java) or static inner class (Initialization-on-demand). Pros: single instance, lazy initialization. Cons: can become bottleneck, hard to test with mocking, violates SRP if it also manages lifecycle.', tags: ['singleton', 'design-pattern', 'concurrency'] },
    ],
  },

  'System Design': {
    basic: [
      { question: 'What is the difference between vertical scaling and horizontal scaling?', answer: 'Vertical scaling: add more power (CPU/RAM) to existing machine, simpler but has upper limit. Horizontal scaling: add more machines, virtually unlimited but requires load balancing and handling of distributed state.', tags: ['scaling', 'architecture'] },
      { question: 'Explain the difference between SQL and NoSQL databases.', answer: 'SQL: structured schema, ACID compliant, strong consistency, table-based. NoSQL: flexible schema, BASE model, eventually consistent, document/key-value/graph-based, good for horizontal scaling.', tags: ['sql', 'nosql', 'database'] },
    ],
    intermediate: [
      { question: 'Design a URL shortening service like TinyURL.', answer: 'Generate unique 7-char keys (base62 encoding of a unique ID). Use a key->URL hash map in DB (Redis as cache + SQL for persistence). Redirection: 301 redirect from short URL to long. Analytics: track clicks per key.', tags: ['url-shortener', 'system-design'] },
      { question: 'What is caching and what strategies exist for cache invalidation?', answer: 'Caching stores frequently accessed data in fast memory (Redis/Memcached) to reduce DB load. Invalidation strategies: TTL, write-through, write-behind, cache-aside (lazy loading: check cache then DB).', tags: ['caching', 'redis'] },
    ],
    advanced: [
      { question: 'Design a distributed rate limiter that works across multiple data centers.', answer: 'Use a centralized Redis cluster with sliding window or token bucket algorithm. Each request checks if count within limit. For multi-DC: use CRDT-based counters or a global Redis with strong consistency. Fallback to local rate limiter if Redis is down.', tags: ['rate-limiter', 'distributed', 'redis'] },
    ],
  },

  DBMS: {
    basic: [
      { question: 'What is normalization and what are its normal forms?', answer: 'Normalization reduces data redundancy by organizing into related tables. 1NF: atomic columns, 2NF: no partial dependency, 3NF: no transitive dependency. 3NF is sufficient for most apps.', tags: ['normalization', 'database-design'] },
      { question: 'What is an index in a database and how does it speed up queries?', answer: 'An index is a data structure (B-tree or hash) that allows fast lookup of rows without scanning the full table. It speeds up SELECT/WHERE/ORDER BY but slows down INSERT/UPDATE/DELETE because the index must be maintained.', tags: ['indexing', 'performance'] },
    ],
    intermediate: [
      { question: 'Explain ACID properties in database transactions.', answer: 'Atomicity: all or nothing. Consistency: valid state before and after. Isolation: concurrent transactions do not interfere. Durability: committed data survives failures. Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.', tags: ['acid', 'transactions'] },
      { question: 'What is database sharding and how does it work?', answer: 'Sharding horizontally partitions data across multiple database instances. Data is distributed by a shard key (e.g., user_id % N). Pros: unlimited horizontal scaling. Cons: cross-shard queries are complex, resharding is expensive.', tags: ['sharding', 'scaling', 'distributed'] },
    ],
    advanced: [
      { question: 'Explain the difference between pessimistic and optimistic locking. When would you use each?', answer: 'Pessimistic: lock rows on read (SELECT ... FOR UPDATE), prevents others from modifying. Use when contention is high. Optimistic: version/timestamp check at write time, retry on conflict. Use when contention is low, offers better performance.', tags: ['locking', 'concurrency', 'transactions'] },
    ],
  },

  'Operating Systems': {
    basic: [
      { question: 'What is a process and how is it different from a thread?', answer: 'A process is an independent program with its own memory space. A thread is a lightweight unit within a process, sharing memory with other threads of the same process. Context switching between processes is heavy; between threads is light.', tags: ['process', 'thread', 'os'] },
      { question: 'What is deadlock and what are its four necessary conditions?', answer: 'Deadlock: two or more processes waiting indefinitely for resources held by each other. Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait. Breaking any one condition resolves deadlock.', tags: ['deadlock', 'concurrency'] },
    ],
    intermediate: [
      { question: 'What are the different CPU scheduling algorithms?', answer: 'FCFS (First Come First Served), SJF (Shortest Job First), Round Robin (time-slice based), Priority Scheduling, Multilevel Queue. Each balances throughput, turnaround time, waiting time, and fairness differently.', tags: ['scheduling', 'cpu'] },
      { question: 'Explain the difference between mutex and semaphore.', answer: 'Mutex: binary lock, owned by the thread that acquired it, used for mutual exclusion. Semaphore: counting mechanism, signals availability of resources, can be incremented/decremented by any thread. Mutex is for locking; semaphore is for signaling.', tags: ['mutex', 'semaphore', 'synchronization'] },
    ],
    advanced: [
      { question: 'How would you implement a reader-writers lock? What are the fairness concerns?', answer: 'Use two semaphores: read_count mutex + write mutex. First reader locks write mutex, last reader unlocks it. Writers must wait until all readers finish. Starvation: writers can starve if readers keep arriving. Writer-preference or fair queue solves this.', tags: ['lock', 'concurrency', 'reader-writer'] },
    ],
  },

  JavaScript: {
    basic: [
      { question: 'What is the difference between let, const, and var?', answer: 'var: function-scoped, hoisted, can be redeclared. let: block-scoped, hoisted but not initialized, cannot redeclare. const: block-scoped, read-only reference, must be initialized. Use const by default, let when reassigning.', tags: ['variables', 'scoping'] },
      { question: 'What is closure in JavaScript? Give an example.', answer: "A closure is a function that retains access to its outer function's variables even after the outer function has returned. Example: function outer(x) { return function(y) { return x + y; } } - the inner function closes over x.", tags: ['closure', 'scope'] },
    ],
    intermediate: [
      { question: 'How does the event loop work in JavaScript?', answer: 'JS has a single-threaded event loop. Call stack executes synchronous code. Async callbacks go to Web APIs/queues. When call stack is empty, microtask queue (promise.then) is drained, then macrotask queue (setTimeout). This enables non-blocking async behavior.', tags: ['event-loop', 'async', 'concurrency'] },
      { question: 'Explain the this keyword binding rules in JavaScript.', answer: '1. Default: global/window (undefined in strict mode). 2. Implicit: object.method() -> this = object. 3. Explicit: call/apply/bind. 4. New: constructor function. Arrow functions: inherit this from enclosing scope (lexical binding).', tags: ['this', 'binding', 'context'] },
    ],
    advanced: [
      { question: 'How does JavaScript prototypal inheritance work? How is it different from classical inheritance?', answer: 'Objects inherit from other objects via prototype chain. Each object has [[Prototype]] link to its parent. Property lookup walks up the chain. No classes (syntactic sugar). Classical: copy-based, rigid hierarchy. Prototypal: delegation-based, flexible.', tags: ['prototype', 'inheritance', 'oop'] },
    ],
  },

  TypeScript: {
    basic: [
      { question: 'What are the benefits of TypeScript over JavaScript?', answer: 'Static typing catches errors at compile time, better IDE support (autocomplete, refactoring), interfaces for contracts, generics for reusable code, enums, access modifiers. Compiles to any JS version for backward compatibility.', tags: ['typescript', 'static-typing'] },
      { question: 'What is the difference between interface and type?', answer: 'Both define object shapes. Interface can be extended (extends) and merged (declaration merging). Type can use unions, intersections, mapped types, and primitives. Use interface for public APIs, type for complex unions/utility types.', tags: ['interface', 'type'] },
    ],
    intermediate: [
      { question: 'What are utility types in TypeScript? Name a few.', answer: 'Partial<T> (all optional), Required<T> (all required), Pick<T,K> (select properties), Omit<T,K> (exclude properties), Record<K,V> (key-value map), Readonly<T> (read-only). They transform existing types without redefinition.', tags: ['utility-types', 'type-transformation'] },
      { question: 'Explain the concept of discriminated unions.', answer: 'A discriminated union uses a literal property (discriminant) to narrow types within a union. Example: type Shape = { kind: "circle"; radius: number } | { kind: "rect"; w: number; h: number }. Switch on shape.kind to narrow without type assertion.', tags: ['unions', 'type-narrowing'] },
    ],
    advanced: [
      { question: 'What are conditional types and the infer keyword in TypeScript?', answer: 'Conditional types: T extends U ? X : Y. infer keyword extracts types from conditionals. Example: type ReturnType<T> = T extends (...args: any) => infer R ? R : never. Enables powerful type transformations like extracting promise value types.', tags: ['conditional-types', 'infer', 'advanced'] },
    ],
  },

  React: {
    basic: [
      { question: 'What is the virtual DOM and how does React use it?', answer: 'Virtual DOM is a lightweight JS representation of the real DOM. React renders to virtual DOM, diffs it with previous version (reconciliation), calculates minimal updates, and applies them to real DOM (commit phase). This is faster than direct DOM manipulation.', tags: ['virtual-dom', 'reconciliation'] },
      { question: 'What is the useEffect hook and when would you use it?', answer: 'useEffect runs side effects after render. Use for: API calls, subscriptions, DOM manipulation, timers. Takes a callback and dependency array. Empty deps [] = run once on mount. Return cleanup function to unsubscribe/clear timers.', tags: ['hooks', 'useEffect', 'lifecycle'] },
    ],
    intermediate: [
      { question: 'What is the difference between controlled and uncontrolled components?', answer: 'Controlled: React state manages form value (value + onChange). Predictable, enables real-time validation. Uncontrolled: DOM manages value via refs (useRef). Simpler for non-JS forms. Prefer controlled for complex forms.', tags: ['forms', 'controlled', 'refs'] },
      { question: 'Explain React.memo and useMemo. When should you use them?', answer: 'React.memo: higher-order component, prevents re-render if props have not changed (shallow comparison). useMemo: memoizes computed value between renders. Use for expensive calculations or preventing child re-renders. Overuse can hurt performance due to memory overhead.', tags: ['memoization', 'performance', 'optimization'] },
    ],
    advanced: [
      { question: "How does React's reconciliation algorithm (the diffing algorithm) work?", answer: 'React compares virtual DOM trees using a heuristic O(n) algorithm. It assumes: (1) elements of different types produce different trees, (2) keyed children can be identified by key. It traverses both trees, generates a patch list of minimal mutations.', tags: ['reconciliation', 'diffing', 'internals'] },
    ],
  },

  'HTML & CSS': {
    basic: [
      { question: 'What is the box model in CSS?', answer: 'Every element is a rectangular box: content -> padding -> border -> margin. content-box: width/height includes only content. border-box: width/height includes content + padding + border. box-sizing: border-box is recommended for easier sizing.', tags: ['css', 'box-model'] },
      { question: 'How do you center a div horizontally and vertically?', answer: 'Method 1: display: flex; justify-content: center; align-items: center. Method 2: position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%). Method 3: CSS Grid with place-items: center.', tags: ['css', 'centering', 'flexbox'] },
    ],
    intermediate: [
      { question: 'What is Flexbox and how does it differ from CSS Grid?', answer: 'Flexbox: 1D layout (row OR column), distributes space along main axis, good for components and nav bars. Grid: 2D layout (rows AND columns), precise placement, good for page layouts. Use Flexbox for content layout, Grid for page layout.', tags: ['flexbox', 'grid', 'layout'] },
      { question: 'Explain responsive design and how media queries work.', answer: 'Responsive design adapts layout to screen size. Media queries: @media (max-width: 768px) { ... } applies rules below 768px. Combined with relative units (%, rem, vw/vh), flexible images, and mobile-first approach (min-width breakpoints).', tags: ['responsive', 'media-queries', 'css'] },
    ],
    advanced: [
      { question: 'How does CSS specificity work? How do you resolve conflicting rules?', answer: 'Specificity: inline styles (1000) > IDs (100) > classes/attributes/pseudo-classes (10) > elements/pseudo-elements (1). !important overrides all (avoid). Same specificity: last rule wins. Resolve by increasing specificity of the desired selector.', tags: ['specificity', 'cascade'] },
    ],
  },

  'Browser Concepts': {
    basic: [
      { question: 'What is the same-origin policy (CORS)? How does it work?', answer: "Same-origin: browser blocks JS from accessing resources from a different origin (protocol+domain+port). CORS: server allows cross-origin requests via Access-Control-Allow-Origin header. Preflight (OPTIONS) request for non-simple requests.", tags: ['cors', 'security', 'browser'] },
      { question: 'What is localStorage vs sessionStorage vs cookies?', answer: 'localStorage: persists until cleared, 5-10MB, no expiry, client only. sessionStorage: cleared on tab close, same size. Cookies: sent with every request (server accessible), 4KB max, expiry configurable, used for auth/sessions.', tags: ['storage', 'cookies', 'web-api'] },
    ],
    intermediate: [
      { question: 'Explain the browser rendering pipeline (critical rendering path).', answer: '1. HTML->DOM tree, 2. CSS->CSSOM tree, 3. DOM+CSSOM->Render Tree (visible elements only), 4. Layout: calculate geometry/position, 5. Paint: fill pixels, 6. Composite: layers merged. Reflow/repaint triggered by layout/style changes.', tags: ['rendering', 'critical-path', 'performance'] },
      { question: 'What is the difference between debounce and throttle?', answer: 'Debounce: delays execution until after a pause in calls (e.g., search input, wait 300ms after user stops typing). Throttle: ensures function runs at most once per interval (e.g., scroll handler, max every 200ms).', tags: ['debounce', 'throttle', 'optimization'] },
    ],
    advanced: [
      { question: "Explain the V8 JavaScript engine's compilation pipeline (Ignition + TurboFan).", answer: 'V8 parses JS into AST, then Ignition (interpreter) produces bytecode. Hot code is compiled by TurboFan (JIT compiler) to optimized machine code with type feedback. If assumptions fail, deoptimization falls back to bytecode.', tags: ['v8', 'jit', 'compiler'] },
    ],
  },

  'Node.js': {
    basic: [
      { question: 'What is Node.js and how is it different from browser JavaScript?', answer: 'Node.js is a JS runtime built on V8 engine for server-side execution. Differences: no DOM/BOM APIs, has fs/http/crypto modules, CommonJS/ESM module system, process global, full file system and network access.', tags: ['nodejs', 'runtime'] },
      { question: 'What is the event loop in Node.js?', answer: 'Node event loop has phases: timers (setTimeout/setInterval), pending callbacks (I/O), idle/prepare, poll (retrieve I/O), check (setImmediate), close callbacks. process.nextTick runs between phases. Node uses libuv for I/O with thread pool.', tags: ['event-loop', 'libuv'] },
    ],
    intermediate: [
      { question: 'How do you handle errors in Express.js middleware?', answer: 'Define error-handling middleware with 4 params (err, req, res, next). Call next(err) to pass errors to it. Use async middleware wrappers to catch promise rejections. Centralized error handler formats responses consistently.', tags: ['express', 'error-handling', 'middleware'] },
      { question: 'What are streams in Node.js and why are they useful?', answer: 'Streams process data chunk by chunk instead of loading entire data into memory. Types: Readable, Writable, Duplex, Transform. Use for: large file processing, HTTP responses, compression (zlib), piping data through transformations.', tags: ['streams', 'memory', 'io'] },
    ],
    advanced: [
      { question: 'Explain the Node.js thread pool (libuv). How does it handle I/O?', answer: 'libuv maintains a thread pool (4 threads by default) for async I/O operations that kernel does not support (DNS, fs, custom tasks). Network I/O uses epoll/kqueue/IOCP (no thread pool). Worker threads execute blocking ops and signal completion via event loop.', tags: ['libuv', 'thread-pool', 'async-io'] },
    ],
  },

  'Express.js': {
    basic: [
      { question: 'What is Express.js middleware?', answer: 'Middleware are functions that execute during the request-response cycle. Each has access to req, res, next. Types: application-level (app.use), router-level, error-handling, built-in (express.json()), third-party (cors, morgan). next() passes control to next middleware.', tags: ['express', 'middleware'] },
      { question: 'How do you handle CORS in Express?', answer: 'Use the cors npm package: const cors = require("cors"); app.use(cors({ origin: ["https://example.com"], credentials: true })). Or manually set Access-Control-Allow-Origin headers. Handle preflight OPTIONS requests explicitly.', tags: ['cors', 'express'] },
    ],
    intermediate: [
      { question: 'How do you structure a production Express app?', answer: 'Separate concerns: routes/ (definitions), controllers/ (business logic), middleware/ (auth, validation, error), services/ (external APIs), models/ (DB schemas), utils/. Use router files per resource. Error handling middleware centralized.', tags: ['structure', 'architecture', 'best-practices'] },
      { question: 'What is rate limiting and how do you implement it in Express?', answer: 'Rate limiting prevents abuse by capping requests per IP/token. Use express-rate-limit: const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 }); app.use(limiter). Configure skip, key generator, custom handler and response.', tags: ['rate-limiting', 'security'] },
    ],
    advanced: [
      { question: 'How do you implement WebSocket real-time features with Express?', answer: 'Use socket.io which wraps WebSocket with fallbacks. Create server with http.createServer(app), attach socket.io. Server: io.on("connection", socket => { socket.on("event", data => { ... }) }). Client: io().emit("event", data). Rooms for grouping.', tags: ['websocket', 'socket.io', 'realtime'] },
    ],
  },

  SQL: {
    basic: [
      { question: 'Write a query to find the second highest salary from an employees table.', answer: 'SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees). Alternative: SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) r FROM employees) t WHERE r = 2.', tags: ['sql', 'subquery', 'ranking'] },
      { question: 'What is the difference between WHERE and HAVING?', answer: 'WHERE filters rows before GROUP BY (row-level). HAVING filters groups after GROUP BY (group-level). Example: WHERE salary > 50000 filters rows, HAVING COUNT(*) > 5 filters departments with >5 employees.', tags: ['sql', 'filtering'] },
    ],
    intermediate: [
      { question: 'What are the different types of JOINs in SQL?', answer: 'INNER JOIN: matching rows in both tables. LEFT JOIN: all rows from left + matching from right (nulls if no match). RIGHT JOIN: opposite of LEFT. FULL OUTER JOIN: all rows from both. CROSS JOIN: cartesian product.', tags: ['sql', 'join'] },
      { question: 'What is a window function? Give an example.', answer: 'Window function performs calculation across a set of rows related to current row without collapsing them. Example: ROW_NUMBER() OVER (ORDER BY salary DESC), SUM(sales) OVER (PARTITION BY region).', tags: ['sql', 'window-function', 'analytic'] },
    ],
    advanced: [
      { question: 'How do you optimize a slow SQL query? What tools do you use?', answer: 'Use EXPLAIN ANALYZE to see query plan and bottlenecks. Check: missing indexes, full table scans, inefficient JOINs. Solutions: add indexes (covering index), rewrite as JOIN instead of subquery, materialized views for complex aggregations.', tags: ['sql', 'optimization', 'indexing'] },
    ],
  },

  MongoDB: {
    basic: [
      { question: 'What is MongoDB and how is it different from SQL databases?', answer: 'MongoDB: NoSQL, document-oriented (BSON/JSON), schema-less, stores data in collections. SQL: table-based, rigid schema, ACID. MongoDB scales horizontally via sharding, supports embedded documents and arrays for denormalized data.', tags: ['mongodb', 'nosql'] },
      { question: 'How do you query data in MongoDB?', answer: 'db.collection.find({ field: value }). Operators: $gt, $lt, $in, $regex, $exists. db.collection.aggregate() for pipelines: $match, $group, $sort, $lookup (like JOIN).', tags: ['mongodb', 'query'] },
    ],
    intermediate: [
      { question: 'What are indexes in MongoDB and how do they work?', answer: 'Indexes speed up queries using B-tree data structure. Types: single field, compound (order matters), multikey (for arrays), text (full-text search), 2dsphere (geospatial). Use explain() to verify index usage.', tags: ['mongodb', 'indexing', 'performance'] },
      { question: 'Explain the aggregation pipeline in MongoDB.', answer: 'Pipeline processes documents through stages: $match (filter), $group (group by field), $sort (order), $project (shape output), $lookup (left outer join), $unwind (deconstruct arrays), $addFields (new computed fields).', tags: ['mongodb', 'aggregation'] },
    ],
    advanced: [
      { question: 'How do you design a MongoDB schema for a social media app?', answer: 'User collection with embedded address array (1-to-few). Post collection with userId (reference), embedded comments limited to recent 50. For likes, use separate collection { postId, userId } with compound index. Prefer embedding for read-heavy access.', tags: ['mongodb', 'schema-design', 'embedding'] },
    ],
  },

  'API Design': {
    basic: [
      { question: 'What are RESTful APIs and their constraints?', answer: 'REST: resources identified by URLs, HTTP methods as verbs (GET/POST/PUT/DELETE/PATCH), stateless (each request contains all info), uniform interface, cacheable responses, layered system. JSON/XML representation.', tags: ['rest', 'api'] },
      { question: 'What is the difference between PUT and PATCH?', answer: 'PUT replaces the entire resource. PATCH applies partial modifications. PUT: send full object, idempotent. PATCH: send only changed fields, can be non-idempotent. Use PATCH for partial updates, PUT for complete replacement.', tags: ['http', 'rest'] },
    ],
    intermediate: [
      { question: 'How do you handle API versioning?', answer: 'Methods: URL path (/v1/users), header (Accept: application/vnd.api+json;version=1), query param (?version=1). URL path is most common and explicit. Maintain older versions for migration period. Document breaking changes clearly.', tags: ['api', 'versioning'] },
      { question: 'How do you design a paginated API endpoint?', answer: 'Use cursor-based pagination (cursor/after param) for large datasets (stable under writes). Page-based (page=X, limit=Y) for simple cases. Return: { data: [...], meta: { total, page, limit, has_more } }. Always set reasonable max limit.', tags: ['api', 'pagination', 'design'] },
    ],
    advanced: [
      { question: 'How do you design idempotent APIs? Why is it important?', answer: 'Client sends idempotency key in header. Server checks if key processed: if yes, return cached response; if no, process and cache result. DB unique constraint on idempotency_key. Critical for payment systems to prevent double charges on retry.', tags: ['api', 'idempotency', 'reliability'] },
    ],
  },

  Python: {
    basic: [
      { question: 'What are Python decorators and how do they work?', answer: 'Decorators are functions that modify the behavior of other functions. They wrap the target function with additional logic. @decorator syntax is syntactic sugar for func = decorator(func). Used for logging, auth, caching, timing.', tags: ['python', 'decorators'] },
      { question: 'What is the difference between list and tuple in Python?', answer: 'List: mutable, defined with [], supports append/remove/update. Tuple: immutable, defined with (), fixed content after creation. Tuples are hashable (can be dict keys), faster for iteration, safer for constant data.', tags: ['python', 'data-structures'] },
    ],
    intermediate: [
      { question: 'What are generators and the yield keyword in Python?', answer: 'Generators produce values lazily using yield instead of return. Each next() resumes from last yield, preserving state. Memory efficient for large sequences. Example: def fib(): a,b=0,1; while True: yield a; a,b=b,a+b.', tags: ['python', 'generators', 'lazy-evaluation'] },
      { question: 'Explain the Global Interpreter Lock (GIL) in CPython.', answer: 'GIL prevents multiple threads from executing Python bytecode simultaneously. Simplifies memory management but limits CPU-bound parallelism. I/O-bound threads still benefit (release GIL during I/O). Workarounds: multiprocessing, C extensions, asyncio.', tags: ['python', 'gil', 'concurrency'] },
    ],
    advanced: [
      { question: "How does Python's memory management work? What is reference counting and garbage collection?", answer: 'Python uses reference counting: each object tracks number of references, destroyed when count reaches 0. Circular references handled by cyclic garbage collector (gc module). Memory pools for small objects to reduce fragmentation.', tags: ['python', 'memory', 'gc'] },
    ],
  },

  Excel: {
    basic: [
      { question: 'What is VLOOKUP and how is it different from INDEX-MATCH?', answer: 'VLOOKUP searches first column of a range, returns value in same row from specified column. Limitations: searches only leftmost column, approximate match by default. INDEX-MATCH is more flexible, can search left or right, exact match by default.', tags: ['excel', 'lookup'] },
      { question: 'What is a PivotTable and how do you create one?', answer: 'PivotTable summarizes/aggregates data interactively. Select data, Insert, PivotTable, drag fields to rows/columns/values/filters. Used for: sum by category, count by region, average by month, cross-tabulation.', tags: ['excel', 'pivot'] },
    ],
    intermediate: [
      { question: 'How do you use Conditional Formatting in Excel?', answer: 'Select range, Home, Conditional Formatting, choose rule type. Options: highlight cells rules, top/bottom rules, data bars, color scales, icon sets. Custom formulas with relative references for complex conditions.', tags: ['excel', 'formatting'] },
      { question: 'Explain data validation in Excel.', answer: 'Data validation restricts what users can enter. Data tab, Data Validation. Types: whole number, decimal, list, date/time, text length, custom formula. Input message and error alert for user guidance. Prevents invalid data entry.', tags: ['excel', 'validation'] },
    ],
    advanced: [
      { question: 'How do you build a dynamic dashboard in Excel using Power Query and Power Pivot?', answer: 'Power Query imports/cleans data from various sources with no-code transformation. Load to Data Model. Power Pivot creates relationships between tables, DAX measures for complex calculations. PivotCharts + Slicers for interactive filtering.', tags: ['excel', 'power-query', 'dax'] },
    ],
  },

  Statistics: {
    basic: [
      { question: 'What is the difference between mean, median, and mode?', answer: 'Mean: average (sum/count), sensitive to outliers. Median: middle value (sorted), robust to outliers. Mode: most frequent value, useful for categorical. Example: salaries with CEO outlier - mean is inflated, median better represents typical salary.', tags: ['statistics', 'central-tendency'] },
      { question: 'What is standard deviation and variance?', answer: 'Variance: average squared deviation from mean. Standard deviation: square root of variance, in same units as data. Measures spread/dispersion. Low sigma = data clustered around mean, high sigma = data spread out.', tags: ['statistics', 'dispersion'] },
    ],
    intermediate: [
      { question: 'What is a p-value and how is it used in hypothesis testing?', answer: 'p-value: probability of observing results as extreme as the sample if null hypothesis is true. Low p-value (< 0.05) leads to reject null hypothesis. Does NOT mean probability that null is true. Use effect sizes alongside.', tags: ['statistics', 'hypothesis-testing', 'p-value'] },
      { question: 'Explain the Central Limit Theorem (CLT) and its importance.', answer: 'CLT: sampling distribution of sample mean approaches normal distribution as sample size increases (n>30), regardless of population distribution. Enables parametric tests (t-test, ANOVA) even for non-normal populations.', tags: ['statistics', 'clt', 'sampling'] },
    ],
    advanced: [
      { question: 'What is Bayesian vs Frequentist statistics? How do they differ?', answer: 'Frequentist: probability = long-run frequency. Parameters are fixed unknown constants. p-values, confidence intervals. Bayesian: probability = degree of belief. Parameters have distributions updated with data via Bayes rule (prior to posterior). Bayesian uses credible intervals.', tags: ['statistics', 'bayesian', 'frequentist'] },
    ],
  },

  'Data Visualization': {
    basic: [
      { question: 'What are the key principles of effective data visualization?', answer: '1. Know your audience, 2. Choose right chart type, 3. Minimize clutter (data-ink ratio), 4. Use color meaningfully, 5. Label axes clearly, 6. Tell a story, 7. Highlight insights, 8. Color-blind friendly palettes.', tags: ['visualization', 'principles'] },
      { question: 'When would you use a bar chart vs a line chart?', answer: 'Bar chart: categorical data comparison, discrete values, ranking. Line chart: continuous data over time, trends, multiple series comparison. Bar for compare across categories, line for show trend over time.', tags: ['visualization', 'chart-types'] },
    ],
    intermediate: [
      { question: 'How do you create a dashboard that shows the right information without overwhelming?', answer: 'KPI cards at top (3-5 key metrics). Filters/slicers for interactivity. Limit charts to 5-7 per dashboard. Most important chart top-left. Use tooltips instead of labels. Progressive disclosure: summary then drill-down.', tags: ['dashboard', 'ux', 'design'] },
      { question: 'How do you choose color palettes for data visualization?', answer: 'Categorical: distinct colors (Tableau 10), avoid red-green (color-blind). Sequential: single hue gradient (light to dark). Diverging: two hues with neutral midpoint. Tools: ColorBrewer, Coolors. Test in grayscale for accessibility.', tags: ['visualization', 'color', 'design'] },
    ],
    advanced: [
      { question: 'How do you handle visualizing large datasets (>1M rows) without crashing the browser?', answer: 'Techniques: data sampling, aggregation, WebGL rendering (deck.gl), canvas instead of SVG, data tiles (map-based), server-side rendering with image delivery, progressive loading (crossfilter/dc.js).', tags: ['visualization', 'performance', 'big-data'] },
    ],
  },

  'Machine Learning': {
    basic: [
      { question: 'What is the difference between supervised, unsupervised, and reinforcement learning?', answer: 'Supervised: labeled data (input->output), tasks: regression/classification. Unsupervised: unlabeled data, finds patterns: clustering/dimensionality reduction. Reinforcement: agent learns via rewards/punishments from environment.', tags: ['ml', 'learning-types'] },
      { question: 'What is overfitting and how do you prevent it?', answer: 'Overfitting: model learns noise instead of signal, performs well on training data but poorly on unseen data. Prevention: more data, cross-validation, regularization (L1/L2), simpler model, early stopping, dropout (neural nets).', tags: ['ml', 'overfitting', 'regularization'] },
    ],
    intermediate: [
      { question: 'How do decision trees work and what are their pros/cons?', answer: 'Tree recursively splits data by feature threshold maximizing information gain (or Gini impurity). Pros: interpretable, no scaling needed. Cons: prone to overfitting (prune or limit depth), unstable, biased toward features with more levels.', tags: ['ml', 'decision-trees'] },
      { question: 'What is the difference between bagging and boosting?', answer: 'Bagging (Random Forest): train models in parallel on bootstrap samples, average predictions, reduces variance. Boosting (XGBoost): train models sequentially, each corrects previous errors, reduces bias. Bagging is parallel, boosting is sequential.', tags: ['ml', 'ensemble', 'bagging', 'boosting'] },
    ],
    advanced: [
      { question: 'Explain the bias-variance tradeoff in machine learning.', answer: 'High bias: underfitting, model too simple, misses relevant patterns. High variance: overfitting, model too complex, captures noise. Goal: find sweet spot minimizing total error. More complex model decreases bias but increases variance.', tags: ['ml', 'bias-variance'] },
    ],
  },

  'Deep Learning': {
    basic: [
      { question: 'What is a neural network and how does it work?', answer: 'A neural network consists of layers of interconnected neurons. Each neuron computes weighted sum of inputs + bias, passes through activation function (ReLU, sigmoid). Backpropagation computes gradients, optimizer (SGD, Adam) updates weights to minimize loss.', tags: ['deep-learning', 'neural-network'] },
      { question: 'What is the difference between CNN and RNN?', answer: 'CNN (Convolutional Neural Net): uses convolution filters for spatial patterns, good for images. RNN (Recurrent Neural Net): maintains hidden state for sequential patterns, good for text/time series. CNNs are feed-forward, RNNs have recurrent connections.', tags: ['deep-learning', 'cnn', 'rnn'] },
    ],
    intermediate: [
      { question: 'What is the vanishing/exploding gradient problem? How do you solve it?', answer: 'In deep networks, gradients become very small (vanish) or very large (explode) during backpropagation through many layers. Solutions: ReLU activation (no saturation), batch normalization, residual connections (skip connections), gradient clipping, careful weight initialization (Xavier/He).', tags: ['deep-learning', 'gradients', 'training'] },
      { question: 'Explain the Transformer architecture and why it is important.', answer: 'Transformer uses self-attention mechanism to process all tokens in parallel (unlike RNNs sequentially). Key components: multi-head attention, position encoding, feed-forward layers, layer normalization. Basis for GPT, BERT, ViT. Enables parallel training and long-range dependencies.', tags: ['deep-learning', 'transformer', 'attention'] },
    ],
    advanced: [
      { question: 'How does backpropagation work in a neural network? Explain the chain rule application.', answer: 'Backpropagation computes gradients of loss w.r.t. each weight using the chain rule. Forward pass computes loss. Backward pass: gradient of loss flows backward layer by layer. Each layer multiplies incoming gradient by local gradient of its activation. Weights updated via gradient descent.', tags: ['deep-learning', 'backpropagation', 'calculus'] },
    ],
  },

  'Linear Algebra': {
    basic: [
      { question: 'What is a vector and common vector operations?', answer: 'A vector is an ordered list of numbers representing magnitude and direction. Operations: addition (component-wise), scalar multiplication, dot product (sum of component products, results in scalar), cross product (3D, results in perpendicular vector).', tags: ['linear-algebra', 'vectors'] },
      { question: 'What is a matrix and how is matrix multiplication performed?', answer: 'A matrix is a 2D array of numbers. Matrix multiplication: element (i,j) = dot product of row i of first matrix and column j of second. Requires inner dimensions to match (A_mxn * B_nxp = C_mxp). Not commutative.', tags: ['linear-algebra', 'matrices'] },
    ],
    intermediate: [
      { question: 'What is the difference between eigenvalues and eigenvectors?', answer: 'For matrix A, eigenvector v satisfies Av = lambda*v where lambda is the eigenvalue. Eigenvectors represent directions that are only scaled (not rotated) by the transformation. Used in PCA (dimensionality reduction), page rank, image compression.', tags: ['linear-algebra', 'eigenvalues'] },
      { question: 'What is Singular Value Decomposition (SVD) and why is it useful?', answer: 'SVD decomposes matrix A into A = U*Sigma*V^T where U and V are orthogonal and Sigma is diagonal with singular values. Used for: dimensionality reduction (truncated SVD), recommendation systems (collaborative filtering), image compression, matrix approximation.', tags: ['linear-algebra', 'svd'] },
    ],
    advanced: [
      { question: 'How is linear algebra used in machine learning? Give concrete examples.', answer: 'Linear regression: X*theta = y solved via normal equation using matrix inverse/pseudoinverse. PCA: eigen decomposition of covariance matrix. Neural nets: forward pass = matrix multiplications. Word embeddings: high-dimensional vector spaces. Regularization: L2 = identity matrix scaling.', tags: ['linear-algebra', 'ml', 'applications'] },
    ],
  },

  Linux: {
    basic: [
      { question: 'What are the basic Linux file permissions?', answer: 'r (read=4), w (write=2), x (execute=1) for owner/group/others. chmod changes permissions (e.g., chmod 755 file = owner rwx, group rx, others rx). chown changes ownership. ls -l displays permissions.', tags: ['linux', 'permissions'] },
      { question: 'What is the difference between a process and a daemon?', answer: 'A process is an executing program instance. A daemon is a background process running continuously, not attached to a terminal, typically started at boot (e.g., sshd, nginx, crond). Daemons often end with d suffix.', tags: ['linux', 'process', 'daemon'] },
    ],
    intermediate: [
      { question: 'How do you monitor system performance in Linux?', answer: 'top/htop: real-time process view. ps: process list. free: memory usage. df: disk usage. iostat: disk I/O. netstat/ss: network connections. dmesg: kernel logs. vmstat: system wide stats. sar: historical performance data.', tags: ['linux', 'monitoring', 'performance'] },
      { question: 'Explain how piping and redirection work in Linux.', answer: 'Pipe (|): sends stdout of one command to stdin of another (e.g., ps aux | grep nginx). Redirection: > (stdout to file), < (file to stdin), 2> (stderr to file), >> (append). &> redirects both stdout and stderr.', tags: ['linux', 'shell', 'pipes'] },
    ],
    advanced: [
      { question: 'How does the Linux kernel handle process scheduling?', answer: 'Linux uses Completely Fair Scheduler (CFS). Each process gets a proportional share of CPU time. CFS uses red-black tree to track task execution time (vruntime). Selects task with smallest vruntime. Nice values adjust priority. Preemptive, O(1) scheduling decision.', tags: ['linux', 'kernel', 'scheduling'] },
    ],
  },

  Docker: {
    basic: [
      { question: 'What is Docker and how is it different from a virtual machine?', answer: 'Docker containers share the host OS kernel, start in seconds, are lightweight (MBs). VMs include full guest OS (GBs), require hypervisor, start in minutes. Docker ensures consistent environments across dev/test/prod via images and Dockerfiles.', tags: ['docker', 'containers', 'virtualization'] },
      { question: 'What is a Dockerfile and what are common instructions?', answer: 'A Dockerfile defines how to build a Docker image. Common instructions: FROM (base image), RUN (commands during build), COPY (files), WORKDIR (working dir), EXPOSE (port), CMD/ENTRYPOINT (container startup command), ENV (environment variables).', tags: ['docker', 'dockerfile'] },
    ],
    intermediate: [
      { question: 'What is Docker Compose and when would you use it?', answer: 'Docker Compose defines multi-container applications in a docker-compose.yml file. Services, networks, and volumes are declared. One command (docker-compose up) starts everything. Used for: local dev environments, CI pipelines, simple multi-service deployments.', tags: ['docker', 'compose', 'orchestration'] },
      { question: 'How do Docker networks work? What are bridge, host, and overlay?', answer: 'Bridge: default, containers communicate on same host via virtual bridge. Host: container uses host network stack directly, no isolation. Overlay: spans multiple Docker hosts (Swarm), enables cross-host container communication. None: no networking.', tags: ['docker', 'networking'] },
    ],
    advanced: [
      { question: 'How does Docker handle image layers and caching?', answer: 'Docker images are built in layers (each Dockerfile instruction creates a layer). Layers are cached: if a layer is unchanged from previous build, cache is used. COPY/ADD busts cache if files changed. RUN layer cached only if command string is identical. Multi-stage builds reduce final image size by separating build and runtime deps.', tags: ['docker', 'layers', 'caching'] },
    ],
  },

  Kubernetes: {
    basic: [
      { question: 'What is Kubernetes and what problem does it solve?', answer: 'Kubernetes (K8s) orchestrates containerized applications across a cluster. Solves: automated deployment, scaling, load balancing, self-healing (restart failed containers), rolling updates, service discovery, secret/config management, storage orchestration.', tags: ['kubernetes', 'orchestration'] },
      { question: 'What are Pods in Kubernetes?', answer: 'A Pod is the smallest deployable unit in K8s. Contains one or more containers sharing network namespace, storage volumes, and IP address. Containers in same Pod communicate via localhost. Usually one container per Pod (sidecar pattern for multi-container).', tags: ['kubernetes', 'pods'] },
    ],
    intermediate: [
      { question: 'What is a Deployment vs a StatefulSet?', answer: 'Deployment: for stateless apps, pods are interchangeable, scaling is fast, no persistent identity. StatefulSet: for stateful apps (databases), pods have sticky identity (ordinal index), stable network identity (pod-name-0), persistent storage per pod, ordered scaling and rolling updates.', tags: ['kubernetes', 'deployment', 'statefulset'] },
      { question: 'How does service discovery work in Kubernetes?', answer: 'Services abstract Pod IPs. ClusterIP: internal virtual IP, accessed via DNS (service-name.namespace). NodePort: exposes service on each node IP at static port. LoadBalancer: creates external LB (cloud). Ingress: HTTP/HTTPS routing with rules. kube-proxy manages iptables/IPVS rules.', tags: ['kubernetes', 'service-discovery', 'networking'] },
    ],
    advanced: [
      { question: 'How does the Kubernetes scheduler work? What factors influence scheduling decisions?', answer: 'kube-scheduler assigns pods to nodes. Two phases: Filtering (predicates: resource requests, node affinity, taints/tolerations, ports) and Scoring (priorities: resource utilization spread, least requested, image locality, custom priority functions). Scheduler can be extended with custom schedulers.', tags: ['kubernetes', 'scheduler'] },
    ],
  },

  'CI/CD': {
    basic: [
      { question: 'What is CI/CD and why is it important?', answer: 'CI (Continuous Integration): automatically build and test code on every commit to catch issues early. CD (Continuous Delivery/Deployment): automatically deploy to staging/production after passing tests. Benefits: faster releases, fewer bugs, consistent process, reduced manual effort.', tags: ['cicd', 'devops'] },
      { question: 'What is a CI pipeline and what stages does it typically include?', answer: 'A CI pipeline automates the build-test-deploy workflow. Typical stages: checkout code, install dependencies, lint/format check, run unit tests, build artifact, run integration tests, security scan, deploy to staging, notify team.', tags: ['cicd', 'pipeline'] },
    ],
    intermediate: [
      { question: 'How does GitHub Actions work? What are workflows, jobs, and steps?', answer: 'GitHub Actions triggers workflows on events (push, PR). Workflow = YAML file with jobs. Job = set of steps on same runner (VM). Step = individual action or shell command. Actions can be shared (marketplace). Supports matrix builds, caching, secrets.', tags: ['cicd', 'github-actions'] },
      { question: 'What is the difference between blue-green deployment and canary deployment?', answer: 'Blue-green: two identical environments, one live (blue), one idle (green). Switch router after testing green. Instant rollback by switching back. Canary: gradually shift percentage of traffic to new version. Monitor errors, rollback if spike. Slower but safer, real traffic validation.', tags: ['cicd', 'deployment'] },
    ],
    advanced: [
      { question: 'How do you implement a secure CI/CD pipeline with secrets management?', answer: 'Never hardcode secrets in code. Use: GitHub Secrets / AWS Secrets Manager / HashiCorp Vault. Rotate secrets regularly. Least privilege: CI runner should have minimal permissions. Use OIDC (OpenID Connect) for cloud access (no long-lived credentials). Audit all pipeline changes. Dependency scan (Dependabot, Snyk) for supply chain security.', tags: ['cicd', 'security', 'secrets'] },
    ],
  },

  AWS: {
    basic: [
      { question: 'What are the core AWS compute services?', answer: 'EC2 (virtual machines), Lambda (serverless functions), ECS/EKS (container orchestration), Elastic Beanstalk (PaaS), Fargate (serverless containers). EC2 gives full control, Lambda scales automatically per request, EKS uses Kubernetes.', tags: ['aws', 'compute'] },
      { question: 'What is S3 and how is it used?', answer: 'S3 (Simple Storage Service): object storage for files, images, backups, logs. 99.999999999% durability. Buckets as containers, objects as files. Features: versioning, lifecycle policies, static website hosting, cross-region replication, S3 Glacier for archival.', tags: ['aws', 'storage', 's3'] },
    ],
    intermediate: [
      { question: 'What is the difference between a Security Group and a NACL?', answer: 'Security Group: stateful firewall at instance level, default deny inbound, allow all outbound, rules evaluated as a whole, supports allow rules only. NACL: stateless firewall at subnet level, allows both allow/deny rules, rules evaluated in order by number, return traffic must be explicitly allowed.', tags: ['aws', 'networking', 'security'] },
      { question: 'How do you design a highly available architecture on AWS?', answer: 'Multi-AZ deployment: resources in at least 2 availability zones. ELB (load balancer) distributes traffic. RDS Multi-AZ for database. Auto Scaling Group replaces failed instances. Route 53 health checks with DNS failover. S3 + CloudFront CDN for static assets. RDS read replicas for read scaling.', tags: ['aws', 'architecture', 'ha'] },
    ],
    advanced: [
      { question: 'How does AWS IAM work? Explain roles, policies, and the principle of least privilege.', answer: 'IAM manages access: Users (individuals), Groups (collection of users), Roles (assumable by services/users/identities). Policies: JSON documents defining allow/deny for actions on resources. Least privilege: grant only required actions. Conditions restrict based on IP, time, MFA. Trust policies specify who can assume a role. Use IAM Roles for EC2/Lambda (no long-lived keys).', tags: ['aws', 'iam', 'security'] },
    ],
  },

  Networking: {
    basic: [
      { question: 'What is the OSI model? Explain the layers.', answer: '7 layers: Physical (cables), Data Link (MAC, Ethernet), Network (IP, routing), Transport (TCP/UDP), Session (connection mgmt), Presentation (encryption/encoding), Application (HTTP, FTP, DNS). Each layer serves the layer above.', tags: ['networking', 'osi'] },
      { question: 'What is the difference between TCP and UDP?', answer: 'TCP: connection-oriented, reliable (retransmission), ordered delivery, flow control, congestion control. Used for HTTP, email, file transfer. UDP: connectionless, unreliable, no ordering, low overhead. Used for DNS, video streaming, gaming, VoIP.', tags: ['networking', 'tcp', 'udp'] },
    ],
    intermediate: [
      { question: 'How does DNS resolution work step by step?', answer: '1. Browser checks cache, 2. OS checks hosts file, 3. Query to recursive resolver (ISP), 4. Resolver queries root DNS servers, 5. Root returns TLD server (.com), 6. TLD returns authoritative server, 7. Authoritative returns IP, 8. Resolver caches and returns IP to client.', tags: ['networking', 'dns'] },
      { question: 'What is the TCP three-way handshake?', answer: '1. Client sends SYN (sequence number X), 2. Server responds SYN-ACK (ack X+1, seq Y), 3. Client sends ACK (ack Y+1). After this, TCP connection is established. For termination: FIN-WAIT-1, FIN-WAIT-2, TIME-WAIT states for graceful close.', tags: ['networking', 'tcp', 'handshake'] },
    ],
    advanced: [
      { question: 'What happens during a TLS/SSL handshake?', answer: '1. Client sends ClientHello (supported ciphers, TLS version), 2. Server responds ServerHello (chosen cipher, cert with public key), 3. Client verifies cert (CA chain, expiry, hostname), 4. Client generates pre-master secret, encrypts with server public key, 5. Server decrypts with private key, 6. Both derive session keys, 7. Client sends Finished (encrypted), 8. Server sends Finished. Secure channel established.', tags: ['networking', 'tls', 'security'] },
    ],
  },

  'Testing Fundamentals': {
    basic: [
      { question: 'What is the difference between unit testing, integration testing, and end-to-end testing?', answer: 'Unit: test individual functions/classes in isolation, fast and reliable. Integration: test how modules work together (database, external APIs). E2E: test complete user flow from UI to backend, slow but catches real user issues. Pyramid: many unit, some integration, few E2E.', tags: ['testing', 'types'] },
      { question: 'What is the testing pyramid and why is it important?', answer: 'The testing pyramid: unit tests (base, many), integration tests (middle), E2E tests (top, few). Base tests are fast, cheap, reliable. Top tests are slow, brittle, expensive. Follow the pyramid to optimize test suite speed, cost, and confidence.', tags: ['testing', 'pyramid'] },
    ],
    intermediate: [
      { question: 'What is mocking and when should you use it?', answer: 'Mocking replaces real dependencies with controlled test doubles. Use: when real dependency is slow (database), unreliable (network), expensive (payment API), or hard to set up. Mocks verify interactions, stubs return canned data. Over-mocking leads to brittle tests.', tags: ['testing', 'mocking'] },
      { question: 'What is TDD (Test-Driven Development)?', answer: 'TDD cycle: Red (write failing test), Green (write minimal code to pass), Refactor (improve code). Benefits: better design, ensures test coverage, confidence in refactoring, documentation via tests. Write test before production code.', tags: ['testing', 'tdd'] },
    ],
    advanced: [
      { question: 'How do you test asynchronous code? What patterns work best?', answer: 'Approaches: callbacks (use done()), Promises (return promise), async/await (use async test function), observables (marble testing for RxJS). Key: always handle both resolve and reject paths. Use fake timers (sinon.useFakeTimers) to control time without waiting. Avoid real delays in tests.', tags: ['testing', 'async', 'patterns'] },
    ],
  },

  Selenium: {
    basic: [
      { question: 'What is Selenium and how does it work?', answer: 'Selenium automates web browsers. WebDriver communicates with browser via browser-specific drivers (ChromeDriver, GeckoDriver). Commands: findElement, click, sendKeys, getText, navigate. Supports multiple languages (Java, Python, JS).', tags: ['selenium', 'automation'] },
      { question: 'What is the difference between findElement and findElements?', answer: 'findElement returns first matching element, throws NoSuchElementException if not found. findElements returns list of all matching elements, empty list if none. Use findElement for single element, findElements for multiple or existence check.', tags: ['selenium', 'locators'] },
    ],
    intermediate: [
      { question: 'What are implicit, explicit, and fluent waits in Selenium?', answer: 'Implicit: wait up to N seconds before throwing NoSuchElementException, global setting. Explicit (WebDriverWait): wait for specific condition (visibility, clickable) with polling. Fluent: custom polling interval and ignoring specific exceptions. Prefer explicit waits for reliable tests.', tags: ['selenium', 'waits'] },
      { question: 'How do you handle iframes in Selenium?', answer: 'Switch to iframe by index, name, or WebElement: driver.switchTo().frame(). After interacting, switch back: driver.switchTo().defaultContent(). For nested iframes: switchTo().parentFrame(). Always return to default content when done.', tags: ['selenium', 'iframes'] },
    ],
    advanced: [
      { question: 'How do you design a scalable Selenium test framework (Page Object Model)?', answer: 'Page Object Model: each page is a class with locators and methods. Page Factory: @FindBy annotations for lazy initialization. Base class: WebDriver instance, common methods (waits, screenshots). Test layer: testNG/JUnit with assertions. Benefits: reusability, maintainability, locator changes in one place.', tags: ['selenium', 'pom', 'framework'] },
    ],
  },

  Automation: {
    basic: [
      { question: 'What is test automation and when is it beneficial?', answer: 'Test automation runs tests programmatically without manual intervention. Beneficial for: regression testing, repetitive scenarios, large datasets, cross-browser testing, CI/CD integration. Not beneficial for: one-time tests, exploratory testing, UX/usability evaluation.', tags: ['automation', 'testing'] },
      { question: 'What are the common challenges in test automation?', answer: 'Flaky tests (unreliable due to timing/state), maintenance cost (UI changes break locators), test data management, false positives/negatives, slow test suites, environment inconsistencies, limited coverage vs effort ratio.', tags: ['automation', 'challenges'] },
    ],
    intermediate: [
      { question: 'How do you handle dynamic elements in automation?', answer: 'Use robust locators: relative XPath (contains, text()), CSS selectors (nth-child, attributes), dynamic waits (explicit wait for visibility). Avoid brittle locators like absolute XPath or positional indexes. Use data attributes (data-testid) for stable selectors.', tags: ['automation', 'locators', 'best-practices'] },
      { question: 'What is data-driven testing and how do you implement it?', answer: 'Data-driven: run same test with multiple data sets. Implementation: external data sources (Excel, CSV, JSON, DB), parameterized test methods, test data framework (Apache POI for Excel, Jackson for JSON). Each row = one test iteration. Improves coverage with minimal code.', tags: ['automation', 'data-driven'] },
    ],
    advanced: [
      { question: 'How do you set up a CI/CD pipeline for automated tests?', answer: 'CI server (GitHub Actions/Jenkins) is triggered on commit. Stages: checkout, install deps, run lint, run unit tests (parallel), run integration tests, run E2E tests (headless), generate report, publish artifacts. Use parallel execution (test splitting), test retries for flaky tests, and fail-fast strategy.', tags: ['automation', 'cicd', 'pipeline'] },
    ],
  },

  'HR Questions': {
    basic: [
      { question: 'Tell me about yourself and your background.', answer: 'Briefly summarize education, key projects, technologies worked with, and what motivates you. Keep it 2-3 minutes and end with why you are excited about this role. Tailor to the job description.', tags: ['intro', 'behavioral'] },
      { question: 'What are your strengths and weaknesses?', answer: 'Pick 2-3 strengths with concrete examples showing impact. For weaknesses, mention one you are actively working on and what steps you are taking to improve. Be honest but strategic.', tags: ['self-awareness'] },
    ],
    intermediate: [
      { question: 'Why do you want to leave your current job?', answer: 'Stay positive. Focus on what you are looking for (growth, new challenges, better culture) rather than what you are running from. Never badmouth previous employers.', tags: ['motivation', 'career'] },
      { question: 'Where do you see yourself in 5 years?', answer: 'Show ambition but realism. Mention growing into a senior IC or tech lead role, deepening expertise in your area, and contributing to team/company success. Align with company growth.', tags: ['career-goals'] },
    ],
    advanced: [
      { question: 'Tell me about a time you handled a difficult situation with a teammate or manager.', answer: 'Use STAR method: Situation (the context), Task (your responsibility), Action (listening, seeking understanding, proposing solution), Result (positive outcome, improved relationship). Show emotional intelligence and conflict resolution skills.', tags: ['behavioral', 'conflict', 'star'] },
    ],
  },

  Communication: {
    basic: [
      { question: 'How do you explain a technical concept to a non-technical stakeholder?', answer: 'Use analogies from everyday life, avoid jargon, focus on the problem and business impact, use visuals/diagrams, ask questions to confirm understanding. Example: API is like a restaurant waiter taking orders to the kitchen.', tags: ['communication', 'stakeholder'] },
      { question: 'What is active listening and why is it important in a professional setting?', answer: 'Active listening means fully concentrating, understanding, responding, and remembering what is said. Important for: understanding requirements, avoiding misunderstandings, building trust, effective collaboration, resolving conflicts.', tags: ['communication', 'listening'] },
    ],
    intermediate: [
      { question: 'How do you give constructive feedback to a peer?', answer: 'Use SBI model: Situation (when/where), Behavior (specific observable action), Impact (how it affected you/team). Be specific, timely, and kind. Focus on behavior not personality. Ask for their perspective. End with collaborative solution.', tags: ['communication', 'feedback'] },
      { question: 'How do you handle disagreements during a technical discussion?', answer: 'Listen first to understand their perspective. Ask clarifying questions. Present data/evidence for your position. Propose a small experiment or prototype to test both approaches. Agree on evaluation criteria upfront. Disagree and commit after decision is made.', tags: ['communication', 'collaboration'] },
    ],
    advanced: [
      { question: 'How would you present a technical proposal to senior leadership?', answer: 'Start with the problem and business impact (not technical details). Present 2-3 options with trade-offs (cost, timeline, risk). Recommend one with clear rationale. Use executive summary (one-pager). Be prepared for questions on ROI and resources needed. Follow up with written summary.', tags: ['communication', 'leadership', 'presentation'] },
    ],
  },

  Aptitude: {
    basic: [
      { question: 'A train 100m long passes a pole in 10 seconds. What is its speed in km/h?', answer: 'Speed = Distance/Time = 100/10 = 10 m/s. Convert to km/h: 10 * 18/5 = 36 km/h.', tags: ['aptitude', 'speed', 'math'] },
      { question: 'What is the probability of getting an even number when rolling a fair six-sided die?', answer: 'Even numbers: 2, 4, 6 (3 outcomes). Total outcomes: 6. Probability = 3/6 = 1/2 = 50%.', tags: ['aptitude', 'probability'] },
    ],
    intermediate: [
      { question: 'A and B together can do a work in 12 days. B alone can do it in 20 days. How long will A alone take?', answer: 'A+B work rate = 1/12 per day. B rate = 1/20 per day. A rate = 1/12 - 1/20 = (5-3)/60 = 2/60 = 1/30. A alone takes 30 days.', tags: ['aptitude', 'work-time'] },
      { question: 'If the simple interest on a sum for 2 years at 5% per annum is Rs. 200, what is the sum?', answer: 'SI = P*R*T/100 => 200 = P*5*2/100 => P = 20000/10 = Rs. 2000.', tags: ['aptitude', 'interest'] },
    ],
    advanced: [
      { question: 'In how many ways can the letters of the word "APTITUDE" be arranged?', answer: 'Total letters: 8. Repeated: T appears 2 times. Arrangements = 8! / 2! = 40320 / 2 = 20160 ways.', tags: ['aptitude', 'permutation'] },
    ],
  },
};

export function getSubjectQuestions(subject: string, difficulty: 'basic' | 'intermediate' | 'advanced'): BankQuestion[] {
  const lower = subject.toLowerCase().trim();
  for (const [key, bank] of Object.entries(BANK)) {
    if (key.toLowerCase() === lower || lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return bank[difficulty] || [];
    }
  }
  return [];
}

export function getAllSubjectNames(): string[] {
  return Object.keys(BANK);
}
