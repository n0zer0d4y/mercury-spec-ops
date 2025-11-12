import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const laravelPromptModule: TechnologyPromptModule = {
  id: 'tech-laravel',
  name: 'Laravel Analysis',
  description: 'Laravel-specific analysis prompts for PHP web development',
  technology: TechnologyStack.LARAVEL,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.CODE_QUALITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Laravel-Specific Analysis

### MVC Architecture and Routing
- Review route organization and resource controllers
- Analyze controller design and single responsibility
- Check for proper route model binding
- Evaluate route caching and optimization
- Assess middleware usage and ordering
- Review route groups and prefixing

### Eloquent ORM and Database
- Analyze model design and relationships
- Review query optimization and eager loading
- Check for N+1 query problems
- Evaluate use of scopes and query builders
- Assess migration management and versioning
- Review database seeding and factories

### Service Container and Dependency Injection
- Review service provider registration
- Analyze dependency injection in controllers
- Check for proper interface binding
- Evaluate singleton vs instance binding
- Assess contextual binding usage
- Review service container organization

### Authentication and Authorization
- Analyze authentication scaffolding usage
- Review Sanctum or Passport API authentication
- Check for proper authorization policies and gates
- Evaluate multi-auth guard configuration
- Assess password reset functionality
- Review email verification implementation

### Blade Templates and Views
- Review template organization and inheritance
- Analyze component usage (@component, x-*)
- Check for XSS prevention and escaping
- Evaluate use of view composers and creators
- Assess template caching
- Review custom Blade directives

### Form Requests and Validation
- Review form request class organization
- Analyze validation rules and custom validators
- Check for proper authorization in form requests
- Evaluate error message customization
- Assess validation rule consistency

### API Development
- Analyze API resource transformers
- Review API versioning strategy
- Check for proper HTTP status code usage
- Evaluate rate limiting implementation
- Assess API documentation (Scribe, L5-Swagger)
- Review CORS configuration

### Queue and Job Processing
- Review queue configuration (Redis, database, SQS)
- Analyze job design and retry logic
- Check for proper job chaining and batching
- Evaluate horizon configuration for monitoring
- Assess failed job handling
- Review job middleware

### Caching Strategies
- Analyze cache usage and drivers (Redis, Memcached)
- Review cache tags and invalidation
- Check for query result caching
- Evaluate view caching
- Assess cache warming strategies
- Review cache configuration per environment

### Events and Listeners
- Review event-listener registration
- Analyze event broadcasting (Pusher, Socket.io)
- Check for proper listener queueing
- Evaluate event discovery
- Assess observer pattern usage for models

### Testing Strategies
- Review feature and unit test organization
- Analyze database testing and factories
- Check for proper test isolation
- Evaluate HTTP testing and API assertions
- Assess browser testing with Dusk
- Review mocking and faking (Mail, Queue, Storage)

### Security Best Practices
- Review CSRF protection implementation
- Analyze SQL injection prevention
- Check for mass assignment vulnerabilities
- Evaluate encryption and hashing usage
- Assess XSS prevention in Blade
- Review security headers configuration
- Check for proper rate limiting

### Performance Optimization
- Analyze query optimization and indexing
- Review eager loading and lazy loading strategies
- Check for route and configuration caching
- Evaluate OPcache configuration
- Assess job queueing for heavy operations
- Review database connection pooling

### File Storage and S3
- Review storage facade usage
- Analyze local vs cloud storage configuration
- Check for proper file validation and security
- Evaluate S3 or other cloud storage integration
- Assess file visibility (public/private)

### Notifications and Mail
- Review notification channel design
- Analyze mail configuration and queuing
- Check for markdown mail templates
- Evaluate notification broadcasting
- Assess database notification storage

### Service Providers and Bootstrapping
- Analyze service provider organization
- Review boot vs register method usage
- Check for deferred service providers
- Evaluate package service provider development
- Assess application bootstrapping flow

### Middleware and HTTP Pipeline
- Review middleware implementation and logic
- Analyze middleware priority and ordering
- Check for terminable middleware
- Evaluate global vs route middleware
- Assess middleware groups

### Livewire (if applicable)
- Review component design and properties
- Analyze lifecycle hooks usage
- Check for proper validation
- Evaluate real-time updates and polling
- Assess security considerations

### Artisan Commands
- Review custom command implementation
- Analyze command scheduling (cron)
- Check for proper command arguments and options
- Evaluate command testing
- Assess command organization

### Package Development
- Analyze package structure and service providers
- Review publishable assets and configuration
- Check for proper namespace organization
- Evaluate package testing
- Assess package documentation

### Localization and Internationalization
- Review language file organization
- Analyze translation usage in code
- Check for pluralization handling
- Evaluate JSON translation files
- Assess missing translation handling

### Error Handling and Logging
- Review exception handler customization
- Analyze logging channels and configuration
- Check for proper error reporting
- Evaluate debug mode vs production
- Assess integration with error tracking (Sentry, Bugsnag)

### Database Transactions
- Review transaction usage and nesting
- Analyze deadlock prevention
- Check for proper rollback handling
- Evaluate database locking strategies
- Assess long-running transaction issues

### API Rate Limiting and Throttling
- Analyze rate limiter configuration
- Review custom rate limit definitions
- Check for proper response handling
- Evaluate per-user vs global limits
- Assess Redis-based rate limiting

### Deployment and Environment Configuration
- Review .env file management
- Analyze environment-specific configuration
- Check for proper secrets management
- Evaluate deployment scripts and processes
- Assess zero-downtime deployment strategies
`
};

