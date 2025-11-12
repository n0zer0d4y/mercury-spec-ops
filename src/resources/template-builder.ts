import { 
  TemplateBuilder, 
  TemplateAssemblyConfig,
  TemplateModuleRegistry,
  TemplateModule
} from '../types';

// Import PRD template modules
import { prdOverviewSection, prdRequirementsSection, prdTimelineSection } from './templates/prd/overview.js';
import { prdBusinessContextSection } from './templates/prd/business-context.js';
import { prdUserPersonasSection } from './templates/prd/user-personas.js';
import { prdTechnicalArchitectureSection } from './templates/prd/technical-architecture.js';
import { prdUIUXRequirementsSection } from './templates/prd/ui-ux-requirements.js';
import { prdDataRequirementsSection } from './templates/prd/data-requirements.js';
import { prdIntegrationRequirementsSection } from './templates/prd/integration-requirements.js';
import { prdRiskAssessmentSection } from './templates/prd/risk-assessment.js';
import { prdAssumptionsSection } from './templates/prd/assumptions.js';
import { prdAppendixSection } from './templates/prd/appendix.js';

// Import codebase analysis template modules
import { 
  codebaseAnalysisOverviewSection, 
  codebaseAnalysisArchitectureSection, 
  codebaseAnalysisSecuritySection, 
  codebaseAnalysisPerformanceSection, 
  codebaseAnalysisRecommendationsSection 
} from './templates/codebase-analysis/architecture.js';
import { codebaseAnalysisStatisticsSection } from './templates/codebase-analysis/statistics.js';
import { codebaseAnalysisCodeQualitySection } from './templates/codebase-analysis/code-quality.js';
import { codebaseAnalysisMaintainabilitySection } from './templates/codebase-analysis/maintainability.js';
import { codebaseAnalysisScalabilitySection } from './templates/codebase-analysis/scalability.js';
import { codebaseAnalysisReliabilitySection } from './templates/codebase-analysis/reliability.js';
import { codebaseAnalysisDependenciesSection } from './templates/codebase-analysis/dependencies.js';
import { codebaseAnalysisDocumentationSection } from './templates/codebase-analysis/documentation.js';

// Import bug analysis template modules
import { 
  bugAnalysisOverviewSection, 
  bugAnalysisReproductionSection, 
  bugAnalysisRootCauseSection, 
  bugAnalysisImpactSection, 
  bugAnalysisResolutionSection 
} from './templates/bug-analysis/reproduction.js';
import { bugAnalysisTimelineSection } from './templates/bug-analysis/timeline.js';
import { bugAnalysisPostMortemSection } from './templates/bug-analysis/post-mortem.js';
import { bugAnalysisRelatedIssuesSection } from './templates/bug-analysis/related-issues.js';

export class ModularTemplateBuilder implements TemplateBuilder {
  private registry: TemplateModuleRegistry;

  constructor() {
    this.registry = this.initializeRegistry();
  }

  private initializeRegistry(): TemplateModuleRegistry {
    const modules = new Map<string, TemplateModule>();

    // Register PRD template modules (14 sections)
    const prdModules = [
      prdOverviewSection, 
      prdBusinessContextSection,
      prdUserPersonasSection,
      prdRequirementsSection, 
      prdTechnicalArchitectureSection,
      prdUIUXRequirementsSection,
      prdDataRequirementsSection,
      prdIntegrationRequirementsSection,
      prdTimelineSection,
      prdRiskAssessmentSection,
      prdAssumptionsSection,
      prdAppendixSection
    ];
    prdModules.forEach(module => modules.set(module.id, module));

    // Register codebase analysis template modules (12 sections)
    const codebaseModules = [
      codebaseAnalysisOverviewSection,
      codebaseAnalysisStatisticsSection,
      codebaseAnalysisArchitectureSection,
      codebaseAnalysisCodeQualitySection,
      codebaseAnalysisSecuritySection, 
      codebaseAnalysisPerformanceSection,
      codebaseAnalysisMaintainabilitySection,
      codebaseAnalysisScalabilitySection,
      codebaseAnalysisReliabilitySection,
      codebaseAnalysisDependenciesSection,
      codebaseAnalysisDocumentationSection,
      codebaseAnalysisRecommendationsSection
    ];
    codebaseModules.forEach(module => modules.set(module.id, module));

    // Register bug analysis template modules (8 sections)
    const bugModules = [
      bugAnalysisOverviewSection, 
      bugAnalysisReproductionSection, 
      bugAnalysisRootCauseSection,
      bugAnalysisTimelineSection,
      bugAnalysisImpactSection, 
      bugAnalysisResolutionSection,
      bugAnalysisPostMortemSection,
      bugAnalysisRelatedIssuesSection
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

  buildPRDTemplate(): string {
    const baseTemplate = '';
    
    // Get all PRD template sections (14 sections)
    const sections = this.registry.getTemplateSections('prd');

    const assemblyConfig: TemplateAssemblyConfig = {
      baseTemplate,
      sections
    };

    return this.assembleTemplateModules(assemblyConfig);
  }

  buildCodebaseAnalysisTemplate(): string {
    const baseTemplate = '';
    
    // Get all codebase analysis template sections (12 sections)
    const sections = this.registry.getTemplateSections('codebase-analysis');

    const assemblyConfig: TemplateAssemblyConfig = {
      baseTemplate,
      sections
    };

    return this.assembleTemplateModules(assemblyConfig);
  }

  buildBugAnalysisTemplate(): string {
    const baseTemplate = '';
    
    // Get all bug analysis template sections (8 sections)
    const sections = this.registry.getTemplateSections('bug-analysis');

    const assemblyConfig: TemplateAssemblyConfig = {
      baseTemplate,
      sections
    };

    return this.assembleTemplateModules(assemblyConfig);
  }

  // Get the registry for external access
  getRegistry(): TemplateModuleRegistry {
    return this.registry;
  }
}