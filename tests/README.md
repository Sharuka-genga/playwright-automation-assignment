# Playwright Automation Testing – Assignment 1

## Project Overview
This includes automated functional test cases developed using Playwright, which are applied to the Thanglish-to-Tamil transliteration application for validation.

The automation focuses on positive functional scenarios where valid Thanglish inputs are successfully converted to Tamil text.

---

## Tools & Technologies
- Playwright
- JavaScript
- Node.js
- Chromium, Firefox, WebKit

---

## Automation Testing Approach
Automation testing was performed to validate the functional behavior of the Thanglish-to-Tamil transliteration application using Playwright.

The coverage of automation was for positive functional scenarios only, the focus being on valid Thanglish inputs. These tests simulate real user typing behavior and verify that transliteration occurs by checking that the output is different from the input.

Cross-browser testing was carried out with Chromium, Firefox, and WebKit in order to confirm that behavior is consistent across browsers.

---

## Project Setup

### Prerequisites
- Node.js (v18 or above)
- npm

### Install Dependencies
```bash
npm install

---

## Running Tests

To run all automated tests, execute the following command in the project root directory:

```bash
npx playwright test
npx playwright test functional.spec.js

 To view the HTML test report:
```bash
npx playwright show-report
