import {test as login} from '../fixtures/loginFixture';
import { mergeTests, expect } from '@playwright/test';
import { APP_USER_NAME, APP_USER_PASSWORD } from '../config/env';

export const test = mergeTests(login);

test.describe('Login', ()=>{
    test('Successful login with valid credentials', async({page, login})=>{
        await page.goto('/');
        const statusLogin = await login.doLogin(APP_USER_NAME, APP_USER_PASSWORD);
        expect(statusLogin).toBe(true);  
    })
    test('Login with invalid credentials', async({page, login})=>{
        await page.goto('/');
        const statusLogin = await login.doLogin('InvalidUser', 'Invalid Password');
        expect(statusLogin).toBe(true);  
    })
})