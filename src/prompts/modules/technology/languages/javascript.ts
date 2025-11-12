import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const javascriptPromptModule: TechnologyPromptModule = {
  id: 'tech-javascript',
  name: 'JavaScript Analysis',
  description: 'JavaScript-specific analysis prompts',
  technology: TechnologyStack.NODE_JS, // Note: Using NODE_JS as JavaScript enum value doesn't exist separately
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.CODE_QUALITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## JavaScript-Specific Analysis

### Language Features and Modern Syntax
- Analyze use of ES6+ features (arrow functions, destructuring, spread/rest operators)
- Review async/await vs promises vs callbacks usage
- Check for proper use of const/let vs var
- Evaluate use of template literals and string manipulation
- Assess use of optional chaining and nullish coalescing

### Code Organization and Modules
- Review module system usage (ES modules vs CommonJS)
- Analyze import/export patterns and circular dependencies
- Check for proper code splitting and lazy loading
- Evaluate namespace organization and naming conventions
- Assess use of IIFE patterns and closures

### Type Safety and Validation
- Review JSDoc usage for type documentation
- Analyze runtime type checking and validation
- Check for prop-types or similar validation libraries
- Evaluate input sanitization and data validation
- Assess use of defensive programming techniques

### Performance Considerations
- Analyze memory management and garbage collection patterns
- Review DOM manipulation efficiency (if applicable)
- Check for performance anti-patterns (excessive loops, memory leaks)
- Evaluate use of memoization and caching
- Assess bundle size and code splitting strategies

### Error Handling and Debugging
- Review try/catch usage and error propagation
- Analyze error logging and reporting mechanisms
- Check for proper promise rejection handling
- Evaluate use of debugging tools and source maps
- Assess error boundary and fallback implementations

### Best Practices and Code Quality
- Review adherence to JavaScript style guides (Airbnb, Standard, etc.)
- Analyze code consistency and formatting
- Check for use of linting tools (ESLint)
- Evaluate naming conventions and code readability
- Assess comment quality and documentation

### Security Considerations
- Review for XSS vulnerabilities
- Analyze eval() and Function() usage
- Check for proper sanitization of user inputs
- Evaluate use of Content Security Policy
- Assess third-party library security and vulnerabilities

### Testing Strategies
- Review unit test coverage and quality
- Analyze testing framework usage (Jest, Mocha, etc.)
- Check for proper mocking and stubbing
- Evaluate integration and E2E testing approaches
- Assess test organization and maintainability

### Browser Compatibility (if applicable)
- Review target browser support and polyfills
- Analyze use of feature detection
- Check for progressive enhancement strategies
- Evaluate graceful degradation approaches
- Assess cross-browser testing practices

### Framework Integration
- Review framework-specific patterns (React, Vue, Angular)
- Analyze state management approaches
- Check for proper component/module architecture
- Evaluate build tool configuration (webpack, vite, etc.)
- Assess development workflow and tooling
`
};

