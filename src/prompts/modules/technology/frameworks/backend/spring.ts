import { TechnologyStack, AnalysisFocus } from '../../../../../types/enums';
import { TechnologyPromptModule } from '../../../../../types';

export const springPromptModule: TechnologyPromptModule = {
  id: 'tech-spring',
  name: 'Spring Framework Analysis',
  description: 'Spring Framework-specific analysis prompts for Java backend development',
  technology: TechnologyStack.SPRING,
  focusAreas: [AnalysisFocus.ARCHITECTURE, AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
  applicableTo: ['codebase-analysis', 'bug-analysis'],
  priority: 1,
  content: `
## Spring Framework-Specific Analysis

### Dependency Injection and IoC Container
- Review @Component, @Service, @Repository, @Controller annotations
- Analyze constructor vs setter vs field injection
- Check for proper bean scope (singleton, prototype, request, session)
- Evaluate use of @Autowired and constructor injection patterns
- Assess qualifier usage for disambiguation
- Review @Configuration and @Bean definitions

### Spring Boot Configuration
- Analyze application.properties/application.yml setup
- Review profile-specific configuration
- Check for externalized configuration
- Evaluate use of @ConfigurationProperties
- Assess environment-specific property management
- Review actuator endpoints configuration

### Spring MVC and REST APIs
- Review @RestController vs @Controller usage
- Analyze @RequestMapping and method-specific annotations
- Check for proper request/response handling
- Evaluate @PathVariable and @RequestParam usage
- Assess content negotiation and media types
- Review exception handling (@ExceptionHandler, @ControllerAdvice)

### Data Access with Spring Data JPA
- Analyze repository interface design
- Review custom query methods and @Query annotations
- Check for N+1 query problems
- Evaluate use of projections and DTOs
- Assess transaction management (@Transactional)
- Review entity relationships and lazy/eager loading

### Security with Spring Security
- Review authentication configuration
- Analyze authorization rules and method security
- Check for CSRF protection
- Evaluate JWT or session-based authentication
- Assess password encoding and storage
- Review security filter chain configuration
- Analyze CORS configuration

### Transaction Management
- Review @Transactional annotation usage
- Analyze transaction propagation levels
- Check for proper isolation levels
- Evaluate rollback rules and exception handling
- Assess distributed transaction handling
- Review transaction boundaries and performance

### AOP (Aspect-Oriented Programming)
- Analyze aspect definitions and pointcut expressions
- Review advice types (before, after, around)
- Check for proper cross-cutting concern separation
- Evaluate aspect ordering
- Assess performance impact of AOP

### Caching with Spring Cache
- Review @Cacheable, @CachePut, @CacheEvict usage
- Analyze cache configuration (Redis, Ehcache, Caffeine)
- Check for proper cache key generation
- Evaluate cache eviction strategies
- Assess distributed caching setup

### Testing Strategies
- Review @SpringBootTest and test slicing annotations
- Analyze mock beans and @MockBean usage
- Check for proper test configuration
- Evaluate integration testing approaches
- Assess test database configuration (H2, TestContainers)
- Review WebMvcTest and DataJpaTest usage

### REST API Design and Documentation
- Analyze RESTful resource design
- Review HTTP status code usage
- Check for HATEOAS implementation (Spring HATEOAS)
- Evaluate API versioning strategy
- Assess OpenAPI/Swagger integration (SpringDoc)
- Review response pagination and filtering

### Error Handling and Validation
- Review global exception handling
- Analyze validation annotations (@Valid, @Validated)
- Check for custom validator implementations
- Evaluate error response structure
- Assess business exception hierarchy

### Async Processing and Scheduling
- Review @Async configuration and usage
- Analyze thread pool configuration
- Check for @Scheduled task implementation
- Evaluate async exception handling
- Assess use of CompletableFuture

### Messaging and Event-Driven Architecture
- Review Spring Integration or Spring Cloud Stream usage
- Analyze message listener configuration
- Check for proper message serialization
- Evaluate error handling in message processing
- Assess use of Kafka, RabbitMQ, or other message brokers

### Reactive Programming (Spring WebFlux)
- Review Mono and Flux usage
- Analyze reactive repository implementations
- Check for proper backpressure handling
- Evaluate reactive error handling
- Assess blocking vs non-blocking operations

### Microservices with Spring Cloud
- Review service discovery (Eureka, Consul)
- Analyze API gateway configuration (Spring Cloud Gateway)
- Check for circuit breaker patterns (Resilience4j)
- Evaluate distributed tracing (Sleuth, Zipkin)
- Assess configuration management (Spring Cloud Config)
- Review load balancing strategies

### Performance Optimization
- Analyze database query optimization
- Review connection pool configuration (HikariCP)
- Check for proper caching strategies
- Evaluate lazy initialization benefits
- Assess startup time optimization
- Review JVM tuning for Spring Boot

### Monitoring and Observability
- Review Spring Boot Actuator endpoints
- Analyze health checks and metrics
- Check for proper logging configuration (Logback, Log4j2)
- Evaluate APM integration (Micrometer, Prometheus)
- Assess distributed tracing setup

### Build and Deployment
- Review Maven/Gradle configuration
- Analyze Docker containerization
- Check for multi-stage build optimization
- Evaluate CI/CD pipeline integration
- Assess environment-specific builds

### Code Organization and Best Practices
- Analyze package structure and layering
- Review separation of concerns (controller, service, repository)
- Check for proper DTO and entity separation
- Evaluate use of mappers (MapStruct, ModelMapper)
- Assess code reusability and modularity

### Batch Processing (Spring Batch)
- Review job and step configuration
- Analyze chunk-oriented processing
- Check for proper restart and recovery
- Evaluate partition and parallel processing
- Assess job scheduling and execution

### File Upload and Storage
- Review multipart file handling
- Analyze file size limits and validation
- Check for secure file storage
- Evaluate cloud storage integration (S3, Azure Blob)
- Assess file type validation

### WebSocket Support
- Review @MessageMapping and STOMP configuration
- Analyze session management
- Check for authentication in WebSocket
- Evaluate message broker configuration
- Assess scalability for WebSocket connections
`
};

