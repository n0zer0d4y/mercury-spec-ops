import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const djangoPromptModule: TechnologyPromptModule = {
  id: 'tech-django',
  name: 'Django Analysis',
  description: 'Django-specific analysis prompts',
  technology: TechnologyStack.DJANGO,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Django-Specific Analysis

### Project Structure and Apps
- Analyze app organization and boundaries
- Review project settings configuration
- Check for proper app registration
- Evaluate reusable app design
- Assess monolithic vs microservices architecture

### Models and ORM
- Review model design and relationships
- Analyze field choices and constraints
- Check for proper indexing
- Evaluate use of abstract base classes
- Assess migration management
- Review queryset optimization
- Check for N+1 query problems

### Views and URL Patterns
- Analyze view organization (function-based vs class-based)
- Review URL routing patterns
- Check for proper view mixins usage
- Evaluate generic views appropriately
- Assess RESTful API design (if using Django REST Framework)

### Templates and Template Tags
- Review template organization and inheritance
- Analyze template tag usage
- Check for XSS prevention
- Evaluate context processor usage
- Assess template performance

### Forms and Validation
- Review form design and ModelForm usage
- Analyze form validation patterns
- Check for proper CSRF protection
- Evaluate custom validator implementation
- Assess form rendering and styling

### Django REST Framework (if applicable)
- Review serializer design
- Analyze viewset and router usage
- Check for proper permission classes
- Evaluate pagination and filtering
- Assess API versioning strategy
- Review throttling configuration

### Authentication and Authorization
- Analyze authentication backends
- Review permission and authorization patterns
- Check for proper user model customization
- Evaluate session management
- Assess password policies and hashing

### Middleware
- Review middleware ordering and usage
- Analyze custom middleware implementation
- Check for proper request/response processing
- Evaluate security middleware configuration
- Assess performance implications

### Admin Interface
- Review admin customization
- Analyze ModelAdmin configuration
- Check for proper list display and filters
- Evaluate inline formsets
- Assess admin actions and bulk operations

### Database Configuration
- Review database router usage
- Analyze connection pooling
- Check for proper transaction management
- Evaluate database backend choices
- Assess read replicas and database sharding

### Caching Strategies
- Review cache framework usage
- Analyze cache key design
- Check for view caching patterns
- Evaluate template fragment caching
- Assess low-level cache API usage
- Review cache backend configuration (Redis, Memcached)

### Security Best Practices
- Review security middleware settings
- Analyze CSRF protection implementation
- Check for SQL injection prevention
- Evaluate XSS protection
- Assess clickjacking protection
- Review secure cookie settings
- Check HTTPS and security headers

### Static Files and Media
- Review static files configuration
- Analyze media file handling
- Check for proper file upload security
- Evaluate use of CDN
- Assess collectstatic workflow

### Signals and Events
- Review signal usage patterns
- Analyze signal handlers
- Check for potential performance issues
- Evaluate coupling concerns
- Assess alternative approaches (e.g., custom save methods)

### Celery and Async Tasks
- Review Celery configuration
- Analyze task design and retry logic
- Check for proper task routing
- Evaluate periodic tasks
- Assess task monitoring and error handling

### Testing Strategies
- Review test organization (TestCase, TransactionTestCase)
- Analyze test fixtures and factories
- Check for proper mocking
- Evaluate test database usage
- Assess coverage and quality
- Review integration and E2E testing

### Management Commands
- Review custom management commands
- Analyze command arguments and options
- Check for proper error handling
- Evaluate command logging
- Assess command reusability

### Settings and Configuration
- Review settings organization
- Analyze environment-specific settings
- Check for secrets management
- Evaluate use of django-environ or similar
- Assess settings validation

### QuerySet Optimization
- Review select_related and prefetch_related usage
- Analyze query efficiency
- Check for unnecessary database hits
- Evaluate use of only() and defer()
- Assess bulk operations

### Internationalization and Localization
- Review i18n and l10n setup
- Analyze translation strings
- Check for proper locale handling
- Evaluate timezone awareness
- Assess language switching

### Logging and Monitoring
- Review logging configuration
- Analyze log levels and handlers
- Check for request logging
- Evaluate error reporting (Sentry integration)
- Assess performance monitoring

### Performance Optimization
- Review database query optimization
- Analyze template rendering performance
- Check for proper caching
- Evaluate middleware performance
- Assess use of database connection pooling
- Review static file serving strategy
`
};

