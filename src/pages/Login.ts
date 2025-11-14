import { Page, Locator, expect } from "@playwright/test";

export class Login{

    private readonly page: Page;
    private readonly loginPageTitle: Locator; 
    private readonly userNameInput: Locator; 
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly dashboardText: Locator;
    public readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginPageTitle = page.getByText('Swag Labs');
        this.userNameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.dashboardText = page.locator('[data-test="title"]');
        this.errorMessage = page.locator('[data-test="error"]');

    };

    async doLogin(username: string, password: string){
        await this.loginPageTitle.isVisible(); 
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('domcontentloaded');
        if(await this.errorMessage.isVisible()){
            return false;
        }
        else{
            await this.dashboardText.isVisible();
            return true; 
        }
    }
}