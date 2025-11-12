import { TemplateModule } from '../../../types';

export const prdOverviewSection: TemplateModule = {
  id: 'prd-overview',
  name: 'PRD Overview',
  description: 'Overview section for PRD template',
  content: `## 1. Overview

### 1.1 Project Name
[Project Name]

### 1.2 Project Description
[Project Description]

### 1.3 Target Audience
[Target Audience]

### 1.4 Project Goals
- [Goal 1]
- [Goal 2]
- [Goal 3]

### 1.5 Project Type
[Project Type]`,
  section: 'prd',
  order: 1,
  dependencies: []
};

export const prdRequirementsSection: TemplateModule = {
  id: 'prd-requirements',
  name: 'PRD Requirements',
  description: 'Requirements section for PRD template',
  content: `## 4. Functional Requirements

### 4.1 Core Features
#### [Feature 1]
- **Description**: [Feature description]
- **Acceptance Criteria**:
  - [Criteria 1]
  - [Criteria 2]
  - [Criteria 3]

#### [Feature 2]
- **Description**: [Feature description]
- **Acceptance Criteria**:
  - [Criteria 1]
  - [Criteria 2]
  - [Criteria 3]

### 4.2 Additional Features
#### [Feature 3]
- **Description**: [Feature description]
- **Acceptance Criteria**:
  - [Criteria 1]
  - [Criteria 2]

## 5. Non-Functional Requirements

### 5.1 Performance
- [Performance requirement 1]
- [Performance requirement 2]

### 5.2 Security
- [Security requirement 1]
- [Security requirement 2]

### 5.3 Usability
- [Usability requirement 1]
- [Usability requirement 2]

### 5.4 Reliability
- [Reliability requirement 1]
- [Reliability requirement 2]`,
  section: 'prd',
  order: 4,
  dependencies: ['prd-overview']
};

export const prdTimelineSection: TemplateModule = {
  id: 'prd-timeline',
  name: 'PRD Timeline',
  description: 'Timeline section for PRD template',
  content: `## 10. Timeline and Milestones

### 10.1 Project Phases
- **Phase 1**: [Description] - [Timeline]
- **Phase 2**: [Description] - [Timeline]
- **Phase 3**: [Description] - [Timeline]

### 10.2 Key Milestones
- **Milestone 1**: [Description] - [Date]
- **Milestone 2**: [Description] - [Date]
- **Milestone 3**: [Description] - [Date]

## 11. Success Criteria

### 11.1 Launch Criteria
- [Launch criterion 1]
- [Launch criterion 2]
- [Launch criterion 3]

### 11.2 Post-Launch Metrics
- [Metric 1]: [Target value]
- [Metric 2]: [Target value]
- [Metric 3]: [Target value]`,
  section: 'prd',
  order: 10,
  dependencies: ['prd-requirements']
};