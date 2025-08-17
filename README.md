# 🚀 Runlintic

> **A linting fanatic's toolkit for automating code quality, cleanup, and releases.**  
> Built with TypeScript and Next.js (App Router) 15.

> ## ✨ Features
> - 🚀 **Release Automation** – Bump versions, generate changelogs, and tag releases using Release It
> - 🚀 **Linting Automation** – Run linting and type checking on code changes

## Release-it Configuration Overview
The project uses a monorepo structure with release-it to manage releases across multiple packages. Here's my analysis:

### ✅ Release-it Package Setup
The @packages/release-it package is correctly configured:

- Contains proper .release-it.json configuration
- Uses conventional commits via @release-it/conventional-changelog
- Configured for GitHub releases

### ✅ Root Package.json Configuration
The root package.json has comprehensive release scripts:

- release:all correctly aggregates releases for all packages
- Individual scripts for @packages/release-it, @apps/docs, and @apps/web
- Proper versioning strategies with patch/minor/major variants

### ✅ App Release Configurations
Both apps/docs and apps/web correctly:

- Reference the release-it setup from packages/release-it
- Share the same release command structure
- Use appropriate environment variables

### ✅ GitHub Workflow
The GitHub workflow is properly configured:

- Handles different release types (patch/minor/major)
- Includes dry-run capability
- Performs necessary quality checks before releasing
- Uses proper GitHub token handling

### ✅ Turbo Configuration
The turbo.json file is properly configured:

- Defines release tasks with appropriate dependencies
- Includes variants for different release types
