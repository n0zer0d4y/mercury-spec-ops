# Mercury Spec Ops MCP Server: Prompts and Resources as **_Tools_**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
[![MCP Registry](https://img.shields.io/badge/MCP-Registry-blue)](https://registry.modelcontextprotocol.io/servers/io.github.n0zer0d4y/mercury-spec-ops)
![MCP Dev](https://badge.mcpx.dev?type=dev "MCP Dev")
[![MCP Server](https://badge.mcpx.dev?type=server "MCP Server")](https://modelcontextprotocol.io)
[![MCP Server with Tools](https://badge.mcpx.dev?type=server&features=tools "MCP server with tools")](https://modelcontextprotocol.io)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/n0zer0d4y-mercury-spec-ops-badge.png)](https://mseep.ai/app/n0zer0d4y-mercury-spec-ops)

**The first MCP server to expose dynamic, AI-invocable tools for prompt generation and template assembly.**

Transform how AI assistants interact with specialized content. Instead of static prompts and resources, Mercury Spec Ops provides **6 programmable tools** that enable AI to dynamically generate technology-specific prompts and comprehensive templates on-demand. Built on a sophisticated modular architecture with **31 technology stacks**, **10 analysis dimensions**, and **34 template sections**—all accessible through simple tool calls.

## Features

This MCP server provides a modular, extensible architecture with:

### Prompts (Enhanced with Enum Support)

1. **PRD Prompt** - Generate Product Requirements Document with modular technology-specific analysis
2. **Codebase Analysis Prompt** - Analyze codebases with modular technology/focus-specific analysis
3. **Bug Analysis Prompt** - Analyze bugs with modular severity/technology-specific analysis

### Resources (Modular Templates)

1. **PRD Template** - Modular PRD template with technology-specific sections
2. **Codebase Analysis Template** - Modular codebase analysis template with technology/focus-specific sections
3. **Bug Analysis Template** - Modular bug analysis template with severity/technology-specific sections

## Key Capabilities

### Enum-Based Input Validation

- **Technology Stack** (31 total):
  - **Languages** (11): JavaScript, TypeScript, Python, Java, Go, Rust, C#, PHP, Ruby, Swift, Kotlin
  - **Runtimes** (1): Node.js
  - **Frontend** (3): React, Angular, Vue
  - **Backend** (7): Express, NestJS, Django, Flask, Spring, Laravel, Rails
  - **Databases** (4): MongoDB, PostgreSQL, MySQL, Redis
  - **Cloud** (3): AWS, Azure, GCP
  - **DevOps** (2): Docker, Kubernetes
- **Analysis Focus** (10 total): architecture, security, performance, testing, documentation, maintainability, scalability, reliability, code-quality, dependencies
- **Bug Severity** (4 total): low, medium, high, critical
- **Target Audience**: developers, business-users, enterprise, startup, healthcare, finance, and more

### Programmatic Prompt Assembly

- Base prompts + 31 technology modules + 10 focus modules + 4 severity modules
- Automatic module selection based on input parameters
- Priority-based module ordering
- **Multi-value support**: Analyze multiple technologies and focus areas simultaneously
- **Comma-separated input**: "node.js,react,postgresql" or "security,performance,code-quality"
- Custom instruction integration
- Intelligent fallback to base prompts

### Modular Template System

- Template sections with dependency resolution
- Technology-specific template sections
- Focus-specific template sections
- Custom section support

## Installation

### Option 1: Local Development

1. Clone and install dependencies:

```bash
git clone https://github.com/n0zer0d4y/mercury-spec-ops.git
cd mercury-spec-ops
npm install
npm run build
```

2. Run the server locally:

```bash
npm run mcp
```

### Option 2: Install from npm

```bash
npm install -g @n0zer0d4y/mercury-spec-ops
```

Or use directly with `npx` (no installation required):

```bash
npx @n0zer0d4y/mercury-spec-ops
```

## Usage

### Integration with MCP Clients

Configure the server in your MCP client (Claude Desktop, Cursor, etc.):

#### Using npx (Recommended - No Installation)

**For Claude Desktop** (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "mercury-spec-ops": {
      "command": "npx",
      "args": ["-y", "@n0zer0d4y/mercury-spec-ops"]
    }
  }
}
```

**For Cursor** (`~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "mercury-spec-ops": {
      "timeout": 60,
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@n0zer0d4y/mercury-spec-ops"]
    }
  }
}
```

#### Using Local Installation

**For Claude Desktop** (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "mercury-spec-ops": {
      "command": "node",
      "args": ["/path/to/mercury-spec-ops/dist/src/server.js"]
    }
  }
}
```

**For Cursor** (`~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "mercury-spec-ops": {
      "timeout": 60,
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/mercury-spec-ops/dist/src/server.js"]
    }
  }
}
```

**Windows Local Path Example** (Cursor):

```json
{
  "mcpServers": {
    "mercury-spec-ops": {
      "timeout": 60,
      "type": "stdio",
      "command": "node",
      "args": [
        "C:\\Development\\Projects\\MCP-Servers\\mercury-spec-ops\\dist\\src\\server.js"
      ]
    }
  }
}
```

**Important Notes:**

- **npx**: Automatically fetches the latest version from npm (recommended for most users)
- **Local**: Replace the path with your actual project location and run `npm run build` first
- **Restart**: Restart your MCP client after configuration changes

## Workflow Examples

### Example 1: Enhanced Codebase Analysis

1. **User Prompt**: "Analyze this Node.js/TypeScript codebase focusing on security and performance"
2. **Claude Desktop Action**:
   - Calls the `codebase-analysis-prompt` with technology_stack: "node.js,typescript" and analysis_focus: "security,performance"
   - System programmatically assembles: base prompt + Node.js module + TypeScript module + security module + performance module
   - The prompt instructs Claude to first read the `resource://codebase-analysis-template`
   - Template builder assembles: base template + Node.js sections + TypeScript sections + security sections + performance sections
   - Claude reads the dynamically assembled template
   - Claude analyzes the codebase and generates a comprehensive technology-specific report

### Example 2: Enhanced Bug Analysis

1. **User Prompt**: "Analyze this critical security bug in React application"
2. **Claude Desktop Action**:
   - Calls the `bug-analysis-prompt` with technology_stack: "react", severity_level: "critical", and bug_type: "security"
   - System assembles: base prompt + React module + security module + critical severity module
   - Template includes: general sections + React-specific + security-specific + critical-severity sections
   - Claude reads the bug analysis template
   - Claude analyzes the bug and generates a comprehensive technology and severity-specific report

### Example 3: PRD Generation with Technology Support

1. **User Prompt**: "Help me create a PRD for a React-based task management application"
2. **Claude Desktop Action**:
   - Calls the `prd-prompt` with project details and technology_stack: "react"
   - System assembles: base prompt + React module
   - Template builder includes: base PRD template + React-specific considerations
   - Claude reads the technology-enhanced PRD template
   - Claude generates a comprehensive PRD with React-specific sections

## Prompt Details

### PRD Prompt

- **Name**: `prd-prompt`
- **Arguments**:
  - `project_name` (required): Name of the software project
  - `project_description` (required): Brief description of the project
  - `target_audience` (optional): Target audience for the product (enum values)
  - `project_type` (optional): Type of project (enum values)
  - `key_features` (optional): Key features to include in the PRD
  - `technology_stack` (optional): Technology stack to be used (enum values)
  - `custom_instructions` (optional): Custom instructions for PRD generation

### Codebase Analysis Prompt

- **Name**: `codebase-analysis-prompt`
- **Arguments**:
  - `repository_path` (required): Path to the repository to analyze
  - `technology_stack` (required): Technology stack used in the codebase (enum values)
  - `analysis_focus` (optional): Focus areas for analysis (enum values)
  - `custom_instructions` (optional): Custom instructions for codebase analysis

### Bug Analysis Prompt

- **Name**: `bug-analysis-prompt`
- **Arguments**:
  - `repository_path` (required): Path to the repository with bugs to analyze
  - `bug_description` (required): Description of the bug or issue to analyze
  - `affected_components` (optional): Components affected by the bug
  - `severity_level` (optional): Severity level of the bug (enum values)
  - `bug_type` (optional): Type of bug (enum values)
  - `technology_stack` (optional): Technology stack used in the affected components (enum values)
  - `custom_instructions` (optional): Custom instructions for bug analysis

## Resource Details

### PRD Template

- **URI**: `resource://prd-template`
- **Format**: Markdown
- **Content**: Modular PRD template with technology-specific sections that dynamically assemble based on input parameters

### Codebase Analysis Template

- **URI**: `resource://codebase-analysis-template`
- **Format**: Markdown
- **Content**: Modular codebase analysis template with technology and focus-specific sections that assemble based on analysis parameters

### Bug Analysis Template

- **URI**: `resource://bug-analysis-template`
- **Format**: Markdown
- **Content**: Modular bug analysis template with severity and technology-specific sections that assemble based on bug parameters

## Development

### Project Structure

```
src/
├── server.ts                    # Main MCP server implementation
├── types/
│   ├── enums.ts                 # All enum definitions (31 tech + 10 focus)
│   └── index.ts                 # Type definitions and exports
├── prompts/
│   ├── modules/                 # 45 modular prompt components
│   │   ├── technology/          # 31 technology-specific modules
│   │   │   ├── languages/       # 11 language modules
│   │   │   ├── runtimes/        # 1 runtime module
│   │   │   ├── frameworks/      # 10 framework modules (3 frontend, 7 backend)
│   │   │   ├── databases/       # 4 database modules
│   │   │   ├── cloud/           # 3 cloud platform modules
│   │   │   └── tools/           # 2 DevOps tool modules
│   │   ├── analysis-focus/      # 10 focus-area modules
│   │   └── bug-severity/        # 4 severity-specific modules
│   ├── base-prompts/            # Base prompt templates
│   └── prompt-builder.ts        # Programmatic prompt assembly
├── resources/
│   ├── templates/               # Modular template components
│   │   ├── prd/                 # 10 PRD template modules
│   │   ├── codebase-analysis/   # 8 codebase analysis modules
│   │   └── bug-analysis/        # 4 bug analysis modules
│   └── template-builder.ts      # Programmatic template assembly
└── __tests__/                   # Comprehensive test suite (66 tests)
    ├── utils/                   # Utility function tests (enum parser)
    ├── prompts/                 # Prompt builder tests
    ├── resources/               # Template builder tests
    └── types/                   # Enum and type tests
```

### Testing

The project includes a comprehensive test suite with 88% coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with interactive UI
npm run test:ui

# Test MCP integration
npm run test:mcp
```

**Test Statistics**:

- 66 tests (100% passing)
- 88.48% overall coverage
- Statement coverage: 88.48%
- Line coverage: 88.70%

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Extending the System

### Adding New Technology Modules

1. Add the technology to the `TechnologyStack` enum in `src/types/enums.ts`
2. Create a new module file in the appropriate category:
   - Languages: `src/prompts/modules/technology/languages/`
   - Frameworks: `src/prompts/modules/technology/frameworks/frontend/` or `backend/`
   - Databases: `src/prompts/modules/technology/databases/`
   - Cloud: `src/prompts/modules/technology/cloud/`
   - Tools: `src/prompts/modules/technology/tools/`
3. Implement the `TechnologyPromptModule` interface
4. Export from the category's `index.ts`
5. Register it in `prompt-builder.ts`
6. Add corresponding template sections in `src/resources/templates/`
7. Write tests in `src/__tests__/`

### Adding New Focus Areas

1. Add the focus area to the `AnalysisFocus` enum in `src/types/enums.ts`
2. Create a new module file in `src/prompts/modules/analysis-focus/`
3. Implement the `AnalysisFocusPromptModule` interface
4. Export from `analysis-focus/index.ts`
5. Register it in `prompt-builder.ts`
6. Add corresponding template sections
7. Write tests

### Adding New Severity Levels

1. Add the severity to the `BugSeverity` enum in `src/types/enums.ts`
2. Create a new module file in `src/prompts/modules/bug-severity/`
3. Implement the `BugSeverityPromptModule` interface
4. Register it in the prompt builder
5. Add corresponding template sections
6. Write tests

## Contributing

Contributions are welcome! Please follow these guidelines:

- Fork the repository and create a feature branch
- Follow existing code patterns and maintain test coverage above 85%
- Use [Conventional Commits](https://www.conventionalcommits.org/) format (feat, fix, docs, test, chore)
- Ensure all tests pass before submitting a pull request
- See [Extending the System](#extending-the-system) for adding new modules

Report issues on [GitHub Issues](https://github.com/n0zer0d4y/mercury-spec-ops/issues) with clear reproduction steps.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.
