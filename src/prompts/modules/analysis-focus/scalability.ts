import { AnalysisFocus, TechnologyStack } from '../../../types/enums';
import { AnalysisFocusPromptModule } from '../../../types';

export const scalabilityFocusModule: AnalysisFocusPromptModule = {
  id: 'focus-scalability',
  name: 'Scalability Analysis',
  description: 'Scalability-focused analysis prompts',
  focus: AnalysisFocus.SCALABILITY,
  technologies: [
    TechnologyStack.NODE_JS, TechnologyStack.PYTHON, TechnologyStack.JAVA,
    TechnologyStack.GO, TechnologyStack.TYPESCRIPT, TechnologyStack.REACT
  ],
  applicableTo: ['codebase-analysis'],
  priority: 2,
  content: `
## Scalability Analysis Focus

### Horizontal Scaling Readiness
- Analyze stateless application design
- Review session management for distributed systems
- Check for sticky session dependencies
- Evaluate shared state handling
- Assess load balancer configuration readiness
- Review instance independence

### Vertical Scaling Considerations
- Analyze resource utilization patterns
- Review memory usage efficiency
- Check for CPU-intensive operations
- Evaluate multi-threading capabilities
- Assess resource limit configuration
- Review optimization opportunities

### Database Scaling
- Analyze query performance at scale
- Review database indexing strategy
- Check for connection pooling configuration
- Evaluate read replica usage
- Assess database sharding readiness
- Review query optimization
- Analyze N+1 query problems
- Check for batch operation usage

### Caching Strategy
- Analyze caching layer implementation
- Review cache invalidation strategy
- Check for distributed caching (Redis, Memcached)
- Evaluate cache hit ratio optimization
- Assess cache warmup strategies
- Review cache-aside vs write-through patterns

### Message Queue and Async Processing
- Analyze message queue usage
- Review async task processing patterns
- Check for queue overflow handling
- Evaluate message ordering requirements
- Assess dead letter queue configuration
- Review backpressure handling

### Microservices Architecture
- Analyze service decomposition
- Review service independence
- Check for service discovery implementation
- Evaluate inter-service communication patterns
- Assess service mesh usage
- Review API gateway configuration

### Load Distribution
- Analyze load balancing strategy
- Review traffic distribution patterns
- Check for geographic distribution
- Evaluate CDN usage for static content
- Assess edge caching implementation
- Review DNS-based load balancing

### Auto-scaling Configuration
- Analyze auto-scaling policies
- Review scaling metrics and thresholds
- Check for scale-up and scale-down rules
- Evaluate cooldown periods
- Assess predictive scaling readiness
- Review cost optimization in scaling

### Resource Management
- Analyze resource allocation patterns
- Review connection pool sizing
- Check for resource leak prevention
- Evaluate graceful degradation
- Assess resource quota management
- Review resource cleanup procedures

### Data Partitioning
- Analyze data sharding strategies
- Review partition key design
- Check for hot partition prevention
- Evaluate cross-partition query handling
- Assess rebalancing strategies
- Review partition size monitoring

### API Design for Scale
- Analyze pagination implementation
- Review filtering and search optimization
- Check for rate limiting
- Evaluate batch operation support
- Assess partial response support
- Review webhook vs polling patterns

### Stateless Design Patterns
- Analyze session storage externalization
- Review JWT vs session-based auth
- Check for file upload handling at scale
- Evaluate temporary storage management
- Assess distributed locking needs
- Review stateless service design

### Performance Under Load
- Analyze response time degradation
- Review throughput capacity
- Check for bottleneck identification
- Evaluate resource contention
- Assess thread pool sizing
- Review queue depth monitoring

### Database Optimization for Scale
- Analyze connection pool configuration
- Review transaction isolation levels
- Check for long-running transactions
- Evaluate bulk operation usage
- Assess database query caching
- Review materialized view usage

### Content Delivery and Static Assets
- Analyze CDN usage and configuration
- Review static asset optimization
- Check for image optimization
- Evaluate lazy loading implementation
- Assess Progressive Web App patterns
- Review asset versioning and caching

### Distributed System Patterns
- Analyze eventual consistency handling
- Review distributed transaction patterns
- Check for saga pattern implementation
- Evaluate CQRS (Command Query Responsibility Segregation)
- Assess event sourcing patterns
- Review compensating transaction handling

### Monitoring and Observability for Scale
- Analyze metrics collection at scale
- Review distributed tracing implementation
- Check for log aggregation
- Evaluate alerting threshold configuration
- Assess health check endpoints
- Review service level indicators (SLIs)

### Cost Optimization
- Analyze resource usage efficiency
- Review auto-scaling cost impact
- Check for rightsizing opportunities
- Evaluate serverless vs always-on trade-offs
- Assess storage tier optimization
- Review data transfer costs
`
};

