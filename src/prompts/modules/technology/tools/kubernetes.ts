import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const kubernetesPromptModule: TechnologyPromptModule = {
  id: 'tech-kubernetes',
  name: 'Kubernetes Analysis',
  description: 'Kubernetes-specific analysis prompts for container orchestration',
  technology: TechnologyStack.KUBERNETES,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Kubernetes-Specific Analysis

### Deployment Configuration
- Review Deployment replicas and scaling strategy
- Analyze rolling update configuration (maxSurge, maxUnavailable)
- Check for deployment strategy (RollingUpdate, Recreate)
- Evaluate pod template specification
- Assess deployment annotations and labels
- Review revision history limit
- Check for progressive delivery patterns
- Analyze deployment lifecycle management

### Pod Specification Best Practices
- Review container resource requests and limits
- Analyze pod security context configuration
- Check for init containers usage
- Evaluate sidecar container patterns
- Assess pod affinity and anti-affinity rules
- Review node selector and tolerations
- Check for topology spread constraints
- Analyze pod disruption budget

### Resource Management
- Review CPU and memory requests/limits
- Analyze resource quota usage
- Check for limit ranges configuration
- Evaluate resource overcommitment
- Assess pod Quality of Service (QoS) classes
- Review resource utilization monitoring
- Check for vertical pod autoscaling
- Analyze resource efficiency and waste

### Service Configuration
- Review Service types (ClusterIP, NodePort, LoadBalancer)
- Analyze service selector and endpoint configuration
- Check for headless service usage
- Evaluate service port naming
- Assess session affinity configuration
- Review external traffic policy
- Check for service mesh integration
- Analyze service discovery patterns

### Ingress and Routing
- Review Ingress controller configuration
- Analyze ingress rules and path routing
- Check for TLS/SSL termination
- Evaluate host-based routing
- Assess rate limiting and WAF integration
- Review ingress annotations and customization
- Check for multiple ingress controllers
- Analyze traffic splitting and canary deployments

### ConfigMaps and Secrets
- Review ConfigMap usage for configuration
- Analyze Secret management and encryption
- Check for external secrets operators (Vault, AWS Secrets Manager)
- Evaluate secret rotation strategies
- Assess environment variable vs volume mounting
- Review sensitive data handling
- Check for secret immutability
- Analyze configuration versioning

### Storage and Persistent Volumes
- Review PersistentVolumeClaim (PVC) configuration
- Analyze StorageClass selection and provisioning
- Check for volume access modes
- Evaluate stateful application patterns
- Assess volume backup strategies
- Review volume snapshot usage
- Check for CSI driver configuration
- Analyze volume performance and IOPS

### StatefulSets for Stateful Applications
- Review StatefulSet pod identity and ordering
- Analyze persistent volume claim templates
- Check for headless service usage
- Evaluate update strategies (RollingUpdate, OnDelete)
- Assess partition-based updates
- Review pod management policy
- Check for stateful application patterns
- Analyze data consistency and replication

### DaemonSets for Node-Level Services
- Review DaemonSet use cases (logging, monitoring, networking)
- Analyze node selector and tolerations
- Check for update strategy configuration
- Evaluate resource limits for system daemons
- Assess pod priority and preemption
- Review critical pod scheduling
- Check for security context constraints
- Analyze node-level dependency management

### Jobs and CronJobs
- Review Job completion and parallelism configuration
- Analyze CronJob schedule and timezone
- Check for job history limits
- Evaluate failure handling and backoff
- Assess job pod template configuration
- Review concurrency policy for CronJobs
- Check for idempotency in job execution
- Analyze job monitoring and alerting

### Horizontal Pod Autoscaling (HPA)
- Review HPA metrics and target utilization
- Analyze scaling behavior configuration
- Check for custom metrics usage
- Evaluate scale-up/scale-down stabilization
- Assess minimum and maximum replica counts
- Review metrics server dependency
- Check for KEDA (event-driven autoscaling)
- Analyze autoscaling effectiveness

### Vertical Pod Autoscaling (VPA)
- Review VPA resource recommendations
- Analyze update mode (Off, Initial, Recreate, Auto)
- Check for VPA and HPA coexistence
- Evaluate resource request right-sizing
- Assess VPA policy configuration
- Review admission controller setup
- Check for resource limit recommendations
- Analyze VPA stability and adoption

### Network Policies
- Review NetworkPolicy ingress/egress rules
- Analyze pod selector and namespace selector
- Check for default deny policies
- Evaluate micro-segmentation strategy
- Assess policy ordering and precedence
- Review policy testing and validation
- Check for CNI plugin support
- Analyze network isolation patterns

### RBAC and Security
- Review Role and ClusterRole definitions
- Analyze RoleBinding and ClusterRoleBinding
- Check for least privilege principle
- Evaluate service account usage
- Assess pod security policies/standards/admission
- Review security context constraints
- Check for RBAC audit logging
- Analyze privilege escalation prevention

### Pod Security Standards
- Review Pod Security Standards enforcement (Privileged, Baseline, Restricted)
- Analyze admission controller configuration
- Check for security context requirements
- Evaluate privileged container restrictions
- Assess host namespace restrictions
- Review volume type restrictions
- Check for security policy violations
- Analyze migration from PSP to PSS

### Cluster Security
- Review API server authentication and authorization
- Analyze etcd encryption at rest
- Check for network encryption (TLS)
- Evaluate admission webhooks and policies
- Assess cluster hardening (CIS benchmark)
- Review audit logging configuration
- Check for vulnerability scanning
- Analyze secrets management and encryption

### Namespace Organization
- Review namespace design and boundaries
- Analyze multi-tenancy strategies
- Check for resource quota per namespace
- Evaluate network policy isolation
- Assess RBAC per namespace
- Review label and annotation conventions
- Check for namespace lifecycle management
- Analyze cross-namespace communication

### Labels and Annotations
- Review label naming conventions
- Analyze label usage for selection
- Check for recommended labels (app.kubernetes.io/*)
- Evaluate annotation usage for metadata
- Assess label cardinality and performance
- Review label-based monitoring and alerting
- Check for label immutability considerations
- Analyze label strategy documentation

### Health Checks and Probes
- Review liveness probe configuration
- Analyze readiness probe configuration
- Check for startup probe usage
- Evaluate probe timing (initialDelaySeconds, periodSeconds)
- Assess probe failure thresholds
- Review probe endpoints and health check logic
- Check for probe performance impact
- Analyze probe-based traffic management

### Logging and Observability
- Review container logging (stdout/stderr)
- Analyze log aggregation setup (Fluentd, Fluent Bit)
- Check for structured logging
- Evaluate log retention and rotation
- Assess distributed tracing integration
- Review metrics collection (Prometheus)
- Check for log correlation with traces
- Analyze observability stack integration

### Monitoring and Metrics
- Review Prometheus metrics collection
- Analyze custom metrics definition
- Check for service level objectives (SLOs)
- Evaluate alerting rules and thresholds
- Assess Grafana dashboard design
- Review metrics cardinality and cost
- Check for metric retention policies
- Analyze performance monitoring

### Service Mesh Integration
- Review service mesh deployment (Istio, Linkerd, Consul)
- Analyze traffic management and routing
- Check for mutual TLS (mTLS) configuration
- Evaluate circuit breaking and retries
- Assess observability and telemetry
- Review service mesh policy enforcement
- Check for sidecar injection configuration
- Analyze service mesh performance overhead

### GitOps and CI/CD Integration
- Review GitOps workflow (Flux, ArgoCD)
- Analyze declarative configuration management
- Check for automated sync and reconciliation
- Evaluate deployment pipeline integration
- Assess rollback and recovery procedures
- Review environment promotion strategy
- Check for drift detection and remediation
- Analyze CI/CD security and secrets

### Cluster Upgrade and Maintenance
- Review Kubernetes version and upgrade path
- Analyze node upgrade strategy (rolling, blue-green)
- Check for API deprecation warnings
- Evaluate backward compatibility
- Assess upgrade testing procedures
- Review control plane upgrade process
- Check for etcd backup before upgrades
- Analyze upgrade automation

### Multi-Cluster Management
- Review cluster federation strategies
- Analyze cross-cluster service discovery
- Check for multi-cluster ingress
- Evaluate workload distribution
- Assess disaster recovery across clusters
- Review centralized policy management
- Check for cost optimization across clusters
- Analyze multi-cluster observability

### Node Management
- Review node taints and tolerations
- Analyze node pool configuration
- Check for node autoscaling (Cluster Autoscaler)
- Evaluate node maintenance and cordon/drain
- Assess node affinity and selector
- Review node resource allocation
- Check for custom node labels
- Analyze node health monitoring

### Cost Optimization
- Review resource utilization efficiency
- Analyze pod density and node utilization
- Check for spot/preemptible instance usage
- Evaluate cluster autoscaling configuration
- Assess resource overprovisioning
- Review namespace-based cost allocation
- Check for idle resource detection
- Analyze reserved capacity usage

### Disaster Recovery and Backup
- Review etcd backup strategy
- Analyze persistent volume backup (Velero)
- Check for disaster recovery testing
- Evaluate RTO and RPO requirements
- Assess cross-region replication
- Review backup automation and scheduling
- Check for restore procedures documentation
- Analyze business continuity planning

### Operator Pattern
- Review custom resource definitions (CRDs)
- Analyze operator implementation
- Check for operator lifecycle management (OLM)
- Evaluate operator upgrade strategy
- Assess operator RBAC requirements
- Review operator observability
- Check for operator best practices
- Analyze operator testing and validation

### Helm Charts and Packaging
- Review Helm chart structure and templating
- Analyze values.yaml configuration
- Check for chart versioning and dependencies
- Evaluate chart repository management
- Assess chart security and signing
- Review chart testing and validation
- Check for chart documentation
- Analyze chart upgrade and rollback

### Admission Controllers
- Review validating webhook configuration
- Analyze mutating webhook configuration
- Check for policy enforcement (OPA, Kyverno)
- Evaluate admission latency impact
- Assess webhook failure policy
- Review webhook TLS configuration
- Check for webhook versioning
- Analyze admission audit logging

### Scheduling and Node Affinity
- Review pod affinity and anti-affinity
- Analyze node selector usage
- Check for taints and tolerations
- Evaluate pod priority and preemption
- Assess topology spread constraints
- Review custom scheduler usage
- Check for scheduling performance
- Analyze workload placement optimization

### Container Runtime and CRI
- Review container runtime selection (containerd, CRI-O)
- Analyze runtime configuration
- Check for runtime security features
- Evaluate runtime performance characteristics
- Assess runtime compatibility
- Review runtime resource usage
- Check for runtime monitoring
- Analyze runtime upgrade strategy

### Cluster Networking
- Review CNI plugin selection (Calico, Cilium, Flannel)
- Analyze network performance and throughput
- Check for network policy enforcement
- Evaluate service mesh integration
- Assess load balancing configuration
- Review DNS configuration (CoreDNS)
- Check for network troubleshooting tools
- Analyze network security posture
`
};

