import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const goPromptModule: TechnologyPromptModule = {
  id: 'tech-go',
  name: 'Go Analysis',
  description: 'Go-specific analysis prompts',
  technology: TechnologyStack.GO,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.RELIABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Go-Specific Analysis

### Idiomatic Go Code
- Review adherence to Go coding conventions and style guide
- Analyze use of gofmt and golint for code formatting
- Check for proper error handling patterns (no ignored errors)
- Evaluate use of goroutines and channels idiomatically
- Assess naming conventions and package organization

### Concurrency Patterns
- Analyze goroutine usage and lifecycle management
- Review channel usage (buffered vs unbuffered)
- Check for goroutine leaks and proper cleanup
- Evaluate use of sync primitives (Mutex, RWMutex, WaitGroup)
- Assess select statement usage and timeout patterns

### Error Handling
- Review error wrapping and unwrapping (errors.Is, errors.As)
- Analyze custom error types and error hierarchies
- Check for proper error propagation
- Evaluate error logging and monitoring
- Assess panic/recover usage and appropriateness

### Memory Management and Performance
- Analyze struct design and memory layout
- Review slice and map usage for efficiency
- Check for unnecessary allocations and copies
- Evaluate use of pointers vs values
- Assess garbage collection pressure and optimization

### Package Design and Organization
- Review package structure and dependencies
- Analyze interface design and abstraction
- Check for circular package dependencies
- Evaluate internal vs external package organization
- Assess module versioning (go.mod, go.sum)

### Testing and Quality
- Review test coverage and table-driven tests
- Analyze use of testing package and subtests
- Check for proper benchmarking
- Evaluate use of testify or other testing libraries
- Assess integration testing and mocking strategies

### HTTP and Network Programming
- Review HTTP server/client implementation
- Analyze context usage for cancellation and timeouts
- Check for proper request/response handling
- Evaluate middleware patterns and chaining
- Assess connection pooling and keep-alive settings

### Database Interactions
- Review SQL query patterns and parameterization
- Analyze use of database/sql and connection pooling
- Check for proper transaction management
- Evaluate ORM usage (GORM, sqlx) if applicable
- Assess query performance and N+1 issues

### Security Best Practices
- Review input validation and sanitization
- Analyze SQL injection prevention
- Check for proper authentication and authorization
- Evaluate cryptography usage (crypto package)
- Assess secure configuration and secrets management

### Build and Deployment
- Review Dockerfile and multi-stage builds
- Analyze build tags and conditional compilation
- Check for proper vendoring or module usage
- Evaluate CI/CD pipeline integration
- Assess binary size and optimization

### Standard Library Usage
- Review effective use of standard library packages
- Analyze context propagation patterns
- Check for proper io.Reader/Writer usage
- Evaluate use of encoding packages (JSON, XML, etc.)
- Assess file and directory operations

### Performance Optimization
- Review profiling setup (pprof)
- Analyze CPU and memory profiles
- Check for bottlenecks and optimization opportunities
- Evaluate algorithm efficiency
- Assess use of sync.Pool for object reuse

### API Design
- Review REST/gRPC API design
- Analyze request/response structures
- Check for proper versioning strategy
- Evaluate error response formats
- Assess API documentation (Swagger/OpenAPI)

### Microservices Patterns (if applicable)
- Review service decomposition and boundaries
- Analyze inter-service communication
- Check for proper service discovery
- Evaluate distributed tracing setup
- Assess health checks and monitoring
`
};

