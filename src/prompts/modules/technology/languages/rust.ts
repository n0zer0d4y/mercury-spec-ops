import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const rustPromptModule: TechnologyPromptModule = {
  id: 'tech-rust',
  name: 'Rust Analysis',
  description: 'Rust-specific analysis prompts for systems programming',
  technology: TechnologyStack.RUST,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.RELIABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Rust-Specific Analysis

### Ownership and Borrowing
- Analyze ownership patterns and move semantics
- Review borrowing rules and lifetime usage
- Check for unnecessary clones and copies
- Evaluate use of references (&) vs mutable references (&mut)
- Assess lifetime annotations and elision
- Review ownership transfer patterns

### Memory Safety and Zero-Cost Abstractions
- Analyze memory management without garbage collection
- Review use of smart pointers (Box, Rc, Arc)
- Check for proper handling of heap vs stack allocation
- Evaluate memory leaks prevention
- Assess unsafe code blocks and justification
- Review FFI (Foreign Function Interface) safety

### Error Handling
- Review Result<T, E> and Option<T> usage
- Analyze error propagation with ? operator
- Check for proper custom error types
- Evaluate use of thiserror or anyhow crates
- Assess panic vs recoverable error patterns
- Review error context and debugging information

### Concurrency and Parallelism
- Analyze thread safety and Send/Sync traits
- Review use of std::thread and thread pools
- Check for data race prevention
- Evaluate use of channels (mpsc, crossbeam)
- Assess async/await and async runtime (Tokio, async-std)
- Review mutex, rwlock, and atomic operations

### Async/Await and Futures
- Review async function design
- Analyze Future trait implementations
- Check for proper executor usage (Tokio, async-std)
- Evaluate use of async blocks and streams
- Assess cancellation and timeout handling
- Review task spawning and joining patterns

### Type System and Traits
- Analyze trait design and implementations
- Review generic programming patterns
- Check for proper trait bounds
- Evaluate associated types vs generic parameters
- Assess use of marker traits (Send, Sync, Copy)
- Review trait objects and dynamic dispatch

### Pattern Matching
- Review match expressions and exhaustiveness
- Analyze if-let and while-let patterns
- Check for proper destructuring
- Evaluate use of match guards
- Assess pattern matching in function parameters

### Cargo and Dependency Management
- Review Cargo.toml configuration
- Analyze dependency versions and features
- Check for workspace organization
- Evaluate use of dev-dependencies and build-dependencies
- Assess custom build scripts (build.rs)
- Review crate versioning and semver compliance

### Module System and Privacy
- Analyze module organization and visibility
- Review pub, pub(crate), pub(super) usage
- Check for proper encapsulation
- Evaluate re-exports and prelude patterns
- Assess crate structure and organization

### Macros and Metaprogramming
- Review declarative macro (macro_rules!) usage
- Analyze procedural macro implementations
- Check for macro hygiene
- Evaluate derive macros usage
- Assess custom derive implementations

### Testing and Documentation
- Review unit test organization and #[test] attributes
- Analyze integration tests structure
- Check for doc tests in documentation
- Evaluate use of #[cfg(test)] and test modules
- Assess benchmark tests with Criterion
- Review property-based testing (proptest)

### Performance Optimization
- Analyze zero-cost abstractions usage
- Review iterator vs loop performance
- Check for unnecessary allocations
- Evaluate use of inline hints
- Assess compile-time vs runtime trade-offs
- Review profiling setup (flamegraph, perf)

### Unsafe Code
- Review unsafe block justification and safety invariants
- Analyze raw pointer usage
- Check for undefined behavior risks
- Evaluate unsafe trait implementations
- Assess FFI safety boundaries
- Review memory layout guarantees

### Error Types and Result Patterns
- Analyze custom error type design
- Review error conversion implementations (From trait)
- Check for context-aware error messages
- Evaluate error handling in async code
- Assess error recovery strategies

### Collections and Data Structures
- Review Vec, HashMap, HashSet usage appropriately
- Analyze collection capacity pre-allocation
- Check for efficient iteration patterns
- Evaluate custom data structure implementations
- Assess use of specialized collections (BTreeMap, etc.)

### Lifetimes and References
- Analyze lifetime parameter usage
- Review lifetime elision rules application
- Check for complex lifetime relationships
- Evaluate static lifetimes appropriately
- Assess higher-ranked trait bounds

### Code Quality and Idioms
- Review Rust API Guidelines compliance
- Analyze use of rustfmt for formatting
- Check for clippy lint warnings
- Evaluate naming conventions
- Assess use of Rust idioms (builder pattern, RAII)

### WebAssembly (if applicable)
- Review wasm-bindgen usage
- Analyze JavaScript interop
- Check for size optimization
- Evaluate wasm-pack configuration
- Assess browser compatibility

### Embedded Systems (if applicable)
- Review no_std usage and embedded-hal
- Analyze interrupt handling
- Check for real-time constraints
- Evaluate memory usage in constrained environments
- Assess hardware abstraction patterns

### Networking and Web Development
- Review Tokio or async-std for async I/O
- Analyze HTTP client/server implementations
- Check for proper connection pooling
- Evaluate serialization (serde) usage
- Assess WebSocket implementation

### Database Integration
- Review async database drivers (sqlx, tokio-postgres)
- Analyze query building and SQL injection prevention
- Check for connection pool management
- Evaluate ORM usage (diesel, sea-orm)
- Assess migration management

### Security Best Practices
- Review input validation and sanitization
- Analyze cryptography crate usage
- Check for timing attack prevention
- Evaluate secure random number generation
- Assess secret management
`
};

