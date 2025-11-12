import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const awsPromptModule: TechnologyPromptModule = {
  id: 'tech-aws',
  name: 'AWS Analysis',
  description: 'AWS-specific analysis prompts for cloud infrastructure',
  technology: TechnologyStack.AWS,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## AWS-Specific Analysis

### Compute Services
- **EC2**: Review instance types, sizing, and utilization
- **Lambda**: Analyze function cold starts, memory allocation, and timeout configuration
- **ECS/EKS**: Check container orchestration, task definitions, and resource limits
- **Elastic Beanstalk**: Evaluate application deployment and scaling configuration
- **Auto Scaling**: Review scaling policies, target tracking, and cooldown periods
- **Lightsail**: Assess simple compute instance usage
- Analyze compute cost optimization opportunities
- Check for spot instance and reserved instance usage

### Storage Services
- **S3**: Review bucket policies, versioning, lifecycle rules, and encryption
- **EBS**: Analyze volume types (gp2, gp3, io1, io2), snapshots, and encryption
- **EFS**: Check for proper file system configuration and mount targets
- **FSx**: Evaluate managed file system usage (Windows, Lustre, NetApp ONTAP)
- **S3 Glacier**: Review archival strategy and retrieval options
- **Storage Gateway**: Analyze hybrid cloud storage integration
- Check for S3 intelligent tiering and storage class optimization
- Evaluate cross-region replication and backup strategies

### Database Services
- **RDS**: Review instance sizing, multi-AZ, read replicas, and backup retention
- **Aurora**: Analyze cluster configuration, global database, and serverless options
- **DynamoDB**: Check for partition key design, read/write capacity, and DAX usage
- **ElastiCache**: Review Redis/Memcached cluster configuration and cache strategies
- **Neptune**: Evaluate graph database design and query optimization
- **DocumentDB**: Analyze MongoDB-compatible document database usage
- **Redshift**: Check for data warehouse optimization and distribution keys
- **Timestream**: Review time-series database configuration

### Networking and Content Delivery
- **VPC**: Analyze subnets, route tables, security groups, and NACLs
- **CloudFront**: Review CDN configuration, caching behavior, and origin settings
- **Route 53**: Check DNS routing policies and health checks
- **API Gateway**: Evaluate API design, throttling, and caching
- **ELB/ALB/NLB**: Analyze load balancer configuration and health checks
- **Direct Connect**: Review dedicated network connection setup
- **Transit Gateway**: Check for hub-and-spoke network topology
- **VPN**: Evaluate site-to-site and client VPN configuration

### Security and Identity
- **IAM**: Review policies, roles, users, and least privilege principle
- **Cognito**: Analyze user authentication and authorization flows
- **Secrets Manager**: Check for proper secret rotation and access control
- **KMS**: Review key management, encryption, and key policies
- **AWS WAF**: Evaluate web application firewall rules and rate limiting
- **Shield**: Check for DDoS protection configuration
- **GuardDuty**: Review threat detection findings
- **Security Hub**: Analyze security posture and compliance status
- **IAM Access Analyzer**: Check for unintended resource access

### Monitoring and Observability
- **CloudWatch**: Review metrics, alarms, dashboards, and log groups
- **CloudWatch Logs Insights**: Analyze log query patterns
- **X-Ray**: Check for distributed tracing implementation
- **CloudTrail**: Evaluate audit logging and event history
- **Systems Manager**: Review parameter store and operational insights
- **Health Dashboard**: Monitor AWS service health
- **EventBridge**: Analyze event-driven architecture patterns
- Check for proper alerting and notification setup (SNS)

### Infrastructure as Code
- **CloudFormation**: Review stack templates, nested stacks, and drift detection
- **CDK**: Analyze infrastructure code organization and best practices
- **SAM**: Check for serverless application model usage
- **Terraform**: Evaluate state management and module structure
- **Ansible/Chef/Puppet**: Review configuration management
- Check for infrastructure versioning and change management
- Evaluate CI/CD integration for infrastructure deployment

### Serverless Architecture
- **Lambda Functions**: Analyze execution time, memory, concurrency limits
- **Step Functions**: Review state machine orchestration and error handling
- **API Gateway**: Check for Lambda integration and proxy configuration
- **EventBridge**: Evaluate event routing and filtering
- **SQS/SNS**: Analyze message queue and pub/sub patterns
- **DynamoDB Streams**: Check for change data capture integration
- **AppSync**: Review GraphQL API design and resolvers
- Evaluate serverless cost optimization

### Container Services
- **ECS**: Review task definitions, service discovery, and placement strategies
- **EKS**: Analyze Kubernetes cluster configuration and node groups
- **Fargate**: Check for serverless container execution
- **ECR**: Review container registry policies and image scanning
- **App Runner**: Evaluate containerized web application deployment
- Check for proper health checks and rolling deployments
- Analyze container resource allocation and limits

### DevOps and CI/CD
- **CodePipeline**: Review pipeline stages and approval actions
- **CodeBuild**: Analyze build specifications and artifact management
- **CodeDeploy**: Check for deployment strategies (blue/green, rolling)
- **CodeCommit**: Evaluate source control integration
- **CodeArtifact**: Review artifact repository management
- **Systems Manager**: Check for patch management and automation
- Analyze CI/CD security and secrets management
- Review deployment rollback procedures

### Cost Optimization
- **Cost Explorer**: Analyze cost trends and spending patterns
- **Budgets**: Review budget alerts and forecasting
- **Compute Optimizer**: Check for rightsizing recommendations
- **Trusted Advisor**: Evaluate cost optimization suggestions
- **S3 Storage Lens**: Analyze storage usage and optimization
- Review reserved instances and savings plans usage
- Check for idle resources and cost anomaly detection
- Evaluate spot instance and auto-scaling for cost savings

### Data Analytics
- **Athena**: Review query performance and partitioning strategy
- **EMR**: Analyze big data processing cluster configuration
- **Kinesis**: Check for real-time data streaming and processing
- **Glue**: Evaluate ETL job design and data catalog
- **QuickSight**: Review BI dashboard and visualization
- **Data Pipeline**: Analyze data workflow orchestration
- **Lake Formation**: Check for data lake security and governance
- **MSK**: Review managed Kafka cluster configuration

### Machine Learning
- **SageMaker**: Review model training, deployment, and endpoints
- **Rekognition**: Analyze image and video analysis usage
- **Comprehend**: Check for NLP and text analysis integration
- **Translate**: Evaluate translation service usage
- **Polly**: Review text-to-speech implementation
- **Transcribe**: Analyze speech-to-text accuracy
- **Forecast**: Check for time-series forecasting usage
- **Personalize**: Review recommendation system implementation

### Application Integration
- **SQS**: Analyze queue configuration, visibility timeout, and DLQ
- **SNS**: Review topic subscriptions and message filtering
- **EventBridge**: Check for event routing and custom events
- **Step Functions**: Evaluate workflow orchestration
- **AppFlow**: Review data integration flows
- **MQ**: Analyze managed message broker usage
- **Kinesis**: Check for stream processing and fan-out
- Evaluate message durability and delivery guarantees

### Backup and Disaster Recovery
- **AWS Backup**: Review backup plans and retention policies
- **S3 Versioning**: Check for object versioning and recovery
- **RDS Snapshots**: Analyze automated and manual snapshots
- **EBS Snapshots**: Review volume backup strategy
- **CloudEndure**: Evaluate disaster recovery orchestration
- **Multi-Region Architecture**: Check for cross-region failover
- Review Recovery Time Objective (RTO) and Recovery Point Objective (RPO)
- Analyze backup testing and restore procedures

### Compliance and Governance
- **Config**: Review resource configuration history and compliance rules
- **Organizations**: Analyze account structure and service control policies
- **Control Tower**: Check for multi-account governance
- **License Manager**: Review license tracking and compliance
- **Audit Manager**: Evaluate audit framework and evidence collection
- **Macie**: Analyze sensitive data discovery and protection
- Check for industry compliance (HIPAA, PCI-DSS, SOC 2)
- Review tagging strategy and resource organization

### Performance Optimization
- **CloudFront**: Review cache hit ratio and edge location usage
- **ElastiCache**: Analyze cache hit ratio and eviction policies
- **DynamoDB**: Check for DAX usage and auto-scaling
- **RDS**: Review query performance insights and slow query logs
- **Lambda**: Analyze cold start optimization and provisioned concurrency
- **API Gateway**: Check for response caching configuration
- **Global Accelerator**: Evaluate global traffic routing
- Review latency metrics and user experience

### Migration and Hybrid Cloud
- **Migration Hub**: Review migration tracking and planning
- **Database Migration Service**: Analyze database migration tasks
- **Server Migration Service**: Check for VM migration strategy
- **DataSync**: Review on-premises to AWS data transfer
- **Transfer Family**: Evaluate SFTP/FTPS file transfer setup
- **Snow Family**: Analyze large-scale data transfer devices
- **Outposts**: Check for on-premises AWS infrastructure
- Review hybrid cloud connectivity and latency

### Edge Computing and IoT
- **IoT Core**: Review device connectivity and message routing
- **IoT Greengrass**: Analyze edge computing and local processing
- **FreeRTOS**: Check for IoT operating system usage
- **Wavelength**: Evaluate 5G edge computing zones
- **Local Zones**: Review low-latency application deployment
- Check for device authentication and certificate management
- Analyze IoT data ingestion and processing pipelines
`
};

