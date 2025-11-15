import { test as login} from '../fixtures/loginFixture';
import { test as homePage} from '../fixtures/homeFixture';
import { mergeTests, expect } from '@playwright/test';
import { APP_USER_NAME, APP_USER_PASSWORD } from '../config/env';

export const test = mergeTests(login, homePage);

test.beforeEach(async({login, homePage, page})=>{
    await page.goto('/');
    const statusLogin = await login.doLogin(APP_USER_NAME, APP_USER_PASSWORD);
    expect(statusLogin).toBe(true); 
    const totalItemsCart = await homePage.addItemsToTheCart();
    expect(totalItemsCart).toBe("1"); 
});


test.describe('Buy a product', ()=>{
    test('Make checkout with success', async({homePage})=>{
        homePage.badgeItemInTheCart.click()
    })
})
