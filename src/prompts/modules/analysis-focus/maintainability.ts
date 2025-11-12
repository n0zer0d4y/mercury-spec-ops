import { AnalysisFocus, TechnologyStack } from '../../../types/enums';
import { AnalysisFocusPromptModule } from '../../../types';

export const maintainabilityFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-maintainability',
  name: 'Maintainability Analysis',
  description: 'Maintainability-focused analysis prompts',
  focus: AnalysisFocus.MAINTAINABILITY,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.TYPESCRIPT, TechnologyStack.REACT,
    TechnologyStack.ANGULAR, TechnologyStack.VUE
  ],
  applicableTo: ['codebase-analysis'],
  priority: 2,
  content: `
## Maintainability Analysis Focus

### Code Complexity
- Analyze cyclomatic complexity metrics
- Review function/method length and complexity
- Check for deeply nested code structures
- Evaluate cognitive complexity
- Assess code duplication and repetition
- Review class/module complexity

### Code Readability
- Analyze naming conventions clarity
- Review code formatting consistency
- Check for self-documenting code practices
- Evaluate variable and function naming quality
- Assess code organization and structure
- Review indentation and whitespace usage

### Code Duplication
- Analyze duplicate code blocks
- Review copy-paste programming patterns
- Check for similar but not identical code
- Evaluate opportunities for abstraction
- Assess DRY (Don't Repeat Yourself) principle adherence
- Review template and boilerplate code

### Modularity and Separation of Concerns
- Analyze module/component boundaries
- Review single responsibility principle adherence
- Check for proper separation of business logic
- Evaluate coupling between modules
- Assess cohesion within modules
- Review dependency management

### Technical Debt
- Analyze TODO and FIXME comments
- Review deprecated code usage
- Check for temporary solutions marked as permanent
- Evaluate workarounds and hacks
- Assess outdated dependencies
- Review tech debt documentation and tracking

### Code Organization
- Analyze file and folder structure
- Review package/namespace organization
- Check for logical grouping of related code
- Evaluate import/require statements organization
- Assess configuration file management
- Review resource file organization

### Refactoring Opportunities
- Analyze opportunities for code simplification
- Review extract method/function candidates
- Check for inline variable candidates
- Evaluate opportunities for design pattern application
- Assess opportunities for generalization
- Review candidates for breaking down large components

### Configuration Management
- Analyze environment-specific configuration
- Review configuration file organization
- Check for hardcoded values
- Evaluate configuration validation
- Assess configuration documentation
- Review configuration change management

### Dependency Management
- Analyze dependency versions and updates
- Review dependency conflict resolution
- Check for unused dependencies
- Evaluate dependency security vulnerabilities
- Assess transitive dependency management
- Review dependency injection patterns

### Error Handling Consistency
- Analyze error handling patterns
- Review exception handling consistency
- Check for proper error propagation
- Evaluate error message quality
- Assess error logging patterns
- Review error recovery strategies

### Testing Maintainability
- Analyze test code organization
- Review test naming conventions
- Check for test data management
- Evaluate test fixture reusability
- Assess test coverage gaps
- Review test execution time

### Legacy Code Assessment
- Analyze legacy code patterns
- Review outdated framework usage
- Check for deprecated API usage
- Evaluate migration path complexity
- Assess documentation of legacy components
- Review risk of modifying legacy code

### Code Comments and Documentation
- Analyze inline comment quality
- Review API documentation completeness
- Check for outdated comments
- Evaluate comment-to-code ratio
- Assess documentation maintenance
- Review self-documenting code practices

### Code Smell Detection
- Analyze long parameter lists
- Review large classes and god objects
- Check for feature envy patterns
- Evaluate data clumps
- Assess primitive obsession
- Review switch/case statement overuse

### Version Control Practices
- Analyze commit message quality
- Review branch management strategy
- Check for atomic commits
- Evaluate merge conflict frequency
- Assess code review thoroughness
- Review git history cleanliness

### Build and Deployment Complexity
- Analyze build script complexity
- Review deployment process documentation
- Check for automated deployment capabilities
- Evaluate rollback procedure simplicity
- Assess environment setup complexity
- Review CI/CD pipeline maintainability
`
};

