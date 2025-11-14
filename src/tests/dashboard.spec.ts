import { test as login} from '../fixtures/loginFixture';
import { test as dashboard} from '../fixtures/dashboardFixture';
import { mergeTests, expect } from '@playwright/test';
import { APP_USER_NAME, APP_USER_PASSWORD } from '../config/env';

export const test = mergeTests(login, dashboard);

test.beforeEach(async({login, page})=>{
    await page.goto('/');
    const statusLogin = await login.doLogin(APP_USER_NAME, APP_USER_PASSWORD);
    expect(statusLogin).toBe(true);  
});


test.describe('Add/Remove items form the cart', ()=>{
    test('Add/Remove items to the cart', async({dashboard})=>{
        await dashboard.checkDashboardPage(); 
        const totalItemsCart = await dashboard.addItemsToTheCart();
        expect(totalItemsCart).toBe("1");
        const removedButtonStatus = await dashboard.removeItemsFromTheCart(); 
        expect(removedButtonStatus).toBeFalsy(); 
    })
})