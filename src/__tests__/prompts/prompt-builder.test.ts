import { describe, it, expect, beforeEach } from 'vitest';
import { ModularPromptBuilder } from '../../prompts/prompt-builder';
import { TechnologyStack, AnalysisFocus, BugSeverity } from '../../types/enums';
import { EnhancedPromptArguments } from '../../types';

describe('ModularPromptBuilder', () => {
  let builder: ModularPromptBuilder;

  beforeEach(() => {
    builder = new ModularPromptBuilder();
  });

  describe('Constructor and Initialization', () => {
    it('should initialize successfully', () => {
      expect(builder).toBeInstanceOf(ModularPromptBuilder);
    });

    it('should have a registry with modules', () => {
      const registry = builder.getRegistry();
      expect(registry).toBeDefined();
      expect(registry.getAllModules()).toBeTruthy();
    });

    it('should register all technology modules', () => {
      const registry = builder.getRegistry();
      const allModules = registry.getAllModules();
      
      // Should have at least 31 technology modules + 10 focus modules + 4 severity modules
      expect(allModules.length).toBeGreaterThanOrEqual(45);
    });
  });

  describe('Registry Methods', () => {
    it('should get technology modules by stack', () => {
      const registry = builder.getRegistry();
      const nodeModules = registry.getTechnologyModules(TechnologyStack.NODE_JS);
      
      expect(nodeModules).toBeTruthy();
      expect(nodeModules.length).toBeGreaterThan(0);
      expect(nodeModules[0].technology).toBe(TechnologyStack.NODE_JS);
    });

    it('should get focus modules by focus area', () => {
      const registry = builder.getRegistry();
      const securityModules = registry.getFocusModules(AnalysisFocus.SECURITY);
      
      expect(securityModules).toBeTruthy();
      expect(securityModules.length).toBeGreaterThan(0);
      expect(securityModules[0].focus).toBe(AnalysisFocus.SECURITY);
    });

    it('should get severity modules by severity level', () => {
      const registry = builder.getRegistry();
      const criticalModules = registry.getSeverityModules(BugSeverity.CRITICAL);
      
      expect(criticalModules).toBeTruthy();
      expect(criticalModules.length).toBeGreaterThan(0);
      expect(criticalModules[0].severity).toBe(BugSeverity.CRITICAL);
    });

    it('should retrieve all available technology stacks', () => {
      const stacks = builder.getAvailableTechnologyStacks();
      expect(stacks).toBeTruthy();
      expect(stacks.length).toBeGreaterThanOrEqual(31);
      expect(stacks).toContain(TechnologyStack.NODE_JS);
      expect(stacks).toContain(TechnologyStack.PYTHON);
      expect(stacks).toContain(TechnologyStack.DOCKER);
      expect(stacks).toContain(TechnologyStack.AWS);
    });

    it('should retrieve all available analysis focuses', () => {
      const focuses = builder.getAvailableAnalysisFocuses();
      expect(focuses).toBeTruthy();
      expect(focuses.length).toBe(10);
      expect(focuses).toContain(AnalysisFocus.ARCHITECTURE);
      expect(focuses).toContain(AnalysisFocus.SECURITY);
      expect(focuses).toContain(AnalysisFocus.CODE_QUALITY);
      expect(focuses).toContain(AnalysisFocus.DEPENDENCIES);
    });
  });

  describe('buildPRDPrompt', () => {
    it('should build basic PRD prompt', () => {
      const args: EnhancedPromptArguments = {
        project_name: 'Test Project',
        project_description: 'A test project',
      };

      const prompt = builder.buildPRDPrompt(args);
      
      expect(prompt).toContain('Test Project');
      expect(prompt).toContain('A test project');
      expect(typeof prompt).toBe('string');
      expect(prompt.length).toBeGreaterThan(100);
    });

    it('should include technology-specific sections when technology_stack is provided', () => {
      const args: EnhancedPromptArguments = {
        project_name: 'Node.js App',
        project_description: 'A Node.js application',
        technology_stack: [TechnologyStack.NODE_JS],
      };

      const prompt = builder.buildPRDPrompt(args);
      
      expect(prompt).toContain('Technology-Specific Analysis');
      expect(prompt.length).toBeGreaterThan(500);
    });

    it('should include custom instructions', () => {
      const args: EnhancedPromptArguments = {
        project_name: 'Test',
        project_description: 'Test',
        custom_instructions: 'Focus on microservices architecture',
      };

      const prompt = builder.buildPRDPrompt(args);
      
      expect(prompt).toContain('Custom Instructions');
      expect(prompt).toContain('Focus on microservices architecture');
    });
  });

  describe('buildCodebaseAnalysisPrompt', () => {
    it('should build basic codebase analysis prompt', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/path/to/repo',
        technology_stack: [TechnologyStack.TYPESCRIPT],
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toContain('/path/to/repo');
      expect(typeof prompt).toBe('string');
      expect(prompt.length).toBeGreaterThan(100);
    });

    it('should include multiple technology modules', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        technology_stack: [TechnologyStack.NODE_JS, TechnologyStack.REACT, TechnologyStack.MONGODB],
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toContain('Technology-Specific Analysis');
      // Should be significantly longer with 3 technology modules
      expect(prompt.length).toBeGreaterThan(1000);
    });

    it('should include focus area modules when analysis_focus is provided', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        technology_stack: [TechnologyStack.PYTHON],
        analysis_focus: [AnalysisFocus.SECURITY, AnalysisFocus.PERFORMANCE],
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toContain('Focus Area Analysis');
      expect(prompt.length).toBeGreaterThan(1500);
    });

    it('should handle all 10 analysis focus areas', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        technology_stack: [TechnologyStack.JAVA],
        analysis_focus: [
          AnalysisFocus.ARCHITECTURE,
          AnalysisFocus.SECURITY,
          AnalysisFocus.PERFORMANCE,
          AnalysisFocus.TESTING,
          AnalysisFocus.DOCUMENTATION,
          AnalysisFocus.MAINTAINABILITY,
          AnalysisFocus.SCALABILITY,
          AnalysisFocus.RELIABILITY,
          AnalysisFocus.CODE_QUALITY,
          AnalysisFocus.DEPENDENCIES,
        ],
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toContain('Focus Area Analysis');
      // Should be very long with 10 focus areas
      expect(prompt.length).toBeGreaterThan(5000);
    });

    it('should handle complex multi-stack analysis', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/complex-app',
        technology_stack: [
          TechnologyStack.TYPESCRIPT,
          TechnologyStack.REACT,
          TechnologyStack.NODE_JS,
          TechnologyStack.EXPRESS,
          TechnologyStack.POSTGRESQL,
          TechnologyStack.REDIS,
          TechnologyStack.DOCKER,
          TechnologyStack.KUBERNETES,
        ],
        analysis_focus: [
          AnalysisFocus.ARCHITECTURE,
          AnalysisFocus.SECURITY,
          AnalysisFocus.PERFORMANCE,
        ],
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toContain('Technology-Specific Analysis');
      expect(prompt).toContain('Focus Area Analysis');
      // Should be extremely comprehensive
      expect(prompt.length).toBeGreaterThan(8000);
    });
  });

  describe('buildBugAnalysisPrompt', () => {
    it('should build basic bug analysis prompt', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        bug_description: 'Application crashes on startup',
      };

      const prompt = builder.buildBugAnalysisPrompt(args);
      
      expect(prompt).toContain('Application crashes on startup');
      expect(typeof prompt).toBe('string');
      expect(prompt.length).toBeGreaterThan(100);
    });

    it('should include severity-specific modules when severity_level is provided', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        bug_description: 'Security vulnerability found',
        severity_level: BugSeverity.CRITICAL,
      };

      const prompt = builder.buildBugAnalysisPrompt(args);
      
      expect(prompt).toContain('Severity-Specific Analysis');
      expect(prompt.length).toBeGreaterThan(1000);
    });

    it('should include technology modules for bug context', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        bug_description: 'Memory leak in production',
        technology_stack: [TechnologyStack.NODE_JS, TechnologyStack.REDIS],
        severity_level: BugSeverity.HIGH,
      };

      const prompt = builder.buildBugAnalysisPrompt(args);
      
      expect(prompt).toContain('Technology-Specific Analysis');
      expect(prompt).toContain('Severity-Specific Analysis');
      expect(prompt.length).toBeGreaterThan(2000);
    });

    it('should include default focus modules (security and architecture)', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        bug_description: 'Test bug',
      };

      const prompt = builder.buildBugAnalysisPrompt(args);
      
      // Bug analysis includes default focus modules
      expect(prompt).toContain('Focus Area Analysis');
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle empty technology_stack array', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        technology_stack: [],
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toBeTruthy();
      expect(typeof prompt).toBe('string');
    });

    it('should handle undefined technology_stack', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        technology_stack: undefined,
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toBeTruthy();
      expect(typeof prompt).toBe('string');
    });

    it('should handle empty analysis_focus array', () => {
      const args: EnhancedPromptArguments = {
        repository_path: '/repo',
        technology_stack: [TechnologyStack.PYTHON],
        analysis_focus: [],
      };

      const prompt = builder.buildCodebaseAnalysisPrompt(args);
      
      expect(prompt).toBeTruthy();
      expect(typeof prompt).toBe('string');
    });
  });
});

