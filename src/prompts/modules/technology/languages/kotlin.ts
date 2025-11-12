import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const kotlinPromptModule: TechnologyPromptModule = {
  id: 'tech-kotlin',
  name: 'Kotlin Analysis',
  description: 'Kotlin-specific analysis prompts for Android and backend development',
  technology: TechnologyStack.KOTLIN,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.CODE_QUALITY, AnalysisFocus.MAINTAINABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Kotlin-Specific Analysis

### Language Features and Idioms
- Review use of Kotlin idioms (let, apply, run, with, also)
- Analyze null safety and proper nullable types usage
- Check for smart casts and type checking patterns
- Evaluate use of data classes and sealed classes
- Assess extension functions and properties usage
- Review inline functions and reified type parameters

### Coroutines and Async Programming
- Analyze coroutine usage and structured concurrency
- Review suspend functions and coroutine builders
- Check for proper coroutine scope management
- Evaluate use of Flow for reactive streams
- Assess exception handling in coroutines
- Review dispatcher usage (Main, IO, Default)
- Check for proper cancellation handling

### Null Safety
- Review nullable types and non-null assertions (!!)
- Analyze safe call operator (?.) usage
- Check for elvis operator (?:) patterns
- Evaluate lateinit var usage appropriately
- Assess nullable type handling in function parameters

### Android Development (if applicable)
- Review Activity and Fragment lifecycle handling
- Analyze ViewModel and LiveData usage
- Check for proper use of Android Architecture Components
- Evaluate Jetpack Compose implementation
- Assess dependency injection (Hilt/Koin/Dagger)
- Review Room database usage
- Analyze Navigation Component implementation

### Jetpack Compose (if applicable)
- Review composable function design
- Analyze state management and recomposition
- Check for proper side effects (LaunchedEffect, DisposableEffect)
- Evaluate remember and derivedStateOf usage
- Assess UI state hoisting patterns
- Review Material Design 3 implementation

### Object-Oriented and Functional Patterns
- Analyze class design and inheritance patterns
- Review interfaces and abstract classes usage
- Check for proper companion objects usage
- Evaluate higher-order functions and lambdas
- Assess use of sealed classes for state representation

### Collections and Sequences
- Review collection operations efficiency
- Analyze sequence vs collection usage for lazy evaluation
- Check for proper immutable collections usage
- Evaluate list, set, and map operations
- Assess use of groupBy, partition, and fold operations

### Kotlin Multiplatform (if applicable)
- Review expect/actual declarations
- Analyze platform-specific implementations
- Check for proper shared code organization
- Evaluate dependency management across platforms
- Assess build configuration

### Android Architecture Components
- Review ViewModel design and lifecycle awareness
- Analyze LiveData vs StateFlow vs SharedFlow
- Check for proper SavedStateHandle usage
- Evaluate WorkManager for background tasks
- Assess DataStore for preferences

### Dependency Injection
- Review Hilt/Dagger setup and module organization
- Analyze scope management and component lifecycle
- Check for proper constructor injection
- Evaluate assisted injection patterns
- Assess qualifier and named dependencies usage

### Testing Strategies
- Review JUnit test organization
- Analyze MockK usage for mocking
- Check for coroutine testing best practices
- Evaluate Robolectric for Android unit tests
- Assess Espresso for UI testing
- Review test coverage and quality

### Error Handling and Result Types
- Analyze exception handling patterns
- Review use of Result<T> type
- Check for proper sealed class error representations
- Evaluate try-catch usage in coroutines
- Assess error propagation strategies

### Performance Optimization
- Review inline functions for performance
- Analyze object allocations and garbage collection
- Check for proper lazy initialization
- Evaluate sequence operations for large collections
- Assess use of primitive types vs boxed types
- Review view binding vs findViewById usage

### Code Quality and Standards
- Review adherence to Kotlin coding conventions
- Analyze ktlint or detekt usage for linting
- Check for proper KDoc documentation
- Evaluate code organization and package structure
- Assess use of meaningful names and clarity

### Gradle Build Configuration
- Review build.gradle.kts configuration
- Analyze dependency management and versions
- Check for proper build types and flavors
- Evaluate ProGuard/R8 configuration
- Assess build optimization settings

### Database and Persistence
- Review Room database design and DAOs
- Analyze entity relationships and migrations
- Check for proper query optimization
- Evaluate use of Flow for reactive queries
- Assess SQLDelight usage (if applicable)

### Network and API Integration
- Review Retrofit configuration and usage
- Analyze serialization with kotlinx.serialization or Gson
- Check for proper error handling in API calls
- Evaluate OkHttp interceptors
- Assess API response caching strategies

### Reactive Programming
- Review Flow usage and operators
- Analyze StateFlow and SharedFlow patterns
- Check for proper flow collection lifecycle
- Evaluate backpressure handling
- Assess flow error handling

### Memory Management
- Analyze lifecycle awareness and memory leaks
- Review context references in coroutines
- Check for proper resource cleanup
- Evaluate WeakReference usage
- Assess LeakCanary integration

### Security Best Practices
- Review data encryption and secure storage
- Analyze ProGuard/R8 obfuscation rules
- Check for proper certificate pinning
- Evaluate sensitive data handling
- Assess root detection implementation

### UI/UX Patterns
- Review Material Design implementation
- Analyze responsive layouts and constraints
- Check for proper theme and styling
- Evaluate animations and transitions
- Assess accessibility features

### Background Processing
- Review WorkManager usage for background tasks
- Analyze foreground services implementation
- Check for proper alarm and notification handling
- Evaluate JobScheduler usage (legacy)
- Assess background execution limits compliance
`
};

