import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const gcpPromptModule: TechnologyPromptModule = {
  id: 'tech-gcp',
  name: 'GCP Analysis',
  description: 'Google Cloud Platform-specific analysis prompts for cloud infrastructure',
  technology: TechnologyStack.GCP,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Google Cloud Platform (GCP) Specific Analysis

### Compute Services
- **Compute Engine**: Review VM instance types, machine families, and preemptible VMs
- **Cloud Functions**: Analyze function execution time, memory allocation, and cold starts
- **Cloud Run**: Check for containerized serverless app deployment and autoscaling
- **Google Kubernetes Engine (GKE)**: Evaluate cluster configuration and node pools
- **App Engine**: Review application deployment, versions, and traffic splitting
- **Bare Metal Solution**: Analyze specialized workload infrastructure
- **Batch**: Check for large-scale job scheduling and processing
- Evaluate committed use discounts and sustained use discounts

### Storage Services
- **Cloud Storage**: Review bucket classes (Standard, Nearline, Coldline, Archive)
- **Persistent Disk**: Analyze disk types (Standard, SSD, Balanced, Extreme)
- **Filestore**: Check for managed NFS file storage
- **Cloud Storage for Firebase**: Evaluate mobile/web app storage
- **Local SSD**: Review high-performance local storage usage
- **Transfer Service**: Analyze data transfer and migration
- Check for object lifecycle management and versioning
- Evaluate storage redundancy (regional, dual-region, multi-region)

### Database Services
- **Cloud SQL**: Review MySQL, PostgreSQL, SQL Server managed instances
- **Cloud Spanner**: Analyze globally distributed relational database
- **Firestore**: Check for serverless NoSQL document database
- **Cloud Bigtable**: Evaluate wide-column NoSQL for analytics
- **Memorystore**: Review managed Redis and Memcached
- **Cloud Datastore**: Analyze NoSQL document database (Firestore in Datastore mode)
- **AlloyDB**: Check for PostgreSQL-compatible database
- Evaluate backup strategies and high availability configuration

### Networking and Content Delivery
- **VPC**: Analyze subnets, firewall rules, and routes
- **Cloud CDN**: Review content delivery caching and backend services
- **Cloud Load Balancing**: Check for global and regional load balancers
- **Cloud DNS**: Evaluate DNS zone management and DNSSEC
- **Cloud NAT**: Review managed network address translation
- **Cloud Interconnect**: Analyze dedicated connectivity options
- **Cloud VPN**: Check for site-to-site and HA VPN configuration
- **Traffic Director**: Evaluate service mesh traffic management
- **Cloud Armor**: Review DDoS protection and WAF policies

### Security and Identity
- **Cloud IAM**: Review roles, service accounts, and policy bindings
- **Identity-Aware Proxy (IAP)**: Analyze zero-trust access control
- **Cloud Key Management (KMS)**: Check for encryption key management
- **Secret Manager**: Evaluate secret storage and rotation
- **Security Command Center**: Review security posture and findings
- **Binary Authorization**: Check for container image signing and validation
- **VPC Service Controls**: Analyze security perimeter configuration
- **reCAPTCHA Enterprise**: Review bot detection and mitigation
- **Cloud Asset Inventory**: Check for resource discovery and monitoring

### Monitoring and Observability
- **Cloud Monitoring (formerly Stackdriver)**: Review metrics, dashboards, and alerts
- **Cloud Logging**: Analyze log collection, retention, and export
- **Cloud Trace**: Check for distributed tracing implementation
- **Cloud Profiler**: Evaluate continuous CPU and heap profiling
- **Cloud Debugger**: Review live application debugging
- **Error Reporting**: Analyze error aggregation and alerting
- **Uptime Checks**: Check for availability monitoring
- Evaluate service-level objectives (SLOs) and indicators (SLIs)

### Infrastructure as Code
- **Cloud Deployment Manager**: Review template-based deployment
- **Terraform**: Analyze GCP provider configuration and state management
- **Ansible/Chef/Puppet**: Check for configuration management
- **gcloud CLI**: Review command-line automation scripts
- **Cloud Build**: Evaluate CI/CD pipeline configuration
- **Config Connector**: Check for Kubernetes-based resource management
- Review resource naming conventions and labels
- Analyze infrastructure versioning and change tracking

### Serverless Architecture
- **Cloud Functions**: Analyze event triggers and function chaining
- **Cloud Run**: Check for stateless container deployment
- **Eventarc**: Review event routing and filtering
- **Cloud Tasks**: Evaluate asynchronous task execution
- **Cloud Scheduler**: Check for cron job scheduling
- **Pub/Sub**: Analyze message queuing and pub/sub patterns
- **Workflows**: Review serverless orchestration
- Evaluate cold start optimization and concurrency limits

### Container Services
- **Google Kubernetes Engine (GKE)**: Review cluster autoscaling and node management
- **Cloud Run**: Check for Knative-based serverless containers
- **Artifact Registry**: Analyze container image and artifact storage
- **Container Registry**: Review legacy container image storage
- **Anthos**: Evaluate hybrid and multi-cloud Kubernetes platform
- **GKE Autopilot**: Check for fully managed Kubernetes
- Analyze pod security policies and network policies
- Review Helm chart deployment and management

### DevOps and CI/CD
- **Cloud Build**: Review build triggers, steps, and artifact management
- **Cloud Deploy**: Analyze continuous delivery pipelines
- **Cloud Source Repositories**: Check for Git repository hosting
- **Binary Authorization**: Evaluate deployment policy enforcement
- **Artifact Registry**: Review package and container management
- **Cloud Scheduler**: Check for automated task execution
- Analyze deployment strategies (blue/green, canary)
- Review secrets management in CI/CD pipelines

### Cost Management
- **Cloud Billing**: Analyze cost breakdown and spending trends
- **Budgets and Alerts**: Review budget configuration and notifications
- **Committed Use Discounts**: Check for 1-year or 3-year commitments
- **Sustained Use Discounts**: Evaluate automatic discounts for continuous usage
- **Preemptible VMs**: Review cost savings for interruptible workloads
- **Recommender**: Check for cost optimization recommendations
- **Active Assist**: Analyze intelligent cost and performance suggestions
- Review resource labeling for cost allocation

### Data Analytics
- **BigQuery**: Review data warehouse design, partitioning, and clustering
- **Dataflow**: Analyze Apache Beam streaming and batch pipelines
- **Dataproc**: Check for managed Hadoop and Spark clusters
- **Pub/Sub**: Evaluate streaming data ingestion
- **Data Fusion**: Review visual data integration and ETL
- **Dataprep**: Check for data wrangling and preparation
- **Looker**: Analyze business intelligence and data visualization
- **Cloud Composer**: Review managed Apache Airflow workflows

### AI and Machine Learning
- **Vertex AI**: Review unified ML platform for training and deployment
- **AutoML**: Analyze automated machine learning model training
- **AI Platform**: Check for custom ML model deployment
- **Vision AI**: Evaluate image analysis and recognition
- **Natural Language AI**: Review text analysis and NLP
- **Translation AI**: Check for language translation integration
- **Speech-to-Text/Text-to-Speech**: Analyze audio processing
- **Recommendations AI**: Review personalized recommendation system
- **Document AI**: Check for document parsing and extraction

### Application Integration
- **Pub/Sub**: Analyze message queuing, ordering, and delivery
- **Cloud Tasks**: Review task queue configuration and retry logic
- **Eventarc**: Check for event-driven architecture
- **Workflows**: Evaluate serverless orchestration steps
- **Apigee**: Review API management and gateway
- **Cloud Endpoints**: Check for API deployment and monitoring
- **Cloud Scheduler**: Analyze cron job scheduling
- Evaluate message durability and exactly-once delivery

### Backup and Disaster Recovery
- **Persistent Disk Snapshots**: Review snapshot schedules and retention
- **Cloud SQL Backups**: Analyze automated and on-demand backups
- **Cloud Storage Versioning**: Check for object version control
- **Backup and DR Service**: Evaluate centralized backup management
- **Cross-Region Replication**: Check for geo-redundancy
- Review Recovery Time Objective (RTO) and Recovery Point Objective (RPO)
- Analyze backup testing and restore procedures
- Check for immutable backup storage

### Governance and Compliance
- **Resource Manager**: Review organization, folders, and projects hierarchy
- **Organization Policy**: Analyze centralized policy enforcement
- **Cloud Asset Inventory**: Check for resource discovery and monitoring
- **Access Transparency**: Review Google access logs to customer data
- **Assured Workloads**: Analyze compliance controls for regulated industries
- **Policy Intelligence**: Check for policy insights and recommendations
- **Cloud Data Loss Prevention (DLP)**: Evaluate sensitive data protection
- Review tagging strategy and resource labeling

### Identity and Access Management
- **Cloud IAM**: Review predefined and custom roles
- **Service Accounts**: Analyze service account keys and workload identity
- **Identity Platform**: Check for customer identity and authentication
- **Workforce Identity Federation**: Review external identity provider integration
- **Workload Identity**: Analyze Kubernetes service account to IAM binding
- **Context-Aware Access**: Check for zero-trust security model
- **Access Approval**: Review manual approval for admin access
- Evaluate least privilege and separation of duties

### Hybrid and Multi-Cloud
- **Anthos**: Review hybrid and multi-cloud application platform
- **GKE on AWS/Azure**: Analyze managed Kubernetes on other clouds
- **Anthos Service Mesh**: Check for service mesh across environments
- **Migrate for Compute Engine**: Review VM migration from on-premises
- **Cloud Interconnect**: Analyze dedicated network connectivity
- **Cloud VPN**: Check for site-to-site connectivity
- **Traffic Director**: Evaluate global load balancing and service mesh
- Review hybrid identity and authentication strategy

### Performance Optimization
- **Cloud CDN**: Review cache hit ratio and invalidation strategies
- **Memorystore**: Analyze cache performance and eviction policies
- **Cloud Load Balancing**: Check for global anycast IP and autoscaling
- **Cloud SQL**: Review query insights and index recommendations
- **BigQuery**: Analyze query execution plans and slot usage
- **Cloud Functions**: Check for function warm-up and concurrency
- **Cloud Run**: Evaluate request autoscaling and CPU allocation
- Review latency metrics and distributed tracing

### IoT and Edge Computing
- **Cloud IoT Core**: Review device management and telemetry ingestion
- **Edge TPU**: Analyze AI inference at the edge
- **Anthos on Edge**: Check for Kubernetes at the edge
- **Cloud IoT Edge**: Evaluate edge runtime and gateway
- **Pub/Sub**: Review IoT message routing and processing
- Analyze device authentication and certificate management
- Check for IoT data pipeline and real-time analytics
- Review edge computing use cases and deployment

### Migration Strategies
- **Migrate for Compute Engine**: Review VM migration and replication
- **Database Migration Service**: Analyze database migration with minimal downtime
- **Transfer Service**: Check for online data transfer
- **Transfer Appliance**: Evaluate offline data transfer for large datasets
- **BigQuery Data Transfer Service**: Review automated data ingestion
- **Migrate for Anthos**: Analyze VM to container migration
- Review migration waves and dependency mapping
- Check for post-migration validation and optimization

### Data Management and Privacy
- **Cloud Data Loss Prevention (DLP)**: Review sensitive data discovery
- **Data Catalog**: Analyze metadata management and data discovery
- **Dataplex**: Check for unified data management
- **Policy Tags**: Evaluate fine-grained access control
- **Cloud KMS**: Review encryption key management
- **VPC Service Controls**: Check for data exfiltration protection
- Analyze data residency and sovereignty requirements
- Review GDPR, HIPAA, and other compliance controls

### Game Development
- **Game Servers**: Review managed multiplayer game server hosting
- **Firebase**: Check for mobile and web app backend services
- **Memorystore**: Analyze in-memory cache for game state
- **Cloud Spanner**: Evaluate globally distributed game database
- **Cloud Run**: Check for game API and services deployment
- Review real-time communication and matchmaking
- Analyze game telemetry and analytics

### Databases for Specialized Workloads
- **Cloud Spanner**: Review horizontal scaling and strong consistency
- **Cloud Bigtable**: Analyze time-series and analytics workloads
- **Firestore**: Check for mobile and web app data synchronization
- **AlloyDB**: Evaluate PostgreSQL-compatible for demanding workloads
- **Memorystore**: Review Redis clustering and persistence
- **Cloud SQL**: Check for read replicas and cross-region replication
- Analyze database sharding and partitioning strategies
- Review database connection pooling and failover
`
};

