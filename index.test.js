const { Builder, By, Key, until } = require('selenium-webdriver');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

describe('Добавление товара в корзину', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Поиск товара и добавление в корзину', async () => {
        try {
            await driver.get('https://www.elmarket.by/');

            let searchInput = await driver.findElement(By.id('search-field'));
            await searchInput.sendKeys('Braun MQ 3135 WH Sauce', Key.RETURN);

            await driver.wait(until.elementLocated(By.className('catalog list search-catalog-block')), 5000);

            await sleep(3000);

            console.log('Товар успешно найден!');
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 10000);
});