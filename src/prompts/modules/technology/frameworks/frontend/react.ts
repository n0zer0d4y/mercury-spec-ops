import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const reactPromptModule: TechnologyPromptModule = {
  id: 'tech-react',
  name: 'React Analysis',
  description: 'React-specific analysis prompts',
  technology: TechnologyStack.REACT,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.CODE_QUALITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## React-Specific Analysis

### Component Architecture
- Analyze component hierarchy and composition patterns
- Review use of functional vs class components
- Check for proper component separation and responsibility
- Evaluate use of custom hooks and component composition

### State Management
- Review state lifting and prop drilling patterns
- Analyze use of Context API, Redux, or other state management
- Check for proper use of useState, useReducer, and useMemo
- Evaluate state normalization and performance optimizations

### Performance Optimization
- Analyze re-rendering issues and unnecessary updates
- Review use of React.memo, useCallback, and useMemo
- Check for proper key usage in lists and dynamic content
- Evaluate code-splitting and lazy loading implementation

### Hooks and Lifecycle
- Review proper hook usage and rules of hooks adherence
- Analyze useEffect dependencies and cleanup procedures
- Check for proper use of custom hooks and abstraction
- Evaluate error boundary implementation and error handling

### Best Practices
- Review adherence to React best practices and patterns
- Check for proper TypeScript integration and typing
- Analyze testing strategies and component testing
- Evaluate accessibility and responsive design implementation
`
};

