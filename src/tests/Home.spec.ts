import { test as login} from '../fixtures/loginFixture';
import { test as homePage} from '../fixtures/homeFixture';
import { mergeTests, expect } from '@playwright/test';
import { APP_USER_NAME, APP_USER_PASSWORD } from '../config/env';

export const test = mergeTests(login, homePage);

test.beforeEach(async({login, page})=>{
    await page.goto('/');
    const statusLogin = await login.doLogin(APP_USER_NAME, APP_USER_PASSWORD);
    expect(statusLogin).toBe(true);  
});


test.describe('Add/Remove items form the cart', ()=>{
    test('Add/Remove items to the cart', async({homePage})=>{
        await homePage.checkDashboardPage(); 
        const totalItemsCart = await homePage.addItemsToTheCart();
        expect(totalItemsCart).toBe("1");
        const removedButtonStatus = await homePage.removeItemsFromTheCart(); 
        expect(removedButtonStatus).toBeFalsy(); 
    })
})

test.describe('Sort items on Products page', ()=>{
    test('Sort items from A to Z', async({homePage})=>{
        await homePage.checkDashboardPage(); 
        await homePage.selectSort('Name A to Z'); 
    })
    test('Sort items from Z to A', async({homePage})=>{
        await homePage.checkDashboardPage(); 
        await homePage.selectSort('Name Z to A'); 
    })
    test('Sort items by Price - Lowest to Highest', async({homePage})=>{
        await homePage.checkDashboardPage(); 
        await homePage.selectSort('Price Lowest to Highest'); 
    })
    test('Sort items by Price - Highest to Lowest', async({homePage})=>{
        await homePage.checkDashboardPage(); 
        await homePage.selectSort('Prince Highest to Lowest'); 
    })
})