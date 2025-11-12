import { TemplateModule } from '../../../types';

export const codebaseAnalysisScalabilitySection: TemplateModule = {
  id: 'codebase-scalability',
  name: 'Codebase Scalability',
  description: 'Scalability analysis section for codebase analysis template',
  content: `## 8. Scalability Analysis

### 8.1 Current Scalability Profile

#### Load Capacity
- **Current Users/Requests**: [Number]
- **Maximum Tested Load**: [Number]
- **Theoretical Maximum**: [Number]
- **Bottleneck Identified At**: [Load level]

#### Resource Utilization
- **CPU Usage (Average)**: [Percentage]
- **Memory Usage (Average)**: [MB/GB]
- **Network I/O (Average)**: [MB/s]
- **Disk I/O (Average)**: [IOPS]

### 8.2 Horizontal Scalability

#### Stateless Components
- **Identified Stateless Services**: [List]
- **Scaling Strategy**: [Description]
- **Load Balancing**: [Approach]

#### Stateful Components
- **Identified Stateful Services**: [List]
- **State Management**: [Approach]
- **Scaling Challenges**: [Description]

#### Database Scaling
- **Read Scaling**: [Strategy - Read replicas/Sharding]
- **Write Scaling**: [Strategy]
- **Sharding Approach**: [If applicable]
- **Replication Strategy**: [Master-Slave/Multi-Master]

### 8.3 Vertical Scalability

#### Current Limits
- **CPU Limits**: [Current specs and max recommended]
- **Memory Limits**: [Current specs and max recommended]
- **Storage Limits**: [Current and max]

#### Scaling Headroom
- **Immediate Vertical Scaling Potential**: [Assessment]
- **Cost-Effectiveness**: [Assessment]
- **Diminishing Returns Point**: [Specification level]

### 8.4 Caching Strategy

#### Current Caching
- **Cache Layers**: [List - CDN, Application, Database]
- **Cache Hit Ratio**: [Percentage]
- **Cache Size**: [Current size]
- **TTL Strategy**: [Description]

#### Cache Optimization Opportunities
- **Opportunity 1**: [Description and expected impact]
- **Opportunity 2**: [Description and expected impact]

### 8.5 Data Architecture Scalability

#### Data Growth Rate
- **Current Data Size**: [GB/TB]
- **Monthly Growth Rate**: [Percentage or absolute]
- **Projected Size (1 year)**: [Estimate]

#### Partitioning and Sharding
- **Current Approach**: [Description]
- **Sharding Key**: [If applicable]
- **Rebalancing Strategy**: [Approach]

#### Data Archival
- **Archival Strategy**: [Description]
- **Hot/Cold Data Separation**: [Approach]
- **Archival Frequency**: [Schedule]

### 8.6 Asynchronous Processing

#### Background Jobs
- **Queue System**: [Technology]
- **Job Types**: [List]
- **Processing Capacity**: [Jobs per minute]
- **Queue Length Monitoring**: [Approach]

#### Event-Driven Architecture
- **Event Bus**: [Technology]
- **Event Types**: [Count]
- **Processing Pattern**: [Sync/Async]

### 8.7 API Scalability

#### Rate Limiting
- **Current Limits**: [Requests per minute/hour]
- **Rate Limiting Strategy**: [Approach]
- **Throttling**: [Implementation]

#### API Versioning
- **Versioning Strategy**: [URL/Header/Content negotiation]
- **Backward Compatibility**: [Approach]
- **Deprecation Policy**: [Timeline]

### 8.8 CDN and Edge Computing

#### CDN Usage
- **CDN Provider**: [Provider name]
- **Cached Content**: [Types]
- **Cache Hit Ratio**: [Percentage]
- **Geographic Distribution**: [Regions]

#### Edge Computing
- **Edge Functions**: [If applicable]
- **Use Cases**: [Description]

### 8.9 Microservices Scalability

#### Service Independence
- **Service Count**: [Number]
- **Independent Deployment**: [Yes/No for each]
- **Independent Scaling**: [Yes/No for each]

#### Service Communication
- **Communication Pattern**: [REST/gRPC/Message Queue]
- **Circuit Breakers**: [Implementation]
- **Retry Logic**: [Strategy]

### 8.10 Scalability Constraints

#### Technical Constraints
- **Constraint 1**: [Description and impact]
- **Constraint 2**: [Description and impact]

#### Architectural Constraints
- **Constraint 1**: [Description and impact]
- **Constraint 2**: [Description and impact]

### 8.11 Scalability Recommendations
- **Short-term (0-3 months)**:
  - [Recommendation 1]
  - [Recommendation 2]

- **Medium-term (3-12 months)**:
  - [Recommendation 1]
  - [Recommendation 2]

- **Long-term (12+ months)**:
  - [Recommendation 1]
  - [Recommendation 2]`,
  section: 'codebase-analysis',
  order: 8,
  dependencies: ['codebase-maintainability']
};

