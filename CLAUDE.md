# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for Runlintic, a release management toolkit built with TypeScript and Next.js. The project uses Turborepo for build orchestration, pnpm for package management, and Release It for automated releases.

## Monorepo Structure

- **Root**: Configuration and workspace management
- **apps/**: Next.js applications
  - `docs/`: Documentation site (port 3001)
  - `web/`: Main web application (port 3000)
- **packages/**: Shared packages and tooling
  - `release-it/`: Release management configuration and scripts
  - `ui/`: Shared UI components (@repo/ui)
  - `eslint-config/`: Shared ESLint configurations
  - `typescript-config/`: Shared TypeScript configurations

## Development Commands

### Core Development
```bash
# Start all apps in development mode
pnpm dev

# Build all packages and apps
pnpm build

# Run linting across all packages
pnpm lint

# Type checking across all packages
pnpm check-types

# Format code with Prettier
pnpm format
```

### Individual App Development
```bash
# Web app (port 3000)
pnpm --filter web dev

# Docs app (port 3001)
pnpm --filter docs dev
```

### Quality Assurance
```bash
# Run comprehensive checks (lint + typecheck + deps + build)
pnpm --filter release-it check-all

# Fix linting issues and package dependencies
pnpm --filter release-it lint:fix

# Dependency analysis and cleanup
pnpm --filter release-it deps:check
pnpm --filter release-it deps:clean
```

## Release Management

The project uses Release It with conventional commits for automated releases.

### Release Commands
```bash
# Release all packages
pnpm release:all

# Release specific components
pnpm release:runlintic  # Core release-it package
pnpm release:docs       # Documentation site
pnpm release:web        # Web application

# Pre-release versions
pnpm --filter release-it release:beta
```

### Release Configuration
- **Config**: `packages/release-it/.release-it.json`
- **Changelog**: Auto-generated using conventional commits
- **Git**: Signed commits and tags required
- **GitHub**: Automatic release creation with GH_TOKEN

## Package Management

- **Package Manager**: pnpm (v10.14.0+)
- **Node Version**: >=22
- **Workspace**: Configured via `pnpm-workspace.yaml`
- **Dependency Management**: Uses `@manypkg/cli` for consistency

### Dependency Commands
```bash
# Install dependencies
pnpm install

# Update dependencies
pnpm --filter release-it deps:update

# Audit and fix vulnerabilities
pnpm --filter release-it deps:audit-fix
```

## Code Quality

### Linting and Formatting
- **ESLint**: Shared configs in `packages/eslint-config/`
- **Prettier**: Configured with import sorting and Tailwind support
- **Commitlint**: Enforces conventional commit format via Husky

### Git Hooks (Husky)
- **commit-msg**: Validates commit message format
- **pre-commit**: Runs linting and formatting checks

### Environment Variables
- **Release Token**: `GH_TOKEN` required for GitHub releases
- **Repository URLs**: Configured in `packages/release-it/.env`

## Architecture Notes

### Build System
- **Turborepo**: Orchestrates builds with dependency-aware caching
- **Build Outputs**: `.next/` for Next.js apps, `dist/` for packages
- **Cache Strategy**: Turbo handles incremental builds and caching

### Package Dependencies
- **Internal Dependencies**: Uses workspace protocol (`workspace:*`)
- **Shared UI**: All apps depend on `@repo/ui` package
- **Config Sharing**: ESLint and TypeScript configs are shared packages

### Release Workflow
1. Conventional commits trigger version bumps
2. Auto-changelog generates CHANGELOG.md
3. Git tags and GitHub releases are created automatically
4. Signed commits and tags are enforced
5. Release hooks run quality checks before publishing