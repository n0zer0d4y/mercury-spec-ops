import { 
  TemplateBuilder, 
  EnhancedPromptArguments, 
  TemplateAssemblyConfig,
  TemplateModuleRegistry,
  TemplateModule
} from '../types';
import { AnalysisFocus } from '../types/enums';

// Import PRD template modules
import { prdOverviewSection, prdRequirementsSection, prdTimelineSection } from './templates/prd/overview';

// Import codebase analysis template modules
import { 
  codebaseAnalysisOverviewSection, 
  codebaseAnalysisArchitectureSection, 
  codebaseAnalysisSecuritySection, 
  codebaseAnalysisPerformanceSection, 
  codebaseAnalysisRecommendationsSection 
} from './templates/codebase-analysis/architecture';

// Import bug analysis template modules
import { 
  bugAnalysisOverviewSection, 
  bugAnalysisReproductionSection, 
  bugAnalysisRootCauseSection, 
  bugAnalysisImpactSection, 
  bugAnalysisResolutionSection 
} from './templates/bug-analysis/reproduction';

export class ModularTemplateBuilder implements TemplateBuilder {
  private registry: TemplateModuleRegistry;

  constructor() {
    this.registry = this.initializeRegistry();
  }

  private initializeRegistry(): TemplateModuleRegistry {
    const modules = new Map<string, TemplateModule>();

    // Register PRD template modules
    const prdModules = [prdOverviewSection, prdRequirementsSection, prdTimelineSection];
    prdModules.forEach(module => modules.set(module.id, module));

    // Register codebase analysis template modules
    const codebaseModules = [
      codebaseAnalysisOverviewSection, 
      codebaseAnalysisArchitectureSection, 
      codebaseAnalysisSecuritySection, 
      codebaseAnalysisPerformanceSection, 
      codebaseAnalysisRecommendationsSection
    ];
    codebaseModules.forEach(module => modules.set(module.id, module));

    // Register bug analysis template modules
    const bugModules = [
      bugAnalysisOverviewSection, 
      bugAnalysisReproductionSection, 
      bugAnalysisRootCauseSection, 
      bugAnalysisImpactSection, 
      bugAnalysisResolutionSection
    ];
    bugModules.forEach(module => modules.set(module.id, module));

    return {
      getModule: (id: string) => modules.get(id),
      getModulesByTag: (tag: string) => Array.from(modules.values()).filter(m => m.section === tag),
      getAllModules: () => Array.from(modules.values()),
      registerModule: (module: TemplateModule) => modules.set(module.id, module),
      getTemplateSections: (section: string) => Array.from(modules.values()).filter(m => m.section === section)
    };
  }

  private assembleTemplateModules(config: TemplateAssemblyConfig): string {
    let assembledTemplate = config.baseTemplate;

    // Sort sections by order and resolve dependencies
    const orderedSections = this.resolveDependencies(config.sections);
    
    // Add sections in order
    orderedSections.forEach(section => {
      assembledTemplate += `\n\n${section.content}`;
    });

    // Add custom sections
    if (config.customSections && config.customSections.length > 0) {
      assembledTemplate += '\n\n## Custom Sections\n';
      config.customSections.forEach(section => {
        assembledTemplate += `\n\n${section.content}`;
      });
    }

    return assembledTemplate;
  }

  private resolveDependencies(sections: TemplateModule[]): TemplateModule[] {
    const resolved: TemplateModule[] = [];
    const remaining = new Set(sections);
    const processed = new Set<string>();

    // Helper to check if all dependencies are processed
    const canProcess = (module: TemplateModule): boolean => {
      return !module.dependencies || 
             module.dependencies.every(dep => processed.has(dep));
    };

    // Topological sort
    while (remaining.size > 0) {
      let found = false;
      
      for (const module of remaining) {
        if (canProcess(module)) {
          resolved.push(module);
          processed.add(module.id);
          remaining.delete(module);
          found = true;
          break;
        }
      }

      if (!found) {
        // Circular dependency detected, add remaining modules in order
        const remainingArray = Array.from(remaining).sort((a, b) => a.order - b.order);
        resolved.push(...remainingArray);
        break;
      }
    }

    return resolved.sort((a, b) => a.order - b.order);
  }

  buildPRDTemplate(config?: EnhancedPromptArguments): string {
    const baseTemplate = '';
    
    // Get PRD template sections
    const sections = this.registry.getTemplateSections('prd');
    
    // Filter sections based on configuration if provided
    let filteredSections = sections;
    if (config) {
      // For PRD, we might want to add technology-specific sections
      if (config.technology_stack) {
        // Add technology-specific considerations
        const techSection: TemplateModule = {
          id: 'prd-technology-specific',
          name: 'Technology-Specific Considerations',
          description: 'Technology-specific considerations for PRD',
          content: `## 6. Technology-Specific Considerations

### 6.1 Technology Stack Analysis
- **Chosen Technologies**: ${Array.isArray(config.technology_stack) ? config.technology_stack.join(', ') : config.technology_stack}
- **Rationale**: [Explanation for technology choices]
- **Alternatives Considered**: [List and reasons for rejection]

### 6.2 Technical Requirements
- **Performance Requirements**: [Specific to chosen technologies]
- **Security Requirements**: [Specific to chosen technologies]
- **Scalability Requirements**: [Specific to chosen technologies]

### 6.3 Integration Requirements
- **Third-party Integrations**: [List and description]
- **API Requirements**: [Description of API needs]
- **Data Migration**: [If applicable]`,
          section: 'prd',
          order: 6,
          dependencies: ['prd-requirements']
        };
        filteredSections.push(techSection);
      }
    }

    const assemblyConfig: TemplateAssemblyConfig = {
      baseTemplate,
      sections: filteredSections,
      customSections: config?.custom_instructions ? [{
        id: 'prd-custom',
        name: 'Custom Instructions',
        description: 'Custom instructions for PRD',
        content: `## Custom Instructions\n${config.custom_instructions}`,
        section: 'prd',
        order: 999,
        dependencies: []
      }] : undefined
    };

    return this.assembleTemplateModules(assemblyConfig);
  }

  buildCodebaseAnalysisTemplate(config?: EnhancedPromptArguments): string {
    const baseTemplate = '';
    
    // Get codebase analysis template sections
    let sections = this.registry.getTemplateSections('codebase-analysis');
    
    // Filter and enhance sections based on configuration
    if (config) {
      // Add technology-specific sections if specified
      if (config.technology_stack) {
        const techSection: TemplateModule = {
          id: 'codebase-technology-specific',
          name: 'Technology-Specific Analysis',
          description: 'Technology-specific analysis for codebase',
          content: `## 7. Technology Stack Evaluation

### 7.1 Frameworks and Libraries
- **Technology Stack**: ${Array.isArray(config.technology_stack) ? config.technology_stack.join(', ') : config.technology_stack}
- **Version Analysis**: [Current versions and assessment]
- **Usage Patterns**: [How technologies are used in the codebase]

### 7.2 Technology-Specific Best Practices
- [Technology 1] Best Practices Assessment
- [Technology 2] Best Practices Assessment
- [Technology 3] Best Practices Assessment

### 7.3 Technology-Specific Issues
- **Known Issues**: [Technology-specific problems identified]
- **Deprecated Features**: [Usage of deprecated features]
- **Upgrade Considerations**: [Upgrade path and challenges]`,
          section: 'codebase-analysis',
          order: 7,
          dependencies: ['codebase-architecture']
        };
        sections.push(techSection);
      }

      // Add focus-specific sections if specified
      if (config.analysis_focus) {
        const focuses = Array.isArray(config.analysis_focus) ? config.analysis_focus : [config.analysis_focus];
        
        if (focuses.includes(AnalysisFocus.SECURITY)) {
          // Security section is already included by default
        }
        
        if (focuses.includes(AnalysisFocus.PERFORMANCE)) {
          // Performance section is already included by default
        }
        
        if (focuses.includes(AnalysisFocus.TESTING)) {
          const testingSection: TemplateModule = {
            id: 'codebase-testing',
            name: 'Testing Coverage',
            description: 'Testing coverage analysis',
            content: `## 8. Testing Coverage

### 8.1 Test Structure
- **Unit Tests**: [Coverage percentage, quality]
- **Integration Tests**: [Coverage percentage, quality]
- **End-to-End Tests**: [Coverage percentage, quality]

### 8.2 Testing Frameworks
- **Framework 1**: [Usage assessment]
- **Framework 2**: [Usage assessment]

### 8.3 Testing Recommendations
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]`,
            section: 'codebase-analysis',
            order: 8,
            dependencies: ['codebase-architecture']
          };
          sections.push(testingSection);
        }
      }
    }

    const assemblyConfig: TemplateAssemblyConfig = {
      baseTemplate,
      sections,
      customSections: config?.custom_instructions ? [{
        id: 'codebase-custom',
        name: 'Custom Instructions',
        description: 'Custom instructions for codebase analysis',
        content: `## Custom Instructions\n${config.custom_instructions}`,
        section: 'codebase-analysis',
        order: 999,
        dependencies: []
      }] : undefined
    };

    return this.assembleTemplateModules(assemblyConfig);
  }

  buildBugAnalysisTemplate(config?: EnhancedPromptArguments): string {
    const baseTemplate = '';
    
    // Get bug analysis template sections
    let sections = this.registry.getTemplateSections('bug-analysis');
    
    // Enhance sections based on configuration
    if (config) {
      // Add severity-specific sections
      if (config.severity_level) {
        const severitySection: TemplateModule = {
          id: 'bug-severity-specific',
          name: 'Severity-Specific Analysis',
          description: 'Severity-specific analysis for bug',
          content: `## 4. Severity-Specific Analysis

### 4.1 ${config.severity_level.toUpperCase()} Severity Impact
- **System Impact**: [Specific to ${config.severity_level} severity]
- **User Impact**: [Specific to ${config.severity_level} severity]
- **Business Impact**: [Specific to ${config.severity_level} severity]

### 4.2 ${config.severity_level.toUpperCase()} Severity Response Protocol
- **Response Time**: [Expected response time for ${config.severity_level} severity]
- **Escalation Path**: [Escalation procedures]
- **Resolution Timeline**: [Expected resolution timeline]

### 4.3 ${config.severity_level.toUpperCase()} Severity Prevention
- **Prevention Measures**: [Specific to ${config.severity_level} severity]
- **Monitoring Requirements**: [Enhanced monitoring needs]
- **Process Improvements**: [Process changes needed]`,
          section: 'bug-analysis',
          order: 4,
          dependencies: ['bug-reproduction']
        };
        sections.push(severitySection);
      }

      // Add technology-specific sections if specified
      if (config.technology_stack) {
        const techSection: TemplateModule = {
          id: 'bug-technology-specific',
          name: 'Technology-Specific Bug Analysis',
          description: 'Technology-specific bug analysis',
          content: `## 7. Technology-Specific Analysis

### 7.1 Technology Stack Context
- **Affected Technologies**: ${Array.isArray(config.technology_stack) ? config.technology_stack.join(', ') : config.technology_stack}
- **Technology-Specific Issues**: [Issues specific to the technologies]
- **Framework/Library Versions**: [Version information]

### 7.2 Technology-Specific Root Causes
- **Technology 1**: [Specific issues and causes]
- **Technology 2**: [Specific issues and causes]
- **Technology 3**: [Specific issues and causes]

### 7.3 Technology-Specific Solutions
- **Technology 1**: [Recommended solutions]
- **Technology 2**: [Recommended solutions]
- **Technology 3**: [Recommended solutions]`,
          section: 'bug-analysis',
          order: 7,
          dependencies: ['bug-resolution']
        };
        sections.push(techSection);
      }
    }

    const assemblyConfig: TemplateAssemblyConfig = {
      baseTemplate,
      sections,
      customSections: config?.custom_instructions ? [{
        id: 'bug-custom',
        name: 'Custom Instructions',
        description: 'Custom instructions for bug analysis',
        content: `## Custom Instructions\n${config.custom_instructions}`,
        section: 'bug-analysis',
        order: 999,
        dependencies: []
      }] : undefined
    };

    return this.assembleTemplateModules(assemblyConfig);
  }

  // Get the registry for external access
  getRegistry(): TemplateModuleRegistry {
    return this.registry;
  }
}