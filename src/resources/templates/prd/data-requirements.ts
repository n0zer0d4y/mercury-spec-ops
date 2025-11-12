import { TemplateModule } from "../../../types";

export const prdDataRequirementsSection: TemplateModule = {
  id: "prd-data-requirements",
  name: "PRD Data Requirements",
  description: "Data requirements section for PRD template",
  content: `## 8. Data Requirements

### 8.1 Data Models

#### Entity 1: [Entity Name]
- **Description**: [Entity description]
- **Attributes**:
  - **Attribute 1**: [Type] - [Description]
  - **Attribute 2**: [Type] - [Description]
  - **Attribute 3**: [Type] - [Description]
- **Relationships**: [Relationships to other entities]
- **Constraints**: [Business rules and constraints]

#### Entity 2: [Entity Name]
- **Description**: [Entity description]
- **Attributes**:
  - **Attribute 1**: [Type] - [Description]
  - **Attribute 2**: [Type] - [Description]
  - **Attribute 3**: [Type] - [Description]
- **Relationships**: [Relationships to other entities]
- **Constraints**: [Business rules and constraints]

### 8.2 Data Storage

#### Primary Storage
- **Technology**: [Database technology]
- **Storage Type**: [Relational/NoSQL/Document/etc.]
- **Data Retention**: [Retention policy]
- **Backup Strategy**: [Backup approach]

#### Cache Storage
- **Technology**: [Caching technology]
- **Cache Strategy**: [What to cache and when]
- **TTL Policies**: [Time-to-live configurations]

#### File Storage
- **Technology**: [File storage solution]
- **File Types**: [Types of files stored]
- **Storage Capacity**: [Expected capacity]

### 8.3 Data Flow
- **Data Ingestion**: [How data enters the system]
- **Data Processing**: [How data is processed]
- **Data Output**: [How data leaves the system]

\`\`\`
[Data Flow Diagram]
\`\`\`

### 8.4 Data Privacy and Compliance

#### Privacy Requirements
- **PII Handling**: [Personal data handling approach]
- **Data Classification**: [Classification levels]
- **Consent Management**: [User consent handling]

#### Compliance Requirements
- **GDPR**: [Compliance measures]
- **CCPA**: [Compliance measures]
- **HIPAA**: [If applicable]
- **Other Regulations**: [Relevant regulations]

### 8.5 Data Migration
- **Legacy Data**: [Existing data to migrate]
- **Migration Strategy**: [Approach and timeline]
- **Data Validation**: [Validation approach]
- **Rollback Plan**: [Rollback strategy]

### 8.6 Data Quality
- **Validation Rules**: [Data validation requirements]
- **Data Cleansing**: [Data quality approach]
- **Monitoring**: [Data quality monitoring]`,
  section: "prd",
  order: 8,
  dependencies: ["prd-ui-ux-requirements"],
};
