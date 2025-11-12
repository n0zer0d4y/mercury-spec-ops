import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const csharpPromptModule: TechnologyPromptModule = {
  id: 'tech-csharp',
  name: 'C# Analysis',
  description: 'C#-specific analysis prompts',
  technology: TechnologyStack.C_SHARP,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## C#-Specific Analysis

### Language Features and Modern C#
- Review use of modern C# features (records, pattern matching, init-only setters)
- Analyze async/await usage and Task-based asynchronous patterns
- Check for proper nullable reference types usage (C# 8+)
- Evaluate use of LINQ and lambda expressions
- Assess use of expression-bodied members and local functions

### Object-Oriented Design
- Analyze class design and SOLID principles adherence
- Review inheritance vs composition patterns
- Check for proper use of interfaces and abstract classes
- Evaluate use of properties vs fields
- Assess access modifiers and encapsulation

### .NET Framework/Core Patterns
- Review dependency injection and IoC container usage
- Analyze middleware pipeline and request processing
- Check for proper configuration management (appsettings.json, IOptions)
- Evaluate logging patterns (ILogger, Serilog)
- Assess use of hosted services and background workers

### Memory Management and Performance
- Analyze object allocation and garbage collection pressure
- Review use of value types vs reference types
- Check for proper IDisposable implementation and resource cleanup
- Evaluate use of Span<T> and Memory<T> for performance
- Assess string manipulation and StringBuilder usage

### Asynchronous Programming
- Review async/await usage and continuation patterns
- Analyze ConfigureAwait usage in library code
- Check for async void methods (anti-pattern)
- Evaluate cancellation token usage
- Assess Task.WhenAll, Task.WhenAny patterns

### Exception Handling
- Review exception hierarchy and custom exceptions
- Analyze try-catch-finally patterns
- Check for proper exception filtering
- Evaluate use of exception middleware
- Assess logging in exception handlers

### Entity Framework and Data Access
- Review DbContext configuration and lifecycle
- Analyze LINQ queries and SQL generation
- Check for N+1 query problems
- Evaluate use of eager/lazy loading
- Assess migration management and database versioning

### ASP.NET Core Web Applications
- Review MVC/Razor Pages/Blazor patterns
- Analyze controller design and action methods
- Check for proper model binding and validation
- Evaluate middleware pipeline configuration
- Assess API versioning and routing strategies

### Security Best Practices
- Review authentication and authorization (ASP.NET Identity, JWT)
- Analyze input validation and anti-forgery tokens
- Check for SQL injection prevention (parameterized queries)
- Evaluate CORS configuration
- Assess secrets management (Azure Key Vault, user secrets)

### Testing Strategies
- Review unit testing with xUnit/NUnit/MSTest
- Analyze mocking strategies (Moq, NSubstitute)
- Check for integration testing approaches
- Evaluate test coverage and quality
- Assess use of test doubles and fixtures

### NuGet Package Management
- Review package dependencies and versions
- Analyze package.lock.json and deterministic builds
- Check for security vulnerabilities in packages
- Evaluate use of internal NuGet feeds
- Assess package versioning strategy

### Code Quality and Standards
- Review adherence to C# coding conventions
- Analyze use of code analyzers (Roslyn analyzers)
- Check for proper XML documentation comments
- Evaluate code formatting and style consistency
- Assess use of EditorConfig

### Containerization and Cloud Deployment
- Review Dockerfile and container configuration
- Analyze Azure/AWS deployment patterns
- Check for proper environment-specific configuration
- Evaluate health checks and readiness probes
- Assess horizontal scaling considerations

### Performance Optimization
- Review performance profiling and diagnostics
- Analyze CPU and memory usage patterns
- Check for proper caching strategies (IMemoryCache, Redis)
- Evaluate database query performance
- Assess use of response compression and static file serving
`
};

