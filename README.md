# TypeScript Starter Node

A modern, scalable TypeScript starter template for Node.js applications with pre-configured testing, building, and automated release workflows.

## Features

- **TypeScript 5.9+** - Write type-safe code with the latest TypeScript features
- **Vitest** - Lightning-fast unit testing framework with TypeScript support out of the box
- **Webpack 5** - Optimized bundling and module resolution
- **Path Aliases** - Clean imports with `@/` alias pointing to `src/`
- **Automated Releases** - SemVer versioning based on Conventional Commits using GitHub Actions
- **Development Ready** - Scripts for development, testing, building, and debugging
- **ESNext Target** - Modern JavaScript target for Node.js environments

## Project Structure

```
src/
├── index.ts          # Application entry point
├── module.ts         # Example module
└── module.test.ts    # Test examples with Vitest
.github/workflows/
└── release.yml       # Automated release workflow
package.json          # Project metadata and scripts
tsconfig.json         # TypeScript configuration
vitest.config.ts      # Vitest configuration
webpack.config.cjs    # Webpack bundler configuration
```

## Quick Start

### Installation

```bash
# Using yarn
yarn

# Or using npm
npm i
```

### Development

Start the application in development mode with hot reload:

```bash
yarn dev
# or
npm run dev
```

This uses `tsx` for zero-config TypeScript execution with automatic reloading.

### Testing

Run tests with Vitest:

```bash
# Run tests once
yarn test
# or
npm test

# Run tests in watch mode
yarn test:watch
# or
npm run test:watch

# Debug tests with inspector
yarn test:debug
# or
npm run test:debug
```

#### Writing Tests

Tests use Vitest with a familiar Jest-like syntax:

```typescript
// src/utils.test.ts
import { expect, test } from 'vitest'
import { sum } from '@/utils'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

Path aliases (like `@/utils`) are automatically resolved in tests.

### Building

Bundle your application with Webpack:

```bash
yarn build
# or
npm run build
```

Output is generated in the `dist/` directory.

### Running Production Build

After building:

```bash
yarn start
# or
npm start
```

This runs the compiled bundle from `dist/index.js`.

## Development Workflow

### Conventional Commits

This template encourages [Conventional Commits](https://www.conventionalcommits.org/) for clear version management:

- `feat:` - A new feature (triggers minor version bump)
- `fix:` - A bug fix (triggers patch version bump)
- `feat!:` or `BREAKING CHANGE:` - A breaking change (triggers major version bump)
- `docs:` - Documentation changes
- `test:` - Test additions or updates
- `chore:` - Build, dependency, or tooling changes

Example commits:

```bash
git commit -m "feat: add user authentication module"
git commit -m "fix: correct email validation regex"
git commit -m "feat!: remove deprecated API endpoints"
```

### Automated Releases

The repository uses GitHub Actions with `release-please` for automatic versioning:

1. **Push commits** to `main` or `master` branch following Conventional Commits
2. **Release PR is created** automatically with:
   - Updated `package.json` version
   - Generated `CHANGELOG.md`
   - Proposed Git tag
3. **Merge the Release PR** to trigger:
   - Git tag creation
   - GitHub Release publication
   - Version bump in `package.json`

No manual version management needed!

## Configuration

### TypeScript (`tsconfig.json`)

- Target: ESNext (suitable for modern Node.js)
- Module resolution: node
- Path aliases: `@/*` → `./src/*`
- Global types: Node.js and Vitest

### Vitest (`vitest.config.ts`)

- Environment: Node
- Test pattern: `src/**/*.test.ts`
- Path alias support for imports

### Webpack (`webpack.config.cjs`)

Configured for Node.js applications with CSS and asset handling via `copy-webpack-plugin`.

## Dependencies

### Production

- **lodash** - Utility library for common tasks
- **uuid** - Generate unique identifiers
- **dotenv** - Environment variable management

### Development

- **TypeScript** - Type checking and transpilation
- **tsx** - TypeScript execution for Node.js
- **vitest** - Unit testing framework
- **webpack** & **webpack-cli** - Module bundling
- **ts-loader** - TypeScript loader for Webpack

## Usage Examples

### Create a New Module

```typescript
// src/calculator.ts
export function add(a: number, b: number): number {
  return a + b
}

export function multiply(a: number, b: number): number {
  return a * b
}
```

### Test Your Module

```typescript
// src/calculator.test.ts
import { expect, test } from 'vitest'
import { add, multiply } from '@/calculator'

test('addition', () => {
  expect(add(2, 3)).toBe(5)
})

test('multiplication', () => {
  expect(multiply(4, 5)).toBe(20)
})
```

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
API_URL=http://localhost:3000
```

Access in your code:

```typescript
// src/config.ts
import dotenv from 'dotenv'

dotenv.config()

export const config = {
  env: process.env.NODE_ENV || 'development',
  apiUrl: process.env.API_URL || 'http://localhost:3000',
}
```

## Tips for Better Development

### Path Aliases Best Practices

Use `@/` prefix for all internal imports to keep code relocatable:

```typescript
// ✅ Good
import { sum } from '@/utils/math'
import { Config } from '@/types/config'

// ❌ Avoid
import { sum } from '../utils/math'
import { Config } from '../../types/config'
```

### Testing Best Practices

- Write tests alongside source files (`.test.ts` suffix)
- Use descriptive test names
- Keep tests focused and isolated
- Use path aliases in tests just like in source code

### Use Environment Variables

Keep sensitive data and configuration in `.env` files (not committed to git):

```bash
# .gitignore
.env
.env.local
```

## Troubleshooting

### Tests fail with "Cannot find module '@/...'"

Ensure `vitest.config.ts` has the proper path alias configuration and your files exist in `src/`.

### TypeScript compilation errors in tests

Check that `tsconfig.json` includes `"types": ["vitest/globals"]` for global test functions.

### Build output not updated

Run `yarn clean` or manually delete `dist/` before rebuilding.

## Contributing

When contributing to projects using this template:

1. Follow Conventional Commits for clear commit messages
2. Ensure all tests pass: `yarn test`
3. Keep code typed with TypeScript
4. Add tests for new features
5. Use path aliases for imports

## Customization

### Change Package Name

Update `package.json`:

```json
{
  "name": "your-awesome-package",
  "description": "Your package description"
}
```

Update `.github/workflows/release.yml`:

```yaml
package-name: your-awesome-package
```

### Add Dependencies

```bash
yarn add <package-name>
yarn add --dev <dev-package-name>
```

### Extend TypeScript Config

Modify `tsconfig.json` to add more strict options if needed:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

## License

MIT - Feel free to use this template for your projects
