const { test, expect } = require('@playwright/test');


const positiveFunctionalTests = [
  'Kaalai vanakkam',
  'Please konjam coursewebla olunga paathu documents anupung',
  'Naan inaiki ooruku pore',
  'Nalaiku ennoda amma birthday!',
  'Naan veetuku ponathuku apram saapadu saapitu vilayaditu apram thoongiruven',
  'naan padichitu irukken',
  'avaru romba nallavar',
  'Naan kaalaiyila seekiram ealumpi jogging pore apram evening gym pore',
  'Innaiki nee college pogriya?',
  'mazhai peythaal naan veetla iruppen',
  'enakku coffee vendaam',
  'Naan neathu document anupitan',
  'Nalaiku naan india poren',
  'romba romba sandhosham',
  'avanga ellarum meeting attend pannanga',
  'innaiku traffic romba adhigama irundhuchu adhanala late ah vandhen',
  'naalaiku kaalaiyila naan seekiram ezhundhu ready aaguven',
  'nee inaiku yen university varala?',
  'First intha file ah open pannunga apram atha ellam save pannunga',
  'indha project related ana details meeting la discuss pannapadum',
  'ennoda life la naa marakka mudiyatha anupavam ennana, dubai la sky diving ponathu thaan romba sandhoshama irundhuchu',
  'naan veetuku pogaren',
  'innaiku romba happy ah irukken',
  'enga amma samayal romba nalla iruku'
];

for (const input of positiveFunctionalTests) {
  test(`Positive Functional - ${input}`, async ({ page }) => {
    await page.goto('https://tamil.changathi.com/');
    const textarea = page.locator('textarea');

    await textarea.fill(input);
    await textarea.press('Space');
    await page.waitForTimeout(2000);

    const output = await textarea.inputValue();

    expect(output).not.toBe(input); // transliteration happened
  });
}



const negativeFunctionalTests = [
  { name: 'Empty input', input: '' },
  { name: 'Numbers only', input: '1234567890' },
  { name: 'Special characters', input: '@#$%^&*()' },
  { name: 'Currency value', input: 'Rs.5000' },
  { name: 'Line breaks', input: 'naan\nassignment\npanren' },
  { name: 'OTP content', input: 'naan OTP share panna maaten' },
  { name: 'No word spacing', input: 'naacanteenpogaporan' },
  { name: 'Misspelled word', input: 'Naa offfice pore' },
  { name: 'Excessive repetition', input: 'naan naan naan naan naan' },
  { name: 'Date input', input: 'ennoda date of birth 14/04/2001' }
];

for (const tc of negativeFunctionalTests) {
  test(`Negative Functional - ${tc.name}`, async ({ page }) => {

   
    test.fail(true, 'Negative test case – invalid input');

    await page.goto('https://tamil.changathi.com/');
    const textarea = page.locator('textarea');

    await textarea.fill(tc.input);
    await textarea.press('Space');
    await page.waitForTimeout(2000);

    const output = await textarea.inputValue();

   
    expect(output).not.toBe(tc.input);
  });
}



test('UI Positive - Textarea visible, enabled and usable', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('textarea');

  await expect(textarea).toBeVisible();
  await expect(textarea).toBeEnabled();

  await textarea.fill('test');
  const value = await textarea.inputValue();

  expect(value).toBe('test');
});

