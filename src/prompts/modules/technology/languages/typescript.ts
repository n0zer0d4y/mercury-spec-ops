import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const typescriptPromptModule: TechnologyPromptModule = {
  id: 'tech-typescript',
  name: 'TypeScript Analysis',
  description: 'TypeScript-specific analysis prompts',
  technology: TechnologyStack.TYPESCRIPT,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.CODE_QUALITY, AnalysisFocus.MAINTAINABILITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## TypeScript-Specific Analysis

### Type System Usage
- Analyze type definitions and type safety coverage
- Review use of advanced types (generics, utility types, conditional types)
- Check for proper type annotations and strict mode compliance
- Evaluate use of type inference vs explicit typing

### Configuration and Compiler Options
- Review tsconfig.json settings and compiler strictness
- Analyze target ECMAScript version and lib usage
- Check for proper module resolution and path mapping
- Evaluate declaration file generation and usage

### Code Quality and Patterns
- Review interface vs type usage consistency
- Analyze class vs function component patterns
- Check for proper use of access modifiers and visibility
- Evaluate use of decorators and experimental features

### Integration with Build Tools
- Review webpack/vite/ts-node integration
- Analyze source map generation and debugging setup
- Check for proper incremental compilation setup
- Evaluate testing framework TypeScript integration

### Best Practices
- Review adherence to TypeScript best practices
- Check for proper error handling in typed contexts
- Analyze use of type guards and type assertions
- Evaluate documentation generation from TypeScript types
`
};

