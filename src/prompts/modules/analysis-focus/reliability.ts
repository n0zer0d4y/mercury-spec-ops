import { AnalysisFocus, TechnologyStack } from '../../../types/enums';
import { AnalysisFocusPromptModule } from '../../../types';

export const reliabilityFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-reliability',
  name: 'Reliability Analysis',
  description: 'Reliability-focused analysis prompts',
  focus: AnalysisFocus.RELIABILITY,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.TYPESCRIPT, TechnologyStack.REACT
  ],
  applicableTo: ['codebase-analysis'],
  priority: 2,
  content: `
## Reliability Analysis Focus

### Error Handling and Recovery
- Analyze error handling comprehensiveness
- Review exception propagation patterns
- Check for proper error logging
- Evaluate retry mechanisms with exponential backoff
- Assess graceful degradation strategies
- Review error recovery procedures

### Fault Tolerance
- Analyze circuit breaker implementation
- Review bulkhead pattern usage
- Check for timeout configuration
- Evaluate fallback mechanisms
- Assess redundancy strategies
- Review failure isolation

### Data Integrity and Consistency
- Analyze transaction management
- Review data validation at boundaries
- Check for idempotent operations
- Evaluate ACID property compliance
- Assess data backup strategies
- Review data reconciliation procedures

### Service Health and Monitoring
- Analyze health check implementation
- Review liveness and readiness probes
- Check for heartbeat mechanisms
- Evaluate service dependency health tracking
- Assess metrics collection and alerting
- Review SLA/SLO monitoring

### Distributed System Reliability
- Analyze network partition handling
- Review split-brain scenario prevention
- Check for leader election implementation
- Evaluate consensus algorithm usage
- Assess distributed coordination
- Review CAP theorem trade-offs

### Resilience Patterns
- Analyze timeout and deadline enforcement
- Review request/response timeout configuration
- Check for cascading failure prevention
- Evaluate load shedding implementation
- Assess throttling and backpressure
- Review resource limit enforcement

### Deployment and Rollback
- Analyze blue-green deployment readiness
- Review canary deployment configuration
- Check for feature flag implementation
- Evaluate rollback procedures
- Assess deployment verification
- Review database migration reversibility

### Testing for Reliability
- Analyze chaos engineering practices
- Review failure injection testing
- Check for load testing procedures
- Evaluate stress testing coverage
- Assess disaster recovery testing
- Review end-to-end reliability testing

### Data Backup and Recovery
- Analyze backup frequency and retention
- Review backup verification procedures
- Check for point-in-time recovery capability
- Evaluate RTO (Recovery Time Objective)
- Assess RPO (Recovery Point Objective)
- Review backup restoration testing

### Logging and Debugging
- Analyze log level appropriateness
- Review structured logging implementation
- Check for correlation ID usage
- Evaluate log retention and rotation
- Assess debug information availability
- Review log aggregation setup

### Resource Management
- Analyze resource cleanup procedures
- Review connection management
- Check for memory leak prevention
- Evaluate file handle management
- Assess thread pool configuration
- Review resource limit monitoring

### Configuration Management
- Analyze configuration change management
- Review configuration validation
- Check for configuration versioning
- Evaluate configuration rollback capability
- Assess dynamic configuration updates
- Review configuration audit logging

### Dependency Management
- Analyze third-party service dependencies
- Review dependency failure handling
- Check for dependency health monitoring
- Evaluate dependency timeout configuration
- Assess vendor lock-in risks
- Review API version compatibility

### Observability and Debugging
- Analyze distributed tracing implementation
- Review metric visualization
- Check for real-time alerting
- Evaluate root cause analysis tools
- Assess performance profiling capability
- Review debugging information capture

### Incident Response
- Analyze incident detection mechanisms
- Review on-call escalation procedures
- Check for runbook documentation
- Evaluate incident communication channels
- Assess post-mortem process
- Review incident tracking and analysis

### State Management
- Analyze state persistence strategies
- Review state synchronization
- Check for state recovery procedures
- Evaluate eventual consistency handling
- Assess state machine implementation
- Review state validation

### Network Reliability
- Analyze network retry policies
- Review connection pooling configuration
- Check for DNS caching and failover
- Evaluate multi-region deployment
- Assess network timeout configuration
- Review bandwidth management

### Queue and Message Reliability
- Analyze message durability configuration
- Review dead letter queue handling
- Check for message ordering guarantees
- Evaluate exactly-once delivery mechanisms
- Assess message replay capability
- Review poison message handling

### Security and Reliability
- Analyze authentication failure handling
- Review authorization fault tolerance
- Check for security incident response
- Evaluate rate limiting reliability
- Assess DDoS protection mechanisms
- Review secret rotation procedures

### Performance Degradation Handling
- Analyze performance monitoring thresholds
- Review auto-scaling responsiveness
- Check for resource exhaustion handling
- Evaluate service degradation detection
- Assess performance anomaly alerting
- Review capacity planning processes
`
};

