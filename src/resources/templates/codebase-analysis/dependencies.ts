import { TemplateModule } from '../../../types';

export const codebaseAnalysisDependenciesSection: TemplateModule = {
  id: 'codebase-dependencies',
  name: 'Codebase Dependencies',
  description: 'Dependencies analysis section for codebase analysis template',
  content: `## 10. Dependencies Analysis

### 10.1 Package Overview

#### Direct Dependencies
- **Total Count**: [Number]
- **Production Dependencies**: [Number]
- **Development Dependencies**: [Number]
- **Peer Dependencies**: [Number]

#### Dependency Tree
- **Total Dependencies (including transitive)**: [Number]
- **Dependency Depth**: [Maximum level]
- **Duplicate Dependencies**: [Count]

### 10.2 Dependency List

#### Production Dependencies
| Package | Version | Latest Version | License | Purpose |
|---------|---------|----------------|---------|---------|
| [Package 1] | [Current] | [Latest] | [License] | [Purpose] |
| [Package 2] | [Current] | [Latest] | [License] | [Purpose] |
| [Package 3] | [Current] | [Latest] | [License] | [Purpose] |

#### Development Dependencies
| Package | Version | Latest Version | License | Purpose |
|---------|---------|----------------|---------|---------|
| [Package 1] | [Current] | [Latest] | [License] | [Purpose] |
| [Package 2] | [Current] | [Latest] | [License] | [Purpose] |

### 10.3 Outdated Dependencies

#### Major Version Updates Available
- **Package 1**: [Current version] → [Latest version]
  - **Breaking Changes**: [Description]
  - **Update Priority**: [High/Medium/Low]
  - **Effort Estimate**: [Hours/Days]

- **Package 2**: [Current version] → [Latest version]
  - **Breaking Changes**: [Description]
  - **Update Priority**: [High/Medium/Low]
  - **Effort Estimate**: [Hours/Days]

#### Minor/Patch Updates Available
- **Count**: [Number]
- **Recommended Action**: [Update strategy]

#### Deprecated Dependencies
- **Package 1**: [Description]
  - **Deprecation Date**: [Date]
  - **Alternative**: [Suggested replacement]
  - **Migration Effort**: [Estimate]

### 10.4 Security Vulnerabilities

#### Critical Vulnerabilities
- **Vulnerability 1**: [CVE ID]
  - **Affected Package**: [Package name and version]
  - **Severity**: [Critical]
  - **Description**: [Description]
  - **Fix Available**: [Yes/No - version]
  - **Workaround**: [If available]

#### High Severity Vulnerabilities
- **Count**: [Number]
- **Details**: [Summary]

#### Medium/Low Severity Vulnerabilities
- **Count**: [Number]
- **Action Required**: [Priority]

### 10.5 License Compliance

#### License Distribution
| License Type | Count | Risk Level |
|--------------|-------|------------|
| MIT | [Count] | Low |
| Apache 2.0 | [Count] | Low |
| GPL | [Count] | High |
| [Other] | [Count] | [Risk] |

#### License Issues
- **Incompatible Licenses**: [List]
- **Compliance Risks**: [Description]
- **Required Actions**: [List]

### 10.6 Dependency Health

#### Maintenance Status
- **Well-Maintained (Updated < 6 months)**: [Count]
- **Stale (Updated 6-12 months ago)**: [Count]
- **Unmaintained (Updated > 12 months ago)**: [Count]
- **Abandoned**: [Count and list]

#### Community Health
| Package | Stars | Contributors | Last Commit | Health Score |
|---------|-------|--------------|-------------|--------------|
| [Package 1] | [Count] | [Count] | [Date] | [Score/10] |
| [Package 2] | [Count] | [Count] | [Date] | [Score/10] |

### 10.7 Dependency Size Impact

#### Bundle Size
- **Total Dependency Size**: [MB]
- **Largest Dependencies**: [Top 5 with sizes]
- **Tree-Shaking Opportunities**: [List]

#### Load Time Impact
- **Initial Load Dependencies**: [Count and size]
- **Lazy-Loaded Dependencies**: [Count and size]
- **CDN-Loaded Dependencies**: [Count]

### 10.8 Dependency Conflicts

#### Version Conflicts
- **Conflict 1**: [Package A requires v1, Package B requires v2]
  - **Resolution**: [How resolved]
  - **Impact**: [Description]

#### Peer Dependency Warnings
- **Count**: [Number]
- **Critical Warnings**: [List]

### 10.9 Internal Dependencies

#### Module Dependencies
- **Inter-Module Dependencies**: [Count]
- **Circular Dependencies**: [Count and locations]
- **Highly Coupled Modules**: [List]

#### Dependency Graph Complexity
- **Average Fan-Out**: [Number]
- **Maximum Fan-Out**: [Number and module]
- **Modularity Score**: [Score]

### 10.10 Dependency Management

#### Update Strategy
- **Update Frequency**: [Schedule]
- **Testing Process**: [Description]
- **Approval Process**: [Description]

#### Dependency Review Process
- **Security Review**: [Process]
- **License Review**: [Process]
- **Performance Review**: [Process]

### 10.11 Alternative Considerations

#### Overengineered Dependencies
- **Package 1**: [Description]
  - **Usage**: [What features are actually used]
  - **Alternative**: [Lighter alternative]
  - **Effort**: [Migration estimate]

#### Consolidation Opportunities
- **Opportunity 1**: [Multiple packages doing similar things]
  - **Packages**: [List]
  - **Suggested Consolidation**: [Approach]

### 10.12 Recommendations

#### Immediate Actions
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

#### Short-term Actions (1-3 months)
- [Recommendation 1]
- [Recommendation 2]

#### Long-term Actions (3-12 months)
- [Recommendation 1]
- [Recommendation 2]`,
  section: 'codebase-analysis',
  order: 10,
  dependencies: ['codebase-reliability']
};

