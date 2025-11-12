import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const phpPromptModule: TechnologyPromptModule = {
  id: 'tech-php',
  name: 'PHP Analysis',
  description: 'PHP-specific analysis prompts',
  technology: TechnologyStack.PHP,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## PHP-Specific Analysis

### Modern PHP Features
- Review use of PHP 7+ features (type declarations, return types)
- Analyze PHP 8+ features (named arguments, attributes, match expressions)
- Check for proper use of strict types declaration
- Evaluate use of null coalescing and null safe operators
- Assess use of constructor property promotion

### Object-Oriented PHP
- Analyze class design and namespace organization
- Review use of traits, interfaces, and abstract classes
- Check for proper encapsulation and visibility modifiers
- Evaluate use of magic methods (__construct, __get, etc.)
- Assess adherence to PSR standards (PSR-1, PSR-4, PSR-12)

### Composer and Dependency Management
- Review composer.json and dependency versions
- Analyze autoloading strategy (PSR-4)
- Check for security vulnerabilities in dependencies
- Evaluate use of composer.lock for reproducible builds
- Assess package version constraints

### Security Considerations
- Review input validation and sanitization
- Analyze SQL injection prevention (prepared statements)
- Check for XSS vulnerabilities and output escaping
- Evaluate CSRF protection mechanisms
- Assess password hashing (password_hash, bcrypt)
- Review file upload security and validation
- Check for proper session management

### Framework-Specific Analysis (Laravel/Symfony)
- Review MVC architecture and route definitions
- Analyze Eloquent ORM usage and query optimization
- Check for proper middleware usage
- Evaluate service container and dependency injection
- Assess use of facades and service providers
- Review validation and form requests
- Analyze queue and job processing

### Database Interactions
- Review PDO or mysqli usage
- Analyze query optimization and indexing
- Check for N+1 query problems
- Evaluate use of transactions
- Assess database migration management
- Review connection pooling and persistence

### Error Handling and Logging
- Analyze exception handling patterns
- Review custom exception classes
- Check for proper error reporting configuration
- Evaluate logging strategies (Monolog)
- Assess error monitoring and alerting

### Performance Optimization
- Review opcode caching configuration (OPcache)
- Analyze memory usage and resource limits
- Check for efficient array and string operations
- Evaluate use of generators for large datasets
- Assess query caching and result caching
- Review HTTP caching headers and strategies

### API Development
- Analyze RESTful API design
- Review API authentication (JWT, OAuth)
- Check for proper rate limiting
- Evaluate API versioning strategy
- Assess response formatting (JSON, XML)
- Review API documentation (OpenAPI/Swagger)

### Testing Strategies
- Review PHPUnit test coverage
- Analyze use of test doubles and mocking
- Check for integration and feature testing
- Evaluate use of PHPStan or Psalm for static analysis
- Assess test organization and naming conventions

### Code Quality and Standards
- Review adherence to PSR coding standards
- Analyze use of PHP_CodeSniffer or PHP-CS-Fixer
- Check for proper PHPDoc comments
- Evaluate code complexity metrics
- Assess use of static analysis tools

### Session and State Management
- Review session configuration and security
- Analyze cookie handling and security flags
- Check for proper session regeneration
- Evaluate use of Redis or Memcached for sessions
- Assess stateless authentication approaches

### File System Operations
- Review file handling and permission checks
- Analyze use of file upload functionality
- Check for path traversal vulnerabilities
- Evaluate temporary file management
- Assess use of streams and filters

### Deployment and Configuration
- Review environment configuration (.env files)
- Analyze deployment strategies (zero-downtime)
- Check for proper error reporting per environment
- Evaluate use of Docker containers
- Assess CI/CD pipeline integration
- Review production optimization (OPcache, APCu)
`
};

