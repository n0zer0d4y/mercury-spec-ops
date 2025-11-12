import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const azurePromptModule: TechnologyPromptModule = {
  id: 'tech-azure',
  name: 'Azure Analysis',
  description: 'Azure-specific analysis prompts for cloud infrastructure',
  technology: TechnologyStack.AZURE,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Azure-Specific Analysis

### Compute Services
- **Virtual Machines**: Review VM sizes, availability sets, and scale sets
- **Azure Functions**: Analyze function app plans, cold starts, and Durable Functions
- **App Service**: Check web app configuration, deployment slots, and scaling
- **Azure Kubernetes Service (AKS)**: Evaluate cluster design and node pools
- **Container Instances**: Review serverless container deployment
- **Batch**: Analyze large-scale parallel and HPC batch computing
- **Azure Spring Cloud**: Check for Spring Boot application deployment
- Evaluate compute reservation and spot instance usage

### Storage Services
- **Blob Storage**: Review storage tiers (hot, cool, archive), lifecycle management
- **Azure Files**: Analyze SMB file share configuration and sync
- **Managed Disks**: Check disk types (Standard HDD, Standard SSD, Premium SSD, Ultra)
- **Data Lake Storage Gen2**: Evaluate hierarchical namespace and ACLs
- **Queue Storage**: Review message queue patterns and visibility timeout
- **Table Storage**: Analyze NoSQL key-value store usage
- **Azure NetApp Files**: Check for enterprise file storage
- Evaluate storage redundancy (LRS, ZRS, GRS, RA-GRS)

### Database Services
- **Azure SQL Database**: Review DTU/vCore model, elastic pools, and geo-replication
- **Cosmos DB**: Analyze consistency levels, partition keys, and global distribution
- **Azure Database for PostgreSQL/MySQL**: Check for flexible server configuration
- **Azure Cache for Redis**: Review cache sizing and clustering
- **SQL Managed Instance**: Evaluate lift-and-shift SQL Server migration
- **Azure Synapse Analytics**: Check for data warehouse optimization
- **Azure Database for MariaDB**: Review managed database configuration
- Analyze backup retention and point-in-time restore

### Networking and Content Delivery
- **Virtual Network (VNet)**: Analyze subnets, NSGs, and service endpoints
- **Azure Front Door**: Review global load balancing and CDN configuration
- **Application Gateway**: Check for layer 7 load balancing and WAF
- **Load Balancer**: Evaluate layer 4 load balancing configuration
- **Azure DNS**: Review DNS zone management and private DNS
- **ExpressRoute**: Analyze dedicated private connection to Azure
- **VPN Gateway**: Check for site-to-site and point-to-site VPN
- **Traffic Manager**: Review DNS-based traffic routing policies
- **Azure Firewall**: Evaluate centralized network security

### Security and Identity
- **Azure Active Directory (AAD)**: Review authentication, conditional access, and MFA
- **Managed Identity**: Analyze system-assigned and user-assigned identities
- **Key Vault**: Check for secrets, keys, and certificate management
- **Azure Security Center**: Evaluate security posture and recommendations
- **Azure Sentinel**: Review SIEM and threat detection configuration
- **Azure DDoS Protection**: Check for network DDoS mitigation
- **Azure Information Protection**: Evaluate data classification and protection
- **Privileged Identity Management (PIM)**: Review just-in-time access
- **Role-Based Access Control (RBAC)**: Analyze custom and built-in roles

### Monitoring and Observability
- **Azure Monitor**: Review metrics, alerts, and action groups
- **Log Analytics**: Analyze log queries and workspace configuration
- **Application Insights**: Check for APM, distributed tracing, and availability tests
- **Azure Monitor Logs**: Evaluate log collection and retention
- **Network Watcher**: Review network monitoring and diagnostics
- **Service Health**: Monitor Azure service status and planned maintenance
- **Advisor**: Check for best practice recommendations
- Analyze diagnostic settings and log forwarding

### Infrastructure as Code
- **ARM Templates**: Review template structure and parameter files
- **Bicep**: Analyze declarative infrastructure code
- **Terraform**: Check for Azure provider configuration and state management
- **Azure CLI/PowerShell**: Review automation scripts
- **Azure DevOps Pipelines**: Evaluate infrastructure deployment pipelines
- **GitHub Actions**: Check for Azure deployment workflows
- Review template validation and what-if deployment
- Analyze resource tagging and naming conventions

### Serverless Architecture
- **Azure Functions**: Analyze consumption vs premium plans
- **Logic Apps**: Review workflow orchestration and connectors
- **Event Grid**: Check for event-driven architecture patterns
- **Service Bus**: Evaluate messaging and pub/sub patterns
- **Durable Functions**: Analyze stateful serverless workflows
- **API Management**: Review API gateway and policy configuration
- **Event Hubs**: Check for streaming data ingestion
- Evaluate cost optimization for serverless workloads

### Container Services
- **Azure Kubernetes Service (AKS)**: Review cluster autoscaling and node pools
- **Azure Container Registry (ACR)**: Analyze image storage and scanning
- **Container Instances**: Check for serverless container execution
- **Web App for Containers**: Evaluate containerized web app deployment
- **Azure Red Hat OpenShift**: Review managed OpenShift platform
- Check for Kubernetes RBAC and network policies
- Analyze container resource limits and health probes
- Review Helm chart deployment and management

### DevOps and CI/CD
- **Azure DevOps**: Review pipeline stages, artifacts, and release management
- **Azure Repos**: Analyze Git repository branching strategy
- **Azure Pipelines**: Check for YAML pipeline configuration
- **Azure Artifacts**: Review package management and feeds
- **Azure Test Plans**: Evaluate test case management
- **GitHub Integration**: Check for Azure DevOps and GitHub Actions
- **Deployment Slots**: Review blue-green deployment strategy
- Analyze pipeline security and secrets management

### Cost Management
- **Azure Cost Management**: Analyze cost trends and spending patterns
- **Budgets and Alerts**: Review budget configuration and forecasting
- **Azure Advisor**: Check for cost optimization recommendations
- **Reserved Instances**: Evaluate VM reservation coverage
- **Azure Hybrid Benefit**: Review license optimization for Windows/SQL Server
- **Spot VMs**: Check for interruptible workload cost savings
- Analyze resource utilization and rightsizing opportunities
- Review tagging strategy for cost allocation

### Data Analytics
- **Azure Synapse Analytics**: Review data warehouse and Spark pools
- **Azure Databricks**: Analyze collaborative data science platform
- **HDInsight**: Check for managed Hadoop and Spark clusters
- **Data Factory**: Evaluate ETL pipeline design and triggers
- **Stream Analytics**: Analyze real-time data processing
- **Power BI**: Review embedded analytics and dashboards
- **Azure Analysis Services**: Check for tabular data models
- **Azure Data Explorer**: Review fast data analytics service

### AI and Machine Learning
- **Azure Machine Learning**: Review workspace, compute, and model deployment
- **Cognitive Services**: Analyze vision, speech, language, and decision APIs
- **Azure Bot Service**: Check for conversational AI implementation
- **Form Recognizer**: Evaluate document processing and extraction
- **Cognitive Search**: Review AI-powered search indexing
- **Azure OpenAI Service**: Analyze GPT model integration
- **Personalizer**: Check for reinforcement learning recommendations
- **Translator**: Review multi-language translation usage

### Application Integration
- **Service Bus**: Analyze queue and topic configuration, dead-letter queues
- **Event Grid**: Review event routing and filtering
- **Event Hubs**: Check for stream processing and capture
- **Logic Apps**: Evaluate integration connectors and workflows
- **API Management**: Review API versioning and throttling policies
- **Azure Relay**: Check for hybrid connection patterns
- **Notification Hubs**: Analyze push notification service
- Evaluate message durability and exactly-once delivery

### Backup and Disaster Recovery
- **Azure Backup**: Review backup policies and retention schedules
- **Azure Site Recovery**: Analyze disaster recovery orchestration
- **Geo-Replication**: Check for cross-region data replication
- **Backup Vault**: Review backup storage and immutability
- **Snapshot Management**: Analyze disk and database snapshots
- **Cross-Region Restore**: Check for multi-region recovery capability
- Review Recovery Time Objective (RTO) and Recovery Point Objective (RPO)
- Analyze backup testing and restore validation

### Governance and Compliance
- **Azure Policy**: Review policy definitions and compliance state
- **Management Groups**: Analyze hierarchical organization structure
- **Azure Blueprints**: Check for environment standardization
- **Resource Locks**: Evaluate resource protection from deletion
- **Azure Purview**: Review data governance and cataloging
- **Compliance Manager**: Analyze regulatory compliance assessment
- **Azure Arc**: Check for hybrid and multi-cloud governance
- Review resource tagging and naming standards

### Identity and Access Management
- **Azure AD B2C**: Review customer identity and access management
- **Azure AD B2B**: Analyze external user collaboration
- **Conditional Access**: Check for risk-based access policies
- **Multi-Factor Authentication**: Evaluate MFA configuration
- **Identity Protection**: Review risk detection and remediation
- **Application Proxy**: Check for secure remote access
- **Managed Service Identity**: Analyze passwordless authentication
- Review least privilege access and role assignments

### Hybrid and Multi-Cloud
- **Azure Arc**: Review hybrid server and Kubernetes management
- **Azure Stack Hub**: Analyze on-premises Azure services
- **Azure Stack HCI**: Check for hyperconverged infrastructure
- **Azure Stack Edge**: Evaluate edge computing appliance
- **ExpressRoute**: Review dedicated network connectivity
- **VPN Gateway**: Check for site-to-site connectivity
- **Azure Migrate**: Analyze assessment and migration tools
- Review hybrid identity and authentication strategy

### Performance Optimization
- **Application Gateway**: Review autoscaling and connection draining
- **Azure CDN**: Analyze caching rules and purge operations
- **Redis Cache**: Check for cache-aside pattern and clustering
- **SQL Database**: Review query performance insights and indexing
- **Cosmos DB**: Analyze RU consumption and indexing policy
- **Application Insights**: Check for performance bottleneck detection
- **Load Testing**: Review Azure Load Testing service usage
- Evaluate latency and throughput metrics

### IoT and Edge Computing
- **IoT Hub**: Review device provisioning and message routing
- **IoT Central**: Analyze SaaS IoT application platform
- **IoT Edge**: Check for edge runtime and module deployment
- **Digital Twins**: Evaluate IoT spatial intelligence graph
- **Time Series Insights**: Review IoT data analytics and visualization
- **Sphere**: Check for secured IoT microcontroller platform
- Analyze device authentication and certificate management
- Review IoT data ingestion and processing pipelines

### Migration Strategies
- **Azure Migrate**: Review discovery, assessment, and migration tools
- **Database Migration Service**: Analyze database migration tasks
- **Azure Site Recovery**: Check for VM replication and migration
- **Data Box**: Evaluate offline data transfer devices
- **App Service Migration Assistant**: Review web app migration
- **Azure Import/Export**: Check for large-scale data transfer
- Analyze migration waves and dependency mapping
- Review post-migration optimization and validation

### Windows Virtual Desktop (AVD)
- **Host Pools**: Review session host configuration and scaling
- **Application Groups**: Analyze RemoteApp and desktop publishing
- **FSLogix Profile Containers**: Check for user profile management
- **Multi-Session Windows 10/11**: Evaluate concurrent user sessions
- **Azure Files Integration**: Review profile storage configuration
- **Autoscaling**: Analyze cost optimization for host pools
- Check for monitoring and diagnostics configuration
- Review security and conditional access policies
`
};

