import { TemplateModule } from '../../../types';

export const prdUserPersonasSection: TemplateModule = {
  id: 'prd-user-personas',
  name: 'PRD User Personas',
  description: 'User personas and use cases section for PRD template',
  content: `## 3. User Personas and Use Cases

### 3.1 Primary User Personas

#### Persona 1: [Persona Name]
- **Role**: [Job title/role]
- **Demographics**: [Age, location, background]
- **Goals**: [Primary goals]
- **Pain Points**: [Current frustrations]
- **Technical Proficiency**: [Skill level]
- **Usage Patterns**: [How they will use the product]

#### Persona 2: [Persona Name]
- **Role**: [Job title/role]
- **Demographics**: [Age, location, background]
- **Goals**: [Primary goals]
- **Pain Points**: [Current frustrations]
- **Technical Proficiency**: [Skill level]
- **Usage Patterns**: [How they will use the product]

### 3.2 Secondary User Personas

#### Persona 3: [Persona Name]
- **Role**: [Job title/role]
- **Goals**: [Primary goals]
- **Pain Points**: [Current frustrations]

### 3.3 Key Use Cases

#### Use Case 1: [Use Case Name]
- **Actor**: [Persona]
- **Goal**: [What user wants to achieve]
- **Preconditions**: [Required state before starting]
- **Steps**:
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]
- **Success Criteria**: [How we know it succeeded]
- **Frequency**: [How often this occurs]

#### Use Case 2: [Use Case Name]
- **Actor**: [Persona]
- **Goal**: [What user wants to achieve]
- **Preconditions**: [Required state before starting]
- **Steps**:
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]
- **Success Criteria**: [How we know it succeeded]
- **Frequency**: [How often this occurs]

#### Use Case 3: [Use Case Name]
- **Actor**: [Persona]
- **Goal**: [What user wants to achieve]
- **Preconditions**: [Required state before starting]
- **Steps**:
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]
- **Success Criteria**: [How we know it succeeded]
- **Frequency**: [How often this occurs]`,
  section: 'prd',
  order: 3,
  dependencies: ['prd-business-context']
};

