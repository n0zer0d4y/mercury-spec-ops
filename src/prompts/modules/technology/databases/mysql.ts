import { TechnologyStack, AnalysisFocus } from '../../../../types/enums';
import { TechnologyPromptModule } from '../../../../types';

export const mysqlPromptModule: TechnologyPromptModule = {
  id: 'tech-mysql',
  name: 'MySQL Analysis',
  description: 'MySQL-specific analysis prompts for relational database',
  technology: TechnologyStack.MYSQL,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.PERFORMANCE, AnalysisFocus.SECURITY],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## MySQL-Specific Analysis

### Schema Design and Storage Engines
- Analyze table relationships and foreign key constraints
- Review storage engine selection (InnoDB vs MyISAM)
- Check for proper normalization (1NF, 2NF, 3NF)
- Evaluate denormalization strategies
- Assess character set and collation choices
- Review table partitioning strategy
- Analyze column data type optimization

### Indexing Strategy
- Review primary key and unique key design
- Analyze composite index column ordering
- Check for covering indexes
- Evaluate full-text indexes (FULLTEXT)
- Assess spatial indexes for geographic data
- Review index cardinality and selectivity
- Analyze unused and duplicate indexes
- Check for index merge optimization

### Query Performance and Optimization
- Analyze EXPLAIN output for query plans
- Review join types and efficiency
- Check for filesort and temporary table usage
- Evaluate subquery vs JOIN performance
- Assess query cache effectiveness (MySQL 5.7 and earlier)
- Review derived table optimization
- Analyze query execution time patterns
- Check for table scan vs index scan

### InnoDB Specific Optimizations
- Review InnoDB buffer pool sizing
- Analyze innodb_flush_log_at_trx_commit setting
- Check for InnoDB file-per-table configuration
- Evaluate InnoDB log file size
- Assess InnoDB compression usage
- Review InnoDB adaptive hash index
- Analyze InnoDB change buffering
- Check for InnoDB deadlock detection

### Transaction Management
- Review transaction isolation levels (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE)
- Analyze ACID compliance patterns
- Check for proper transaction boundaries
- Evaluate SAVEPOINT usage
- Assess autocommit configuration
- Review long-running transaction detection
- Analyze transaction log management

### Locking and Concurrency
- Analyze table-level vs row-level locking
- Review lock wait timeout configuration
- Check for lock contention and deadlocks
- Evaluate SELECT FOR UPDATE usage
- Assess metadata locking issues
- Review SHOW PROCESSLIST for blocked queries
- Analyze InnoDB lock monitor output

### Replication Configuration
- Review master-slave replication setup
- Analyze binlog format (STATEMENT, ROW, MIXED)
- Check for replication lag monitoring
- Evaluate GTID (Global Transaction ID) usage
- Assess multi-source replication
- Review semi-synchronous replication
- Analyze replication filters and rules
- Check for replication error handling

### Performance Tuning Parameters
- Review my.cnf/my.ini configuration
- Analyze max_connections setting
- Check innodb_buffer_pool_size optimization
- Evaluate query_cache_size (if applicable)
- Assess tmp_table_size and max_heap_table_size
- Review sort_buffer_size and join_buffer_size
- Analyze thread_cache_size
- Check for open_files_limit configuration

### Connection Management
- Analyze connection pool configuration
- Review persistent vs transient connections
- Check for connection leak detection
- Evaluate max_connections limit
- Assess connection timeout settings
- Review wait_timeout and interactive_timeout
- Analyze connection thread overhead

### Security Best Practices
- Review user authentication and privileges
- Analyze role-based access control
- Check for SQL injection vulnerabilities
- Evaluate password policies and validation
- Assess SSL/TLS encryption configuration
- Review bind-address network security
- Analyze audit log plugin usage
- Check for default account removal

### Constraint and Data Integrity
- Review foreign key constraints and actions
- Analyze CHECK constraints (MySQL 8.0+)
- Check for UNIQUE and NOT NULL constraints
- Evaluate trigger-based validation
- Assess referential integrity enforcement
- Review constraint naming conventions
- Analyze cascading delete/update patterns

### Backup and Recovery Strategy
- Review backup methods (mysqldump, mysqlpump, physical backup)
- Analyze point-in-time recovery capability
- Check for binary log retention
- Evaluate incremental backup strategy
- Assess backup verification procedures
- Review backup storage and encryption
- Analyze disaster recovery runbook
- Check for backup restore testing

### Full-Text Search
- Review FULLTEXT index usage
- Analyze natural language vs boolean mode
- Check for full-text search performance
- Evaluate minimum word length configuration
- Assess stopword customization
- Review relevance ranking
- Analyze full-text parser selection

### JSON Support (MySQL 5.7+)
- Review JSON data type usage
- Analyze JSON functions and operators
- Check for JSON indexing via generated columns
- Evaluate JSON vs normalized schema trade-offs
- Assess JSON path expressions
- Review JSON validation
- Analyze JSON performance patterns

### Stored Procedures and Functions
- Review stored procedure performance
- Analyze procedure parameter usage
- Check for proper error handling (DECLARE HANDLER)
- Evaluate dynamic SQL and prepared statements
- Assess cursor usage efficiency
- Review stored function determinism
- Analyze procedure security (SQL SECURITY DEFINER/INVOKER)

### Triggers and Events
- Review trigger logic and performance impact
- Analyze trigger timing (BEFORE vs AFTER)
- Check for trigger cascading and recursion
- Evaluate event scheduler usage
- Assess event-based maintenance tasks
- Review trigger error handling
- Analyze trigger audit trail

### Partitioning Strategy
- Review partitioning types (RANGE, LIST, HASH, KEY)
- Analyze partition pruning effectiveness
- Check for proper partition key selection
- Evaluate partition maintenance procedures
- Assess sub-partitioning usage
- Review partition-wise joins
- Analyze partition reorganization impact

### Monitoring and Observability
- Analyze slow query log configuration
- Review performance_schema usage
- Check for sys schema monitoring queries
- Evaluate SHOW STATUS metrics
- Assess information_schema queries
- Review query profiling (SHOW PROFILE)
- Analyze MySQL Enterprise Monitor (if available)
- Check for third-party monitoring tools integration

### Character Sets and Collations
- Review utf8mb4 vs utf8 usage
- Analyze collation selection impact
- Check for character set consistency
- Evaluate binary collation usage
- Assess case-sensitivity configuration
- Review character set conversion overhead
- Analyze emoji and special character handling

### Binary Log Management
- Review binlog retention period
- Analyze binlog format selection
- Check for binlog disk space monitoring
- Evaluate binlog rotation configuration
- Assess binlog compression (MySQL 8.0.20+)
- Review binlog encryption
- Analyze binlog purging strategy

### Query Cache (MySQL 5.7 and Earlier)
- Review query cache hit ratio
- Analyze query cache fragmentation
- Check for query cache sizing
- Evaluate query cache invalidation patterns
- Assess query cache effectiveness
- Review query cache bypass techniques
- Analyze query cache configuration

### Temporary Tables and On-Disk Processing
- Review temporary table usage patterns
- Analyze internal vs user-created temporary tables
- Check for on-disk temporary table creation
- Evaluate tmp_table_size configuration
- Assess memory table conversion to disk
- Review tmpdir configuration
- Analyze temporary table cleanup

### Data Migration and Schema Evolution
- Review schema change tools (pt-online-schema-change, gh-ost)
- Analyze zero-downtime migration techniques
- Check for migration script versioning
- Evaluate data transformation procedures
- Assess rollback procedures
- Review migration testing strategy
- Analyze foreign key constraint handling during migration

### High Availability and Clustering
- Review MySQL Group Replication setup
- Analyze InnoDB Cluster configuration
- Check for MySQL Router usage
- Evaluate automatic failover mechanisms
- Assess split-brain prevention
- Review cluster monitoring and alerting
- Analyze multi-master replication patterns
`
};

