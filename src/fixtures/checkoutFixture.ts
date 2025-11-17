import {test as base} from '@playwright/test'; 
import { YouCart } from '../pages/YouCart';
import { Checkout } from '../pages/Checkout';

type CheckoutFixture = {
    checkoutPage: Checkout;
}
type YouCartFixture = {
    youCartPage: YouCart;
}

export const test = base.extend<CheckoutFixture & YouCartFixture>(
    {
        checkoutPage: async({page}, use)=>{ 
            const checkout = new Checkout(page);
            await use(checkout)
        },
        youCartPage: async({page}, use)=>{
            const youCart = new YouCart(page);
            await use(youCart)
        }
    }
)