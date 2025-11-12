import { describe, it, expect } from 'vitest';
import { TechnologyStack, AnalysisFocus, BugSeverity } from '../../types/enums';

// Helper functions (copied from server.ts for testing)
function parseEnumValue<T>(enumObj: any, value: string): T | undefined {
  const enumValues = Object.values(enumObj);
  const foundValue = enumValues.find(v => 
    typeof v === 'string' && v.toLowerCase() === value.toLowerCase()
  );
  return foundValue as T;
}

function parseEnumArray<T>(enumObj: any, value: string): T[] {
  if (!value) return [];
  
  const values = value.split(',').map(v => v.trim());
  const result: T[] = [];
  
  values.forEach(v => {
    const enumValue = parseEnumValue<T>(enumObj, v);
    if (enumValue) {
      result.push(enumValue);
    }
  });
  
  return result;
}

describe('Enum Parser Utilities', () => {
  describe('parseEnumValue', () => {
    it('should parse valid TechnologyStack enum value', () => {
      const result = parseEnumValue<TechnologyStack>(TechnologyStack, 'node.js');
      expect(result).toBe(TechnologyStack.NODE_JS);
    });

    it('should be case-insensitive', () => {
      const result = parseEnumValue<TechnologyStack>(TechnologyStack, 'NODE.JS');
      expect(result).toBe(TechnologyStack.NODE_JS);
    });

    it('should parse AnalysisFocus enum value', () => {
      const result = parseEnumValue<AnalysisFocus>(AnalysisFocus, 'security');
      expect(result).toBe(AnalysisFocus.SECURITY);
    });

    it('should return undefined for invalid enum value', () => {
      const result = parseEnumValue<TechnologyStack>(TechnologyStack, 'invalid-tech');
      expect(result).toBeUndefined();
    });

    it('should parse BugSeverity enum value', () => {
      const result = parseEnumValue<BugSeverity>(BugSeverity, 'critical');
      expect(result).toBe(BugSeverity.CRITICAL);
    });
  });

  describe('parseEnumArray', () => {
    it('should parse comma-separated TechnologyStack values', () => {
      const result = parseEnumArray<TechnologyStack>(TechnologyStack, 'node.js,typescript,react');
      expect(result).toEqual([
        TechnologyStack.NODE_JS,
        TechnologyStack.TYPESCRIPT,
        TechnologyStack.REACT,
      ]);
    });

    it('should handle spaces around commas', () => {
      const result = parseEnumArray<TechnologyStack>(TechnologyStack, 'node.js, typescript , react');
      expect(result).toEqual([
        TechnologyStack.NODE_JS,
        TechnologyStack.TYPESCRIPT,
        TechnologyStack.REACT,
      ]);
    });

    it('should parse comma-separated AnalysisFocus values', () => {
      const result = parseEnumArray<AnalysisFocus>(AnalysisFocus, 'architecture,security,performance');
      expect(result).toEqual([
        AnalysisFocus.ARCHITECTURE,
        AnalysisFocus.SECURITY,
        AnalysisFocus.PERFORMANCE,
      ]);
    });

    it('should return empty array for empty string', () => {
      const result = parseEnumArray<TechnologyStack>(TechnologyStack, '');
      expect(result).toEqual([]);
    });

    it('should skip invalid values', () => {
      const result = parseEnumArray<TechnologyStack>(TechnologyStack, 'node.js,invalid,react');
      expect(result).toEqual([
        TechnologyStack.NODE_JS,
        TechnologyStack.REACT,
      ]);
    });

    it('should handle all 10 analysis focus areas', () => {
      const result = parseEnumArray<AnalysisFocus>(
        AnalysisFocus,
        'architecture,security,performance,testing,documentation,maintainability,scalability,reliability,code-quality,dependencies'
      );
      expect(result).toHaveLength(10);
      expect(result).toContain(AnalysisFocus.ARCHITECTURE);
      expect(result).toContain(AnalysisFocus.DEPENDENCIES);
      expect(result).toContain(AnalysisFocus.CODE_QUALITY);
    });
  });
});

