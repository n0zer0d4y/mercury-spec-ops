import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import {
  Prompt,
  PromptArgument,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
  PromptMessage,
} from '@modelcontextprotocol/sdk/types.js';
import {
  Resource,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ResourceContents,
} from '@modelcontextprotocol/sdk/types.js';

// Import our modular components
import { ModularPromptBuilder } from './prompts/prompt-builder';
import { ModularTemplateBuilder } from './resources/template-builder';
import { 
  TechnologyStack, 
  AnalysisFocus, 
  BugSeverity, 
  TargetAudience, 
  ProjectType,
  BugType,
  EnhancedPromptArguments 
} from './types';

// Create MCP server instance
const server = new Server(
  {
    name: 'mercury-spec-ops',
    version: '0.1.0',
  },
  {
    capabilities: {
      prompts: {},
      resources: {},
    },
  }
);

// Initialize our modular builders
const promptBuilder = new ModularPromptBuilder();
const templateBuilder = new ModularTemplateBuilder();

// Define the enhanced prompts with enum support
const prompts: Prompt[] = [
  {
    name: 'prd-prompt',
    description: 'Generate a Product Requirements Document (PRD) for a software project with modular, technology-specific analysis',
    arguments: [
      {
        name: 'project_name',
        description: 'Name of the software project',
        required: true,
      },
      {
        name: 'project_description',
        description: 'Brief description of the project',
        required: true,
      },
      {
        name: 'target_audience',
        description: `Target audience for the product. Options: ${Object.values(TargetAudience).join(', ')}`,
        required: false,
      },
      {
        name: 'project_type',
        description: `Type of project. Options: ${Object.values(ProjectType).join(', ')}`,
        required: false,
      },
      {
        name: 'key_features',
        description: 'Key features to include in the PRD',
        required: false,
      },
      {
        name: 'technology_stack',
        description: `Technology stack to be used. Options: ${Object.values(TechnologyStack).join(', ')}`,
        required: false,
      },
      {
        name: 'custom_instructions',
        description: 'Custom instructions for PRD generation',
        required: false,
      },
    ],
  },
  {
    name: 'codebase-analysis-prompt',
    description: 'Analyze a codebase/repository with modular, technology-specific and focus-area-specific analysis',
    arguments: [
      {
        name: 'repository_path',
        description: 'Path to the repository to analyze',
        required: true,
      },
      {
        name: 'technology_stack',
        description: `Technology stack used in the codebase (required). Options: ${Object.values(TechnologyStack).join(', ')}`,
        required: true,
      },
      {
        name: 'analysis_focus',
        description: `Focus areas for analysis. Options: ${Object.values(AnalysisFocus).join(', ')}`,
        required: false,
      },
      {
        name: 'custom_instructions',
        description: 'Custom instructions for codebase analysis',
        required: false,
      },
    ],
  },
  {
    name: 'bug-analysis-prompt',
    description: 'Analyze bugs and issues with modular, technology-specific and severity-specific analysis',
    arguments: [
      {
        name: 'repository_path',
        description: 'Path to the repository with bugs to analyze',
        required: true,
      },
      {
        name: 'bug_description',
        description: 'Description of the bug or issue to analyze',
        required: true,
      },
      {
        name: 'affected_components',
        description: 'Components affected by the bug',
        required: false,
      },
      {
        name: 'severity_level',
        description: `Severity level of the bug. Options: ${Object.values(BugSeverity).join(', ')}`,
        required: false,
      },
      {
        name: 'bug_type',
        description: `Type of bug. Options: ${Object.values(BugType).join(', ')}`,
        required: false,
      },
      {
        name: 'technology_stack',
        description: `Technology stack used in the affected components. Options: ${Object.values(TechnologyStack).join(', ')}`,
        required: false,
      },
      {
        name: 'custom_instructions',
        description: 'Custom instructions for bug analysis',
        required: false,
      },
    ],
  },
];

// Define the modular resources
const resources: Resource[] = [
  {
    uri: 'resource://prd-template',
    name: 'Modular PRD Template',
    description: 'Modular markdown template for Product Requirements Document with technology-specific sections',
    mimeType: 'text/markdown',
  },
  {
    uri: 'resource://codebase-analysis-template',
    name: 'Modular Codebase Analysis Template',
    description: 'Modular markdown template for codebase analysis reports with technology and focus-specific sections',
    mimeType: 'text/markdown',
  },
  {
    uri: 'resource://bug-analysis-template',
    name: 'Modular Bug Analysis Template',
    description: 'Modular markdown template for bug analysis reports with severity and technology-specific sections',
    mimeType: 'text/markdown',
  },
];

// Helper function to parse enum values from strings
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

// List prompts handler
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return { prompts };
});

// Get prompt handler with modular assembly
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'prd-prompt') {
    // Parse and enhance arguments with enum support
    const enhancedArgs: EnhancedPromptArguments = {
      project_name: args?.project_name,
      project_description: args?.project_description,
      target_audience: args?.target_audience ? 
        parseEnumValue<TargetAudience>(TargetAudience, args.target_audience) || 
        parseEnumArray(TargetAudience, args.target_audience) : 
        undefined,
      project_type: args?.project_type ? 
        parseEnumValue<ProjectType>(ProjectType, args.project_type) : 
        undefined,
      key_features: args?.key_features,
      technology_stack: args?.technology_stack ? 
        parseEnumArray<TechnologyStack>(TechnologyStack, args.technology_stack) : 
        undefined,
      custom_instructions: args?.custom_instructions,
    };

    // Build the modular prompt
    const promptContent = promptBuilder.buildPRDPrompt(enhancedArgs);

    const messages: PromptMessage[] = [
      {
        role: 'user',
        content: {
          type: 'text',
          text: promptContent,
        },
      },
    ];
    return { messages };
  }

  if (name === 'codebase-analysis-prompt') {
    // Parse and enhance arguments with enum support
    const enhancedArgs: EnhancedPromptArguments = {
      repository_path: args?.repository_path,
      technology_stack: args?.technology_stack ? 
        parseEnumArray<TechnologyStack>(TechnologyStack, args.technology_stack) : 
        undefined,
      analysis_focus: args?.analysis_focus ? 
        parseEnumArray<AnalysisFocus>(AnalysisFocus, args.analysis_focus) : 
        undefined,
      custom_instructions: args?.custom_instructions,
    };

    // Build the modular prompt
    const promptContent = promptBuilder.buildCodebaseAnalysisPrompt(enhancedArgs);

    const messages: PromptMessage[] = [
      {
        role: 'user',
        content: {
          type: 'text',
          text: promptContent,
        },
      },
    ];
    return { messages };
  }

  if (name === 'bug-analysis-prompt') {
    // Parse and enhance arguments with enum support
    const enhancedArgs: EnhancedPromptArguments = {
      repository_path: args?.repository_path,
      bug_description: args?.bug_description,
      affected_components: args?.affected_components,
      severity_level: args?.severity_level ? 
        parseEnumValue<BugSeverity>(BugSeverity, args.severity_level) : 
        undefined,
      bug_type: args?.bug_type ? 
        parseEnumArray<BugType>(BugType, args.bug_type) : 
        undefined,
      technology_stack: args?.technology_stack ? 
        parseEnumArray<TechnologyStack>(TechnologyStack, args.technology_stack) : 
        undefined,
      custom_instructions: args?.custom_instructions,
    };

    // Build the modular prompt
    const promptContent = promptBuilder.buildBugAnalysisPrompt(enhancedArgs);

    const messages: PromptMessage[] = [
      {
        role: 'user',
        content: {
          type: 'text',
          text: promptContent,
        },
      },
    ];
    return { messages };
  }

  throw new Error(`Unknown prompt: ${name}`);
});

// List resources handler
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return { resources };
});

// Read resource handler with modular assembly
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  if (uri === 'resource://prd-template') {
    const templateContent = templateBuilder.buildPRDTemplate();
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: templateContent,
        },
      ],
    };
  }

  if (uri === 'resource://codebase-analysis-template') {
    const templateContent = templateBuilder.buildCodebaseAnalysisTemplate();
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: templateContent,
        },
      ],
    };
  }

  if (uri === 'resource://bug-analysis-template') {
    const templateContent = templateBuilder.buildBugAnalysisTemplate();
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: templateContent,
        },
      ],
    };
  }

  throw new Error(`Resource not found: ${uri}`);
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Mercury Spec Ops (Modular v0.1.0) started');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});