import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const redisPromptModule: TechnologyPromptModule = {
  id: 'tech-redis',
  name: 'Redis Analysis',
  description: 'Redis-specific analysis prompts for in-memory data store',
  technology: TechnologyStack.REDIS,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Redis-Specific Analysis

### Data Structure Selection
- Analyze appropriate use of strings, hashes, lists, sets, sorted sets
- Review stream data structure usage
- Check for HyperLogLog for cardinality estimation
- Evaluate bitmap and bitfield operations
- Assess geospatial index usage (GEO commands)
- Review data structure size and memory efficiency
- Analyze nested vs flat data structure patterns

### Key Design and Naming
- Review key naming conventions and patterns
- Analyze key namespace organization
- Check for key length optimization
- Evaluate key expiration strategy
- Assess key prefixing and versioning
- Review key collision prevention
- Analyze key complexity and readability

### Memory Management
- Analyze memory usage patterns (INFO MEMORY)
- Review maxmemory configuration
- Check for memory eviction policies (LRU, LFU, TTL)
- Evaluate memory fragmentation ratio
- Assess large key detection and handling
- Review memory optimization techniques
- Analyze memory allocation patterns
- Check for memory leak detection

### Persistence Configuration
- Review RDB (snapshot) vs AOF (append-only file) trade-offs
- Analyze RDB save frequency configuration
- Check for AOF rewrite configuration
- Evaluate AOF fsync policy (always, everysec, no)
- Assess mixed persistence (RDB + AOF)
- Review persistence performance impact
- Analyze backup and restore procedures
- Check for persistence failure handling

### Expiration and TTL Management
- Review key expiration strategies (EXPIRE, EXPIREAT)
- Analyze passive vs active expiration
- Check for lazy deletion impact
- Evaluate TTL monitoring and patterns
- Assess PERSIST command usage
- Review expiration in replication
- Analyze expiration event notifications

### Pipelining and Batching
- Review pipeline usage for reducing RTT
- Analyze transaction blocks (MULTI/EXEC)
- Check for proper batching of commands
- Evaluate pipeline vs transaction trade-offs
- Assess pipeline error handling
- Review pipeline size optimization
- Analyze command grouping strategies

### Pub/Sub Patterns
- Review publisher/subscriber architecture
- Analyze channel naming and organization
- Check for pattern subscriptions (PSUBSCRIBE)
- Evaluate message delivery guarantees
- Assess pub/sub scalability
- Review message size and throughput
- Analyze subscriber connection management
- Check for pub/sub vs streams trade-offs

### Redis Streams
- Review stream as append-only log
- Analyze consumer group usage
- Check for XREAD and XREADGROUP patterns
- Evaluate stream trimming strategies (MAXLEN)
- Assess stream acknowledgment (XACK)
- Review pending entry handling
- Analyze stream retention and expiration
- Check for stream monitoring

### Transaction and Atomicity
- Review MULTI/EXEC transaction blocks
- Analyze optimistic locking with WATCH
- Check for transaction rollback handling
- Evaluate Lua script usage for atomicity
- Assess transaction size and complexity
- Review transaction error handling
- Analyze transaction performance impact

### Lua Scripting
- Review Lua script usage for complex operations
- Analyze script atomicity and performance
- Check for EVALSHA vs EVAL optimization
- Evaluate script caching
- Assess script debugging and testing
- Review script error handling
- Analyze script security (sandbox restrictions)
- Check for script versioning

### Replication and High Availability
- Review master-replica replication configuration
- Analyze replication lag monitoring
- Check for replica read scaling
- Evaluate Redis Sentinel for automatic failover
- Assess replication backlog sizing
- Review replica-serve-stale-data configuration
- Analyze replication traffic and bandwidth
- Check for split-brain scenario handling

### Redis Cluster Architecture
- Review cluster sharding and hash slots
- Analyze cluster node configuration
- Check for data distribution across nodes
- Evaluate resharding procedures
- Assess cluster failure detection
- Review multi-key operation limitations
- Analyze cluster topology changes
- Check for cluster monitoring

### Connection Management
- Analyze connection pooling strategy
- Review max connections configuration (maxclients)
- Check for connection timeout settings
- Evaluate connection persistence
- Assess connection leak detection
- Review connection retry logic
- Analyze connection overhead
- Check for connection pipeline usage

### Performance Optimization
- Review command execution time (SLOWLOG)
- Analyze latency monitoring (LATENCY)
- Check for blocking commands impact (KEYS, FLUSHALL)
- Evaluate command complexity (O(n) vs O(1))
- Assess CPU usage patterns
- Review network bandwidth utilization
- Analyze throughput and QPS metrics
- Check for hot key detection

### Security Best Practices
- Review authentication (AUTH, ACL)
- Analyze Access Control Lists (ACL) in Redis 6+
- Check for network security (bind, protected-mode)
- Evaluate TLS/SSL encryption
- Assess command renaming/disabling
- Review Redis on untrusted networks
- Analyze audit logging
- Check for default password changes

### Client Library Usage
- Review client library selection and version
- Analyze connection management in client
- Check for proper error handling
- Evaluate retry logic and circuit breakers
- Assess command serialization
- Review client-side caching (Redis 6+)
- Analyze client library configuration
- Check for connection pool tuning

### Caching Patterns
- Review cache-aside (lazy loading) pattern
- Analyze write-through and write-behind patterns
- Check for cache stampede prevention
- Evaluate cache warming strategies
- Assess cache invalidation logic
- Review TTL-based expiration
- Analyze cache hit ratio monitoring
- Check for negative caching

### Session Storage
- Review session data structure design
- Analyze session expiration and cleanup
- Check for session serialization format
- Evaluate session size optimization
- Assess distributed session management
- Review session security (token storage)
- Analyze session access patterns
- Check for session backup strategy

### Rate Limiting
- Review rate limiting algorithms (token bucket, leaky bucket)
- Analyze rate limit key design
- Check for distributed rate limiting
- Evaluate rate limit granularity
- Assess rate limit sliding window
- Review rate limit expiration
- Analyze rate limit monitoring
- Check for rate limit response handling

### Monitoring and Observability
- Analyze INFO command output (Server, Stats, Memory)
- Review MONITOR command usage (development only)
- Check for slow query logging (SLOWLOG)
- Evaluate latency monitoring (LATENCY)
- Assess key space statistics
- Review client connection monitoring (CLIENT LIST)
- Analyze Redis metrics export (Prometheus, etc.)
- Check for alerting on critical metrics

### Backup and Disaster Recovery
- Review RDB snapshot backup strategy
- Analyze AOF backup procedures
- Check for backup verification
- Evaluate point-in-time recovery capability
- Assess backup storage and retention
- Review disaster recovery testing
- Analyze backup encryption
- Check for automated backup procedures

### Data Migration and Upgrades
- Review data migration strategies (MIGRATE command)
- Analyze Redis version compatibility
- Check for zero-downtime migration
- Evaluate data transformation procedures
- Assess rollback procedures
- Review upgrade testing strategy
- Analyze deprecated command usage
- Check for module compatibility

### Redis Modules
- Review custom module usage (RedisJSON, RediSearch, RedisGraph)
- Analyze module performance impact
- Check for module compatibility
- Evaluate module security
- Assess module update strategy
- Review module configuration
- Analyze module-specific best practices
- Check for module alternatives

### Time-Series Data
- Review time-series data storage patterns
- Analyze RedisTimeSeries module usage
- Check for aggregation strategies
- Evaluate retention policies
- Assess downsampling techniques
- Review time-series query patterns
- Analyze time-series compaction
- Check for time-series indexing

### Distributed Locks
- Review distributed lock implementation (Redlock)
- Analyze lock acquisition and release
- Check for lock timeout configuration
- Evaluate lock contention handling
- Assess lock renewal strategies
- Review deadlock prevention
- Analyze lock monitoring
- Check for lock safety guarantees

### Job Queues and Task Processing
- Review queue implementation (list-based)
- Analyze BLPOP/BRPOP blocking operations
- Check for reliable queue patterns (RPOPLPUSH)
- Evaluate dead letter queue handling
- Assess job priority management
- Review job retry logic
- Analyze queue monitoring
- Check for queue backpressure handling
`
};

