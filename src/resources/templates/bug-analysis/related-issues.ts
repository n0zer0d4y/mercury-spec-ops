import { TemplateModule } from '../../../types';

export const bugAnalysisRelatedIssuesSection: TemplateModule = {
  id: 'bug-related-issues',
  name: 'Bug Related Issues',
  description: 'Related issues section for bug analysis template',
  content: `## 8. Related Issues

### 8.1 Directly Related Bugs

#### Bug 1: [Bug ID/Name]
- **Relationship**: [Duplicate/Related/Caused By/Causes]
- **Status**: [Open/Closed/In Progress]
- **Severity**: [Critical/High/Medium/Low]
- **Description**: [Brief description]
- **Link**: [Bug tracker link]
- **Impact on Current Bug**: [Description]

#### Bug 2: [Bug ID/Name]
- **Relationship**: [Duplicate/Related/Caused By/Causes]
- **Status**: [Open/Closed/In Progress]
- **Severity**: [Critical/High/Medium/Low]
- **Description**: [Brief description]
- **Link**: [Bug tracker link]
- **Impact on Current Bug**: [Description]

#### Bug 3: [Bug ID/Name]
- **Relationship**: [Duplicate/Related/Caused By/Causes]
- **Status**: [Open/Closed/In Progress]
- **Severity**: [Critical/High/Medium/Low]
- **Description**: [Brief description]
- **Link**: [Bug tracker link]
- **Impact on Current Bug**: [Description]

### 8.2 Duplicate Reports

#### Confirmed Duplicates
- **Report 1**: [Bug ID]
  - **Reported By**: [Name/Team]
  - **Report Date**: [Date]
  - **Variations**: [How the report differed]

- **Report 2**: [Bug ID]
  - **Reported By**: [Name/Team]
  - **Report Date**: [Date]
  - **Variations**: [How the report differed]

#### Possible Duplicates (Unconfirmed)
- **Report 1**: [Bug ID]
  - **Similarity**: [Why it might be a duplicate]
  - **Status**: [Under investigation/Confirmed different]

### 8.3 Related Features/Components

#### Affected Features
- **Feature 1**: [Name]
  - **How Affected**: [Description]
  - **Needs Testing**: [Yes/No]
  - **Status**: [Tested/Not Tested]

- **Feature 2**: [Name]
  - **How Affected**: [Description]
  - **Needs Testing**: [Yes/No]
  - **Status**: [Tested/Not Tested]

#### Related Components
- **Component 1**: [Name]
  - **Relationship**: [Dependency/Integration/Similar code]
  - **Risk Level**: [High/Medium/Low]
  - **Action Needed**: [Description]

- **Component 2**: [Name]
  - **Relationship**: [Dependency/Integration/Similar code]
  - **Risk Level**: [High/Medium/Low]
  - **Action Needed**: [Description]

### 8.4 Historical Pattern Analysis

#### Similar Bugs in History
| Bug ID | Date | Similarity | Root Cause | Resolution |
|--------|------|------------|------------|------------|
| [ID] | [Date] | [Description] | [Cause] | [How fixed] |
| [ID] | [Date] | [Description] | [Cause] | [How fixed] |
| [ID] | [Date] | [Description] | [Cause] | [How fixed] |

#### Pattern Recognition
- **Pattern Type**: [Recurring code issue/Design flaw/Process gap]
- **Frequency**: [How often similar bugs occur]
- **Trend**: [Increasing/Decreasing/Stable]
- **Underlying Issue**: [Common root cause]

### 8.5 Dependency Chain Issues

#### Upstream Dependencies
- **Dependency 1**: [Name/Version]
  - **Issue**: [Known issue in this dependency]
  - **Impact**: [How it affects current bug]
  - **Resolution**: [Upgrade/Patch/Workaround]
  - **Link**: [Issue tracker link]

- **Dependency 2**: [Name/Version]
  - **Issue**: [Known issue in this dependency]
  - **Impact**: [How it affects current bug]
  - **Resolution**: [Upgrade/Patch/Workaround]
  - **Link**: [Issue tracker link]

#### Downstream Impacts
- **System 1**: [Name]
  - **Potential Impact**: [Description]
  - **Needs Notification**: [Yes/No]
  - **Status**: [Notified/Not applicable]

- **System 2**: [Name]
  - **Potential Impact**: [Description]
  - **Needs Notification**: [Yes/No]
  - **Status**: [Notified/Not applicable]

### 8.6 Related User Reports

#### User Feedback
- **Feedback Theme 1**: [Description]
  - **Number of Reports**: [Count]
  - **Severity from User Perspective**: [High/Medium/Low]
  - **Link to Bug**: [How it relates]

- **Feedback Theme 2**: [Description]
  - **Number of Reports**: [Count]
  - **Severity from User Perspective**: [High/Medium/Low]
  - **Link to Bug**: [How it relates]

#### Feature Requests Related
- **Request 1**: [Description]
  - **Relationship**: [How it relates to the bug]
  - **Priority**: [High/Medium/Low]
  - **Link**: [Tracker link]

### 8.7 Technical Debt Items

#### Related Technical Debt
- **Debt Item 1**: [Description]
  - **How It Contributed**: [Relationship to bug]
  - **Priority**: [High/Medium/Low]
  - **Effort to Address**: [Estimate]
  - **Tracked In**: [Link]

- **Debt Item 2**: [Description]
  - **How It Contributed**: [Relationship to bug]
  - **Priority**: [High/Medium/Low]
  - **Effort to Address**: [Estimate]
  - **Tracked In**: [Link]

### 8.8 Code Areas with Similar Risk

#### High-Risk Code Areas
- **Area 1**: [Code location/module]
  - **Why at Risk**: [Similar patterns/complexity/age]
  - **Recommended Action**: [Review/Refactor/Add tests]
  - **Priority**: [High/Medium/Low]

- **Area 2**: [Code location/module]
  - **Why at Risk**: [Similar patterns/complexity/age]
  - **Recommended Action**: [Review/Refactor/Add tests]
  - **Priority**: [High/Medium/Low]

### 8.9 Related Changes

#### Recent Code Changes
| Change | Date | Author | Relationship | Impact |
|--------|------|--------|--------------|--------|
| [Commit/PR] | [Date] | [Name] | [How related] | [Impact] |
| [Commit/PR] | [Date] | [Name] | [How related] | [Impact] |

#### Related Deployments
- **Deployment 1**: [Date and version]
  - **Changes Included**: [Summary]
  - **Relationship to Bug**: [How related]

- **Deployment 2**: [Date and version]
  - **Changes Included**: [Summary]
  - **Relationship to Bug**: [How related]

### 8.10 Cross-Team Impact

#### Teams Affected
- **Team 1**: [Team name]
  - **Impact Type**: [Blocked/Delayed/Needs coordination]
  - **Action Needed**: [Description]
  - **Status**: [In progress/Resolved]

- **Team 2**: [Team name]
  - **Impact Type**: [Blocked/Delayed/Needs coordination]
  - **Action Needed**: [Description]
  - **Status**: [In progress/Resolved]

#### Cross-Team Coordination Needed
- **Coordination 1**: [Description]
  - **Teams Involved**: [List]
  - **Timeline**: [Expected duration]
  - **Owner**: [Coordinating person]

### 8.11 External Factors

#### Third-Party Service Issues
- **Service 1**: [Name]
  - **Issue**: [Description]
  - **Relationship**: [How it contributed]
  - **Status**: [Ongoing/Resolved]
  - **Link**: [Status page/Issue tracker]

#### Infrastructure Issues
- **Issue 1**: [Description]
  - **Relationship**: [How it contributed]
  - **Status**: [Ongoing/Resolved]
  - **Provider**: [Cloud provider/Internal]

### 8.12 Knowledge Base Articles

#### Related Documentation
- **Article 1**: [Title]
  - **Relevance**: [How it relates]
  - **Link**: [URL]
  - **Needs Update**: [Yes/No]

- **Article 2**: [Title]
  - **Relevance**: [How it relates]
  - **Link**: [URL]
  - **Needs Update**: [Yes/No]

#### Troubleshooting Guides
- **Guide 1**: [Title]
  - **Covers**: [What aspect]
  - **Link**: [URL]
  - **Quality**: [Good/Needs improvement]

### 8.13 Regulatory and Compliance

#### Compliance Implications
- **Regulation 1**: [Name]
  - **Potential Impact**: [Description]
  - **Compliance Team Notified**: [Yes/No]
  - **Action Required**: [Description]

#### Audit Trail
- **Audit Requirement**: [Description]
- **Documentation Status**: [Complete/In progress]
- **Audit Contact**: [Name/Team]

### 8.14 Related Epic/Initiative

#### Parent Epic
- **Epic Name**: [Name]
- **Epic Status**: [Status]
- **How Bug Affects Epic**: [Description]
- **Timeline Impact**: [Impact on epic delivery]

#### Related Initiatives
- **Initiative 1**: [Name]
  - **Relationship**: [How related]
  - **Impact**: [Description]

### 8.15 Lessons for Future Development

#### Preventive Patterns
- **Pattern 1**: [Description of what to watch for]
  - **Detection Method**: [How to catch similar issues early]
  - **Mitigation Strategy**: [How to prevent]

- **Pattern 2**: [Description of what to watch for]
  - **Detection Method**: [How to catch similar issues early]
  - **Mitigation Strategy**: [How to prevent]

#### Code Review Focus Areas
- **Focus Area 1**: [What reviewers should watch for]
- **Focus Area 2**: [What reviewers should watch for]
- **Focus Area 3**: [What reviewers should watch for]`,
  section: 'bug-analysis',
  order: 8,
  dependencies: ['bug-post-mortem']
};

