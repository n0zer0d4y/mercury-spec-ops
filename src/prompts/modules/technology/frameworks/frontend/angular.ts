import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const angularPromptModule: TechnologyPromptModule = {
  id: 'tech-angular',
  name: 'Angular Analysis',
  description: 'Angular-specific analysis prompts',
  technology: TechnologyStack.ANGULAR,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.CODE_QUALITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Angular-Specific Analysis

### Component Architecture
- Analyze component hierarchy and organization
- Review smart vs presentational component patterns
- Check for proper component communication (Input/Output)
- Evaluate component lifecycle hook usage
- Assess component encapsulation and ViewEncapsulation strategy

### Modules and Dependency Injection
- Review NgModule organization and feature modules
- Analyze dependency injection patterns and providers
- Check for proper service scope (root, module, component)
- Evaluate use of forRoot() and forChild() patterns
- Assess lazy loading configuration and route modules

### RxJS and Reactive Programming
- Analyze Observable usage and subscription management
- Review use of operators and transformation logic
- Check for memory leaks (unsubscribed observables)
- Evaluate use of async pipe for automatic subscription handling
- Assess error handling in Observable streams

### State Management
- Review state management approach (Services, NgRx, Akita)
- Analyze NgRx store design (actions, reducers, selectors, effects)
- Check for proper state immutability
- Evaluate use of entity adapters and normalized state
- Assess side effect management

### Routing and Navigation
- Analyze route configuration and lazy loading
- Review route guards (CanActivate, CanDeactivate, Resolve)
- Check for proper navigation and parameter handling
- Evaluate preloading strategies
- Assess deep linking and route state management

### Forms and Validation
- Review reactive forms vs template-driven forms usage
- Analyze form validation patterns and custom validators
- Check for proper form state management
- Evaluate dynamic form generation
- Assess error handling and user feedback

### Change Detection
- Analyze change detection strategy (Default vs OnPush)
- Review zone.js usage and performance implications
- Check for unnecessary change detection triggers
- Evaluate use of ChangeDetectorRef for manual control
- Assess performance optimization opportunities

### HTTP and API Integration
- Review HttpClient usage and interceptor patterns
- Analyze error handling for HTTP requests
- Check for proper loading state management
- Evaluate caching strategies
- Assess retry logic and error recovery

### Template Syntax and Data Binding
- Analyze template complexity and readability
- Review property binding, event binding, and two-way binding
- Check for proper use of structural directives (*ngIf, *ngFor)
- Evaluate template reference variables usage
- Assess use of safe navigation operator and null checks

### Directives and Pipes
- Review custom directive implementations
- Analyze directive composition and reusability
- Check for proper pure vs impure pipe usage
- Evaluate custom pipe performance
- Assess directive lifecycle and cleanup

### TypeScript Integration
- Review type safety and TypeScript strict mode
- Analyze interface definitions for data models
- Check for proper typing of templates (strict template checking)
- Evaluate use of generics and utility types
- Assess enum usage and constants

### Testing Strategies
- Review unit testing with Jasmine/Karma or Jest
- Analyze component testing and TestBed usage
- Check for proper mocking and dependency injection in tests
- Evaluate integration testing approaches
- Assess E2E testing with Protractor/Cypress
- Review test coverage and quality metrics

### Performance Optimization
- Analyze bundle size and lazy loading effectiveness
- Review OnPush change detection usage
- Check for trackBy usage in *ngFor
- Evaluate virtual scrolling for large lists
- Assess preloading and prefetching strategies
- Review tree-shaking and dead code elimination

### Build Configuration
- Review Angular CLI configuration (angular.json)
- Analyze build optimization settings
- Check for proper environment configuration
- Evaluate use of build budgets
- Assess source map configuration

### Security Best Practices
- Review XSS prevention (DomSanitizer usage)
- Analyze CSRF protection
- Check for proper authentication and authorization
- Evaluate secure HTTP interceptors
- Assess input sanitization and validation

### Accessibility (A11y)
- Review ARIA attributes and semantic HTML
- Analyze keyboard navigation support
- Check for proper focus management
- Evaluate screen reader compatibility
- Assess color contrast and visual accessibility

### Code Quality and Standards
- Review adherence to Angular style guide
- Analyze use of linting (TSLint/ESLint)
- Check for consistent naming conventions
- Evaluate code organization and file structure
- Assess documentation and comments
`
};

