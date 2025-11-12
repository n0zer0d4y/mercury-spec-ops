import { AnalysisFocus, TechnologyStack } from '../../../types/enums';
import { AnalysisFocusPromptModule } from '../../../types';

export const documentationFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-documentation',
  name: 'Documentation Analysis',
  description: 'Documentation-focused analysis prompts',
  focus: AnalysisFocus.DOCUMENTATION,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.TYPESCRIPT, TechnologyStack.REACT,
    TechnologyStack.ANGULAR, TechnologyStack.VUE
  ],
  applicableTo: ['codebase-analysis'],
  priority: 2,
  content: `
## Documentation Analysis Focus

### Code Documentation Quality
- Review inline comments quality and relevance
- Analyze function and method documentation completeness
- Check for proper documentation of complex algorithms
- Evaluate explanation of non-obvious code decisions
- Assess documentation of edge cases and limitations
- Review documentation of assumptions and preconditions

### API Documentation
- Analyze API endpoint documentation completeness
- Review request/response format documentation
- Check for authentication documentation
- Evaluate error response documentation
- Assess rate limiting and usage guidelines
- Review versioning and deprecation notices
- Check for code examples and usage patterns

### README and Getting Started
- Review README.md structure and completeness
- Analyze quick start guide clarity
- Check for installation instructions
- Evaluate configuration documentation
- Assess troubleshooting section
- Review contributing guidelines
- Check for license information

### Architecture Documentation
- Review high-level architecture diagrams
- Analyze system component documentation
- Check for data flow documentation
- Evaluate integration points documentation
- Assess scalability considerations documentation
- Review deployment architecture documentation

### Code Comments
- Analyze comment-to-code ratio appropriateness
- Review TODO and FIXME comments tracking
- Check for outdated or misleading comments
- Evaluate comment clarity and usefulness
- Assess use of documentation generators (JSDoc, Javadoc, etc.)
- Review comment consistency across codebase

### Developer Onboarding Documentation
- Review setup and environment configuration docs
- Analyze development workflow documentation
- Check for coding standards and style guides
- Evaluate testing documentation
- Assess debugging guide availability
- Review common pitfalls and solutions documentation

### User Documentation
- Analyze end-user guide completeness
- Review feature documentation
- Check for UI/UX documentation
- Evaluate tutorial and how-to guides
- Assess FAQ section
- Review video or interactive documentation

### Technical Specifications
- Review requirement specifications
- Analyze technical design documents
- Check for database schema documentation
- Evaluate API contract specifications
- Assess security requirements documentation
- Review performance requirements documentation

### Change Documentation
- Analyze changelog maintenance and quality
- Review release notes completeness
- Check for migration guides
- Evaluate breaking change documentation
- Assess upgrade path documentation
- Review versioning strategy documentation

### Test Documentation
- Review test case documentation
- Analyze test coverage reports
- Check for test strategy documentation
- Evaluate integration test documentation
- Assess E2E test scenario documentation
- Review performance test documentation

### Configuration Documentation
- Analyze environment variable documentation
- Review configuration file documentation
- Check for default values documentation
- Evaluate configuration validation documentation
- Assess secrets management documentation
- Review environment-specific configurations

### Dependency Documentation
- Review third-party library documentation
- Analyze dependency update policy
- Check for security vulnerability tracking
- Evaluate license compliance documentation
- Assess deprecated dependency handling
- Review dependency decision rationale

### Diagrams and Visual Documentation
- Analyze architecture diagrams
- Review sequence diagrams for complex flows
- Check for entity-relationship diagrams
- Evaluate state diagrams
- Assess network topology diagrams
- Review deployment diagrams

### Runbook and Operations Documentation
- Review deployment procedures
- Analyze troubleshooting guides
- Check for incident response documentation
- Evaluate monitoring and alerting documentation
- Assess backup and recovery procedures
- Review rollback procedures

### Documentation Maintenance
- Analyze documentation update frequency
- Review documentation version control
- Check for automated documentation generation
- Evaluate documentation review process
- Assess documentation ownership
- Review documentation deprecation strategy
`
};

