import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const nodejsPromptModule: TechnologyPromptModule = {
  id: 'tech-nodejs',
  name: 'Node.js Analysis',
  description: 'Node.js-specific analysis prompts',
  technology: TechnologyStack.NODE_JS,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Node.js-Specific Analysis

### Event Loop and Concurrency
- Analyze event loop usage and potential blocking operations
- Review asynchronous code patterns (callbacks, promises, async/await)
- Check for proper error handling in async operations
- Evaluate use of worker threads for CPU-intensive tasks

### Module System and Dependencies
- Review CommonJS vs ES modules usage consistency
- Analyze dependency management and package.json structure
- Check for circular dependencies and module loading issues
- Evaluate use of npm vs yarn vs pnpm and lock files

### Performance Considerations
- Analyze memory usage and potential memory leaks
- Review stream handling and backpressure management
- Check for efficient use of buffers and binary data
- Evaluate clustering and load balancing strategies

### Security Analysis
- Review input validation and sanitization practices
- Check for dependency vulnerabilities using npm audit
- Analyze environment variable and configuration management
- Evaluate authentication and authorization middleware usage

### Best Practices
- Review adherence to Node.js security best practices
- Check for proper logging and monitoring implementation
- Analyze error handling and graceful shutdown procedures
- Evaluate testing framework usage and test coverage
`
};

