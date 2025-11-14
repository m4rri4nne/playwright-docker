import {test as base} from '@playwright/test'; 
import { Dashboard } from '../pages/Dashboard';

type DashboardFixture = {
    dashboard: Dashboard;
}

export const test = base.extend<DashboardFixture>(
    {
        dashboard: async({page}, use)=>{
            const dash = new Dashboard(page);
            await use(dash)
        }, 
    }
)