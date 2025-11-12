# Mercury Spec Ops - Modular MCP Server

A sophisticated TypeScript Model Context Protocol (MCP) server for specialized software development analysis and prompt engineering with programmatic prompt assembly.

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

1. Install dependencies:

```bash
npm install
```

2. The MCP SDK is already included in the dependencies.

## Usage

### Running the MCP Server

```bash
npm run mcp
```

### Integration with Claude Desktop

To use this MCP server with Claude Desktop, you need to configure it in your Claude Desktop settings. Add the following configuration:

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

**Windows Example** (Cursor):

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

- Replace the path with your actual project location
- Run `npm run build` first to generate the `dist` folder
- Restart your MCP client after configuration changes

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
│   │   ├── prd/                 # PRD template modules
│   │   ├── codebase-analysis/   # Codebase analysis modules
│   │   └── bug-analysis/        # Bug analysis modules
│   └── template-builder.ts      # Programmatic template assembly
└── __tests__/                   # Comprehensive test suite (66 tests)
    ├── utils/                   # Utility function tests
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

## Project Status

**Current Version**: v0.9.0 (Pre-Release)  
**Project Health**: Excellent (9/10)  
**Test Coverage**: 88.48% ✅  
**Production Readiness**: 85%

### Recent Achievements

- ✅ **100% Technology Coverage** - All 31 planned technologies implemented
- ✅ **100% Focus Coverage** - All 10 analysis dimensions implemented
- ✅ **Comprehensive Testing** - 66 tests with 88% coverage
- ✅ **Production Quality** - Clean, organized, fully documented
- ✅ **45 Specialized Modules** - 10,470+ lines of expert content

### What's Complete

- [x] All 31 technology modules (languages, frameworks, databases, cloud, DevOps)
- [x] All 10 analysis focus areas
- [x] Modular prompt assembly system
- [x] Multi-value input support
- [x] Comprehensive test suite (88% coverage)
- [x] Production-grade code quality
- [x] Extensive documentation
- [x] CI/CD ready infrastructure

### Next Steps (Optional)

- [ ] Increase test coverage to 95%+ (optional)
- [ ] Additional frameworks (Svelte, Next.js, FastAPI)
- [ ] Mobile development support (iOS, Android)
- [ ] Performance profiling and optimization

**The system is production-ready and ready for v1.0.0 release!** 🚀

For detailed status, see [local_docs/PROJECT_STATUS.md](./local_docs/PROJECT_STATUS.md)

## Documentation

Comprehensive documentation is available in the `local_docs/` directory:

- **[Project Status](./local_docs/PROJECT_STATUS.md)** - Current status and metrics
- **[Implementation Roadmap](./local_docs/IMPLEMENTATION_ROADMAP.md)** - Development plan
- **[Codebase Audit Report](./local_docs/CODEBASE_AUDIT_REPORT.md)** - Initial audit
- **[Phase 1 Complete](./local_docs/PHASE1_COMPLETE.md)** - Foundation phase
- **[Phase 2 Complete](./local_docs/PHASE2_COMPLETE.md)** - Infrastructure phase
- **[Phase 3 Testing Complete](./local_docs/PHASE3_TESTING_COMPLETE.md)** - Testing phase
- **[Documentation Index](./local_docs/README.md)** - Full documentation listing

## Contributing

This project follows industry best practices:

- TypeScript strict mode
- Comprehensive testing (88% coverage)
- Clean code principles
- Modular architecture
- Extensive documentation

See individual module files for implementation examples.

## License

This project is licensed under the MIT License.
