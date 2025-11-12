import { TemplateModule } from '../../../types';

export const codebaseAnalysisReliabilitySection: TemplateModule = {
  id: 'codebase-reliability',
  name: 'Codebase Reliability',
  description: 'Reliability analysis section for codebase analysis template',
  content: `## 9. Reliability Analysis

### 9.1 Error Handling

#### Exception Management
- **Exception Handling Strategy**: [Consistent/Inconsistent]
- **Try-Catch Coverage**: [Percentage of critical paths]
- **Error Propagation**: [Approach]
- **Unhandled Exceptions**: [Count and locations]

#### Error Recovery
- **Retry Mechanisms**: [Implementation details]
- **Graceful Degradation**: [Examples]
- **Fallback Strategies**: [Description]
- **Circuit Breakers**: [Implementation]

### 9.2 Logging and Monitoring

#### Logging Implementation
- **Logging Framework**: [Technology]
- **Log Levels Used**: [DEBUG/INFO/WARN/ERROR/FATAL]
- **Logging Coverage**: [Assessment]
- **Structured Logging**: [Yes/No]

#### Log Quality
- **Consistency**: [Assessment]
- **Contextual Information**: [Adequacy]
- **PII Handling**: [Compliance]
- **Log Verbosity**: [Appropriate/Too verbose/Too sparse]

#### Monitoring
- **Monitoring Tools**: [List]
- **Metrics Collected**: [Key metrics]
- **Monitoring Coverage**: [Percentage]
- **Dashboard Quality**: [Assessment]

### 9.3 Alerting

#### Alert Configuration
- **Alert Types**: [List]
- **Alert Thresholds**: [Description]
- **Alert Channels**: [Email/SMS/Slack/PagerDuty]
- **Alert Priority Levels**: [Critical/High/Medium/Low]

#### Alert Quality
- **False Positive Rate**: [Percentage]
- **Alert Fatigue Issues**: [Assessment]
- **Alert Response Time**: [Average]
- **Escalation Procedures**: [Description]

### 9.4 Fault Tolerance

#### Single Points of Failure
- **Identified SPOFs**: [List]
- **Mitigation Plans**: [For each SPOF]
- **Redundancy Level**: [Assessment]

#### Failover Mechanisms
- **Automatic Failover**: [Implementation]
- **Manual Failover**: [Procedures]
- **Failover Testing**: [Frequency and results]
- **Recovery Time Objective (RTO)**: [Target vs Actual]

### 9.5 Data Reliability

#### Data Backup
- **Backup Strategy**: [Full/Incremental/Differential]
- **Backup Frequency**: [Schedule]
- **Backup Storage**: [Location and redundancy]
- **Backup Testing**: [Frequency]

#### Data Recovery
- **Recovery Point Objective (RPO)**: [Target vs Actual]
- **Recovery Procedures**: [Documentation status]
- **Disaster Recovery Plan**: [Exists/Tested/Outdated]
- **Data Restoration Time**: [Average]

#### Data Consistency
- **Consistency Model**: [Strong/Eventual/Weak]
- **Data Validation**: [Implementation]
- **Conflict Resolution**: [Strategy]

### 9.6 Health Checks

#### Endpoint Health Checks
- **Health Check Endpoints**: [List]
- **Check Frequency**: [Interval]
- **Check Depth**: [Shallow/Deep]
- **Dependency Checks**: [Included/Excluded]

#### Service Health
- **Self-Healing Capabilities**: [Description]
- **Health Indicators**: [List]
- **Degraded Mode Operation**: [Capability]

### 9.7 Deployment Reliability

#### Deployment Strategy
- **Deployment Method**: [Blue-Green/Canary/Rolling]
- **Deployment Frequency**: [Per week/month]
- **Deployment Success Rate**: [Percentage]
- **Rollback Capability**: [Implementation]

#### Deployment Safety
- **Pre-deployment Checks**: [List]
- **Smoke Tests**: [Coverage]
- **Rollback Trigger**: [Automatic/Manual]
- **Rollback Time**: [Average]

### 9.8 Dependency Reliability

#### External Dependencies
- **Dependency 1**: [Name]
  - **SLA**: [Uptime percentage]
  - **Failure Handling**: [Strategy]
  - **Alternative**: [If available]

- **Dependency 2**: [Name]
  - **SLA**: [Uptime percentage]
  - **Failure Handling**: [Strategy]
  - **Alternative**: [If available]

#### Dependency Monitoring
- **Health Monitoring**: [Implementation]
- **Timeout Configuration**: [Values]
- **Retry Logic**: [Strategy]

### 9.9 Incident Management

#### Incident History
- **Total Incidents (Last 6 months)**: [Count]
- **Critical Incidents**: [Count]
- **Mean Time to Detect (MTTD)**: [Duration]
- **Mean Time to Resolve (MTTR)**: [Duration]

#### Incident Response
- **Incident Response Plan**: [Exists/Documented]
- **On-Call Rotation**: [Implementation]
- **Post-Mortem Process**: [Description]
- **Incident Communication**: [Process]

### 9.10 Uptime and Availability

#### Current Metrics
- **Uptime (Last Month)**: [Percentage]
- **Uptime (Last Quarter)**: [Percentage]
- **Uptime (Last Year)**: [Percentage]
- **SLA Target**: [Percentage]

#### Downtime Analysis
- **Planned Downtime**: [Hours per month]
- **Unplanned Downtime**: [Hours per month]
- **Major Outages**: [Count and duration]

### 9.11 Reliability Recommendations
- **High Priority**:
  - [Recommendation 1]
  - [Recommendation 2]

- **Medium Priority**:
  - [Recommendation 1]
  - [Recommendation 2]

- **Low Priority**:
  - [Recommendation 1]
  - [Recommendation 2]`,
  section: 'codebase-analysis',
  order: 9,
  dependencies: ['codebase-scalability']
};

