import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const nestjsPromptModule: TechnologyPromptModule = {
  id: 'tech-nestjs',
  name: 'NestJS Analysis',
  description: 'NestJS-specific analysis prompts',
  technology: TechnologyStack.NESTJS,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.CODE_QUALITY, AnalysisFocus.MAINTAINABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## NestJS-Specific Analysis

### Module Architecture
- Analyze module organization and boundaries
- Review feature module structure
- Check for proper module imports and exports
- Evaluate shared/common module usage
- Assess dynamic module configuration

### Dependency Injection
- Review provider registration patterns
- Analyze injection scope (Singleton, Request, Transient)
- Check for circular dependencies
- Evaluate custom provider patterns
- Assess use of @Injectable and injection tokens

### Controllers and Routing
- Analyze controller design and RESTful patterns
- Review route decorators and versioning
- Check for proper request/response DTOs
- Evaluate route guards and interceptors
- Assess parameter validation and transformation

### Services and Business Logic
- Review service layer organization
- Analyze business logic separation
- Check for proper service composition
- Evaluate transaction management
- Assess service reusability

### Middleware and Interceptors
- Analyze middleware configuration
- Review interceptor patterns (logging, transformation)
- Check for proper exception filters
- Evaluate pipe usage for validation
- Assess guard implementation for authorization

### Exception Handling
- Review exception filter implementations
- Analyze HTTP exception usage
- Check for custom exception classes
- Evaluate error response formatting
- Assess global vs route-specific exception handling

### Validation and DTOs
- Review class-validator usage
- Analyze DTO design and reusability
- Check for proper validation pipes
- Evaluate transformation pipes
- Assess validation group usage

### Database Integration (TypeORM/Prisma)
- Review repository pattern implementation
- Analyze entity/model design
- Check for proper transaction handling
- Evaluate query builder usage
- Assess migration management
- Review connection configuration

### Authentication and Authorization
- Analyze Passport.js integration
- Review JWT strategy implementation
- Check for proper guard usage
- Evaluate role-based access control
- Assess session management

### GraphQL Integration (if applicable)
- Review schema-first vs code-first approach
- Analyze resolver design
- Check for N+1 query prevention
- Evaluate DataLoader usage
- Assess subscription implementation

### Microservices Architecture
- Review microservice patterns (TCP, Redis, NATS)
- Analyze message patterns and event handling
- Check for proper service communication
- Evaluate error handling in distributed systems
- Assess service discovery and load balancing

### Testing Strategies
- Review unit testing with Jest
- Analyze integration testing approaches
- Check for proper mocking of dependencies
- Evaluate E2E testing with supertest
- Assess test coverage and quality

### Configuration Management
- Review ConfigModule usage
- Analyze environment-specific configuration
- Check for secrets management
- Evaluate validation of configuration
- Assess dynamic configuration loading

### Logging and Monitoring
- Review Logger service usage
- Analyze log levels and formatting
- Check for request logging
- Evaluate integration with external logging services
- Assess performance monitoring setup

### Caching Strategies
- Review CacheModule configuration
- Analyze caching patterns and strategies
- Check for cache invalidation
- Evaluate Redis integration
- Assess cache key design

### Task Scheduling
- Review @nestjs/schedule usage
- Analyze cron job patterns
- Check for proper job error handling
- Evaluate distributed job handling
- Assess job monitoring

### WebSockets and Real-time
- Review WebSocket gateway implementation
- Analyze event handling patterns
- Check for proper connection management
- Evaluate namespace and room usage
- Assess scalability for real-time features

### Swagger/OpenAPI Documentation
- Review API documentation setup
- Analyze decorator usage for documentation
- Check for proper schema definitions
- Evaluate response type documentation
- Assess authentication documentation

### Performance Optimization
- Review async/await usage
- Analyze database query optimization
- Check for proper caching
- Evaluate compression middleware
- Assess clustering and scalability

### TypeScript Best Practices
- Review type safety and strict mode
- Analyze interface and type usage
- Check for proper generic usage
- Evaluate decorator implementation
- Assess code organization and modularity

### Security Best Practices
- Review helmet.js integration
- Analyze CORS configuration
- Check for rate limiting
- Evaluate input sanitization
- Assess CSRF protection
- Review security headers
`
};

