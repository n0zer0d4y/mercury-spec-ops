import { BugSeverity, BugType } from '../../../types/enums';
import { BugSeverityPromptModule } from '../../../types';

export const lowSeverityModule: BugSeverityPromptModule = {
  id: 'severity-low',
  name: 'Low Severity Bug Analysis',
  description: 'Low severity bug-specific analysis prompts',
  severity: BugSeverity.LOW,
  bugTypes: [BugType.UI_UX, BugType.FUNCTIONAL, BugType.COMPATIBILITY],
  applicableTo: ['bug-analysis'],
  priority: 4,
  content: `
## Low Severity Bug Analysis

### Impact Assessment
- Analyze the minimal impact on user experience
- Review workaround availability and ease of implementation
- Check for potential cascading effects despite low severity
- Evaluate user frustration levels and satisfaction impact

### Resolution Priority
- Assess appropriate timeline for resolution (next sprint, minor release)
- Review resource allocation and effort estimation
- Check for quick fix opportunities vs. proper solution
- Evaluate impact on technical debt accumulation

### User Communication
- Review need for user notification and release notes
- Analyze documentation updates required
- Check for user training or guidance needs
- Evaluate communication strategy and timing

### Prevention Measures
- Review testing gaps that allowed this bug to slip through
- Analyze code review process improvements
- Check for automated testing opportunities
- Evaluate monitoring and alerting enhancements
`
};

export const mediumSeverityModule: BugSeverityPromptModule = {
  id: 'severity-medium',
  name: 'Medium Severity Bug Analysis',
  description: 'Medium severity bug-specific analysis prompts',
  severity: BugSeverity.MEDIUM,
  bugTypes: [BugType.FUNCTIONAL, BugType.DATA, BugType.LOGIC, BugType.INTEGRATION],
  applicableTo: ['bug-analysis'],
  priority: 3,
  content: `
## Medium Severity Bug Analysis

### Business Impact Analysis
- Analyze impact on business operations and workflows
- Review potential revenue or productivity losses
- Check for customer satisfaction and retention impact
- Evaluate competitive disadvantage implications

### Technical Risk Assessment
- Review system stability and reliability concerns
- Analyze potential data corruption or inconsistency risks
- Check for security implications or vulnerability exposure
- Evaluate performance degradation and scalability impact

### Resolution Strategy
- Assess immediate vs. long-term solution approaches
- Review rollback capabilities and contingency planning
- Check for proper testing and validation requirements
- Evaluate deployment strategy and risk mitigation

### Root Cause Analysis
- Analyze underlying architectural or design issues
- Review process gaps in development or testing
- Check for environmental or configuration factors
- Evaluate systemic issues that may cause similar bugs
`
};

export const highSeverityModule: BugSeverityPromptModule = {
  id: 'severity-high',
  name: 'High Severity Bug Analysis',
  description: 'High severity bug-specific analysis prompts',
  severity: BugSeverity.HIGH,
  bugTypes: [BugType.FUNCTIONAL, BugType.PERFORMANCE, BugType.SECURITY, BugType.INTEGRATION],
  applicableTo: ['bug-analysis'],
  priority: 2,
  content: `
## High Severity Bug Analysis

### Critical Impact Assessment
- Analyze system functionality disruption and service availability
- Review data integrity and consistency impacts
- Check for security vulnerability exposure
- Evaluate compliance and regulatory implications

### Immediate Response Requirements
- Assess need for immediate hotfix or emergency deployment
- Review communication protocols for stakeholders and users
- Check for system rollback or failover procedures
- Evaluate monitoring and alerting requirements

### Root Cause Investigation
- Conduct thorough code and architecture review
- Analyze system logs and monitoring data
- Review development and testing process breakdowns
- Evaluate environmental and configuration factors

### Prevention and Recovery
- Design comprehensive fix with regression testing
- Implement enhanced monitoring and early detection
- Review and improve development processes
- Establish incident response and recovery procedures
`
};

export const criticalSeverityModule: BugSeverityPromptModule = {
  id: 'severity-critical',
  name: 'Critical Severity Bug Analysis',
  description: 'Critical severity bug-specific analysis prompts',
  severity: BugSeverity.CRITICAL,
  bugTypes: [BugType.SECURITY, BugType.DATA, BugType.MEMORY, BugType.FUNCTIONAL],
  applicableTo: ['bug-analysis'],
  priority: 1,
  content: `
## Critical Severity Bug Analysis

### Emergency Response Protocol
- Activate incident response team immediately
- Assess need for system shutdown or maintenance window
- Review legal and compliance notification requirements
- Evaluate public relations and customer communication strategy

### Comprehensive Impact Analysis
- Analyze potential data loss or corruption extent
- Review security breach implications and data exposure
- Check for system-wide failure or cascade failures
- Evaluate financial and reputational damage potential

### Immediate Containment Actions
- Implement emergency patches or workarounds
- Activate backup and disaster recovery procedures
- Review system isolation and containment strategies
- Evaluate temporary service alternatives

### Thorough Investigation
- Conduct forensic analysis of the bug and its impacts
- Review all system logs, monitoring, and audit trails
- Analyze development process failures and quality gaps
- Evaluate infrastructure and environmental factors

### Recovery and Prevention
- Design and implement comprehensive fix with extensive testing
- Establish enhanced monitoring and alerting systems
- Review and overhaul development and testing processes
- Implement additional security measures and controls
`
};