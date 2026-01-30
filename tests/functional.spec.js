const { test, expect } = require('@playwright/test');

const positiveTests = [
  'naan veetuku pogaren',
  'innaiku enaku romba sandhosham',
  'avanga ellarum meeting attend pannanga',
  'naalai naan office poganum',
  'enga amma samayal romba nalla iruku'
];

for (const input of positiveTests) {
  test(`Positive Functional - ${input}`, async ({ page }) => {
    await page.goto('https://tamil.changathi.com/');

    const textarea = page.locator('textarea');

    await textarea.click();
    await textarea.fill('');
    await textarea.pressSequentially(input);
    await textarea.press('Space');

    await page.waitForTimeout(2000);

    const outputValue = await textarea.inputValue();
    expect(outputValue).not.toBe(input);
  });
}
