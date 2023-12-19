const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'Owen Clary'", async () => {
  // Navigate to google.com
  await driver.get("https://www.google.com");

  // Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  await driver.findElement(By.name('q')).sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});


test("can search Google twice", async () => {
  await driver.get("https://www.google.com");

  // Search for the first term
  await driver.findElement(By.name('q')).sendKeys("Owen Clary", Key.RETURN);
  await driver.wait(until.titleIs("Owen Clary - Google Search"), 1000);

  // Clear the search bar to enter a new term
  await driver.findElement(By.name('q')).clear();

  // Search for a new term
  await driver.findElement(By.name('q')).sendKeys("Owen Clary", Key.RETURN);
  await driver.wait(until.titleIs("Owen Clary - Google Search"), 1000);

  // Wait for the results page to load
  await driver.wait(until.titleIs("Owen Clary - Google Search"), 1000);
});
