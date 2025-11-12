import { TechnologyStack, AnalysisFocus, BugSeverity, TargetAudience, ProjectType, BugType } from './enums';

// Re-export all enums
export {
  TechnologyStack,
  AnalysisFocus,
  BugSeverity,
  TargetAudience,
  ProjectType,
  BugType
};

// Base prompt interface
export interface PromptModule {
  id: string;
  name: string;
  description: string;
  content: string;
  applicableTo: string[];
  priority: number;
}

// Technology-specific prompt module
export interface TechnologyPromptModule extends PromptModule {
  technology: TechnologyStack;
  focusAreas: AnalysisFocus[];
}

// Analysis focus prompt module
export interface AnalysisFocusPromptModule extends PromptModule {
  focus: AnalysisFocus;
  technologies: TechnologyStack[];
}

// Bug severity prompt module
export interface BugSeverityPromptModule extends PromptModule {
  severity: BugSeverity;
  bugTypes: BugType[];
}

// Base template interface
export interface TemplateModule {
  id: string;
  name: string;
  description: string;
  content: string;
  section: string;
  order: number;
  dependencies?: string[];
}

// Prompt assembly configuration
export interface PromptAssemblyConfig {
  basePrompt: string;
  technologyModules: TechnologyPromptModule[];
  focusModules: AnalysisFocusPromptModule[];
  severityModules?: BugSeverityPromptModule[];
  customInstructions?: string;
}

// Template assembly configuration
export interface TemplateAssemblyConfig {
  baseTemplate: string;
  sections: TemplateModule[];
  customSections?: TemplateModule[];
}

// Enhanced prompt arguments with enum support
export interface EnhancedPromptArguments {
  // PRD arguments
  project_name?: string;
  project_description?: string;
  target_audience?: TargetAudience | TargetAudience[];
  project_type?: ProjectType;
  key_features?: string;
  
  // Codebase analysis arguments
  repository_path?: string;
  technology_stack?: TechnologyStack | TechnologyStack[];
  analysis_focus?: AnalysisFocus | AnalysisFocus[];
  
  // Bug analysis arguments
  bug_description?: string;
  affected_components?: string;
  severity_level?: BugSeverity;
  bug_type?: BugType | BugType[];
  
  // Common arguments
  custom_instructions?: string;
}

// Prompt builder interface
export interface PromptBuilder {
  buildPRDPrompt(config: EnhancedPromptArguments): string;
  buildCodebaseAnalysisPrompt(config: EnhancedPromptArguments): string;
  buildBugAnalysisPrompt(config: EnhancedPromptArguments): string;
}

// Template builder interface
export interface TemplateBuilder {
  buildPRDTemplate(config?: EnhancedPromptArguments): string;
  buildCodebaseAnalysisTemplate(config?: EnhancedPromptArguments): string;
  buildBugAnalysisTemplate(config?: EnhancedPromptArguments): string;
}

// Module registry interface
export interface ModuleRegistry<T> {
  getModule(id: string): T | undefined;
  getModulesByTag(tag: string): T[];
  getAllModules(): T[];
  registerModule(module: T): void;
}

// Prompt module registry
export interface PromptModuleRegistry extends ModuleRegistry<PromptModule> {
  getTechnologyModules(tech: TechnologyStack): TechnologyPromptModule[];
  getFocusModules(focus: AnalysisFocus): AnalysisFocusPromptModule[];
  getSeverityModules(severity: BugSeverity): BugSeverityPromptModule[];
}

// Template module registry
export interface TemplateModuleRegistry extends ModuleRegistry<TemplateModule> {
  getTemplateSections(section: string): TemplateModule[];
}