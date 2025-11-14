import {Page, Locator} from '@playwright/test';
import { SortType, sortValidationMap, sortMap } from '../helpers/sortValidation';

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

    
    async sortItems(sort: SortType){
        const label = sortMap[sort];
        if (!label) throw new Error(`Sort type "${sort}" invalid.`);
        await this.sortLocator.selectOption({ label });
    }

    async checkSort(sort:SortType){
        const validationMap = sortValidationMap(this.inventoryItem); 
        const validateFn = validationMap[sort];
        if (!validateFn) throw new Error(`Sort type "${sort}" invalid.`);
        const isValid = await validateFn();
        if (!isValid) throw new Error(`The sort "${sort}" is incorrect`);
    }
}