import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const expressPromptModule: TechnologyPromptModule = {
  id: 'tech-express',
  name: 'Express.js Analysis',
  description: 'Express.js-specific analysis prompts',
  technology: TechnologyStack.EXPRESS,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Express.js-Specific Analysis

### Application Structure and Organization
- Analyze route organization and modularization
- Review MVC or layered architecture implementation
- Check for proper separation of concerns (routes, controllers, services)
- Evaluate middleware organization and chaining
- Assess use of Router for modular routes

### Middleware Patterns
- Review middleware order and execution flow
- Analyze custom middleware implementations
- Check for proper error handling middleware
- Evaluate use of third-party middleware (body-parser, cors, helmet)
- Assess middleware performance and efficiency

### Routing and Request Handling
- Analyze route parameter validation
- Review RESTful API design patterns
- Check for proper HTTP method usage
- Evaluate route versioning strategies
- Assess dynamic routing and regex patterns

### Error Handling
- Review error handling middleware placement
- Analyze error propagation patterns
- Check for proper async error handling
- Evaluate error response formatting
- Assess error logging and monitoring

### Security Best Practices
- Review helmet.js configuration
- Analyze input validation and sanitization
- Check for SQL injection prevention
- Evaluate CORS configuration
- Assess rate limiting implementation
- Review authentication middleware (JWT, Passport)
- Check for CSRF protection
- Evaluate secure session management

### Database Integration
- Review database connection management
- Analyze query patterns and ORM usage
- Check for connection pooling
- Evaluate transaction handling
- Assess database error handling

### Request/Response Handling
- Analyze req/res object usage
- Review body parsing configuration
- Check for proper content-type handling
- Evaluate file upload handling (multer)
- Assess response compression

### Authentication and Authorization
- Review authentication strategy (JWT, sessions, OAuth)
- Analyze authorization middleware
- Check for proper token management
- Evaluate password hashing and storage
- Assess role-based access control (RBAC)

### Async/Await and Promise Handling
- Review async route handler patterns
- Analyze promise error handling
- Check for unhandled promise rejections
- Evaluate use of try-catch in async functions
- Assess async middleware implementation

### API Design and RESTful Practices
- Review endpoint naming conventions
- Analyze HTTP status code usage
- Check for proper HATEOAS implementation
- Evaluate API versioning approach
- Assess pagination and filtering strategies

### Performance Optimization
- Review response caching strategies
- Analyze static file serving (express.static)
- Check for gzip/compression usage
- Evaluate clustering and load balancing
- Assess database query optimization
- Review memory usage and leak prevention

### Template Engine Integration
- Analyze view engine configuration (EJS, Pug, Handlebars)
- Review template organization
- Check for proper data passing to views
- Evaluate template caching
- Assess server-side rendering performance

### Testing Strategies
- Review unit testing approach (Mocha, Jest)
- Analyze integration testing with supertest
- Check for proper mocking of dependencies
- Evaluate test coverage
- Assess E2E testing implementation

### Logging and Monitoring
- Review logging strategy (Winston, Morgan, Bunyan)
- Analyze log levels and formatting
- Check for request logging middleware
- Evaluate error logging
- Assess integration with monitoring tools (PM2, New Relic)

### Environment Configuration
- Review environment variable management
- Analyze configuration for different environments
- Check for secrets management
- Evaluate use of dotenv or config libraries
- Assess environment-specific settings

### WebSocket and Real-time Communication
- Review Socket.IO integration (if applicable)
- Analyze real-time event handling
- Check for proper connection management
- Evaluate room and namespace usage
- Assess scaling considerations for WebSockets

### File Uploads and Static Assets
- Review file upload handling (multer)
- Analyze file validation and security
- Check for proper storage management
- Evaluate static asset serving
- Assess CDN integration

### CORS and Cross-Origin Requests
- Review CORS configuration
- Analyze allowed origins and methods
- Check for credential handling
- Evaluate preflight request handling
- Assess security implications

### Validation and Sanitization
- Review input validation libraries (Joi, express-validator)
- Analyze validation middleware patterns
- Check for proper sanitization
- Evaluate error messages for validation failures
- Assess validation consistency across endpoints

### Graceful Shutdown
- Review shutdown handling
- Analyze cleanup procedures
- Check for proper connection closing
- Evaluate signal handling (SIGTERM, SIGINT)
- Assess health check endpoints
`
};

