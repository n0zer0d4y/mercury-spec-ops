import { describe, it, expect, beforeEach } from 'vitest';
import { ModularTemplateBuilder } from '../../resources/template-builder';

describe('ModularTemplateBuilder', () => {
  let builder: ModularTemplateBuilder;

  beforeEach(() => {
    builder = new ModularTemplateBuilder();
  });

  describe('Constructor and Initialization', () => {
    it('should initialize successfully', () => {
      expect(builder).toBeInstanceOf(ModularTemplateBuilder);
    });
  });

  describe('buildPRDTemplate', () => {
    it('should generate a valid PRD template', () => {
      const template = builder.buildPRDTemplate();
      
      expect(template).toBeTruthy();
      expect(typeof template).toBe('string');
      expect(template.length).toBeGreaterThan(100);
    });

    it('should include standard PRD sections', () => {
      const template = builder.buildPRDTemplate();
      
      // Check for common PRD sections
      expect(template).toContain('Overview');
      expect(template).toContain('Requirements');
      expect(template).toContain('##'); // Markdown headers
    });

    it('should be a valid markdown format', () => {
      const template = builder.buildPRDTemplate();
      
      // Should have markdown formatting
      expect(template).toMatch(/^#/m); // Has headers
    });
  });

  describe('buildCodebaseAnalysisTemplate', () => {
    it('should generate a valid codebase analysis template', () => {
      const template = builder.buildCodebaseAnalysisTemplate();
      
      expect(template).toBeTruthy();
      expect(typeof template).toBe('string');
      expect(template.length).toBeGreaterThan(100);
    });

    it('should include analysis sections', () => {
      const template = builder.buildCodebaseAnalysisTemplate();
      
      expect(template).toContain('Codebase Analysis');
      expect(template).toContain('##'); // Markdown headers
    });

    it('should be comprehensive', () => {
      const template = builder.buildCodebaseAnalysisTemplate();
      
      // Should be a substantial template
      expect(template.length).toBeGreaterThan(500);
    });
  });

  describe('buildBugAnalysisTemplate', () => {
    it('should generate a valid bug analysis template', () => {
      const template = builder.buildBugAnalysisTemplate();
      
      expect(template).toBeTruthy();
      expect(typeof template).toBe('string');
      expect(template.length).toBeGreaterThan(100);
    });

    it('should include bug analysis sections', () => {
      const template = builder.buildBugAnalysisTemplate();
      
      expect(template).toContain('Bug Analysis');
      expect(template).toContain('##'); // Markdown headers
    });

    it('should have sections for bug documentation', () => {
      const template = builder.buildBugAnalysisTemplate();
      
      // Should have sections relevant to bug tracking
      expect(template.length).toBeGreaterThan(300);
    });
  });

  describe('Template Consistency', () => {
    it('all templates should use consistent markdown formatting', () => {
      const prdTemplate = builder.buildPRDTemplate();
      const codebaseTemplate = builder.buildCodebaseAnalysisTemplate();
      const bugTemplate = builder.buildBugAnalysisTemplate();
      
      // All should use markdown headers
      expect(prdTemplate).toMatch(/^#/m);
      expect(codebaseTemplate).toMatch(/^#/m);
      expect(bugTemplate).toMatch(/^#/m);
    });

    it('templates should be distinct from each other', () => {
      const prdTemplate = builder.buildPRDTemplate();
      const codebaseTemplate = builder.buildCodebaseAnalysisTemplate();
      const bugTemplate = builder.buildBugAnalysisTemplate();
      
      // Each template should be unique
      expect(prdTemplate).not.toBe(codebaseTemplate);
      expect(codebaseTemplate).not.toBe(bugTemplate);
      expect(prdTemplate).not.toBe(bugTemplate);
    });
  });
});

