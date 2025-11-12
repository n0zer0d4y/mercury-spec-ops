import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const flaskPromptModule: TechnologyPromptModule = {
  id: 'tech-flask',
  name: 'Flask Analysis',
  description: 'Flask-specific analysis prompts',
  technology: TechnologyStack.FLASK,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.MAINTAINABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Flask-Specific Analysis

### Application Structure and Organization
- Analyze application factory pattern usage
- Review blueprint organization
- Check for proper modularization
- Evaluate project structure (small vs large applications)
- Assess configuration management

### Routing and View Functions
- Review route definitions and organization
- Analyze view function complexity
- Check for proper HTTP method handling
- Evaluate URL building and redirection
- Assess RESTful API design patterns

### Blueprints and Modularity
- Analyze blueprint registration and configuration
- Review blueprint organization by feature
- Check for proper URL prefix usage
- Evaluate static and template folder organization
- Assess blueprint nesting patterns

### Request and Response Handling
- Review request object usage
- Analyze response creation patterns
- Check for proper JSON handling
- Evaluate file upload handling
- Assess cookie and session management

### Templates and Jinja2
- Review template organization and inheritance
- Analyze context passing patterns
- Check for XSS prevention
- Evaluate custom filters and globals
- Assess template caching

### Extensions and Plugins
- Review Flask extension usage
- Analyze SQLAlchemy integration (Flask-SQLAlchemy)
- Check for Flask-Login implementation
- Evaluate Flask-RESTful or Flask-RESTX usage
- Assess Flask-Migrate for database migrations
- Review Flask-WTF for forms

### Database Integration
- Analyze SQLAlchemy model design
- Review database session management
- Check for proper connection pooling
- Evaluate query optimization
- Assess transaction handling
- Review migration strategy

### Forms and Validation
- Review Flask-WTF form design
- Analyze form validation patterns
- Check for CSRF protection
- Evaluate custom validators
- Assess form rendering approaches

### Authentication and Authorization
- Review Flask-Login configuration
- Analyze session management
- Check for password hashing (Werkzeug)
- Evaluate JWT implementation (Flask-JWT-Extended)
- Assess role-based access control

### Error Handling
- Review error handler registration
- Analyze exception handling patterns
- Check for proper HTTP error responses
- Evaluate logging in error handlers
- Assess user-friendly error pages

### Security Best Practices
- Review CSRF protection implementation
- Analyze SQL injection prevention
- Check for XSS prevention
- Evaluate secure session configuration
- Assess CORS handling (Flask-CORS)
- Review security headers
- Check for proper input validation

### RESTful API Development
- Analyze API endpoint design
- Review serialization/deserialization patterns
- Check for proper content negotiation
- Evaluate API versioning strategy
- Assess pagination implementation
- Review authentication for APIs

### Testing Strategies
- Review test client usage
- Analyze unit test organization
- Check for fixture and factory usage
- Evaluate integration testing
- Assess mocking strategies
- Review test coverage

### Configuration Management
- Analyze configuration objects (Config classes)
- Review environment-specific settings
- Check for secrets management
- Evaluate use of environment variables
- Assess configuration validation

### Signals and Event Handling
- Review Flask signals usage (Blinker)
- Analyze custom signal implementations
- Check for proper signal handling
- Evaluate alternative patterns
- Assess decoupling strategies

### Caching Strategies
- Review Flask-Caching configuration
- Analyze cache key design
- Check for view function caching
- Evaluate cache backend usage (Redis, Memcached)
- Assess cache invalidation patterns

### Background Tasks
- Review Celery integration
- Analyze task queue configuration
- Check for async task patterns
- Evaluate task monitoring
- Assess error handling in tasks

### Static Files and Assets
- Review static file serving
- Analyze asset management
- Check for proper MIME type handling
- Evaluate use of CDN
- Assess asset versioning

### Logging and Monitoring
- Review logging configuration
- Analyze log levels and handlers
- Check for request logging
- Evaluate error tracking integration (Sentry)
- Assess performance monitoring

### Context Management
- Analyze application context usage
- Review request context handling
- Check for proper context teardown
- Evaluate g object usage
- Assess context processors

### CLI Commands
- Review Flask CLI custom commands
- Analyze command organization
- Check for proper error handling
- Evaluate command testing
- Assess click integration

### WebSocket Support
- Review Flask-SocketIO usage (if applicable)
- Analyze event handling patterns
- Check for proper connection management
- Evaluate room and namespace usage
- Assess scalability considerations

### Performance Optimization
- Review database query optimization
- Analyze caching effectiveness
- Check for proper connection pooling
- Evaluate use of lazy loading
- Assess profiling and monitoring setup
- Review WSGI server configuration (Gunicorn, uWSGI)

### Deployment Considerations
- Review WSGI application setup
- Analyze production configuration
- Check for proper logging in production
- Evaluate reverse proxy setup
- Assess containerization (Docker)
`
};

