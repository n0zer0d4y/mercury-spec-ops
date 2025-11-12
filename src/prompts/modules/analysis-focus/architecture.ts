import { AnalysisFocus, TechnologyStack } from '../../../types/enums';
import { AnalysisFocusPromptModule } from '../../../types';

export const architectureFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-architecture',
  name: 'Architecture Analysis',
  description: 'Architecture-focused analysis prompts',
  focus: AnalysisFocus.ARCHITECTURE,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.REACT, TechnologyStack.ANGULAR
  ],
  applicableTo: ['codebase-analysis'],
  priority: 1,
  content: `
## Architecture Analysis Focus

### System Design Patterns
- Analyze architectural patterns (MVC, MVP, MVVM, Clean Architecture)
- Review microservices vs monolithic architecture decisions
- Check for proper separation of concerns and layering
- Evaluate use of design patterns appropriate to the technology stack

### Component Relationships
- Analyze coupling and cohesion between components
- Review dependency injection and inversion of control
- Check for circular dependencies and tight coupling
- Evaluate interface design and contract definitions

### Scalability Considerations
- Review horizontal vs vertical scaling strategies
- Analyze load balancing and distribution patterns
- Check for proper caching strategies and data partitioning
- Evaluate use of message queues and event-driven architecture

### Data Flow and State Management
- Analyze data flow patterns and state management strategies
- Review database design and data access patterns
- Check for proper API design and service boundaries
- Evaluate use of event sourcing and CQRS patterns

### Integration and Interoperability
- Review API design and integration patterns
- Analyze use of service discovery and registry patterns
- Check for proper monitoring and observability setup
- Evaluate deployment and infrastructure architecture
`
};

export const securityFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-security',
  name: 'Security Analysis',
  description: 'Security-focused analysis prompts',
  focus: AnalysisFocus.SECURITY,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.REACT, TechnologyStack.DJANGO
  ],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Security Analysis Focus

### Authentication and Authorization
- Analyze authentication mechanisms and implementation
- Review authorization patterns and access control
- Check for proper session management and token handling
- Evaluate use of OAuth, JWT, and other security standards

### Input Validation and Sanitization
- Review input validation practices and implementation
- Analyze protection against injection attacks (SQL, XSS, NoSQL)
- Check for proper output encoding and escaping
- Evaluate use of security libraries and frameworks

### Data Protection and Privacy
- Analyze encryption practices for data at rest and in transit
- Review handling of sensitive data and PII
- Check for proper logging and audit trails
- Evaluate compliance with data protection regulations

### Network Security
- Review API security practices and rate limiting
- Analyze CORS configuration and secure headers
- Check for proper use of HTTPS and TLS
- Evaluate network segmentation and firewall rules

### Vulnerability Management
- Review dependency scanning and vulnerability assessment
- Analyze security testing practices and tools
- Check for proper error handling and information disclosure
- Evaluate incident response and security monitoring
`
};

export const performanceFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-performance',
  name: 'Performance Analysis',
  description: 'Performance-focused analysis prompts',
  focus: AnalysisFocus.PERFORMANCE,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.REACT, TechnologyStack.ANGULAR
  ],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Performance Analysis Focus

### Response Time and Latency
- Analyze API response times and latency patterns
- Review database query performance and optimization
- Check for proper caching strategies and implementation
- Evaluate use of lazy loading and eager loading patterns

### Resource Utilization
- Review CPU usage and optimization opportunities
- Analyze memory usage and potential leaks
- Check for proper connection pooling and resource management
- Evaluate use of background processing and queuing

### Scalability and Throughput
- Analyze system throughput and bottlenecks
- Review load testing results and performance metrics
- Check for proper horizontal and vertical scaling
- Evaluate use of CDNs and content optimization

### Frontend Performance
- Review asset optimization and bundling strategies
- Analyze rendering performance and paint times
- Check for proper use of browser caching and compression
- Evaluate mobile performance and responsive design

### Database Performance
- Review query optimization and indexing strategies
- Analyze database connection management
- Check for proper use of database sharding and partitioning
- Evaluate use of read replicas and write optimization
`
};

export const testingFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-testing',
  name: 'Testing Analysis',
  description: 'Testing-focused analysis prompts',
  focus: AnalysisFocus.TESTING,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.REACT, TechnologyStack.ANGULAR
  ],
  applicableTo: ['codebase-analysis'],
  priority: 1,
  content: `
## Testing Analysis Focus

### Test Coverage and Quality
- Analyze unit test coverage and effectiveness
- Review integration testing strategies and implementation
- Check for proper end-to-end testing setup
- Evaluate use of mutation testing and code coverage tools

### Testing Framework and Tools
- Review testing framework choices and configuration
- Analyze mocking and stubbing strategies
- Check for proper test data management
- Evaluate use of continuous integration testing

### Test Organization and Structure
- Analyze test organization and naming conventions
- Review test fixture and setup/teardown practices
- Check for proper assertion and error handling in tests
- Evaluate use of parameterized and data-driven testing

### Performance and Security Testing
- Review performance testing strategies and tools
- Analyze load testing and stress testing implementation
- Check for proper security testing practices
- Evaluate use of contract testing and API testing

### Testing Best Practices
- Review adherence to testing best practices
- Analyze test maintenance and refactoring strategies
- Check for proper documentation of tests
- Evaluate use of test-driven development practices
`
};