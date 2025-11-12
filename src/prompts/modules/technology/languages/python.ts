import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const pythonPromptModule: TechnologyPromptModule = {
  id: 'tech-python',
  name: 'Python Analysis',
  description: 'Python-specific analysis prompts',
  technology: TechnologyStack.PYTHON,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Python-Specific Analysis

### Pythonic Code and Patterns
- Analyze adherence to PEP 8 style guidelines
- Review use of Python idioms and best practices
- Check for proper list/dict/set comprehensions usage
- Evaluate use of generators and iterators

### Virtual Environment and Dependencies
- Review virtual environment setup and usage
- Analyze requirements.txt and pyproject.toml management
- Check for dependency version pinning and security
- Evaluate use of pip vs conda package managers

### Performance and Memory
- Analyze memory usage and potential leaks
- Review use of data structures and algorithms efficiency
- Check for proper use of caching mechanisms
- Evaluate multiprocessing and threading usage

### Security Considerations
- Review input validation and sanitization
- Check for SQL injection and XSS vulnerabilities
- Analyze environment variable and configuration management
- Evaluate use of security libraries and frameworks

### Framework-Specific Analysis
- Review Django/Flask/FastAPI usage patterns
- Analyze ORM usage and database interactions
- Check for proper middleware and decorator usage
- Evaluate API design and RESTful practices
`
};

