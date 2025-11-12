import { 
  PromptBuilder, 
  EnhancedPromptArguments, 
  PromptAssemblyConfig,
  PromptModuleRegistry,
  TechnologyPromptModule,
  AnalysisFocusPromptModule,
  BugSeverityPromptModule
} from '../types';
import { TechnologyStack, AnalysisFocus, BugSeverity } from '../types/enums';

// Import all technology modules
import { 
  nodejsPromptModule, 
  javascriptPromptModule,
  typescriptPromptModule, 
  pythonPromptModule,
  javaPromptModule,
  goPromptModule,
  csharpPromptModule,
  phpPromptModule,
  rubyPromptModule,
  swiftPromptModule,
  kotlinPromptModule,
  rustPromptModule,
  reactPromptModule,
  angularPromptModule,
  vuePromptModule,
  expressPromptModule,
  nestjsPromptModule,
  djangoPromptModule,
  flaskPromptModule,
  springPromptModule,
  laravelPromptModule,
  railsPromptModule,
  mongodbPromptModule,
  postgresqlPromptModule,
  mysqlPromptModule,
  redisPromptModule,
  awsPromptModule,
  azurePromptModule,
  gcpPromptModule,
  dockerPromptModule,
  kubernetesPromptModule
} from './modules/technology';

// Import all focus modules
import { 
  architectureFocusModule, 
  securityFocusModule, 
  performanceFocusModule, 
  testingFocusModule,
  documentationFocusModule,
  maintainabilityFocusModule,
  scalabilityFocusModule,
  reliabilityFocusModule,
  codeQualityFocusModule,
  dependenciesFocusModule
} from './modules/analysis-focus';

// Import all severity modules
import { lowSeverityModule, mediumSeverityModule, highSeverityModule, criticalSeverityModule } from './modules/bug-severity';

// Import base prompts
import { prdBasePrompt, codebaseAnalysisBasePrompt, bugAnalysisBasePrompt } from './base-prompts';

export class ModularPromptBuilder implements PromptBuilder {
  private registry: PromptModuleRegistry;

  constructor() {
    this.registry = this.initializeRegistry();
  }

  private initializeRegistry(): PromptModuleRegistry {
    const modules = new Map<string, any>();

    // Register technology modules
    const techModules = [
      // Runtimes
      nodejsPromptModule,
      // Languages
      javascriptPromptModule,
      typescriptPromptModule, 
      pythonPromptModule,
      javaPromptModule,
      goPromptModule,
      csharpPromptModule,
      phpPromptModule,
      rubyPromptModule,
      swiftPromptModule,
      kotlinPromptModule,
      rustPromptModule,
      // Frontend Frameworks
      reactPromptModule,
      angularPromptModule,
      vuePromptModule,
      // Backend Frameworks
      expressPromptModule,
      nestjsPromptModule,
      djangoPromptModule,
      flaskPromptModule,
      springPromptModule,
      laravelPromptModule,
      railsPromptModule,
      // Databases
      mongodbPromptModule,
      postgresqlPromptModule,
      mysqlPromptModule,
      redisPromptModule,
      // Cloud Platforms
      awsPromptModule,
      azurePromptModule,
      gcpPromptModule,
      // DevOps Tools
      dockerPromptModule,
      kubernetesPromptModule
    ];
    techModules.forEach(module => modules.set(module.id, module));

    // Register focus modules
    const focusModules = [
      architectureFocusModule, 
      securityFocusModule, 
      performanceFocusModule, 
      testingFocusModule,
      documentationFocusModule,
      maintainabilityFocusModule,
      scalabilityFocusModule,
      reliabilityFocusModule,
      codeQualityFocusModule,
      dependenciesFocusModule
    ];
    focusModules.forEach(module => modules.set(module.id, module));

    // Register severity modules
    const severityModules = [lowSeverityModule, mediumSeverityModule, highSeverityModule, criticalSeverityModule];
    severityModules.forEach(module => modules.set(module.id, module));

    return {
      getModule: (id: string) => modules.get(id),
      getModulesByTag: (tag: string) => Array.from(modules.values()).filter(m => m.applicableTo.includes(tag)),
      getAllModules: () => Array.from(modules.values()),
      registerModule: (module: any) => modules.set(module.id, module),
      getTechnologyModules: (tech: TechnologyStack) => 
        Array.from(modules.values()).filter(m => m.technology === tech) as TechnologyPromptModule[],
      getFocusModules: (focus: AnalysisFocus) => 
        Array.from(modules.values()).filter(m => m.focus === focus) as AnalysisFocusPromptModule[],
      getSeverityModules: (severity: BugSeverity) => 
        Array.from(modules.values()).filter(m => m.severity === severity) as BugSeverityPromptModule[]
    };
  }

  private assemblePromptModules(config: PromptAssemblyConfig): string {
    let assembledPrompt = config.basePrompt;

    // Add technology-specific modules
    if (config.technologyModules.length > 0) {
      assembledPrompt += '\n\n## Technology-Specific Analysis\n';
      config.technologyModules
        .sort((a, b) => a.priority - b.priority)
        .forEach(module => {
          assembledPrompt += `\n### ${module.name}\n${module.content}\n`;
        });
    }

    // Add focus-specific modules
    if (config.focusModules.length > 0) {
      assembledPrompt += '\n\n## Focus Area Analysis\n';
      config.focusModules
        .sort((a, b) => a.priority - b.priority)
        .forEach(module => {
          assembledPrompt += `\n### ${module.name}\n${module.content}\n`;
        });
    }

    // Add severity-specific modules (for bug analysis)
    if (config.severityModules && config.severityModules.length > 0) {
      assembledPrompt += '\n\n## Severity-Specific Analysis\n';
      config.severityModules
        .sort((a, b) => a.priority - b.priority)
        .forEach(module => {
          assembledPrompt += `\n### ${module.name}\n${module.content}\n`;
        });
    }

    // Add custom instructions
    if (config.customInstructions) {
      assembledPrompt += `\n\n## Custom Instructions\n${config.customInstructions}\n`;
    }

    return assembledPrompt;
  }

  buildPRDPrompt(config: EnhancedPromptArguments): string {
    const basePrompt = prdBasePrompt(config);
    
    // For PRD, we might want to add technology-specific modules if specified
    const technologyModules: TechnologyPromptModule[] = [];
    
    if (config.technology_stack) {
      const techStacks = Array.isArray(config.technology_stack) 
        ? config.technology_stack 
        : [config.technology_stack];
      
      techStacks.forEach(tech => {
        const modules = this.registry.getTechnologyModules(tech);
        technologyModules.push(...modules);
      });
    }

    const assemblyConfig: PromptAssemblyConfig = {
      basePrompt,
      technologyModules,
      focusModules: [],
      customInstructions: config.custom_instructions
    };

    return this.assemblePromptModules(assemblyConfig);
  }

  buildCodebaseAnalysisPrompt(config: EnhancedPromptArguments): string {
    const basePrompt = codebaseAnalysisBasePrompt(config);
    
    // Get technology-specific modules
    const technologyModules: TechnologyPromptModule[] = [];
    if (config.technology_stack) {
      const techStacks = Array.isArray(config.technology_stack) 
        ? config.technology_stack 
        : [config.technology_stack];
      
      techStacks.forEach(tech => {
        const modules = this.registry.getTechnologyModules(tech);
        technologyModules.push(...modules);
      });
    }

    // Get focus-specific modules
    const focusModules: AnalysisFocusPromptModule[] = [];
    if (config.analysis_focus) {
      const focuses = Array.isArray(config.analysis_focus) 
        ? config.analysis_focus 
        : [config.analysis_focus];
      
      focuses.forEach(focus => {
        const modules = this.registry.getFocusModules(focus);
        focusModules.push(...modules);
      });
    }

    const assemblyConfig: PromptAssemblyConfig = {
      basePrompt,
      technologyModules,
      focusModules,
      customInstructions: config.custom_instructions
    };

    return this.assemblePromptModules(assemblyConfig);
  }

  buildBugAnalysisPrompt(config: EnhancedPromptArguments): string {
    const basePrompt = bugAnalysisBasePrompt(config);
    
    // Get technology-specific modules
    const technologyModules: TechnologyPromptModule[] = [];
    if (config.technology_stack) {
      const techStacks = Array.isArray(config.technology_stack) 
        ? config.technology_stack 
        : [config.technology_stack];
      
      techStacks.forEach(tech => {
        const modules = this.registry.getTechnologyModules(tech);
        technologyModules.push(...modules);
      });
    }

    // Get focus-specific modules (default to security and functional for bugs)
    const focusModules: AnalysisFocusPromptModule[] = [];
    const defaultFocuses = [AnalysisFocus.SECURITY, AnalysisFocus.ARCHITECTURE];
    defaultFocuses.forEach(focus => {
      const modules = this.registry.getFocusModules(focus);
      focusModules.push(...modules);
    });

    // Get severity-specific modules
    const severityModules: BugSeverityPromptModule[] = [];
    if (config.severity_level) {
      const modules = this.registry.getSeverityModules(config.severity_level);
      severityModules.push(...modules);
    }

    const assemblyConfig: PromptAssemblyConfig = {
      basePrompt,
      technologyModules,
      focusModules,
      severityModules,
      customInstructions: config.custom_instructions
    };

    return this.assemblePromptModules(assemblyConfig);
  }

  // Utility method to get available options
  getAvailableTechnologyStacks(): TechnologyStack[] {
    return Object.values(TechnologyStack);
  }

  getAvailableAnalysisFocuses(): AnalysisFocus[] {
    return Object.values(AnalysisFocus);
  }

  getAvailableBugSeverities(): BugSeverity[] {
    return Object.values(BugSeverity);
  }

  // Get the registry for external access
  getRegistry(): PromptModuleRegistry {
    return this.registry;
  }
}