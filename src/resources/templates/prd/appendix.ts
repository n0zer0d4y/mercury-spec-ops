import { TemplateModule } from "../../../types";

export const prdAppendixSection: TemplateModule = {
  id: "prd-appendix",
  name: "PRD Appendix",
  description: "Appendix section for PRD template",
  content: `## 14. Appendix

### 14.1 Glossary
- **Term 1**: [Definition]
- **Term 2**: [Definition]
- **Term 3**: [Definition]
- **Term 4**: [Definition]

### 14.2 Acronyms
- **API**: Application Programming Interface
- **PRD**: Product Requirements Document
- **UI/UX**: User Interface/User Experience
- **[Acronym]**: [Full form]

### 14.3 References

#### Documentation
- [Document Title 1]: [Link or location]
- [Document Title 2]: [Link or location]

#### Research and Studies
- [Study Title 1]: [Link or citation]
- [Study Title 2]: [Link or citation]

#### Related Projects
- [Project Name 1]: [Link and description]
- [Project Name 2]: [Link and description]

#### External Resources
- [Resource Name 1]: [Link]
- [Resource Name 2]: [Link]

### 14.4 Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | [Date] | [Author] | Initial draft |
| 0.2 | [Date] | [Author] | [Changes description] |
| 1.0 | [Date] | [Author] | First release |

### 14.5 Stakeholder Sign-off

| Stakeholder | Role | Signature | Date |
|-------------|------|-----------|------|
| [Name] | Product Manager | | |
| [Name] | Engineering Lead | | |
| [Name] | Design Lead | | |
| [Name] | Business Owner | | |

### 14.6 Additional Notes
[Any additional information that doesn't fit in other sections]`,
  section: "prd",
  order: 14,
  dependencies: ["prd-assumptions"],
};
