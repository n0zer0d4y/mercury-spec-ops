import { TemplateModule } from '../../../types';

export const codebaseAnalysisStatisticsSection: TemplateModule = {
  id: 'codebase-statistics',
  name: 'Codebase Statistics',
  description: 'Statistics section for codebase analysis template',
  content: `## 2. Codebase Statistics

### 2.1 Size Metrics
- **Total Lines of Code**: [Number]
- **Source Lines of Code (SLOC)**: [Number]
- **Comment Lines**: [Number]
- **Blank Lines**: [Number]
- **Comment Ratio**: [Percentage]

### 2.2 File Distribution
- **Total Files**: [Number]
- **Source Files**: [Number by type]
- **Test Files**: [Number]
- **Configuration Files**: [Number]
- **Documentation Files**: [Number]

### 2.3 Language Distribution
| Language | Files | Lines | Percentage |
|----------|-------|-------|------------|
| [Language 1] | [Count] | [Lines] | [%] |
| [Language 2] | [Count] | [Lines] | [%] |
| [Language 3] | [Count] | [Lines] | [%] |

### 2.4 Directory Structure
\`\`\`
[Project Root]
├── [Directory 1] ([Files count])
├── [Directory 2] ([Files count])
├── [Directory 3] ([Files count])
└── [Directory 4] ([Files count])
\`\`\`

### 2.5 Complexity Metrics
- **Cyclomatic Complexity (Average)**: [Value]
- **Cognitive Complexity (Average)**: [Value]
- **Maximum Complexity**: [Value] ([Location])
- **Files with High Complexity (>15)**: [Count]

### 2.6 Codebase Age and Activity
- **Repository Age**: [Duration]
- **Active Development Period**: [Duration]
- **Total Commits**: [Number]
- **Contributors**: [Number]
- **Recent Activity (Last 30 days)**: [Commits count]

### 2.7 Growth Trends
| Period | Lines Added | Lines Deleted | Net Change |
|--------|-------------|---------------|------------|
| Last Month | [Number] | [Number] | [Number] |
| Last Quarter | [Number] | [Number] | [Number] |
| Last Year | [Number] | [Number] | [Number] |`,
  section: 'codebase-analysis',
  order: 2,
  dependencies: ['codebase-overview']
};

