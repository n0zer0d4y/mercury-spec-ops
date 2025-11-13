# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2024-11-13

### Fixed

- Added shebang line to server.ts for proper bin execution on Windows and Unix systems
  - Fixes "JavaScript compilation error" when running via npx
  - Resolves MCP client integration issues with Claude Desktop and Cursor

## [0.1.0] - 2024-11-13

### Added

- Initial release: MCP Tools Architecture
- 6 MCP Tools for dynamic content generation
  - `generate_prd_prompt` - Generate Product Requirements Document prompts
  - `generate_codebase_analysis_prompt` - Generate codebase analysis prompts
  - `generate_bug_analysis_prompt` - Generate bug analysis prompts
  - `get_prd_template` - Fetch comprehensive PRD template (14 sections)
  - `get_codebase_analysis_template` - Fetch codebase analysis template (12 sections)
  - `get_bug_analysis_template` - Fetch bug analysis template (8 sections)
- 31 Technology Stack Modules
  - Languages (11): JavaScript, TypeScript, Python, Java, Go, Rust, C#, PHP, Ruby, Swift, Kotlin
  - Frameworks (10): React, Angular, Vue, Express, NestJS, Django, Flask, Spring, Laravel, Rails
  - Infrastructure (9): Node.js, MongoDB, PostgreSQL, MySQL, Redis, AWS, Azure, GCP, Docker, Kubernetes
- 10 Analysis Focus Areas
  - Architecture, Security, Performance, Testing, Documentation, Maintainability, Scalability, Reliability, Code Quality, Dependencies
- 34 Template Sections across PRD, Codebase Analysis, and Bug Analysis templates
- Modular architecture with programmatic prompt and template assembly
- Comprehensive test suite (66 tests, 88.48% coverage)
- npm package publication as `@n0zer0d4y/mercury-spec-ops`
- Docker support with Node.js 22 Alpine
- Complete documentation and integration guides for Claude Desktop and Cursor

[0.1.1]: https://github.com/n0zer0d4y/mercury-spec-ops/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/n0zer0d4y/mercury-spec-ops/releases/tag/v0.1.0
