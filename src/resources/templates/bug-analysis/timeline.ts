import { TemplateModule } from '../../../types';

export const bugAnalysisTimelineSection: TemplateModule = {
  id: 'bug-timeline',
  name: 'Bug Timeline Analysis',
  description: 'Timeline analysis section for bug analysis template',
  content: `## 4. Timeline Analysis

### 4.1 Discovery and Reporting

#### Initial Discovery
- **Discovered By**: [Name/Team/User]
- **Discovery Date**: [Date and Time]
- **Discovery Method**: [Production monitoring/User report/Testing/Code review]
- **Discovery Environment**: [Production/Staging/Development]

#### Reporting
- **Reported Date**: [Date and Time]
- **Reported By**: [Name/Team]
- **Reporting Channel**: [Bug tracker/Email/Chat/Phone]
- **Initial Report Quality**: [Complete/Incomplete]

### 4.2 Response Timeline

#### Acknowledgment
- **Acknowledged Date**: [Date and Time]
- **Acknowledged By**: [Team/Person]
- **Time to Acknowledgment**: [Duration from report]

#### Initial Assessment
- **Assessment Date**: [Date and Time]
- **Assessed By**: [Team/Person]
- **Time to Assessment**: [Duration from report]
- **Initial Severity Assignment**: [Severity level]

#### Assignment
- **Assigned Date**: [Date and Time]
- **Assigned To**: [Team/Person]
- **Time to Assignment**: [Duration from report]

### 4.3 Investigation Timeline

#### Investigation Start
- **Investigation Start Date**: [Date and Time]
- **Time to Investigation Start**: [Duration from report]

#### Investigation Activities
| Date | Activity | Investigator | Findings |
|------|----------|--------------|----------|
| [Date] | [Activity description] | [Name] | [Key findings] |
| [Date] | [Activity description] | [Name] | [Key findings] |
| [Date] | [Activity description] | [Name] | [Key findings] |

#### Root Cause Identified
- **Root Cause Found Date**: [Date and Time]
- **Time to Root Cause**: [Duration from investigation start]
- **Confirmed By**: [Team/Person]

### 4.4 Resolution Timeline

#### Fix Development
- **Development Start**: [Date and Time]
- **Development End**: [Date and Time]
- **Development Duration**: [Duration]
- **Developer(s)**: [Name(s)]

#### Code Review
- **Review Start**: [Date and Time]
- **Review End**: [Date and Time]
- **Review Duration**: [Duration]
- **Reviewer(s)**: [Name(s)]
- **Review Iterations**: [Count]

#### Testing
- **Testing Start**: [Date and Time]
- **Testing End**: [Date and Time]
- **Testing Duration**: [Duration]
- **Test Environment**: [Environment]
- **Test Results**: [Pass/Fail/Partial]

### 4.5 Deployment Timeline

#### Deployment to Staging
- **Staging Deployment Date**: [Date and Time]
- **Staging Validation**: [Pass/Fail]
- **Issues Found in Staging**: [Count]

#### Deployment to Production
- **Production Deployment Date**: [Date and Time]
- **Deployment Method**: [Hotfix/Regular release/Emergency]
- **Deployment Duration**: [Duration]

#### Post-Deployment Validation
- **Validation Start**: [Date and Time]
- **Validation End**: [Date and Time]
- **Validation Result**: [Success/Issues found]

### 4.6 Resolution and Closure

#### Bug Resolution
- **Resolution Date**: [Date and Time]
- **Total Resolution Time**: [Duration from report to resolution]
- **Resolution Verified By**: [Team/Person]

#### Issue Closure
- **Closure Date**: [Date and Time]
- **Closed By**: [Team/Person]
- **Total Lifecycle Time**: [Duration from discovery to closure]

### 4.7 Escalation History

#### Escalations
- **Escalation 1**: [Date and Time]
  - **From**: [Team/Person]
  - **To**: [Team/Person/Management]
  - **Reason**: [Reason for escalation]
  - **Outcome**: [Result]

- **Escalation 2**: [Date and Time]
  - **From**: [Team/Person]
  - **To**: [Team/Person/Management]
  - **Reason**: [Reason for escalation]
  - **Outcome**: [Result]

### 4.8 Communication Timeline

#### Stakeholder Notifications
| Date/Time | Stakeholder | Communication Type | Message Summary |
|-----------|-------------|-------------------|-----------------|
| [Timestamp] | [Stakeholder] | [Email/Meeting/Report] | [Summary] |
| [Timestamp] | [Stakeholder] | [Email/Meeting/Report] | [Summary] |

#### Status Updates
- **Update Frequency**: [How often status was communicated]
- **Total Updates Sent**: [Count]
- **Communication Channels**: [List]

### 4.9 Timeline Metrics

#### Response Metrics
- **Time to Acknowledge**: [Duration]
- **Time to Assess**: [Duration]
- **Time to Assign**: [Duration]
- **Time to Start Investigation**: [Duration]

#### Resolution Metrics
- **Time to Identify Root Cause**: [Duration]
- **Time to Develop Fix**: [Duration]
- **Time to Deploy Fix**: [Duration]
- **Total Time to Resolve**: [Duration]

#### SLA Compliance
- **SLA for This Severity**: [Target duration]
- **Actual Resolution Time**: [Actual duration]
- **SLA Met**: [Yes/No]
- **SLA Variance**: [How much over/under]

### 4.10 Delays and Blockers

#### Identified Delays
- **Delay 1**: [Description]
  - **Duration**: [Time lost]
  - **Reason**: [Why delayed]
  - **Could Have Been Avoided**: [Yes/No]

- **Delay 2**: [Description]
  - **Duration**: [Time lost]
  - **Reason**: [Why delayed]
  - **Could Have Been Avoided**: [Yes/No]

#### Blockers Encountered
- **Blocker 1**: [Description]
  - **Duration**: [Time blocked]
  - **Resolution**: [How resolved]

- **Blocker 2**: [Description]
  - **Duration**: [Time blocked]
  - **Resolution**: [How resolved]

### 4.11 Timeline Visualization

\`\`\`
[Timeline Diagram]
Discovery → Report → Acknowledge → Assess → Assign → Investigate → Fix → Test → Deploy → Verify → Close

Key Milestones:
- [Milestone 1]: [Date]
- [Milestone 2]: [Date]
- [Milestone 3]: [Date]
\`\`\`

### 4.12 Timeline Assessment

#### What Went Well
- [Positive aspect 1]
- [Positive aspect 2]

#### What Could Be Improved
- [Improvement area 1]
- [Improvement area 2]

#### Lessons Learned
- [Lesson 1]
- [Lesson 2]`,
  section: 'bug-analysis',
  order: 4,
  dependencies: ['bug-root-cause']
};

