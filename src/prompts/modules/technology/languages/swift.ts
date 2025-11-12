import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const swiftPromptModule: TechnologyPromptModule = {
  id: 'tech-swift',
  name: 'Swift Analysis',
  description: 'Swift-specific analysis prompts for iOS/macOS development',
  technology: TechnologyStack.SWIFT,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.CODE_QUALITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Swift-Specific Analysis

### Language Features and Modern Swift
- Review use of Swift 5+ features (property wrappers, result builders, async/await)
- Analyze optionals handling and unwrapping patterns
- Check for proper use of guard and if-let statements
- Evaluate use of value types (structs) vs reference types (classes)
- Assess protocol-oriented programming patterns

### Memory Management
- Analyze ARC (Automatic Reference Counting) usage
- Review strong, weak, and unowned reference patterns
- Check for retain cycles and memory leaks
- Evaluate capture lists in closures
- Assess proper use of [weak self] and [unowned self]

### SwiftUI Architecture (if applicable)
- Review view hierarchy and composition
- Analyze state management (@State, @Binding, @ObservedObject, @StateObject)
- Check for proper use of @EnvironmentObject
- Evaluate view modifiers and custom modifiers
- Assess navigation patterns and data flow
- Review PreferenceKey and custom environment values

### UIKit Patterns (if applicable)
- Analyze view controller lifecycle management
- Review delegation patterns and protocols
- Check for proper memory management in view controllers
- Evaluate Auto Layout constraints and performance
- Assess use of modern UIKit features

### Concurrency and Async Programming
- Review async/await usage and structured concurrency
- Analyze Task and TaskGroup patterns
- Check for proper actor usage for thread safety
- Evaluate use of MainActor for UI updates
- Assess cancellation handling
- Review GCD (Grand Central Dispatch) usage in legacy code

### Protocol-Oriented Programming
- Analyze protocol design and composition
- Review protocol extensions and default implementations
- Check for proper use of associated types
- Evaluate protocol conformance patterns
- Assess generics with protocol constraints

### Error Handling
- Review error types and Error protocol conformance
- Analyze do-catch-throw patterns
- Check for proper Result type usage
- Evaluate error propagation strategies
- Assess optional vs throwing methods appropriately

### Data Management and Persistence
- Review Core Data implementation and best practices
- Analyze SwiftData usage (iOS 17+)
- Check for proper UserDefaults usage
- Evaluate Keychain integration for sensitive data
- Assess file system operations and document management

### Networking and API Integration
- Review URLSession usage and configuration
- Analyze Codable implementation for JSON parsing
- Check for proper error handling in network calls
- Evaluate use of Combine or async/await for networking
- Assess API client architecture and separation

### Testing Strategies
- Review XCTest usage and test organization
- Analyze unit test coverage and quality
- Check for proper mocking and dependency injection
- Evaluate UI testing with XCUITest
- Assess snapshot testing usage
- Review test performance and execution time

### Code Quality and Style
- Review adherence to Swift API Design Guidelines
- Analyze naming conventions and code style
- Check for proper use of SwiftLint
- Evaluate documentation comments (DocC)
- Assess code modularity and reusability

### Performance Optimization
- Review collection operations efficiency
- Analyze view rendering performance (SwiftUI)
- Check for proper lazy evaluation usage
- Evaluate memory allocations and copy-on-write
- Assess Instruments profiling setup

### Dependency Management
- Review Swift Package Manager (SPM) usage
- Analyze package dependencies and versions
- Check for CocoaPods or Carthage legacy usage
- Evaluate dependency injection patterns
- Assess modular architecture

### Security Best Practices
- Review secure data storage (Keychain)
- Analyze SSL pinning implementation
- Check for jailbreak detection (if applicable)
- Evaluate input validation and sanitization
- Assess biometric authentication implementation

### Combine Framework (if applicable)
- Review publisher and subscriber patterns
- Analyze operator usage and chaining
- Check for proper subscription management
- Evaluate error handling in Combine pipelines
- Assess cancellable storage

### App Architecture Patterns
- Analyze MVVM, MVP, or VIPER implementation
- Review coordinator pattern for navigation
- Check for proper separation of concerns
- Evaluate dependency injection framework usage
- Assess testability of architecture

### SwiftUI Data Flow
- Review @Published properties and ObservableObject
- Analyze data binding patterns
- Check for proper view update optimization
- Evaluate use of onChange and task modifiers
- Assess environment and preference keys

### Accessibility
- Review VoiceOver support implementation
- Analyze Dynamic Type support
- Check for proper accessibility labels and hints
- Evaluate color contrast and visual accessibility
- Assess keyboard navigation support

### Localization and Internationalization
- Review localized strings usage
- Analyze string catalogs or .strings files
- Check for proper RTL (Right-to-Left) support
- Evaluate locale-specific formatting
- Assess asset localization

### App Lifecycle and Background Tasks
- Review app delegate or scene delegate implementation
- Analyze background task handling
- Check for proper state restoration
- Evaluate push notification handling
- Assess background fetch and processing
`
};

