import { TemplateModule } from '../../../types';

export const prdRiskAssessmentSection: TemplateModule = {
  id: 'prd-risk-assessment',
  name: 'PRD Risk Assessment',
  description: 'Risk assessment section for PRD template',
  content: `## 12. Risk Assessment

### 12.1 Technical Risks

#### Risk 1: [Risk Name]
- **Description**: [Risk description]
- **Probability**: [High/Medium/Low]
- **Impact**: [High/Medium/Low]
- **Mitigation Strategy**: [How to reduce or eliminate]
- **Contingency Plan**: [Backup plan if risk occurs]
- **Owner**: [Responsible party]

#### Risk 2: [Risk Name]
- **Description**: [Risk description]
- **Probability**: [High/Medium/Low]
- **Impact**: [High/Medium/Low]
- **Mitigation Strategy**: [How to reduce or eliminate]
- **Contingency Plan**: [Backup plan if risk occurs]
- **Owner**: [Responsible party]

### 12.2 Business Risks

#### Risk 1: [Risk Name]
- **Description**: [Risk description]
- **Probability**: [High/Medium/Low]
- **Impact**: [High/Medium/Low]
- **Mitigation Strategy**: [How to reduce or eliminate]
- **Contingency Plan**: [Backup plan if risk occurs]
- **Owner**: [Responsible party]

#### Risk 2: [Risk Name]
- **Description**: [Risk description]
- **Probability**: [High/Medium/Low]
- **Impact**: [High/Medium/Low]
- **Mitigation Strategy**: [How to reduce or eliminate]
- **Contingency Plan**: [Backup plan if risk occurs]
- **Owner**: [Responsible party]

### 12.3 Security Risks

#### Risk 1: [Risk Name]
- **Description**: [Risk description]
- **Probability**: [High/Medium/Low]
- **Impact**: [High/Medium/Low]
- **Mitigation Strategy**: [How to reduce or eliminate]
- **Contingency Plan**: [Backup plan if risk occurs]
- **Owner**: [Responsible party]

### 12.4 Operational Risks

#### Risk 1: [Risk Name]
- **Description**: [Risk description]
- **Probability**: [High/Medium/Low]
- **Impact**: [High/Medium/Low]
- **Mitigation Strategy**: [How to reduce or eliminate]
- **Contingency Plan**: [Backup plan if risk occurs]
- **Owner**: [Responsible party]

### 12.5 Risk Monitoring
- **Review Frequency**: [How often risks are reviewed]
- **Risk Indicators**: [Early warning signs]
- **Escalation Process**: [When and how to escalate]`,
  section: 'prd',
  order: 12,
  dependencies: ['prd-timeline']
};

