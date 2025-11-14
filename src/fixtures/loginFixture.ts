import {test as base} from '@playwright/test'; 
import { Login } from '../pages/Login';

type LoginFixture = {
    login: Login;
}

export const test = base.extend<LoginFixture>(
    {
        login: async({page}, use)=>{
            const login = new Login(page);
            await use(login)
        }, 
    }
)