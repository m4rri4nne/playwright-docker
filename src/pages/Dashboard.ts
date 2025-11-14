import {Page, Locator} from '@playwright/test';
export class Dashboard{
    private readonly page: Page;
    private readonly inventoryItem: Locator;
    private readonly addToCart: Locator; 
    private readonly removeFromCart: Locator; 
    private readonly badgeItemInTheCart: Locator;

    constructor(page: Page){
        this.page = page;
        this.inventoryItem = page.locator('[data-test="inventory-item"]');
        this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.removeFromCart = page.locator('[data-test="remove-sauce-labs-bike-light"]');     
        this.badgeItemInTheCart = page.locator('[data-test="shopping-cart-badge"]');
    }

    async checkDashboardPage(){
        const totalElements = await this.inventoryItem.count();
        for(let i = 0; i < totalElements; i++){
            console.log('Starting validation of elements')
            await this.inventoryItem.nth(i).locator('[data-test="inventory-item-name"]').isVisible();
            await this.inventoryItem.nth(i).locator('[data-test="inventory-item-desc"]').isVisible();
            await this.inventoryItem.nth(i).locator('[data-test="inventory-item-price"]').isVisible();
        }
    }

    async addItemsToTheCart(){
        await this.addToCart.click();
        await this.removeFromCart.isVisible(); 
        await this.badgeItemInTheCart.isVisible(); 
        const totalItemsCart = await this.badgeItemInTheCart.textContent();
        return totalItemsCart; 
    }

    async removeItemsFromTheCart(){
        await this.removeFromCart.isVisible(); 
        await this.removeFromCart.click();
        await this.addToCart.isVisible(); 
        const removeButtonStatus = await this.removeFromCart.isVisible();
        return removeButtonStatus; 
    }
}