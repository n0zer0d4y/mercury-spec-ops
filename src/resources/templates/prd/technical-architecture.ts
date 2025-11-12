import { TemplateModule } from '../../../types';

export const prdTechnicalArchitectureSection: TemplateModule = {
  id: 'prd-technical-architecture',
  name: 'PRD Technical Architecture',
  description: 'Technical architecture overview section for PRD template',
  content: `## 6. Technical Architecture Overview

### 6.1 System Architecture
- **Architecture Pattern**: [e.g., Microservices, Monolithic, Serverless]
- **High-Level Components**:
  - **Component 1**: [Description and responsibility]
  - **Component 2**: [Description and responsibility]
  - **Component 3**: [Description and responsibility]
- **Communication Patterns**: [How components interact]

### 6.2 Technology Stack
#### Frontend
- **Framework**: [Technology choice]
- **State Management**: [Approach]
- **UI Components**: [Component library]
- **Build Tools**: [Tools used]

#### Backend
- **Language/Runtime**: [Technology choice]
- **Framework**: [Framework name]
- **API Design**: [REST/GraphQL/gRPC]
- **Authentication**: [Approach]

#### Database
- **Primary Database**: [Technology choice]
- **Caching**: [Caching strategy]
- **Data Modeling**: [Approach]

#### Infrastructure
- **Hosting**: [Cloud provider/on-premise]
- **Containerization**: [Docker/Kubernetes]
- **CI/CD**: [Pipeline tools]
- **Monitoring**: [Observability tools]

### 6.3 Architecture Decisions
- **Decision 1**: [Description and rationale]
- **Decision 2**: [Description and rationale]
- **Decision 3**: [Description and rationale]

### 6.4 Scalability Approach
- **Horizontal Scaling**: [Strategy]
- **Vertical Scaling**: [Strategy]
- **Database Scaling**: [Strategy]
- **Caching Strategy**: [Approach]

### 6.5 Security Architecture
- **Authentication**: [Mechanism]
- **Authorization**: [Mechanism]
- **Data Encryption**: [At rest and in transit]
- **Security Compliance**: [Standards to follow]`,
  section: 'prd',
  order: 6,
  dependencies: ['prd-requirements']
};

