# Singular Playwright E2E Testing

This repository contains end-to-end (E2E) tests for a web application using [Playwright](https://playwright.dev/).

## Project Structure

```
Task_Nino_Londaridze_AQA/
├── features
    ├── register.feature
├── .gitignore
├── package.json
├── playwright.config.ts
├── Readme.md
├── TEST_STRATEGY.md
├── playwright-report/
│   ├── index.html
│   └── test-results/
│       └── .last-run.json
└── tests/
    └── step_definitions
        └── register.steps.js
    └── e2e-checkout.spec.js 
```

- **playwright.config.ts**: Playwright configuration file.
- **tests/**: Contains E2E test specs.
- **playwright-report/**: Stores Playwright HTML reports and test results.
- **package.json**: Project dependencies and scripts.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Install dependencies:
   ```sh
   npm install
   ```

2. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

### Running Tests

- Run all tests in headless mode:
  ```sh
  npm test
  ```

- Run tests in headed mode (with browser UI):
  ```sh
  npm run test:headed
  ```

### Viewing Reports

After running tests, open the HTML report:
```sh
npx playwright show-report
```
Or open `playwright-report/index.html` in your browser.

## Configuration

You can modify browser targets and other settings in `playwright.config.ts`.

## Writing Tests

Add new test files in the `tests/` directory. Example test: `e2e-checkout.spec.js`.
