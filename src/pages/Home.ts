import {Page, Locator} from '@playwright/test';

type SortType = 'Name Z to A' | 'Name A to Z' | 'Price Lowest to Highest' | 'Prince Highest to Lowest';
export class Home{
    private readonly page: Page;
    private readonly inventoryItem: Locator;
    private readonly addToCart: Locator; 
    private readonly removeFromCart: Locator; 
    private readonly badgeItemInTheCart: Locator;
    private readonly sortLocator: Locator; 

    constructor(page: Page){
        this.page = page;
        this.inventoryItem = page.locator('[data-test="inventory-item"]');
        this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.removeFromCart = page.locator('[data-test="remove-sauce-labs-bike-light"]');     
        this.badgeItemInTheCart = page.locator('[data-test="shopping-cart-badge"]');
        this.sortLocator = page.locator('[data-test="product-sort-container"]'); 
        
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

    
    async selectSort(sort: SortType){
        switch(sort){
            case 'Name Z to A':
                await this.sortLocator.selectOption({ label: "Name (Z to A)" });
                break;
            case 'Name A to Z':
                await this.sortLocator.selectOption({label: "Name (A to Z)"});
                break;
            case 'Price Lowest to Highest':
                await this.sortLocator.selectOption({label: "Price (low to high)"});
                break;
            case 'Prince Highest to Lowest':
                await this.sortLocator.selectOption({label: "Price (high to low)"});
                break;
            default:
                break;
        }
    }
}