import {Page, Locator} from '@playwright/test';
export class Checkout{     
    
    private readonly page: Page;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private postalCodeInput: Locator;
    private continueButton: Locator;
    private readonly overviewPage: Locator; 
    private readonly finishButton: Locator;
    private readonly completeBuyText: Locator;
    private readonly completeBuyTextDescription: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.overviewPage = page.locator('[data-test="secondary-header"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeBuyText = page.locator('[data-test="complete-header"]');
        this.completeBuyTextDescription = page.locator('[data-test="complete-text"]');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async checkOverviewPage(){
        const headerText = await this.overviewPage.textContent();
        return headerText;
    }

    async finishCheckout(){
        await this.finishButton.click();
        const completeText = await this.completeBuyText.textContent();
        const completeTextDescription = await this.completeBuyTextDescription.textContent();
        return {completeText, completeTextDescription};
    }

}