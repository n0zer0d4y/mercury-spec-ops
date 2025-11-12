import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const postgresqlPromptModule: TechnologyPromptModule = {
  id: 'tech-postgresql',
  name: 'PostgreSQL Analysis',
  description: 'PostgreSQL-specific analysis prompts for relational database',
  technology: TechnologyStack.POSTGRESQL,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## PostgreSQL-Specific Analysis

### Schema Design and Normalization
- Analyze table relationships and foreign key constraints
- Review normalization level (1NF, 2NF, 3NF, BCNF)
- Check for denormalization where appropriate
- Evaluate use of inheritance and table partitioning
- Assess domain and custom type usage
- Review column naming conventions
- Analyze data type choices and precision

### Indexing Strategy
- Review index types (B-tree, Hash, GiST, GIN, BRIN, SP-GiST)
- Analyze index usage and coverage
- Check for partial indexes and covering indexes
- Evaluate multi-column index ordering
- Assess index bloat and maintenance
- Review expression indexes
- Analyze index-only scans optimization
- Check for unused indexes

### Query Performance and Optimization
- Analyze EXPLAIN and EXPLAIN ANALYZE output
- Review query execution plans
- Check for sequential scans vs index scans
- Evaluate join strategies (nested loop, hash, merge)
- Assess subquery vs JOIN performance
- Review CTE usage and optimization
- Analyze query planner statistics accuracy
- Check for query plan caching effectiveness

### Constraint Management
- Review PRIMARY KEY and UNIQUE constraints
- Analyze FOREIGN KEY constraints and actions (CASCADE, SET NULL)
- Check for CHECK constraints usage
- Evaluate NOT NULL constraints
- Assess exclusion constraints
- Review constraint validation performance
- Analyze deferred constraint checking

### Transaction Management and Isolation
- Review transaction isolation levels (Read Committed, Repeatable Read, Serializable)
- Analyze ACID compliance patterns
- Check for proper transaction boundaries
- Evaluate savepoint usage
- Assess deadlock detection and handling
- Review transaction timeout configuration
- Analyze transaction log management

### Concurrency Control
- Analyze MVCC (Multi-Version Concurrency Control) behavior
- Review locking strategies (row-level, table-level)
- Check for lock contention and blocking
- Evaluate SELECT FOR UPDATE/SHARE usage
- Assess advisory locks usage
- Review pg_stat_activity for blocked queries
- Analyze lock timeouts configuration

### Performance Tuning
- Review postgresql.conf parameters
- Analyze shared_buffers and work_mem settings
- Check effective_cache_size configuration
- Evaluate maintenance_work_mem settings
- Assess checkpoint configuration
- Review autovacuum settings
- Analyze connection pool sizing
- Check for query timeout configuration

### VACUUM and Bloat Management
- Review VACUUM and ANALYZE schedules
- Analyze autovacuum effectiveness
- Check for table and index bloat
- Evaluate VACUUM FULL necessity
- Assess dead tuple accumulation
- Review transaction ID wraparound prevention
- Analyze bloat monitoring and alerts

### Partitioning Strategy
- Review partitioning methods (range, list, hash)
- Analyze partition pruning effectiveness
- Check for proper partition key selection
- Evaluate partition maintenance procedures
- Assess sub-partitioning usage
- Review partition-wise joins
- Analyze partition detachment/attachment

### Replication and High Availability
- Review streaming replication configuration
- Analyze logical vs physical replication
- Check for replication lag monitoring
- Evaluate WAL archiving and retention
- Assess failover and switchover procedures
- Review synchronous vs asynchronous replication
- Analyze replication slot management

### Connection Management
- Analyze connection pooling strategy (PgBouncer, pgpool-II)
- Review max_connections configuration
- Check for connection leak detection
- Evaluate connection idle timeout
- Assess prepared statement usage
- Review connection overhead
- Analyze connection retry logic

### Security Best Practices
- Review authentication methods (md5, scram-sha-256, cert)
- Analyze role-based access control (RBAC)
- Check for row-level security (RLS) policies
- Evaluate column-level permissions
- Assess SSL/TLS encryption
- Review pg_hba.conf configuration
- Analyze audit logging (pgaudit extension)
- Check for SQL injection vulnerabilities

### Data Integrity and Validation
- Review foreign key constraint usage
- Analyze trigger logic for validation
- Check for domain constraints
- Evaluate check constraints effectiveness
- Assess data type constraints
- Review custom validation functions
- Analyze referential integrity enforcement

### Backup and Recovery
- Review backup strategy (pg_dump, pg_basebackup)
- Analyze point-in-time recovery (PITR) setup
- Check for backup verification procedures
- Evaluate WAL archiving configuration
- Assess backup retention policy
- Review continuous archiving
- Analyze disaster recovery testing

### Full-Text Search
- Review tsvector and tsquery usage
- Analyze text search configuration
- Check for GIN indexes on text columns
- Evaluate ranking and relevance
- Assess multi-language support
- Review text search performance
- Analyze stemming and stop words

### JSON and Advanced Data Types
- Review JSONB vs JSON usage
- Analyze JSONB indexing strategies (GIN)
- Check for proper JSONB operators
- Evaluate array and hstore usage
- Assess range types and exclusion constraints
- Review UUID and geometric types
- Analyze custom composite types

### Stored Procedures and Functions
- Review PL/pgSQL function performance
- Analyze function volatility (VOLATILE, STABLE, IMMUTABLE)
- Check for proper exception handling
- Evaluate trigger function efficiency
- Assess dynamic SQL usage and SQL injection risks
- Review function inlining opportunities
- Analyze stored procedure versioning

### Extensions and Advanced Features
- Review extension usage (PostGIS, pg_trgm, hstore)
- Analyze extension compatibility and versioning
- Check for proper extension security
- Evaluate custom aggregate functions
- Assess window function usage
- Review recursive CTE patterns
- Analyze materialized views effectiveness

### Monitoring and Observability
- Analyze pg_stat_statements for slow queries
- Review pg_stat_activity monitoring
- Check for cache hit ratio monitoring
- Evaluate database size and growth trends
- Assess replication lag monitoring
- Review slow query logging
- Analyze connection pool metrics
- Check for autovacuum monitoring

### Write-Ahead Log (WAL) Management
- Review WAL configuration (wal_level, wal_buffers)
- Analyze WAL segment size and archiving
- Check for WAL disk space monitoring
- Evaluate checkpoint frequency and impact
- Assess WAL compression usage
- Review WAL retention for replication
- Analyze WAL write performance

### Query Planning and Statistics
- Review pg_stat_all_tables for table statistics
- Analyze statistics collection frequency
- Check for accurate cardinality estimates
- Evaluate ANALYZE execution after bulk changes
- Assess histogram and correlation statistics
- Review planner cost parameters
- Analyze query plan stability

### Data Migration and Schema Evolution
- Review migration script management (Flyway, Liquibase)
- Analyze schema versioning strategy
- Check for zero-downtime migration techniques
- Evaluate data transformation procedures
- Assess rollback procedures
- Review migration testing strategy
- Analyze foreign data wrapper usage for migration

### Temporal Data and Time-Series
- Review timestamp and timestamptz usage
- Analyze time-based partitioning
- Check for time-series optimization (TimescaleDB)
- Evaluate data retention and archival
- Assess time-zone handling
- Review temporal query patterns
- Analyze time-series aggregation performance
`
};

