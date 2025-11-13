import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Import our modular components
import { ModularPromptBuilder } from "./prompts/prompt-builder.js";
import { ModularTemplateBuilder } from "./resources/template-builder.js";
import { TechnologyStack, AnalysisFocus, BugSeverity } from "./types/enums.js";

// Schema constants for tool input validation
const TECHNOLOGY_STACK_ENUM = [
  "node.js",
  "javascript",
  "typescript",
  "python",
  "java",
  "c#",
  "go",
  "rust",
  "php",
  "ruby",
  "swift",
  "kotlin",
  "react",
  "angular",
  "vue",
  "express",
  "nestjs",
  "django",
  "flask",
  "spring",
  "laravel",
  "rails",
  "mongodb",
  "postgresql",
  "mysql",
  "redis",
  "docker",
  "kubernetes",
  "aws",
  "azure",
  "gcp",
];

const ANALYSIS_FOCUS_ENUM = [
  "architecture",
  "security",
  "performance",
  "testing",
  "documentation",
  "maintainability",
  "scalability",
  "reliability",
  "code-quality",
  "dependencies",
];

const BUG_SEVERITY_ENUM = ["low", "medium", "high", "critical"];

// Create MCP server instance with tools capability only
const server = new Server(
  {
    name: "mercury-spec-ops",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Helper function to parse enum values from strings (case-insensitive)
function parseEnumValue<T>(enumObj: any, value: string): T | undefined {
  const enumValues = Object.values(enumObj);
  const foundValue = enumValues.find(
    (v) => typeof v === "string" && v.toLowerCase() === value.toLowerCase()
  );

  if (!foundValue) {
    console.error(
      `Invalid enum value: ${value}. Valid values: ${enumValues.join(", ")}`
    );
  }

  return foundValue as T;
}

// Enhanced function to parse enum arrays - handles both string and string[] inputs
function parseEnumArray<T>(
  enumObj: any,
  value: string | string[] | undefined
): T[] {
  if (!value) return [];

  const values = Array.isArray(value)
    ? value
    : value.split(",").map((v) => v.trim());

  return values
    .map((v) => parseEnumValue<T>(enumObj, v))
    .filter((v): v is T => v !== undefined);
}

// List tools handler - returns 6 available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "generate_prd_prompt",
        description:
          "Generate an assembled Product Requirements Document prompt with specified technology stacks and analysis focus areas",
        inputSchema: {
          type: "object",
          properties: {
            technology_stack: {
              type: "array",
              items: {
                type: "string",
                enum: TECHNOLOGY_STACK_ENUM,
              },
              description: "Technology stacks to include in prompt assembly",
              uniqueItems: true,
            },
            analysis_focus: {
              type: "array",
              items: {
                type: "string",
                enum: ANALYSIS_FOCUS_ENUM,
              },
              description: "Analysis focus areas for the PRD",
              uniqueItems: true,
            },
            project_context: {
              type: "string",
              description: "Optional project context or background information",
            },
          },
          required: ["technology_stack"],
        },
      },
      {
        name: "generate_codebase_analysis_prompt",
        description:
          "Generate an assembled codebase analysis prompt with specified technology stacks and analysis focus areas",
        inputSchema: {
          type: "object",
          properties: {
            technology_stack: {
              type: "array",
              items: {
                type: "string",
                enum: TECHNOLOGY_STACK_ENUM,
              },
              description: "Technology stacks to analyze",
              uniqueItems: true,
            },
            analysis_focus: {
              type: "array",
              items: {
                type: "string",
                enum: ANALYSIS_FOCUS_ENUM,
              },
              description: "Areas to focus analysis on",
              uniqueItems: true,
            },
          },
          required: ["technology_stack", "analysis_focus"],
        },
      },
      {
        name: "generate_bug_analysis_prompt",
        description:
          "Generate an assembled bug analysis prompt with specified technology stacks and severity level",
        inputSchema: {
          type: "object",
          properties: {
            technology_stack: {
              type: "array",
              items: {
                type: "string",
                enum: TECHNOLOGY_STACK_ENUM,
              },
              description: "Technology stacks involved in the bug",
              uniqueItems: true,
            },
            severity: {
              type: "string",
              enum: BUG_SEVERITY_ENUM,
              description: "Bug severity level",
            },
            bug_context: {
              type: "string",
              description: "Optional bug description or context",
            },
          },
          required: ["technology_stack", "severity"],
        },
      },
      {
        name: "get_prd_template",
        description:
          "Fetch a comprehensive Product Requirements Document markdown template with all standard sections (14 sections total)",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "get_codebase_analysis_template",
        description:
          "Fetch a comprehensive codebase analysis markdown template with all standard sections (12 sections total)",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "get_bug_analysis_template",
        description:
          "Fetch a comprehensive bug analysis markdown template with all standard sections (8 sections total)",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
    ],
  };
});

// Call tool handler - dispatches to appropriate builder
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "generate_prd_prompt": {
        const techStacks = parseEnumArray<TechnologyStack>(
          TechnologyStack,
          (args as any)?.technology_stack as string | string[] | undefined
        );
        const analysisFocus = parseEnumArray<AnalysisFocus>(
          AnalysisFocus,
          ((args as any)?.analysis_focus || []) as string | string[] | undefined
        );

        const builder = new ModularPromptBuilder();

        const prompt = builder.buildPRDPrompt({
          technology_stack: techStacks,
          analysis_focus: analysisFocus.length > 0 ? analysisFocus : undefined,
          custom_instructions: (args as any)?.project_context as
            | string
            | undefined,
        });

        return {
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        };
      }

      case "generate_codebase_analysis_prompt": {
        const techStacks = parseEnumArray<TechnologyStack>(
          TechnologyStack,
          (args as any)?.technology_stack as string | string[] | undefined
        );
        const analysisFocus = parseEnumArray<AnalysisFocus>(
          AnalysisFocus,
          (args as any)?.analysis_focus as string | string[] | undefined
        );

        const builder = new ModularPromptBuilder();

        const prompt = builder.buildCodebaseAnalysisPrompt({
          technology_stack: techStacks,
          analysis_focus: analysisFocus,
        });

        return {
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        };
      }

      case "generate_bug_analysis_prompt": {
        const techStacks = parseEnumArray<TechnologyStack>(
          TechnologyStack,
          (args as any)?.technology_stack as string | string[] | undefined
        );
        const severity = parseEnumValue<BugSeverity>(
          BugSeverity,
          ((args as any)?.severity || "") as string
        );

        if (!severity) {
          throw new Error(`Invalid severity value: ${(args as any)?.severity}`);
        }

        const builder = new ModularPromptBuilder();

        const prompt = builder.buildBugAnalysisPrompt({
          technology_stack: techStacks,
          severity_level: severity,
          custom_instructions: (args as any)?.bug_context as string | undefined,
        });

        return {
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        };
      }

      case "get_prd_template": {
        const builder = new ModularTemplateBuilder();

        const template = builder.buildPRDTemplate();

        return {
          content: [
            {
              type: "text",
              text: template,
            },
          ],
        };
      }

      case "get_codebase_analysis_template": {
        const builder = new ModularTemplateBuilder();

        const template = builder.buildCodebaseAnalysisTemplate();

        return {
          content: [
            {
              type: "text",
              text: template,
            },
          ],
        };
      }

      case "get_bug_analysis_template": {
        const builder = new ModularTemplateBuilder();

        const template = builder.buildBugAnalysisTemplate();

        return {
          content: [
            {
              type: "text",
              text: template,
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: "text",
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    "Mercury Spec Ops MCP Server v0.1.0 (Tools Architecture) started"
  );
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
