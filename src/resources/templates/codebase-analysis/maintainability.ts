import { TemplateModule } from '../../../types';

export const codebaseAnalysisMaintainabilitySection: TemplateModule = {
  id: 'codebase-maintainability',
  name: 'Codebase Maintainability',
  description: 'Maintainability analysis section for codebase analysis template',
  content: `## 7. Maintainability Analysis

### 7.1 Maintainability Index
- **Overall MI Score**: [0-100]
- **High Maintainability (MI > 85)**: [Percentage of codebase]
- **Medium Maintainability (MI 65-85)**: [Percentage of codebase]
- **Low Maintainability (MI < 65)**: [Percentage of codebase]

### 7.2 Technical Debt

#### Debt Estimate
- **Total Technical Debt**: [Hours or story points]
- **Debt per Developer**: [Average]
- **Debt-to-Development Ratio**: [Percentage]
- **Interest Rate**: [Time added per feature due to debt]

#### Debt Categories
- **Code Complexity**: [Debt amount]
- **Code Duplication**: [Debt amount]
- **Code Coverage Gaps**: [Debt amount]
- **Documentation**: [Debt amount]
- **Architecture Issues**: [Debt amount]

#### High-Impact Debt Items
- **Item 1**: [Description]
  - **Impact**: [Description]
  - **Effort to Fix**: [Estimate]
  - **Priority**: [High/Medium/Low]

- **Item 2**: [Description]
  - **Impact**: [Description]
  - **Effort to Fix**: [Estimate]
  - **Priority**: [High/Medium/Low]

### 7.3 Code Complexity

#### Function/Method Complexity
- **Functions > 50 lines**: [Count]
- **Functions with CC > 15**: [Count]
- **Most Complex Functions**: [List top 5]

#### File Complexity
- **Large Files (> 500 lines)**: [Count]
- **Most Complex Files**: [List top 5]
- **God Classes**: [Identified classes]

### 7.4 Code Organization

#### Module Cohesion
- **High Cohesion Modules**: [Count and examples]
- **Low Cohesion Modules**: [Count and examples]
- **Recommendations**: [Reorganization suggestions]

#### Module Coupling
- **Tight Coupling Issues**: [Count and locations]
- **Circular Dependencies**: [Count]
- **Coupling Metrics**: [Average fan-in/fan-out]

### 7.5 Code Evolution

#### Change Hotspots
- **Most Changed Files**: [List top 10]
- **Change Frequency**: [Changes per month]
- **Bug-Prone Files**: [Files with high bug count]

#### Code Churn
- **High Churn Areas**: [Areas with frequent rewrites]
- **Churn Rate**: [Percentage per month]
- **Stability Assessment**: [Assessment]

### 7.6 Refactoring Opportunities

#### High Priority Refactoring
- **Opportunity 1**: [Description]
  - **Current Issues**: [Problems]
  - **Benefits**: [Expected improvements]
  - **Effort**: [Estimate]

- **Opportunity 2**: [Description]
  - **Current Issues**: [Problems]
  - **Benefits**: [Expected improvements]
  - **Effort**: [Estimate]

#### Medium Priority Refactoring
- **Opportunity 1**: [Description]
- **Opportunity 2**: [Description]

### 7.7 Naming Conventions
- **Consistency**: [Assessment]
- **Clarity**: [Assessment]
- **Issues Found**: [Examples of poor naming]
- **Recommendations**: [Improvements]

### 7.8 Error Handling
- **Error Handling Strategy**: [Consistent/Inconsistent]
- **Exception Usage**: [Appropriate/Needs improvement]
- **Error Logging**: [Assessment]
- **Error Recovery**: [Assessment]

### 7.9 Maintainability Recommendations
- **Recommendation 1**: [Description]
- **Recommendation 2**: [Description]
- **Recommendation 3**: [Description]`,
  section: 'codebase-analysis',
  order: 7,
  dependencies: ['codebase-performance']
};

