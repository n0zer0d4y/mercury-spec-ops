import { TemplateModule } from '../../../types';

export const prdBusinessContextSection: TemplateModule = {
  id: 'prd-business-context',
  name: 'PRD Business Context',
  description: 'Business context section for PRD template',
  content: `## 2. Business Context

### 2.1 Market Analysis
- **Market Size**: [Total addressable market size]
- **Market Growth**: [Growth rate and trends]
- **Target Market Segment**: [Specific segment being targeted]
- **Market Opportunity**: [Specific opportunity identified]

### 2.2 Competitive Landscape
#### Direct Competitors
- **Competitor 1**: [Name] - [Key strengths and weaknesses]
- **Competitor 2**: [Name] - [Key strengths and weaknesses]
- **Competitor 3**: [Name] - [Key strengths and weaknesses]

#### Indirect Competitors
- **Alternative Solution 1**: [Description]
- **Alternative Solution 2**: [Description]

### 2.3 Competitive Advantage
- **Unique Value Proposition**: [What makes this product unique]
- **Differentiation Strategy**: [How product stands out]
- **Barriers to Entry**: [Competitive moats being built]

### 2.4 Business Value
- **Revenue Impact**: [Expected revenue contribution]
- **Cost Savings**: [Expected cost reductions]
- **Strategic Value**: [Alignment with business strategy]
- **Customer Acquisition**: [Expected customer growth]
- **Market Position**: [Impact on market position]`,
  section: 'prd',
  order: 2,
  dependencies: ['prd-overview']
};

