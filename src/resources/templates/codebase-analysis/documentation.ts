import { TemplateModule } from '../../../types';

export const codebaseAnalysisDocumentationSection: TemplateModule = {
  id: 'codebase-documentation',
  name: 'Codebase Documentation',
  description: 'Documentation analysis section for codebase analysis template',
  content: `## 11. Documentation Analysis

### 11.1 Documentation Overview

#### Documentation Types Present
- **README**: [Yes/No - Quality assessment]
- **API Documentation**: [Yes/No - Quality assessment]
- **Architecture Documentation**: [Yes/No - Quality assessment]
- **Development Guide**: [Yes/No - Quality assessment]
- **Deployment Guide**: [Yes/No - Quality assessment]
- **User Documentation**: [Yes/No - Quality assessment]

#### Documentation Coverage
- **Documented Modules**: [Percentage]
- **Documented Functions**: [Percentage]
- **Documented Classes**: [Percentage]
- **Documented APIs**: [Percentage]

### 11.2 README Documentation

#### Content Assessment
- **Project Description**: [Adequate/Inadequate/Missing]
- **Installation Instructions**: [Adequate/Inadequate/Missing]
- **Usage Examples**: [Adequate/Inadequate/Missing]
- **Configuration Guide**: [Adequate/Inadequate/Missing]
- **Contribution Guidelines**: [Adequate/Inadequate/Missing]
- **License Information**: [Adequate/Inadequate/Missing]

#### README Quality
- **Clarity**: [Good/Fair/Poor]
- **Completeness**: [Good/Fair/Poor]
- **Up-to-Date**: [Yes/No - Last updated date]
- **Accessibility**: [Assessment]

### 11.3 API Documentation

#### API Docs Coverage
- **Documented Endpoints**: [Count] / [Total]
- **Documentation Format**: [OpenAPI/Swagger/JSDoc/etc.]
- **Interactive Documentation**: [Yes/No]

#### Endpoint Documentation Quality
| Endpoint | Method | Documented | Request Example | Response Example | Auth Documented |
|----------|--------|------------|-----------------|------------------|-----------------|
| [Path 1] | [GET] | [Yes/No] | [Yes/No] | [Yes/No] | [Yes/No] |
| [Path 2] | [POST] | [Yes/No] | [Yes/No] | [Yes/No] | [Yes/No] |

#### Missing API Documentation
- **Undocumented Endpoints**: [Count]
- **Missing Request Examples**: [Count]
- **Missing Response Examples**: [Count]
- **Missing Error Codes**: [Count]

### 11.4 Code-Level Documentation

#### Inline Comments
- **Comment Density**: [Ratio]
- **Comment Quality**: [Assessment]
- **Outdated Comments**: [Estimated count]
- **TODO/FIXME Comments**: [Count]

#### Function Documentation
- **Documentation Style**: [JSDoc/Docstring/XML Comments]
- **Documented Functions**: [Percentage]
- **Documentation Completeness**:
  - Parameters Documented: [Percentage]
  - Return Values Documented: [Percentage]
  - Exceptions Documented: [Percentage]
  - Examples Provided: [Percentage]

#### Class Documentation
- **Documented Classes**: [Percentage]
- **Documentation Includes**:
  - Purpose: [Yes/No]
  - Usage Examples: [Yes/No]
  - Properties: [Yes/No]
  - Methods: [Yes/No]

### 11.5 Architecture Documentation

#### Architecture Diagrams
- **System Architecture Diagram**: [Exists/Missing/Outdated]
- **Component Diagram**: [Exists/Missing/Outdated]
- **Data Flow Diagram**: [Exists/Missing/Outdated]
- **Deployment Diagram**: [Exists/Missing/Outdated]

#### Architecture Documentation Content
- **Architecture Decisions**: [Documented/Not Documented]
- **Design Patterns Used**: [Documented/Not Documented]
- **Technology Choices**: [Documented/Not Documented]
- **Trade-offs Explained**: [Documented/Not Documented]

### 11.6 Development Documentation

#### Setup Documentation
- **Prerequisites Listed**: [Yes/No]
- **Installation Steps**: [Clear/Unclear/Missing]
- **Environment Setup**: [Documented/Not Documented]
- **Troubleshooting Guide**: [Exists/Missing]

#### Development Workflow
- **Git Workflow**: [Documented/Not Documented]
- **Branch Strategy**: [Documented/Not Documented]
- **Code Review Process**: [Documented/Not Documented]
- **Testing Guidelines**: [Documented/Not Documented]
- **Coding Standards**: [Documented/Not Documented]

### 11.7 Testing Documentation

#### Test Documentation
- **Test Strategy**: [Documented/Not Documented]
- **Test Cases Documented**: [Percentage]
- **Test Data Setup**: [Documented/Not Documented]
- **Test Environment Setup**: [Documented/Not Documented]

#### Test Coverage Documentation
- **Coverage Requirements**: [Specified/Not Specified]
- **Test Reports**: [Generated/Not Generated]
- **Coverage Gaps**: [Documented/Not Documented]

### 11.8 Deployment Documentation

#### Deployment Guide
- **Deployment Steps**: [Documented/Not Documented]
- **Environment Configuration**: [Documented/Not Documented]
- **Deployment Checklist**: [Exists/Missing]
- **Rollback Procedures**: [Documented/Not Documented]

#### Infrastructure Documentation
- **Infrastructure as Code**: [Documented/Not Documented]
- **Server Configuration**: [Documented/Not Documented]
- **Monitoring Setup**: [Documented/Not Documented]
- **Backup Procedures**: [Documented/Not Documented]

### 11.9 Operational Documentation

#### Runbooks
- **Incident Response**: [Exists/Missing]
- **Common Issues**: [Documented/Not Documented]
- **Maintenance Procedures**: [Documented/Not Documented]
- **Monitoring Alerts**: [Documented/Not Documented]

#### Operational Guides
- **System Health Checks**: [Documented/Not Documented]
- **Performance Tuning**: [Documented/Not Documented]
- **Scaling Procedures**: [Documented/Not Documented]
- **Disaster Recovery**: [Documented/Not Documented]

### 11.10 Change Documentation

#### Changelog
- **Maintained**: [Yes/No]
- **Format**: [Keep a Changelog/Custom/None]
- **Completeness**: [All releases/Partial/None]
- **Quality**: [Good/Fair/Poor]

#### Release Notes
- **Published**: [Yes/No]
- **Audience-Appropriate**: [Technical/User-Friendly]
- **Includes Breaking Changes**: [Yes/No]
- **Migration Guides**: [Provided/Missing]

### 11.11 Documentation Tools

#### Documentation Generation
- **Tools Used**: [Swagger/JSDoc/Sphinx/Doxygen/etc.]
- **Auto-Generation**: [Percentage of docs]
- **Build Integration**: [Yes/No]

#### Documentation Hosting
- **Documentation Site**: [URL or N/A]
- **Versioning**: [Multiple versions maintained]
- **Search Functionality**: [Available/Not Available]

### 11.12 Documentation Quality Issues

#### Critical Issues
- **Issue 1**: [Description]
  - **Impact**: [Impact on development/users]
  - **Priority**: [High/Medium/Low]

- **Issue 2**: [Description]
  - **Impact**: [Impact on development/users]
  - **Priority**: [High/Medium/Low]

#### Common Patterns
- **Outdated Information**: [Examples]
- **Missing Context**: [Examples]
- **Inconsistent Formatting**: [Examples]
- **Broken Links**: [Count]

### 11.13 Documentation Recommendations

#### Immediate Improvements
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

#### Long-term Improvements
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

#### Documentation Standards
- **Proposed Standards**: [Description]
- **Documentation Review Process**: [Suggested process]
- **Maintenance Strategy**: [Suggested approach]`,
  section: 'codebase-analysis',
  order: 11,
  dependencies: ['codebase-dependencies']
};

