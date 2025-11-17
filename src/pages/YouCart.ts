import {Page, Locator} from '@playwright/test';

export class YouCart{
    private readonly page: Page;
    public readonly badgeItemInTheCart: Locator;
    private readonly cartList: Locator;
    private checkoutButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.badgeItemInTheCart = page.locator('[data-test="shopping-cart-badge"]');
        this.cartList = page.locator('[data-test="cart-list"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }


    async checkItemsInTheCart(){
        const totalElements = await this.cartList.locator('[data-test="cart-item"]').count();   
        for(let i = 0; i < totalElements; i++){
            await this.cartList.locator('[data-test="cart-item"]').nth(i).locator('[data-test="cart-item-name"]').isVisible();
            await this.cartList.locator('[data-test="cart-item"]').nth(i).locator('[data-test="cart-item-desc"]').isVisible();
            await this.cartList.locator('[data-test="cart-item"]').nth(i).locator('[data-test="cart-item-price"]').isVisible();
        }
    }
    
    async goToCheckout(){
        await this.checkoutButton.click();
    }
        
}