import { TemplateModule } from '../../../types';

export const codebaseAnalysisCodeQualitySection: TemplateModule = {
  id: 'codebase-code-quality',
  name: 'Codebase Code Quality',
  description: 'Code quality analysis section for codebase analysis template',
  content: `## 4. Code Quality Analysis

### 4.1 Code Style and Formatting

#### Linting
- **Linter Used**: [Tool name and version]
- **Configuration**: [Standard/Custom]
- **Linting Errors**: [Count]
- **Linting Warnings**: [Count]
- **Linting Disabled Areas**: [Count and justification]

#### Formatting
- **Formatter Used**: [Tool name]
- **Formatting Consistency**: [Percentage of files following standards]
- **Style Guide**: [Style guide being followed]

### 4.2 Code Smells

#### High Priority Issues
- **Issue 1**: [Description]
  - **Locations**: [File paths]
  - **Impact**: [Description]
  - **Recommendation**: [Fix suggestion]

- **Issue 2**: [Description]
  - **Locations**: [File paths]
  - **Impact**: [Description]
  - **Recommendation**: [Fix suggestion]

#### Medium Priority Issues
- **Issue 1**: [Description]
  - **Count**: [Occurrences]
  - **Recommendation**: [Fix suggestion]

#### Low Priority Issues
- **Summary**: [Overview of minor issues]
- **Count**: [Total occurrences]

### 4.3 Code Documentation

#### Inline Comments
- **Comment Density**: [Comments per 100 lines]
- **Quality Assessment**: [Good/Fair/Poor]
- **TODO/FIXME Count**: [Number]

#### Function/Method Documentation
- **Documented Functions**: [Percentage]
- **Documentation Quality**: [Assessment]
- **Missing Documentation**: [Count and key areas]

#### Module/Class Documentation
- **Documented Modules**: [Percentage]
- **Documentation Completeness**: [Assessment]

### 4.4 Test Coverage

#### Unit Test Coverage
- **Line Coverage**: [Percentage]
- **Branch Coverage**: [Percentage]
- **Function Coverage**: [Percentage]
- **Uncovered Critical Paths**: [List]

#### Integration Test Coverage
- **Test Count**: [Number]
- **Coverage Areas**: [Description]
- **Gaps**: [Areas not covered]

#### Test Quality
- **Test-to-Code Ratio**: [Ratio]
- **Average Test Complexity**: [Value]
- **Flaky Tests**: [Count]
- **Test Maintenance**: [Assessment]

### 4.5 Code Duplication
- **Duplication Percentage**: [Percentage]
- **Duplicated Blocks**: [Count]
- **Largest Duplication**: [Description and location]
- **Refactoring Opportunities**: [List]

### 4.6 Best Practices Adherence

#### Language-Specific Practices
- **Practice 1**: [Assessment]
- **Practice 2**: [Assessment]
- **Practice 3**: [Assessment]

#### Design Patterns Usage
- **Pattern 1**: [Usage and appropriateness]
- **Pattern 2**: [Usage and appropriateness]
- **Anti-patterns Found**: [List]

### 4.7 Code Quality Score
- **Overall Quality Score**: [Score out of 10]
- **Maintainability Index**: [Value]
- **Technical Debt Ratio**: [Percentage]`,
  section: 'codebase-analysis',
  order: 4,
  dependencies: ['codebase-architecture']
};

