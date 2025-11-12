import { TemplateModule } from '../../../types';

export const codebaseAnalysisOverviewSection: TemplateModule = {
  id: 'codebase-overview',
  name: 'Codebase Analysis Overview',
  description: 'Overview section for codebase analysis template',
  content: `# Codebase Analysis Report

## 1. Executive Summary

### 1.1 Project Overview
- **Repository**: [Repository Path]
- **Analysis Date**: [Date]
- **Analysis Focus**: [Focus Areas]
- **Technology Stack**: [Technology Stack]

### 1.2 Key Findings
- [Finding 1]
- [Finding 2]
- [Finding 3]

### 1.3 Overall Assessment
[Overall assessment of the codebase health and quality]`,
  section: 'codebase-analysis',
  order: 1,
  dependencies: []
};

export const codebaseAnalysisArchitectureSection: TemplateModule = {
  id: 'codebase-architecture',
  name: 'Codebase Architecture Analysis',
  description: 'Architecture analysis section for codebase analysis template',
  content: `## 3. Architecture Analysis

### 3.1 System Architecture
- **Architecture Pattern**: [Pattern used]
- **Design Principles**: [Principles followed]
- **Module Organization**: [Organization approach]

### 3.2 Component Dependencies
\`\`\`
[Dependency diagram or description]
\`\`\`

### 3.3 Data Flow
- **Data Sources**: [Sources]
- **Data Processing**: [Processing steps]
- **Data Storage**: [Storage mechanisms]

### 3.4 Integration Patterns
- **API Design**: [Design approach]
- **Service Communication**: [Communication patterns]
- **External Dependencies**: [List and assessment]`,
  section: 'codebase-analysis',
  order: 3,
  dependencies: ['codebase-overview']
};

export const codebaseAnalysisSecuritySection: TemplateModule = {
  id: 'codebase-security',
  name: 'Codebase Security Analysis',
  description: 'Security analysis section for codebase analysis template',
  content: `## 5. Security Analysis

### 5.1 Security Measures
- **Authentication**: [Implementation status]
- **Authorization**: [Implementation status]
- **Data Protection**: [Measures in place]

### 5.2 Vulnerability Assessment
- **Input Validation**: [Assessment]
- **SQL Injection**: [Risk assessment]
- **XSS Prevention**: [Assessment]
- **CSRF Protection**: [Assessment]

### 5.3 Security Recommendations
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

### 5.4 Compliance and Standards
- **Data Privacy**: [Compliance status]
- **Industry Standards**: [Compliance status]
- **Regulatory Requirements**: [Compliance status]`,
  section: 'codebase-analysis',
  order: 5,
  dependencies: ['codebase-architecture']
};

export const codebaseAnalysisPerformanceSection: TemplateModule = {
  id: 'codebase-performance',
  name: 'Codebase Performance Analysis',
  description: 'Performance analysis section for codebase analysis template',
  content: `## 6. Performance Analysis

### 6.1 Performance Characteristics
- **Response Times**: [Assessment]
- **Resource Usage**: [Assessment]
- **Scalability**: [Assessment]

### 6.2 Bottlenecks Identified
- **Bottleneck 1**: [Description and impact]
- **Bottleneck 2**: [Description and impact]

### 6.3 Performance Recommendations
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

### 6.4 Monitoring and Metrics
- **Current Monitoring**: [Assessment]
- **Key Metrics**: [List and importance]
- **Alerting**: [Assessment and recommendations]`,
  section: 'codebase-analysis',
  order: 6,
  dependencies: ['codebase-architecture']
};

export const codebaseAnalysisRecommendationsSection: TemplateModule = {
  id: 'codebase-recommendations',
  name: 'Codebase Analysis Recommendations',
  description: 'Recommendations section for codebase analysis template',
  content: `## 12. Recommendations Summary

### 12.1 High Priority
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

### 12.2 Medium Priority
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

### 12.3 Low Priority
- [Recommendation 1]
- [Recommendation 2]

## 13. Next Steps

### 13.1 Immediate Actions
- [Action 1]
- [Action 2]
- [Action 3]

### 13.2 Short-term Goals (1-3 months)
- [Goal 1]
- [Goal 2]
- [Goal 3]

### 13.3 Long-term Goals (3-12 months)
- [Goal 1]
- [Goal 2]
- [Goal 3]`,
  section: 'codebase-analysis',
  order: 12,
  dependencies: ['codebase-security', 'codebase-performance']
};