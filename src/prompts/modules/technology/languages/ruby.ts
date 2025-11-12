import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const rubyPromptModule: TechnologyPromptModule = {
  id: 'tech-ruby',
  name: 'Ruby Analysis',
  description: 'Ruby-specific analysis prompts',
  technology: TechnologyStack.RUBY,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.CODE_QUALITY, AnalysisFocus.MAINTAINABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Ruby-Specific Analysis

### Ruby Idioms and Style
- Review adherence to Ruby style guide and community conventions
- Analyze use of idiomatic Ruby patterns (blocks, procs, lambdas)
- Check for proper use of enumerable methods
- Evaluate string interpolation and symbol usage
- Assess use of Ruby 3+ features (pattern matching, endless methods)

### Object-Oriented Design
- Analyze class design and module organization
- Review use of mixins and concerns
- Check for proper encapsulation and method visibility
- Evaluate use of attr_accessor, attr_reader, attr_writer
- Assess inheritance vs composition patterns

### Metaprogramming
- Review use of metaprogramming techniques
- Analyze method_missing and respond_to? usage
- Check for proper use of define_method and class_eval
- Evaluate DSL implementations
- Assess dynamic method generation patterns

### Gem Management
- Review Gemfile and dependency specifications
- Analyze Gemfile.lock for version consistency
- Check for outdated or vulnerable gems
- Evaluate use of bundler groups
- Assess gem versioning constraints

### Rails Framework Analysis (if applicable)
- Review MVC architecture and RESTful conventions
- Analyze ActiveRecord models and associations
- Check for proper use of callbacks and validations
- Evaluate controller design and strong parameters
- Assess view helpers and partials organization
- Review ActiveJob and background processing
- Analyze ActionCable and real-time features

### Database and ActiveRecord
- Review database schema design and migrations
- Analyze query optimization and N+1 problems
- Check for proper indexing strategies
- Evaluate use of scopes and query objects
- Assess database transaction handling

### Testing with RSpec/Minitest
- Review test coverage and quality
- Analyze use of test doubles and mocking
- Check for proper test organization (unit, integration, system)
- Evaluate use of factory_bot or fixtures
- Assess test performance and optimization

### Security Best Practices
- Review input validation and sanitization
- Analyze SQL injection prevention
- Check for XSS vulnerabilities
- Evaluate CSRF protection
- Assess authentication implementation (Devise)
- Review authorization patterns (Pundit, CanCanCan)
- Check for mass assignment vulnerabilities

### Performance Optimization
- Review N+1 query detection (Bullet gem)
- Analyze database query performance
- Check for proper caching strategies (fragment, Russian doll)
- Evaluate use of background jobs for heavy tasks
- Assess memory usage and garbage collection
- Review asset pipeline optimization

### Code Quality Tools
- Analyze use of RuboCop for style enforcement
- Review use of Reek for code smells
- Check for Rails Best Practices violations
- Evaluate use of Brakeman for security scanning
- Assess SimpleCov for code coverage

### API Development
- Review API versioning strategy
- Analyze serialization approaches (ActiveModel::Serializers, Jbuilder)
- Check for proper error handling and responses
- Evaluate API authentication (JWT, OAuth)
- Assess API documentation (rswag, grape-swagger)

### Error Handling and Logging
- Review exception handling patterns
- Analyze rescue blocks and error propagation
- Check for proper logging configuration (Rails logger)
- Evaluate error monitoring integration (Sentry, Rollbar)
- Assess log rotation and management

### Background Processing
- Review Sidekiq/Resque/DelayedJob usage
- Analyze job design and retry strategies
- Check for idempotent job implementations
- Evaluate queue priority and scheduling
- Assess job monitoring and error handling

### Service Objects and Design Patterns
- Analyze use of service objects for business logic
- Review implementation of design patterns
- Check for proper separation of concerns
- Evaluate use of form objects and decorators
- Assess query objects and presenters

### Deployment and Environment Configuration
- Review environment-specific configuration
- Analyze use of environment variables
- Check for secrets management
- Evaluate Capistrano or other deployment tools
- Assess Docker containerization
- Review production server configuration (Puma, Unicorn)

### Code Organization
- Review file and directory structure
- Analyze namespace and module organization
- Check for proper use of concerns and lib directory
- Evaluate autoloading configuration
- Assess code modularity and reusability
`
};

