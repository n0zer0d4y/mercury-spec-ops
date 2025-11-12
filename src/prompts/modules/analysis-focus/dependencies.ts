import { AnalysisFocus, TechnologyStack } from '../../../types/enums';
import { AnalysisFocusPromptModule } from '../../../types';

export const dependenciesFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-dependencies',
  name: 'Dependencies Analysis',
  description: 'Focus on dependency management, security, and health',
  focus: AnalysisFocus.DEPENDENCIES,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.TYPESCRIPT, TechnologyStack.JAVASCRIPT,
    TechnologyStack.PHP, TechnologyStack.RUBY, TechnologyStack.C_SHARP
  ],
  applicableTo: ['codebase-analysis'],
  priority: 1,
  content: `
## Dependencies Focus

### Dependency Management
- Review dependency declaration files (package.json, requirements.txt, pom.xml, etc.)
- Analyze direct vs transitive dependencies
- Check for dependency versioning strategy (exact, caret, tilde)
- Evaluate dependency pinning and lock files
- Assess dependency update frequency
- Review monorepo dependency management
- Check for workspace/project organization
- Analyze dependency resolution conflicts

### Dependency Security
- Identify known vulnerabilities in dependencies (CVEs)
- Review security advisory compliance
- Check for outdated dependencies with security issues
- Evaluate dependency scanning tools integration (Snyk, Dependabot, etc.)
- Assess supply chain security practices
- Review package signature verification
- Check for malicious package detection
- Analyze security patch application timeline

### Dependency Versions
- Review semantic versioning compliance
- Analyze version range specifications
- Check for version compatibility across dependencies
- Evaluate peer dependency conflicts
- Assess breaking change management
- Review major version upgrade planning
- Check for deprecated version usage
- Analyze version lock consistency

### Dependency Audit
- Review npm audit / pip audit results
- Analyze severity levels of vulnerabilities
- Check for dependency health scores
- Evaluate maintainer activity and reputation
- Assess dependency download statistics
- Review last update/commit dates
- Check for archived or abandoned packages
- Analyze bus factor for critical dependencies

### Transitive Dependencies
- Review dependency tree depth
- Analyze indirect dependency versions
- Check for version conflicts in transitive deps
- Evaluate transitive dependency size
- Assess hidden vulnerability exposure
- Review dependency hoisting behavior
- Check for phantom dependencies
- Analyze peer dependency satisfaction

### Dependency Size and Performance
- Review bundle size impact of dependencies
- Analyze dependency load time contribution
- Check for tree-shaking effectiveness
- Evaluate code splitting with dependencies
- Assess lazy loading opportunities
- Review dependency duplication in bundles
- Check for lightweight alternatives
- Analyze runtime performance impact

### License Compliance
- Review dependency license types (MIT, Apache, GPL, etc.)
- Analyze license compatibility with project
- Check for viral/copyleft license implications
- Evaluate commercial use restrictions
- Assess license attribution requirements
- Review SPDX license identifier usage
- Check for unlicensed dependencies
- Analyze license audit reports

### Dependency Updates
- Review automated update tools (Renovate, Dependabot)
- Analyze update frequency and cadence
- Check for breaking change detection
- Evaluate changelog review process
- Assess regression testing after updates
- Review staged rollout for updates
- Check for update batching strategy
- Analyze rollback procedures

### Dependency Alternatives
- Evaluate alternative libraries for functionality
- Check for lighter-weight replacements
- Assess native API alternatives
- Review in-house implementation feasibility
- Check for more actively maintained alternatives
- Analyze feature parity with alternatives
- Evaluate migration effort for replacements
- Review community support for alternatives

### Circular Dependencies
- Identify circular dependency chains
- Review module dependency graphs
- Check for coupling issues
- Evaluate refactoring opportunities
- Assess architectural improvements
- Review dependency inversion opportunities
- Check for interface-based decoupling
- Analyze layer violations

### Development vs Production Dependencies
- Review devDependencies separation
- Analyze production bundle exclusion
- Check for misclassified dependencies
- Evaluate build-time vs runtime needs
- Assess test framework dependencies
- Review tooling dependency isolation
- Check for deployment artifact size
- Analyze CI/CD dependency usage

### Monorepo Dependency Management
- Review workspace configuration
- Analyze internal package dependencies
- Check for version consistency across workspaces
- Evaluate hoisting strategy
- Assess shared vs isolated dependencies
- Review workspace dependency resolution
- Check for cross-workspace version conflicts
- Analyze build order and dependency graphs

### Native Dependencies and Binaries
- Review native module compilation
- Analyze platform-specific dependencies
- Check for prebuilt binary availability
- Evaluate cross-platform compatibility
- Assess compilation toolchain requirements
- Review node-gyp and native build issues
- Check for WASM alternatives
- Analyze Docker/container implications

### Dependency Injection and IoC
- Review dependency injection frameworks
- Analyze service container configuration
- Check for constructor injection patterns
- Evaluate setter vs constructor injection
- Assess circular dependency handling in DI
- Review singleton vs transient lifetimes
- Check for interface-based DI
- Analyze DI container performance

### Package Registry and Repository
- Review package registry configuration
- Analyze private registry usage
- Check for registry mirror/proxy setup
- Evaluate package caching strategies
- Assess registry authentication and security
- Review package publishing process
- Check for scoped package organization
- Analyze registry availability and failover

### Dependency Reproducibility
- Review lock file consistency
- Analyze deterministic builds
- Check for version drift across environments
- Evaluate CI/CD dependency caching
- Assess dependency snapshot testing
- Review container image layering
- Check for frozen dependencies
- Analyze build reproducibility

### API Stability and Deprecation
- Review dependency API stability
- Analyze deprecation warnings
- Check for migration guides availability
- Evaluate breaking change frequency
- Assess backward compatibility
- Review feature flag usage
- Check for gradual migration paths
- Analyze API versioning in dependencies

### Dependency Monitoring and Alerts
- Review dependency update notifications
- Analyze vulnerability alert configuration
- Check for automated PR creation
- Evaluate dependency health dashboards
- Assess SLA for critical updates
- Review notification channels and escalation
- Check for dependency metrics tracking
- Analyze compliance reporting

### Build System Dependencies
- Review build tool versions (webpack, rollup, etc.)
- Analyze compiler/transpiler dependencies
- Check for plugin ecosystem health
- Evaluate build performance impact
- Assess build tool configuration complexity
- Review build caching strategies
- Check for incremental build support
- Analyze build artifact reproducibility

### Runtime Dependencies
- Review server runtime dependencies
- Analyze container base image selection
- Check for system library requirements
- Evaluate runtime version compatibility
- Assess runtime security patches
- Review runtime performance characteristics
- Check for runtime size and footprint
- Analyze runtime startup time impact

### Dependency Testing
- Review dependency upgrade testing
- Analyze compatibility test coverage
- Check for integration test with dependencies
- Evaluate mock/stub dependency strategies
- Assess contract testing with dependencies
- Review snapshot testing for dependency updates
- Check for visual regression testing
- Analyze performance regression testing

### Vendoring and Bundling
- Review vendored dependency strategy
- Analyze dependency bundling approach
- Check for git submodule usage
- Evaluate monolithic vs modular bundling
- Assess vendor directory management
- Review licensing implications of vendoring
- Check for update tracking for vendored deps
- Analyze security patching for vendored code

### Microservices Dependency Management
- Review service-to-service dependencies
- Analyze API versioning and compatibility
- Check for service mesh dependency injection
- Evaluate sidecar dependency patterns
- Assess service discovery dependencies
- Review circuit breaker and resilience libraries
- Check for shared library versioning
- Analyze polyglot dependency management

### Frontend Dependency Specifics
- Review polyfill and shim dependencies
- Analyze browser compatibility requirements
- Check for CSS framework dependencies
- Evaluate UI component library versions
- Assess icon and font dependencies
- Review bundler and loader dependencies
- Check for progressive enhancement libraries
- Analyze accessibility dependency support

### Backend Dependency Specifics
- Review ORM and database driver versions
- Analyze middleware and plugin dependencies
- Check for authentication library security
- Evaluate logging framework dependencies
- Assess configuration management libraries
- Review job queue and worker dependencies
- Check for email and notification libraries
- Analyze API client library versions
`
};

