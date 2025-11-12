import { TemplateModule } from "../../../types";

export const prdAssumptionsSection: TemplateModule = {
  id: "prd-assumptions",
  name: "PRD Assumptions and Dependencies",
  description: "Assumptions and dependencies section for PRD template",
  content: `## 13. Assumptions and Dependencies

### 13.1 Assumptions

#### Technical Assumptions
- **Assumption 1**: [Description]
  - **Impact if Invalid**: [Consequence]
  - **Validation Plan**: [How to verify]

- **Assumption 2**: [Description]
  - **Impact if Invalid**: [Consequence]
  - **Validation Plan**: [How to verify]

#### Business Assumptions
- **Assumption 1**: [Description]
  - **Impact if Invalid**: [Consequence]
  - **Validation Plan**: [How to verify]

- **Assumption 2**: [Description]
  - **Impact if Invalid**: [Consequence]
  - **Validation Plan**: [How to verify]

#### User Assumptions
- **Assumption 1**: [Description]
  - **Impact if Invalid**: [Consequence]
  - **Validation Plan**: [How to verify]

### 13.2 Dependencies

#### Internal Dependencies
- **Team 1**: [Dependency description]
  - **Required Deliverable**: [What's needed]
  - **Timeline**: [When needed]
  - **Status**: [Current status]
  - **Contact**: [Point of contact]

- **Team 2**: [Dependency description]
  - **Required Deliverable**: [What's needed]
  - **Timeline**: [When needed]
  - **Status**: [Current status]
  - **Contact**: [Point of contact]

#### External Dependencies
- **Third-party 1**: [Dependency description]
  - **Required Deliverable**: [What's needed]
  - **Timeline**: [When needed]
  - **Status**: [Current status]
  - **Vendor Contact**: [Contact information]

- **Third-party 2**: [Dependency description]
  - **Required Deliverable**: [What's needed]
  - **Timeline**: [When needed]
  - **Status**: [Current status]
  - **Vendor Contact**: [Contact information]

#### Infrastructure Dependencies
- **Infrastructure 1**: [Dependency description]
  - **Provisioning Timeline**: [When available]
  - **Configuration**: [Required setup]
  - **Owner**: [Responsible party]

### 13.3 Dependency Management
- **Tracking Mechanism**: [How dependencies are tracked]
- **Status Updates**: [Update frequency]
- **Escalation Path**: [When and how to escalate]`,
  section: "prd",
  order: 13,
  dependencies: ["prd-risk-assessment"],
};
