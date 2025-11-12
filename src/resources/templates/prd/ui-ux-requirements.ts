import { TemplateModule } from "../../../types";

export const prdUIUXRequirementsSection: TemplateModule = {
  id: "prd-ui-ux-requirements",
  name: "PRD UI/UX Requirements",
  description: "UI/UX requirements section for PRD template",
  content: `## 7. UI/UX Requirements

### 7.1 Design Principles
- **Principle 1**: [Description]
- **Principle 2**: [Description]
- **Principle 3**: [Description]

### 7.2 Design System
- **Color Palette**: [Primary, secondary, accent colors]
- **Typography**: [Font families, sizes, weights]
- **Spacing**: [Spacing system]
- **Icons**: [Icon library]
- **Components**: [Component library]

### 7.3 User Interface Requirements

#### Navigation
- **Primary Navigation**: [Structure and behavior]
- **Secondary Navigation**: [Structure and behavior]
- **Breadcrumbs**: [Requirements]
- **Search**: [Search functionality]

#### Key Screens/Views
- **Screen 1**: [Name] - [Description and requirements]
- **Screen 2**: [Name] - [Description and requirements]
- **Screen 3**: [Name] - [Description and requirements]

### 7.4 User Flows
\`\`\`
[User Flow Diagram 1]
Description: [Flow description]

[User Flow Diagram 2]
Description: [Flow description]
\`\`\`

### 7.5 Interaction Patterns
- **Forms**: [Form design patterns]
- **Modals/Dialogs**: [Modal patterns]
- **Notifications**: [Notification patterns]
- **Loading States**: [Loading indicators]
- **Error States**: [Error handling]
- **Empty States**: [Empty state design]

### 7.6 Responsive Design
- **Mobile (< 768px)**: [Requirements]
- **Tablet (768px - 1024px)**: [Requirements]
- **Desktop (> 1024px)**: [Requirements]

### 7.7 Accessibility Requirements
- **WCAG Level**: [A/AA/AAA]
- **Screen Reader Support**: [Requirements]
- **Keyboard Navigation**: [Requirements]
- **Color Contrast**: [Requirements]
- **Focus Management**: [Requirements]

### 7.8 Wireframes/Mockups
- **Low-Fidelity Wireframes**: [Link or description]
- **High-Fidelity Mockups**: [Link or description]
- **Interactive Prototypes**: [Link or description]`,
  section: "prd",
  order: 7,
  dependencies: ["prd-technical-architecture"],
};
