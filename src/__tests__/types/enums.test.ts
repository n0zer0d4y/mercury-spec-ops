import { describe, it, expect } from 'vitest';
import { TechnologyStack, AnalysisFocus, BugSeverity, BugType, TargetAudience, ProjectType } from '../../types/enums';

describe('Enums', () => {
  describe('TechnologyStack', () => {
    it('should have all technology stacks', () => {
      const values = Object.values(TechnologyStack);
      expect(values.length).toBe(31); // Total of 31 technologies after adding JAVASCRIPT
    });

    it('should include all language technologies', () => {
      expect(TechnologyStack.JAVASCRIPT).toBe('javascript');
      expect(TechnologyStack.TYPESCRIPT).toBe('typescript');
      expect(TechnologyStack.PYTHON).toBe('python');
      expect(TechnologyStack.JAVA).toBe('java');
      expect(TechnologyStack.GO).toBe('go');
      expect(TechnologyStack.RUST).toBe('rust');
      expect(TechnologyStack.C_SHARP).toBe('c#');
      expect(TechnologyStack.PHP).toBe('php');
      expect(TechnologyStack.RUBY).toBe('ruby');
      expect(TechnologyStack.SWIFT).toBe('swift');
      expect(TechnologyStack.KOTLIN).toBe('kotlin');
    });

    it('should include runtime technologies', () => {
      expect(TechnologyStack.NODE_JS).toBe('node.js');
    });

    it('should include frontend frameworks', () => {
      expect(TechnologyStack.REACT).toBe('react');
      expect(TechnologyStack.ANGULAR).toBe('angular');
      expect(TechnologyStack.VUE).toBe('vue');
    });

    it('should include backend frameworks', () => {
      expect(TechnologyStack.EXPRESS).toBe('express');
      expect(TechnologyStack.NESTJS).toBe('nestjs');
      expect(TechnologyStack.DJANGO).toBe('django');
      expect(TechnologyStack.FLASK).toBe('flask');
      expect(TechnologyStack.SPRING).toBe('spring');
      expect(TechnologyStack.LARAVEL).toBe('laravel');
      expect(TechnologyStack.RAILS).toBe('rails');
    });

    it('should include databases', () => {
      expect(TechnologyStack.MONGODB).toBe('mongodb');
      expect(TechnologyStack.POSTGRESQL).toBe('postgresql');
      expect(TechnologyStack.MYSQL).toBe('mysql');
      expect(TechnologyStack.REDIS).toBe('redis');
    });

    it('should include cloud platforms', () => {
      expect(TechnologyStack.AWS).toBe('aws');
      expect(TechnologyStack.AZURE).toBe('azure');
      expect(TechnologyStack.GCP).toBe('gcp');
    });

    it('should include DevOps tools', () => {
      expect(TechnologyStack.DOCKER).toBe('docker');
      expect(TechnologyStack.KUBERNETES).toBe('kubernetes');
    });
  });

  describe('AnalysisFocus', () => {
    it('should have all 10 analysis focus areas', () => {
      const values = Object.values(AnalysisFocus);
      expect(values.length).toBe(10);
    });

    it('should include all original focus areas', () => {
      expect(AnalysisFocus.ARCHITECTURE).toBe('architecture');
      expect(AnalysisFocus.SECURITY).toBe('security');
      expect(AnalysisFocus.PERFORMANCE).toBe('performance');
      expect(AnalysisFocus.TESTING).toBe('testing');
    });

    it('should include new Phase 1 focus areas', () => {
      expect(AnalysisFocus.DOCUMENTATION).toBe('documentation');
      expect(AnalysisFocus.MAINTAINABILITY).toBe('maintainability');
      expect(AnalysisFocus.SCALABILITY).toBe('scalability');
      expect(AnalysisFocus.RELIABILITY).toBe('reliability');
    });

    it('should include new Phase 2 focus areas', () => {
      expect(AnalysisFocus.CODE_QUALITY).toBe('code-quality');
      expect(AnalysisFocus.DEPENDENCIES).toBe('dependencies');
    });
  });

  describe('BugSeverity', () => {
    it('should have all 4 severity levels', () => {
      const values = Object.values(BugSeverity);
      expect(values.length).toBe(4);
    });

    it('should include all severity levels', () => {
      expect(BugSeverity.LOW).toBe('low');
      expect(BugSeverity.MEDIUM).toBe('medium');
      expect(BugSeverity.HIGH).toBe('high');
      expect(BugSeverity.CRITICAL).toBe('critical');
    });
  });

  describe('BugType', () => {
    it('should have bug type categories', () => {
      const values = Object.values(BugType);
      expect(values.length).toBeGreaterThan(0);
    });

    it('should include common bug types', () => {
      expect(BugType.FUNCTIONAL).toBe('functional');
      expect(BugType.PERFORMANCE).toBe('performance');
      expect(BugType.SECURITY).toBe('security');
    });
  });

  describe('TargetAudience', () => {
    it('should have audience categories', () => {
      const values = Object.values(TargetAudience);
      expect(values.length).toBeGreaterThan(0);
    });

    it('should include common audiences', () => {
      expect(TargetAudience.DEVELOPERS).toBe('developers');
      expect(TargetAudience.END_CUSTOMERS).toBe('end-customers');
    });
  });

  describe('ProjectType', () => {
    it('should have project type categories', () => {
      const values = Object.values(ProjectType);
      expect(values.length).toBeGreaterThan(0);
    });

    it('should include common project types', () => {
      expect(ProjectType.WEB_APPLICATION).toBe('web-application');
      expect(ProjectType.API_SERVICE).toBe('api-service');
      expect(ProjectType.MICROSERVICE).toBe('microservice');
    });
  });
});

