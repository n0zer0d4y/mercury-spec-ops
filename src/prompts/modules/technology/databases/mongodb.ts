import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const mongodbPromptModule: TechnologyPromptModule = {
  id: 'tech-mongodb',
  name: 'MongoDB Analysis',
  description: 'MongoDB-specific analysis prompts for NoSQL database',
  technology: TechnologyStack.MONGODB,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## MongoDB-Specific Analysis

### Schema Design and Data Modeling
- Analyze document structure and embedded vs referenced relationships
- Review schema flexibility and evolution strategy
- Check for proper use of denormalization
- Evaluate schema validation rules (JSON Schema)
- Assess polymorphic schema patterns
- Review field naming conventions
- Analyze document size and nesting depth

### Indexing Strategy
- Review index usage and coverage
- Analyze compound index design
- Check for proper index selectivity
- Evaluate text search indexes
- Assess geospatial indexes (2dsphere, 2d)
- Review index intersection usage
- Analyze index memory usage (working set)
- Check for covered queries optimization

### Query Performance
- Analyze query execution plans (explain())
- Review query patterns and optimization
- Check for full collection scans
- Evaluate aggregation pipeline efficiency
- Assess use of projection to limit fields
- Review query timeout configuration
- Analyze slow query logs
- Check for proper use of cursor limits

### Aggregation Framework
- Review aggregation pipeline stages
- Analyze pipeline optimization ($match early, $project late)
- Check for proper use of $lookup for joins
- Evaluate use of $facet for parallel aggregation
- Assess memory usage in aggregation
- Review use of $merge and $out
- Analyze aggregation performance

### Write Operations and Atomicity
- Analyze write concern configuration
- Review atomic operations and $inc, $set usage
- Check for proper use of findAndModify/findOneAndUpdate
- Evaluate bulk write operations
- Assess transaction usage (multi-document transactions)
- Review retry logic for write operations
- Analyze write conflict handling

### Transactions and Consistency
- Review multi-document transaction usage
- Analyze read concern levels (local, majority, linearizable)
- Check for proper transaction boundaries
- Evaluate transaction performance impact
- Assess causal consistency usage
- Review transaction abort and retry logic
- Analyze distributed transaction patterns

### Replication and High Availability
- Review replica set configuration
- Analyze read preference strategies
- Check for proper write concern in replica sets
- Evaluate oplog size and retention
- Assess secondary read scalability
- Review automatic failover configuration
- Analyze replica set monitoring

### Sharding and Horizontal Scaling
- Review shard key selection
- Analyze data distribution across shards
- Check for hot shard detection
- Evaluate chunk migration impact
- Assess zone sharding configuration
- Review balancer configuration
- Analyze cross-shard query performance

### Connection Management
- Analyze connection pool sizing
- Review connection string options
- Check for connection leak prevention
- Evaluate connection timeout configuration
- Assess connection retry logic
- Review connection monitoring
- Analyze connection pool exhaustion handling

### Security Best Practices
- Review authentication mechanism (SCRAM, x.509, LDAP)
- Analyze role-based access control (RBAC)
- Check for field-level encryption
- Evaluate network encryption (TLS/SSL)
- Assess IP whitelisting and network security
- Review audit logging configuration
- Analyze encryption at rest

### Data Validation and Integrity
- Review schema validation rules
- Analyze required fields and data types
- Check for custom validation logic
- Evaluate enum and pattern validation
- Assess data consistency checks
- Review referential integrity handling
- Analyze orphaned document detection

### Backup and Disaster Recovery
- Review backup strategy (mongodump, snapshots)
- Analyze point-in-time recovery capability
- Check for backup verification procedures
- Evaluate backup retention policy
- Assess restore testing frequency
- Review continuous backup solutions (Atlas, Ops Manager)
- Analyze disaster recovery runbook

### Monitoring and Observability
- Analyze MongoDB monitoring metrics
- Review slow query monitoring
- Check for replication lag monitoring
- Evaluate connection pool monitoring
- Assess disk space and I/O monitoring
- Review performance insights usage
- Analyze profiler usage and configuration

### Memory Management
- Review WiredTiger cache size configuration
- Analyze working set size
- Check for memory pressure indicators
- Evaluate compression configuration
- Assess index memory usage
- Review journal commit interval
- Analyze memory-mapped file usage

### Data Lifecycle Management
- Review TTL index usage for automatic deletion
- Analyze data archival strategy
- Check for data retention policies
- Evaluate cold storage migration
- Assess data purging procedures
- Review data growth monitoring
- Analyze storage optimization

### Change Streams and Real-time Data
- Review change stream usage and patterns
- Analyze resume token handling
- Check for change stream filtering
- Evaluate change stream scalability
- Assess watch collection patterns
- Review change stream error handling
- Analyze real-time synchronization patterns

### Driver Usage and Best Practices
- Review MongoDB driver version and features
- Analyze connection string parameters
- Check for proper error handling
- Evaluate cursor management
- Assess bulk operation usage
- Review promise/callback patterns
- Analyze connection pool configuration

### Migration and Schema Evolution
- Review migration scripts and versioning
- Analyze backward compatibility strategy
- Check for zero-downtime migration approach
- Evaluate data transformation procedures
- Assess rollback procedures
- Review migration testing strategy
- Analyze schema evolution patterns

### Performance Tuning
- Analyze database profiler output
- Review storage engine configuration (WiredTiger)
- Check for index optimization opportunities
- Evaluate query plan cache effectiveness
- Assess hardware resource utilization
- Review read/write throughput
- Analyze latency patterns and bottlenecks
`
};

