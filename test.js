const { Builder, By, Key, until } = require('selenium-webdriver');

// Функция для выполнения теста
async function runTest() {
    // Инициализация веб-драйвера (предполагается, что у вас уже установлен Selenium WebDriver)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Открыть главную страницу сайта
        await driver.get('https://www.dota2.com/');

        // Добавим ожидание появления ссылки на раздел "Герои"
        await driver.wait(until.elementLocated(By.css('a[href="/heroes"]')), 5000);

        // Найти ссылку на раздел "Герои" и кликнуть по ней
        let heroesLink = await driver.findElement(By.css('a[href="/heroes"]'));
        await heroesLink.click();

        // Добавим ожидание появления выпадающего списка атрибутов
        await driver.wait(until.elementLocated(By.css('div[class="_30qnjy6fkdTLNGj-OhqJZL"]')), 10000);

        // Указать нужный атрибут (например, "Strength")
        let attributeDropdown = await driver.findElement(By.css('div[class="_30qnjy6fkdTLNGj-OhqJZL"]'));
        await attributeDropdown.findElement(By.css('div[class="N74aaCii0wv_Ody2YGY_w"]')).click();

        // Добавим задержку перед поиском героев
        await driver.sleep(5000);

        // Найти и кликнуть на нужного героя
        let requiredHeroLink = await driver.findElement(By.css('a[href="/hero/axe"]'));
        await requiredHeroLink.click();

        await driver.sleep(5000);
        
    } finally {
        await driver.sleep(5000);
        // Закрыть веб-драйвер после выполнения теста
        await driver.quit();
    }
}

// Вызов функции для выполнения теста
runTest();
