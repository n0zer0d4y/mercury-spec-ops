import { TemplateModule } from '../../../types';

export const prdIntegrationRequirementsSection: TemplateModule = {
  id: 'prd-integration-requirements',
  name: 'PRD Integration Requirements',
  description: 'Integration requirements section for PRD template',
  content: `## 9. Integration Requirements

### 9.1 Third-Party Integrations

#### Integration 1: [Service Name]
- **Purpose**: [Why integration is needed]
- **Integration Type**: [API/SDK/Webhook/etc.]
- **Authentication**: [Authentication method]
- **Data Exchanged**: [Data flow description]
- **Frequency**: [Real-time/Batch/On-demand]
- **Error Handling**: [Error handling approach]
- **Rate Limits**: [API limits and handling]

#### Integration 2: [Service Name]
- **Purpose**: [Why integration is needed]
- **Integration Type**: [API/SDK/Webhook/etc.]
- **Authentication**: [Authentication method]
- **Data Exchanged**: [Data flow description]
- **Frequency**: [Real-time/Batch/On-demand]
- **Error Handling**: [Error handling approach]
- **Rate Limits**: [API limits and handling]

### 9.2 API Requirements

#### Public APIs
- **Endpoint 1**: [HTTP Method] [Path]
  - **Description**: [Endpoint purpose]
  - **Request Format**: [Request structure]
  - **Response Format**: [Response structure]
  - **Authentication**: [Auth requirements]
  - **Rate Limits**: [Limits]

- **Endpoint 2**: [HTTP Method] [Path]
  - **Description**: [Endpoint purpose]
  - **Request Format**: [Request structure]
  - **Response Format**: [Response structure]
  - **Authentication**: [Auth requirements]
  - **Rate Limits**: [Limits]

#### Internal APIs
- **Service-to-Service Communication**: [Approach]
- **Message Format**: [Format used]
- **Service Discovery**: [Discovery mechanism]

### 9.3 Webhook Requirements
- **Webhook 1**: [Event Name]
  - **Trigger**: [What triggers the webhook]
  - **Payload**: [Payload structure]
  - **Retry Logic**: [Retry approach]
  - **Security**: [Signature verification]

### 9.4 Integration Architecture
\`\`\`
[Integration Architecture Diagram]
\`\`\`

### 9.5 Integration Security
- **API Keys Management**: [Key management approach]
- **OAuth Implementation**: [OAuth flow]
- **Data Encryption**: [Encryption in transit]
- **Request Signing**: [Signature approach]

### 9.6 Integration Monitoring
- **Health Checks**: [Monitoring approach]
- **Performance Metrics**: [Key metrics]
- **Error Tracking**: [Error monitoring]
- **Alerting**: [Alert configuration]`,
  section: 'prd',
  order: 9,
  dependencies: ['prd-data-requirements']
};

