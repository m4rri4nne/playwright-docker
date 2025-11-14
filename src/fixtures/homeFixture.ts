import {test as base} from '@playwright/test'; 
import { Home } from '../pages/Home';

type HomeFixture = {
    homePage: Home;
}

export const test = base.extend<HomeFixture>(
    {
        homePage: async({page}, use)=>{
            const dash = new Home(page);
            await use(dash)
        }, 
    }
)