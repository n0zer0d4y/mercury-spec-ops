import { EnhancedPromptArguments } from '../../types';

export const prdBasePrompt = (args: EnhancedPromptArguments): string => {
  const { project_name, project_description, target_audience, project_type, key_features, custom_instructions } = args;
  
  return `Generate a comprehensive Product Requirements Document (PRD) for the following project:

**Project Name:** ${project_name || 'Not specified'}
**Project Description:** ${project_description || 'Not specified'}
**Target Audience:** ${Array.isArray(target_audience) ? target_audience.join(', ') : target_audience || 'Not specified'}
**Project Type:** ${project_type || 'Not specified'}
**Key Features:** ${key_features || 'Not specified'}

IMPORTANT: Before generating the PRD, you must first read the PRD template resource. Please call the resource with URI 'resource://prd-template' to get the markdown template structure. Once you have read the template, use it as a guide to create a comprehensive PRD that follows the structure and includes all relevant sections.

The PRD should be well-structured, detailed, and follow best practices for product requirements documentation. Make sure to include all sections from the template and fill them with appropriate content based on the project information provided.

${custom_instructions ? `\n**Custom Instructions:** ${custom_instructions}` : ''}

Please proceed with reading the PRD template first, then generate the comprehensive PRD document.`;
};

export const codebaseAnalysisBasePrompt = (args: EnhancedPromptArguments): string => {
  const { repository_path, technology_stack, analysis_focus, custom_instructions } = args;
  
  return `Analyze the codebase/repository at the following path and generate a comprehensive analysis report:

**Repository Path:** ${repository_path || 'Not specified'}
**Technology Stack:** ${Array.isArray(technology_stack) ? technology_stack.join(', ') : technology_stack || 'To be determined during analysis'}
**Analysis Focus:** ${Array.isArray(analysis_focus) ? analysis_focus.join(', ') : analysis_focus || 'General analysis'}

IMPORTANT: Before starting the analysis, you must first read the Codebase Analysis template resource. Please call the resource with URI 'resource://codebase-analysis-template' to get the markdown template structure. Once you have read the template, proceed with analyzing the codebase.

Your analysis should include:
1. Repository structure and organization
2. Architecture assessment
3. Code quality evaluation
4. Security analysis
5. Performance assessment
6. Technology stack evaluation
7. Testing coverage
8. Documentation quality
9. Maintainability assessment
10. Compliance and standards
11. Recommendations and next steps

Please read the source files, analyze the code structure, identify patterns, assess quality, and provide actionable insights. Use the template structure to organize your findings and recommendations.

${custom_instructions ? `\n**Custom Instructions:** ${custom_instructions}` : ''}

Please proceed with reading the template first, then conduct the comprehensive codebase analysis.`;
};

export const bugAnalysisBasePrompt = (args: EnhancedPromptArguments): string => {
  const { repository_path, bug_description, affected_components, severity_level, bug_type, custom_instructions } = args;
  
  return `Analyze the following bug/issue in the codebase and generate a comprehensive bug analysis report:

**Repository Path:** ${repository_path || 'Not specified'}
**Bug Description:** ${bug_description || 'Not specified'}
**Affected Components:** ${affected_components || 'To be determined during analysis'}
**Severity Level:** ${severity_level || 'To be assessed'}
**Bug Type:** ${Array.isArray(bug_type) ? bug_type.join(', ') : bug_type || 'To be determined'}

IMPORTANT: Before starting the analysis, you must first read the Bug Analysis template resource. Please call the resource with URI 'resource://bug-analysis-template' to get the markdown template structure. Once you have read the template, proceed with analyzing the bug.

Your analysis should include:
1. Bug overview and reproduction steps
2. Root cause analysis
3. Bug classification and categorization
4. Impact assessment (user, business, technical)
5. Fix strategy and implementation
6. Verification and validation
7. Prevention measures
8. Lessons learned and recommendations

Please examine the relevant source files, identify the root cause, assess the impact, propose solutions, and provide comprehensive analysis using the template structure.

${custom_instructions ? `\n**Custom Instructions:** ${custom_instructions}` : ''}

Please proceed with reading the template first, then conduct the comprehensive bug analysis.`;
};