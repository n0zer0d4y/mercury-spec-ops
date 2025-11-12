import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const javaPromptModule: TechnologyPromptModule = {
  id: 'tech-java',
  name: 'Java Analysis',
  description: 'Java-specific analysis prompts',
  technology: TechnologyStack.JAVA,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Java-Specific Analysis

### Object-Oriented Design
- Analyze class design and SOLID principles adherence
- Review inheritance hierarchies and composition usage
- Check for proper encapsulation and information hiding
- Evaluate interface design and abstraction levels
- Assess use of design patterns (Factory, Singleton, Strategy, etc.)

### Java Language Features
- Review use of Java version-specific features (Streams, Lambdas, Optionals)
- Analyze generics usage and type safety
- Check for proper exception hierarchy and handling
- Evaluate use of annotations and reflection
- Assess enum usage and constant management

### Memory Management and Performance
- Analyze object creation patterns and memory allocation
- Review garbage collection considerations
- Check for memory leaks (unclosed resources, static references)
- Evaluate use of StringBuilder vs String concatenation
- Assess collection choice and performance implications

### Concurrency and Threading
- Review thread safety and synchronization strategies
- Analyze use of java.util.concurrent classes
- Check for race conditions and deadlock potential
- Evaluate use of ThreadLocal and volatile keywords
- Assess parallel streams and CompletableFuture usage

### Exception Handling
- Review exception hierarchy and custom exceptions
- Analyze try-with-resources usage
- Check for proper exception propagation
- Evaluate logging in exception handlers
- Assess checked vs unchecked exception strategy

### Dependency Management
- Review Maven/Gradle configuration and dependencies
- Analyze dependency versions and conflict resolution
- Check for transitive dependency issues
- Evaluate use of dependency injection (Spring, Guice)
- Assess modularization and package structure

### Code Quality and Best Practices
- Review adherence to Java naming conventions
- Analyze code formatting and style consistency
- Check for use of static code analysis tools (SonarQube, SpotBugs)
- Evaluate JavaDoc coverage and quality
- Assess use of equals(), hashCode(), and toString()

### Testing and Quality Assurance
- Review JUnit/TestNG test coverage
- Analyze use of mocking frameworks (Mockito, PowerMock)
- Check for proper test organization and naming
- Evaluate integration testing strategies
- Assess code coverage metrics and quality gates

### Security Considerations
- Review input validation and sanitization
- Analyze SQL injection vulnerabilities (JDBC usage)
- Check for insecure deserialization
- Evaluate cryptography usage and key management
- Assess authentication and authorization patterns

### Framework-Specific Analysis
- Review Spring Framework usage (Boot, MVC, Data, Security)
- Analyze Hibernate/JPA entity design and query optimization
- Check for proper transaction management
- Evaluate REST API design and implementation
- Assess microservices architecture (if applicable)

### Build and Deployment
- Review build tool configuration (Maven/Gradle)
- Analyze multi-module project structure
- Check for proper resource management and packaging
- Evaluate Docker/containerization setup
- Assess CI/CD pipeline integration

### Performance Optimization
- Review database query performance and N+1 issues
- Analyze caching strategies (local, distributed)
- Check for proper connection pooling
- Evaluate algorithm efficiency and Big-O complexity
- Assess profiling and performance monitoring setup
`
};

