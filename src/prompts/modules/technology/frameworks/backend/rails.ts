import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const railsPromptModule: TechnologyPromptModule = {
  id: 'tech-rails',
  name: 'Ruby on Rails Analysis',
  description: 'Ruby on Rails-specific analysis prompts for web development',
  technology: TechnologyStack.RAILS,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.MAINTAINABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Ruby on Rails-Specific Analysis

### MVC Architecture and Conventions
- Review adherence to Rails conventions (Convention over Configuration)
- Analyze controller design and RESTful routing
- Check for proper model-view-controller separation
- Evaluate use of concerns for shared behavior
- Assess naming conventions and file organization
- Review application structure and modularity

### ActiveRecord and Database
- Analyze model design and associations
- Review query optimization and N+1 prevention (includes, joins)
- Check for proper use of scopes and class methods
- Evaluate migration management and reversibility
- Assess callback usage and potential issues
- Review validations and custom validators
- Analyze use of database indexes

### Routing and RESTful Design
- Review routes.rb organization
- Analyze resource and nested resource routing
- Check for proper HTTP verb usage
- Evaluate route constraints and advanced routing
- Assess API-only route configuration
- Review namespace and module usage

### Controllers and Actions
- Analyze controller actions and single responsibility
- Review strong parameters usage
- Check for proper before_action filters
- Evaluate controller concerns
- Assess respond_to and format handling
- Review streaming and file downloads

### Views and Templates (ERB/Haml/Slim)
- Review view organization and partials
- Analyze helper usage and custom helpers
- Check for XSS prevention and proper escaping
- Evaluate layout inheritance
- Assess view caching strategies
- Review content_for and yield usage

### ActiveJob and Background Processing
- Review job design and queue configuration
- Analyze use of Sidekiq, Resque, or Delayed Job
- Check for proper job retry logic
- Evaluate job scheduling and cron jobs
- Assess job performance and monitoring
- Review job testing strategies

### Action Cable and WebSockets
- Analyze channel design and subscriptions
- Review real-time broadcast implementation
- Check for authentication in channels
- Evaluate connection handling and scaling
- Assess Redis adapter configuration

### ActiveStorage and File Uploads
- Review attachment configuration
- Analyze storage service setup (S3, Azure, GCS)
- Check for image processing with ActiveStorage
- Evaluate direct upload implementation
- Assess file validation and security
- Review virus scanning integration

### Authentication and Authorization
- Analyze Devise configuration and customization
- Review Pundit or CanCanCan authorization policies
- Check for proper password handling
- Evaluate OmniAuth for OAuth integration
- Assess session management
- Review API authentication (JWT, token-based)

### Security Best Practices
- Review CSRF protection (authenticity_token)
- Analyze SQL injection prevention
- Check for mass assignment vulnerabilities (strong parameters)
- Evaluate XSS prevention in views
- Assess secure headers configuration
- Review secrets management (credentials.yml.enc)
- Check for security updates (Brakeman)

### Rails API Mode
- Analyze API-only application configuration
- Review serialization approach (ActiveModel::Serializers, jsonapi-serializer)
- Check for proper CORS configuration
- Evaluate API versioning strategy
- Assess rate limiting implementation
- Review API documentation (rswag, apipie)

### Testing with RSpec/Minitest
- Review test organization and coverage
- Analyze model, controller, and integration tests
- Check for proper use of factories (FactoryBot)
- Evaluate request specs and system tests
- Assess mocking and stubbing strategies
- Review test performance optimization

### Caching Strategies
- Analyze fragment caching in views
- Review Russian doll caching implementation
- Check for low-level caching (Rails.cache)
- Evaluate cache store configuration (Redis, Memcached)
- Assess cache key versioning and invalidation
- Review HTTP caching headers

### Action Mailer
- Review mailer design and organization
- Analyze email template rendering
- Check for background job queueing of emails
- Evaluate email preview functionality
- Assess multipart email handling
- Review email testing strategies

### Internationalization (i18n)
- Analyze locale file organization
- Review translation usage (I18n.t)
- Check for proper pluralization
- Evaluate lazy lookup in views
- Assess fallback locale configuration
- Review date/time localization

### Asset Pipeline and Webpacker
- Review asset organization and compilation
- Analyze JavaScript bundling strategy
- Check for proper CSS preprocessing (Sass, Less)
- Evaluate asset compression and minification
- Assess fingerprinting for cache busting
- Review CDN integration

### Performance Optimization
- Analyze database query performance (Bullet gem)
- Review eager loading strategies
- Check for proper indexing
- Evaluate caching effectiveness
- Assess background job usage for heavy operations
- Review memory usage and garbage collection

### Service Objects and Design Patterns
- Analyze service object implementation
- Review use of POROs (Plain Old Ruby Objects)
- Check for proper separation of business logic
- Evaluate form objects and presenters
- Assess query objects for complex queries
- Review decorator pattern usage (Draper)

### Concerns and Mixins
- Review concern organization and naming
- Analyze ActiveSupport::Concern usage
- Check for proper module inclusion
- Evaluate shared behavior extraction
- Assess concern dependencies

### Rails Engines and Plugins
- Analyze engine structure and isolation
- Review mountable vs full engines
- Check for proper namespace usage
- Evaluate engine configuration
- Assess engine testing strategies

### Deployment and Configuration
- Review environment-specific configuration
- Analyze secrets and credentials management
- Check for proper logging configuration
- Evaluate application server setup (Puma, Unicorn)
- Assess deployment automation (Capistrano, Heroku)
- Review database connection pooling

### Error Handling and Logging
- Review rescue_from usage in controllers
- Analyze exception notification setup
- Check for proper error pages (404, 500)
- Evaluate logging levels and output
- Assess integration with error tracking (Sentry, Rollbar)

### Stimulus and Hotwire (if applicable)
- Review Stimulus controller implementation
- Analyze Turbo usage (Turbo Drive, Frames, Streams)
- Check for proper progressive enhancement
- Evaluate real-time updates with Turbo Streams
- Assess ActionCable integration with Turbo

### ActionText and Rich Text
- Review rich text editor integration
- Analyze attachment handling
- Check for content sanitization
- Evaluate mention and emoji support
- Assess custom embed handling

### Rack Middleware
- Review custom middleware implementation
- Analyze middleware stack order
- Check for proper request/response manipulation
- Evaluate third-party middleware usage
- Assess middleware performance impact

### GraphQL with Rails (if applicable)
- Review GraphQL schema design
- Analyze resolver implementation
- Check for N+1 query prevention (BatchLoader)
- Evaluate mutation design
- Assess authentication and authorization in GraphQL
`
};

