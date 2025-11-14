import {Page, Locator} from '@playwright/test';
export class Dashboard{
    private readonly page: Page;
    private readonly inventoryLocator: Locator

    constructor(page: Page){
        this.page = page;
        this.inventoryLocator = page.locator('[data-test="inventory-list"'); 
    }

    async checkDashboardPage(){
        
    }
}