import { TemplateModule } from '../../../types';

export const bugAnalysisPostMortemSection: TemplateModule = {
  id: 'bug-post-mortem',
  name: 'Bug Post-Mortem',
  description: 'Post-mortem section for bug analysis template',
  content: `## 7. Post-Mortem

### 7.1 Executive Summary
[Brief summary of the incident, impact, and resolution]

### 7.2 Incident Overview

#### What Happened
- **Incident Summary**: [Concise description of what went wrong]
- **Services Affected**: [List of affected services/components]
- **Users Affected**: [Number or percentage]
- **Duration**: [Total time from start to resolution]
- **Severity Assessment**: [Was initial severity assessment correct?]

#### Timeline Summary
- **Detection**: [How and when detected]
- **Response**: [How and when response began]
- **Mitigation**: [How and when mitigated]
- **Resolution**: [How and when fully resolved]

### 7.3 Root Cause Analysis

#### Primary Root Cause
- **Cause**: [Detailed description]
- **Why It Occurred**: [Underlying reasons]
- **How It Passed Through**:
  - Development: [Why not caught]
  - Code Review: [Why not caught]
  - Testing: [Why not caught]
  - Monitoring: [Why not caught earlier]

#### Contributing Factors
- **Factor 1**: [Description and impact]
- **Factor 2**: [Description and impact]
- **Factor 3**: [Description and impact]

### 7.4 Impact Analysis

#### User Impact
- **Users Affected**: [Specific count or percentage]
- **Impact Duration**: [How long users were affected]
- **Impact Severity**: [Description of user experience]
- **User Complaints**: [Count and nature]
- **Reputation Impact**: [Assessment]

#### Business Impact
- **Revenue Loss**: [Estimated amount]
- **SLA Violations**: [Count and details]
- **Customer Churn**: [Count or estimate]
- **Brand Impact**: [Assessment]
- **Contract Penalties**: [If applicable]

#### Technical Impact
- **Data Loss**: [Any data lost?]
- **Data Corruption**: [Any data corrupted?]
- **System Degradation**: [Other systems affected?]
- **Technical Debt Created**: [Workarounds that became debt]

### 7.5 Response Evaluation

#### What Went Well
- **Positive Action 1**: [Description]
  - **Why It Worked**: [Explanation]
  - **Can Be Repeated**: [Yes/No]

- **Positive Action 2**: [Description]
  - **Why It Worked**: [Explanation]
  - **Can Be Repeated**: [Yes/No]

#### What Didn't Go Well
- **Issue 1**: [Description]
  - **Why It Was Problematic**: [Explanation]
  - **Impact on Resolution**: [Description]

- **Issue 2**: [Description]
  - **Why It Was Problematic**: [Explanation]
  - **Impact on Resolution**: [Description]

#### Response Time Analysis
- **Detection Time**: [Was it fast enough?]
- **Response Time**: [Was it fast enough?]
- **Communication Time**: [Was it timely?]
- **Resolution Time**: [Was it acceptable?]

### 7.6 Lessons Learned

#### Technical Lessons
- **Lesson 1**: [Description]
  - **Actionable Insight**: [What to do differently]

- **Lesson 2**: [Description]
  - **Actionable Insight**: [What to do differently]

#### Process Lessons
- **Lesson 1**: [Description]
  - **Actionable Insight**: [What to do differently]

- **Lesson 2**: [Description]
  - **Actionable Insight**: [What to do differently]

#### Communication Lessons
- **Lesson 1**: [Description]
  - **Actionable Insight**: [What to do differently]

#### Monitoring Lessons
- **Lesson 1**: [Description]
  - **Actionable Insight**: [What to do differently]

### 7.7 Prevention Measures

#### Immediate Prevention (0-1 month)
- **Action 1**: [Description]
  - **Owner**: [Team/Person]
  - **Deadline**: [Date]
  - **Status**: [Not Started/In Progress/Complete]

- **Action 2**: [Description]
  - **Owner**: [Team/Person]
  - **Deadline**: [Date]
  - **Status**: [Not Started/In Progress/Complete]

#### Short-term Prevention (1-3 months)
- **Action 1**: [Description]
  - **Owner**: [Team/Person]
  - **Deadline**: [Date]
  - **Status**: [Not Started/In Progress/Complete]

- **Action 2**: [Description]
  - **Owner**: [Team/Person]
  - **Deadline**: [Date]
  - **Status**: [Not Started/In Progress/Complete]

#### Long-term Prevention (3-12 months)
- **Action 1**: [Description]
  - **Owner**: [Team/Person]
  - **Deadline**: [Date]
  - **Status**: [Not Started/In Progress/Complete]

### 7.8 Process Improvements

#### Development Process
- **Improvement 1**: [Description]
  - **Expected Benefit**: [Description]
  - **Implementation Plan**: [Brief plan]

- **Improvement 2**: [Description]
  - **Expected Benefit**: [Description]
  - **Implementation Plan**: [Brief plan]

#### Testing Process
- **Improvement 1**: [Description]
  - **Expected Benefit**: [Description]
  - **Implementation Plan**: [Brief plan]

#### Deployment Process
- **Improvement 1**: [Description]
  - **Expected Benefit**: [Description]
  - **Implementation Plan**: [Brief plan]

#### Monitoring and Alerting
- **Improvement 1**: [Description]
  - **Expected Benefit**: [Description]
  - **Implementation Plan**: [Brief plan]

### 7.9 Action Items

#### High Priority Actions
| Action | Owner | Deadline | Status | Success Criteria |
|--------|-------|----------|--------|------------------|
| [Action 1] | [Owner] | [Date] | [Status] | [Criteria] |
| [Action 2] | [Owner] | [Date] | [Status] | [Criteria] |
| [Action 3] | [Owner] | [Date] | [Status] | [Criteria] |

#### Medium Priority Actions
| Action | Owner | Deadline | Status | Success Criteria |
|--------|-------|----------|--------|------------------|
| [Action 1] | [Owner] | [Date] | [Status] | [Criteria] |
| [Action 2] | [Owner] | [Date] | [Status] | [Criteria] |

#### Low Priority Actions
| Action | Owner | Deadline | Status | Success Criteria |
|--------|-------|----------|--------|------------------|
| [Action 1] | [Owner] | [Date] | [Status] | [Criteria] |

### 7.10 Communication Review

#### Internal Communication
- **Effectiveness**: [Good/Fair/Poor]
- **Gaps Identified**: [Description]
- **Improvements Needed**: [Description]

#### External Communication
- **Customer Communication**: [Assessment]
- **Transparency Level**: [Assessment]
- **Timeliness**: [Assessment]
- **Accuracy**: [Assessment]

### 7.11 Documentation Updates

#### Documentation to Update
- **Document 1**: [Name]
  - **Updates Needed**: [Description]
  - **Owner**: [Team/Person]
  - **Status**: [Not Started/In Progress/Complete]

- **Document 2**: [Name]
  - **Updates Needed**: [Description]
  - **Owner**: [Team/Person]
  - **Status**: [Not Started/In Progress/Complete]

#### New Documentation Needed
- **Document 1**: [Name and purpose]
- **Document 2**: [Name and purpose]

### 7.12 Follow-Up Plan

#### Action Item Tracking
- **Review Frequency**: [Weekly/Biweekly/Monthly]
- **Review Owner**: [Team/Person]
- **Review Format**: [Meeting/Report]

#### Effectiveness Measurement
- **Metrics to Track**: [List]
- **Success Indicators**: [Description]
- **Review Timeline**: [When to assess if changes are working]

### 7.13 Similar Incidents

#### Historical Context
- **Previous Similar Incidents**: [Count]
- **Pattern Identified**: [Yes/No - Description]
- **Recurring Root Cause**: [Yes/No - Description]

#### Systemic Issues
- **Underlying Systemic Problem**: [Description if applicable]
- **Broader Implications**: [Description]
- **Architectural Changes Needed**: [Yes/No - Description]

### 7.14 Post-Mortem Meeting

#### Meeting Details
- **Date**: [Date]
- **Attendees**: [List]
- **Duration**: [Duration]
- **Facilitator**: [Name]

#### Key Discussion Points
- [Point 1]
- [Point 2]
- [Point 3]

#### Agreements Reached
- [Agreement 1]
- [Agreement 2]

### 7.15 Accountability and Blame

#### Blameless Post-Mortem
- **This is a blameless post-mortem**: The goal is to learn and improve, not to assign blame
- **Individual mistakes are symptoms**: Focus on systemic issues
- **Everyone did their best**: Given the information and circumstances at the time

#### Systemic Accountability
- **Process Gaps**: [Identified gaps]
- **Tool Limitations**: [Identified limitations]
- **Training Needs**: [Identified needs]`,
  section: 'bug-analysis',
  order: 7,
  dependencies: ['bug-resolution']
};

