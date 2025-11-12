import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const dockerPromptModule: TechnologyPromptModule = {
  id: 'tech-docker',
  name: 'Docker Analysis',
  description: 'Docker-specific analysis prompts for containerization',
  technology: TechnologyStack.DOCKER,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Docker-Specific Analysis

### Dockerfile Best Practices
- Review base image selection and versioning
- Analyze layer caching optimization
- Check for multi-stage builds usage
- Evaluate build argument usage
- Assess COPY vs ADD command usage
- Review .dockerignore file completeness
- Check for minimal layer count
- Analyze instruction order for cache efficiency

### Base Image Security
- Review base image source and trust
- Analyze image vulnerability scanning
- Check for minimal/distroless images usage
- Evaluate alpine vs debian-slim vs distroless
- Assess base image update frequency
- Review image digest pinning
- Check for official image usage
- Analyze image size and attack surface

### Image Layer Optimization
- Review layer size and count
- Analyze layer caching strategy
- Check for combining RUN commands
- Evaluate build cache invalidation points
- Assess layer reusability
- Review image squashing considerations
- Check for unnecessary files in layers
- Analyze layer history and composition

### Container Security
- Review running containers as non-root user
- Analyze USER directive usage
- Check for security scanning (Trivy, Snyk, Clair)
- Evaluate secrets management (not in ENV or layers)
- Assess read-only filesystem usage
- Review capability dropping (--cap-drop)
- Check for security profiles (AppArmor, SELinux)
- Analyze privileged container avoidance

### Image Size Optimization
- Review final image size
- Analyze multi-stage build effectiveness
- Check for build dependencies removal
- Evaluate package manager cache cleanup
- Assess static binary usage
- Review compression techniques
- Check for unnecessary dependencies
- Analyze distroless or scratch base images

### Docker Compose Configuration
- Review service definitions and orchestration
- Analyze volume mount configurations
- Check for network isolation
- Evaluate environment variable management
- Assess service dependencies (depends_on)
- Review health check configuration
- Check for resource limits
- Analyze compose file version compatibility

### Environment Variables and Configuration
- Review ENV vs ARG usage
- Analyze secrets management approach
- Check for configuration externalization
- Evaluate environment-specific configurations
- Assess .env file usage and security
- Review sensitive data handling
- Check for default value provisioning
- Analyze configuration validation

### Volume and Data Management
- Review volume mount strategies
- Analyze bind mounts vs named volumes
- Check for volume permissions and ownership
- Evaluate data persistence approach
- Assess volume backup strategies
- Review volume driver selection
- Check for volume cleanup and lifecycle
- Analyze stateful vs stateless containers

### Network Configuration
- Review network mode selection
- Analyze custom bridge networks
- Check for service discovery configuration
- Evaluate port exposure strategy
- Assess network isolation and segmentation
- Review overlay network usage
- Check for DNS configuration
- Analyze network driver selection

### Health Checks and Monitoring
- Review HEALTHCHECK directive usage
- Analyze health check interval and timeout
- Check for proper health check endpoints
- Evaluate startup time considerations
- Assess liveness vs readiness probes
- Review health check failure handling
- Check for monitoring integration
- Analyze container restart policies

### Resource Limits and Constraints
- Review CPU limits and reservations
- Analyze memory limits and swap
- Check for disk I/O constraints
- Evaluate PID limits
- Assess resource utilization monitoring
- Review cgroup configuration
- Check for out-of-memory (OOM) handling
- Analyze resource quota adherence

### Build Process and CI/CD Integration
- Review build automation and pipelines
- Analyze build context optimization
- Check for layer caching in CI/CD
- Evaluate build secrets handling
- Assess multi-platform builds
- Review image tagging strategy
- Check for build reproducibility
- Analyze build time optimization

### Container Registry Management
- Review registry selection (Docker Hub, ECR, GCR, ACR)
- Analyze image tagging conventions
- Check for image scanning on push
- Evaluate registry authentication
- Assess image retention policies
- Review registry access controls
- Check for image signing and verification
- Analyze registry mirroring and caching

### Multi-Stage Builds
- Review build stage separation
- Analyze stage naming and organization
- Check for build cache optimization
- Evaluate artifact copying between stages
- Assess build vs runtime dependencies separation
- Review stage target selection
- Check for parallel stage builds
- Analyze build stage testing

### Logging and Log Management
- Review application logging to stdout/stderr
- Analyze log driver configuration
- Check for structured logging
- Evaluate log aggregation setup
- Assess log rotation and retention
- Review log filtering and parsing
- Check for sensitive data in logs
- Analyze centralized logging integration

### Container Startup and Initialization
- Review ENTRYPOINT vs CMD usage
- Analyze init process and PID 1 handling
- Check for graceful shutdown (SIGTERM)
- Evaluate initialization scripts
- Assess dependency wait mechanisms
- Review startup time optimization
- Check for signal handling
- Analyze container orchestration readiness

### Secrets Management
- Review secrets injection methods
- Analyze Docker secrets usage (Swarm)
- Check for environment variable avoidance
- Evaluate external secrets management (Vault, etc.)
- Assess build-time secrets handling
- Review secrets rotation strategy
- Check for secrets encryption at rest
- Analyze least privilege access to secrets

### Container Orchestration Readiness
- Review stateless design principles
- Analyze horizontal scalability support
- Check for 12-factor app compliance
- Evaluate graceful degradation
- Assess health check implementation
- Review configuration externalization
- Check for cloud-native patterns
- Analyze service mesh compatibility

### Image Scanning and Vulnerability Management
- Review automated vulnerability scanning
- Analyze CVE remediation process
- Check for scanning tool integration
- Evaluate vulnerability severity thresholds
- Assess base image update automation
- Review scan result reporting
- Check for compliance with security policies
- Analyze false positive management

### Docker Build Context
- Review .dockerignore effectiveness
- Analyze build context size
- Check for unnecessary file inclusion
- Evaluate context compression
- Assess remote build context usage
- Review build context structure
- Check for sensitive file exclusion
- Analyze build context optimization

### Container Runtime Configuration
- Review runtime selection (runc, gVisor, Kata)
- Analyze container runtime security
- Check for runtime performance characteristics
- Evaluate rootless container support
- Assess user namespace mapping
- Review cgroup driver configuration
- Check for runtime compatibility
- Analyze runtime overhead

### Development vs Production Images
- Review separate Dockerfile strategies
- Analyze development tools inclusion
- Check for debug vs production builds
- Evaluate hot-reload and dev server setup
- Assess production hardening
- Review image size differences
- Check for environment-specific optimizations
- Analyze build target selection

### Container Immutability
- Review immutable infrastructure principles
- Analyze configuration as code
- Check for runtime modification avoidance
- Evaluate image rebuild vs patching
- Assess version control integration
- Review infrastructure as code practices
- Check for configuration drift prevention
- Analyze declarative configuration

### Performance Optimization
- Review container startup time
- Analyze image pull optimization
- Check for layer caching effectiveness
- Evaluate parallel build optimization
- Assess runtime performance overhead
- Review resource allocation efficiency
- Check for kernel parameter tuning
- Analyze I/O performance optimization

### Docker Swarm (if applicable)
- Review service definition and deployment
- Analyze service scaling configuration
- Check for rolling update strategy
- Evaluate health check and self-healing
- Assess service placement constraints
- Review overlay network configuration
- Check for secrets and config management
- Analyze load balancing and routing mesh

### Debugging and Troubleshooting
- Review debugging tools inclusion strategy
- Analyze exec access patterns
- Check for log accessibility
- Evaluate ephemeral debug containers
- Assess core dump configuration
- Review debugging in production constraints
- Check for diagnostic tool availability
- Analyze troubleshooting runbooks

### Compliance and Governance
- Review image provenance tracking
- Analyze compliance policy enforcement
- Check for regulatory requirement adherence
- Evaluate audit logging
- Assess software bill of materials (SBOM)
- Review license compliance
- Check for security hardening standards
- Analyze governance automation

### Container Lifecycle Management
- Review container start/stop procedures
- Analyze container update strategies
- Check for rolling deployment support
- Evaluate blue-green deployment
- Assess canary release patterns
- Review rollback procedures
- Check for zero-downtime deployment
- Analyze container deprecation and removal
`
};

