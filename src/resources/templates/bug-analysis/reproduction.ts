import { TemplateModule } from '../../../types';

export const bugAnalysisOverviewSection: TemplateModule = {
  id: 'bug-overview',
  name: 'Bug Analysis Overview',
  description: 'Overview section for bug analysis template',
  content: `# Bug Analysis Report

## 1. Bug Overview

### 1.1 Bug Information
- **Bug ID**: [BUG-XXX]
- **Reported Date**: [Date]
- **Analysis Date**: [Date]
- **Reporter**: [Name/Team]
- **Severity**: [Critical/High/Medium/Low]
- **Priority**: [High/Medium/Low]

### 1.2 Bug Description
[Bug description and symptoms]

### 1.3 Affected Components
- **Component 1**: [Description]
- **Component 2**: [Description]
- **Component 3**: [Description]

### 1.4 Environment
- **Operating System**: [OS version]
- **Browser/Platform**: [Version if applicable]
- **Dependencies**: [Relevant versions]`,
  section: 'bug-analysis',
  order: 1,
  dependencies: []
};

export const bugAnalysisReproductionSection: TemplateModule = {
  id: 'bug-reproduction',
  name: 'Bug Reproduction',
  description: 'Reproduction section for bug analysis template',
  content: `## 2. Bug Reproduction

### 2.1 Reproduction Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Step 4]
5. [Step 5]

### 2.2 Expected Behavior
[Expected behavior description]

### 2.3 Actual Behavior
[Actual behavior description]

### 2.4 Reproduction Rate
- **Always**: [Yes/No]
- **Sometimes**: [Yes/No - specify conditions]
- **Rarely**: [Yes/No - specify conditions]

### 2.5 Test Environment
- **Test Setup**: [Description]
- **Test Data**: [Description]
- **Configuration**: [Description]`,
  section: 'bug-analysis',
  order: 2,
  dependencies: ['bug-overview']
};

export const bugAnalysisRootCauseSection: TemplateModule = {
  id: 'bug-root-cause',
  name: 'Bug Root Cause Analysis',
  description: 'Root cause analysis section for bug analysis template',
  content: `## 3. Root Cause Analysis

### 3.1 Technical Root Cause
- **Primary Cause**: [Root cause description]
- **Secondary Causes**: [Additional contributing factors]
- **Trigger Conditions**: [Conditions that trigger the bug]

### 3.2 Code Analysis
#### Affected Code Files
- **File 1**: [Path] - [Description of issue]
- **File 2**: [Path] - [Description of issue]
- **File 3**: [Path] - [Description of issue]

#### Code Snippets
\`\`\`javascript
// Problematic code snippet 1
[code snippet with issue highlighted]

// Problematic code snippet 2
[code snippet with issue highlighted]
\`\`\`

### 3.3 System Impact
- **Functionality Impact**: [Description]
- **Performance Impact**: [Description]
- **User Experience Impact**: [Description]
- **Business Impact**: [Description]

### 3.4 Contributing Factors
- **Environmental Factors**: [Description]
- **Configuration Issues**: [Description]
- **Data Issues**: [Description]
- **Integration Issues**: [Description]`,
  section: 'bug-analysis',
  order: 3,
  dependencies: ['bug-reproduction']
};

export const bugAnalysisImpactSection: TemplateModule = {
  id: 'bug-impact',
  name: 'Bug Impact Assessment',
  description: 'Impact assessment section for bug analysis template',
  content: `## 5. Impact Assessment

### 5.1 User Impact
- **Affected Users**: [Number/Percentage]
- **User Workflows Affected**: [List]
- **User Frustration Level**: [High/Medium/Low]
- **Workaround Availability**: [Description]

### 5.2 Business Impact
- **Revenue Impact**: [Description]
- **Customer Satisfaction**: [Impact level]
- **Brand Reputation**: [Impact level]
- **Operational Impact**: [Description]

### 5.3 Technical Impact
- **System Stability**: [Impact level]
- **Performance**: [Impact level]
- **Security**: [Impact level]
- **Maintainability**: [Impact level]

### 5.4 Risk Assessment
- **Immediate Risk**: [Assessment]
- **Long-term Risk**: [Assessment]
- **Mitigation Difficulty**: [Assessment]`,
  section: 'bug-analysis',
  order: 5,
  dependencies: ['bug-root-cause']
};

export const bugAnalysisResolutionSection: TemplateModule = {
  id: 'bug-resolution',
  name: 'Bug Resolution Strategy',
  description: 'Resolution strategy section for bug analysis template',
  content: `## 6. Bug Resolution

### 6.1 Fix Strategy
- **Approach**: [Fix approach description]
- **Complexity**: [High/Medium/Low]
- **Estimated Effort**: [Time/Story points]
- **Risk Assessment**: [Description]

### 6.2 Fix Implementation
#### Code Changes
- **File 1**: [Path] - [Change description]
- **File 2**: [Path] - [Change description]
- **File 3**: [Path] - [Change description]

#### Fix Code Snippets
\`\`\`javascript
// Fixed code snippet 1
[fixed code snippet]

// Fixed code snippet 2
[fixed code snippet]
\`\`\`

### 6.3 Testing Strategy
- **Unit Tests**: [Test plan]
- **Integration Tests**: [Test plan]
- **Regression Tests**: [Test plan]
- **Manual Tests**: [Test plan]

### 6.4 Deployment Plan
- **Deployment Strategy**: [Description]
- **Rollback Plan**: [Description]
- **Monitoring Plan**: [Description]`,
  section: 'bug-analysis',
  order: 6,
  dependencies: ['bug-impact']
};