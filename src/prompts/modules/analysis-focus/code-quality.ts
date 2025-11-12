import { AnalysisFocus, TechnologyStack } from '../../../types/enums';
import { AnalysisFocusPromptModule } from '../../../types';

export const codeQualityFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-code-quality',
  name: 'Code Quality Analysis',
  description: 'Focus on code quality, standards, and best practices',
  focus: AnalysisFocus.CODE_QUALITY,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.REACT, TechnologyStack.ANGULAR,
    TechnologyStack.VUE, TechnologyStack.TYPESCRIPT, TechnologyStack.JAVASCRIPT
  ],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Code Quality Focus

### Code Readability and Clarity
- Evaluate variable and function naming conventions
- Assess code comment quality and documentation
- Check for clear and self-documenting code
- Review code complexity and cognitive load
- Analyze method and function length
- Check for proper use of language idioms
- Evaluate code organization and structure
- Review consistency in coding style

### Code Smells and Anti-Patterns
- Identify duplicate code (DRY violations)
- Check for long methods and god objects
- Evaluate excessive coupling between modules
- Assess feature envy and inappropriate intimacy
- Review primitive obsession patterns
- Check for shotgun surgery indicators
- Identify lazy classes and speculative generality
- Analyze message chains and middle man patterns

### Design Patterns and Best Practices
- Review appropriate use of design patterns
- Evaluate SOLID principles adherence
  - Single Responsibility Principle
  - Open/Closed Principle
  - Liskov Substitution Principle
  - Interface Segregation Principle
  - Dependency Inversion Principle
- Check for proper separation of concerns
- Assess composition over inheritance usage
- Review dependency injection patterns
- Evaluate factory and builder pattern usage

### Code Complexity Metrics
- Analyze cyclomatic complexity of methods
- Review cognitive complexity scores
- Check for nested conditional depth
- Evaluate method parameter count
- Assess class coupling metrics
- Review inheritance depth
- Analyze lines of code per module
- Check for high fan-in/fan-out

### Error Handling and Robustness
- Evaluate exception handling completeness
- Check for proper error propagation
- Review custom exception usage
- Assess error logging and monitoring
- Check for graceful degradation
- Evaluate input validation and sanitization
- Review null/undefined handling
- Analyze edge case coverage

### Code Duplication
- Identify exact code duplication
- Check for similar code patterns
- Evaluate copy-paste programming indicators
- Review opportunities for abstraction
- Assess code reusability
- Check for shared utility functions
- Analyze duplication across modules
- Review code consolidation opportunities

### Function and Method Design
- Evaluate function length and complexity
- Check for single responsibility per function
- Review function parameter count
- Assess function return value clarity
- Check for pure functions vs side effects
- Evaluate function naming and intent
- Review function cohesion
- Analyze function coupling

### Class and Module Design
- Review class responsibilities and cohesion
- Evaluate class size and complexity
- Check for proper encapsulation
- Assess class coupling and dependencies
- Review inheritance hierarchies
- Check for interface design quality
- Evaluate module boundaries
- Analyze package organization

### Code Documentation
- Review inline comment quality and relevance
- Check for API documentation completeness
- Evaluate docstring/JSDoc/JavaDoc usage
- Assess README and getting started guides
- Review architecture documentation
- Check for decision record documentation
- Evaluate code example quality
- Analyze documentation maintainability

### Coding Standards Compliance
- Review adherence to team coding standards
- Check for linter/formatter configuration
- Evaluate code style consistency
- Assess naming convention compliance
- Review file organization standards
- Check for import/module organization
- Evaluate whitespace and formatting
- Analyze code review guideline adherence

### Type Safety and Null Safety
- Evaluate static type usage (TypeScript, Flow, etc.)
- Check for proper type annotations
- Review null/undefined handling
- Assess optional chaining usage
- Check for type guards and assertions
- Evaluate union and intersection types
- Review generic type usage
- Analyze type inference quality

### Code Comments and Self-Documentation
- Evaluate comment-to-code ratio
- Check for obsolete or misleading comments
- Review TODO/FIXME comment management
- Assess comment clarity and usefulness
- Check for over-commenting vs under-commenting
- Evaluate self-documenting code practices
- Review comment maintenance
- Analyze comment quality in complex logic

### Magic Numbers and Constants
- Identify hardcoded magic numbers
- Check for proper constant extraction
- Evaluate configuration management
- Assess environment variable usage
- Review const/enum usage for literals
- Check for centralized constant management
- Analyze magic string patterns
- Evaluate configuration file usage

### Function/Method Purity
- Identify pure functions vs impure functions
- Check for side effect isolation
- Evaluate state mutation patterns
- Assess referential transparency
- Review function determinism
- Check for idempotent operations
- Analyze function composability
- Evaluate immutability patterns

### Code Modularity
- Review module size and responsibilities
- Evaluate module coupling metrics
- Check for high cohesion within modules
- Assess module interface design
- Review dependency graphs
- Check for circular dependencies
- Analyze module reusability
- Evaluate plugin/extension architecture

### Conditional Logic Quality
- Review nested if-else depth
- Evaluate guard clauses usage
- Check for early return patterns
- Assess switch/case vs polymorphism
- Review ternary operator usage
- Check for complex boolean expressions
- Analyze conditional simplification opportunities
- Evaluate state machine patterns

### Loop and Iteration Quality
- Review loop complexity and nesting
- Evaluate forEach vs map/filter/reduce
- Check for infinite loop prevention
- Assess loop variable naming
- Review loop invariant optimization
- Check for off-by-one errors
- Analyze iterator pattern usage
- Evaluate recursion vs iteration trade-offs

### Object-Oriented Principles
- Review encapsulation implementation
- Evaluate abstraction levels
- Check for polymorphism usage
- Assess inheritance vs composition
- Review access modifier usage (public/private/protected)
- Check for interface-based programming
- Analyze class hierarchy design
- Evaluate abstract class usage

### Functional Programming Principles
- Review immutability patterns
- Evaluate pure function usage
- Check for higher-order functions
- Assess function composition
- Review map/filter/reduce usage
- Check for currying and partial application
- Analyze monadic patterns
- Evaluate declarative vs imperative style

### Resource Management
- Review proper resource cleanup
- Evaluate file handle management
- Check for database connection pooling
- Assess memory leak prevention
- Review garbage collection optimization
- Check for proper disposal patterns
- Analyze resource lifecycle management
- Evaluate try-catch-finally usage

### Code Testability
- Evaluate test coverage potential
- Check for dependency injection for testing
- Review mock/stub opportunities
- Assess tight coupling impact on testing
- Check for testable function design
- Evaluate test data management
- Review integration point testability
- Analyze test isolation capabilities

### API Design Quality
- Review RESTful API design principles
- Evaluate endpoint naming and structure
- Check for proper HTTP method usage
- Assess request/response payload design
- Review API versioning strategy
- Check for consistent error responses
- Analyze pagination and filtering
- Evaluate API documentation quality

### Concurrency and Threading
- Review thread safety considerations
- Evaluate race condition prevention
- Check for deadlock prevention
- Assess proper synchronization usage
- Review atomic operation usage
- Check for thread-local storage patterns
- Analyze concurrent data structure usage
- Evaluate async/await patterns

### Code Review Quality Indicators
- Review commit message quality
- Evaluate pull request description completeness
- Check for small, focused changes
- Assess code review comments resolution
- Review testing in code reviews
- Check for consistent review participation
- Analyze code review turnaround time
- Evaluate review thoroughness
`
};

