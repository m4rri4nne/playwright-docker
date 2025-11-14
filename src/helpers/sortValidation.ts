// sortMap.ts
import { Locator } from '@playwright/test';

export type SortType = 
  | 'Name Z to A'
  | 'Name A to Z'
  | 'Price Lowest to Highest'
  | 'Price Highest to Lowest';


export const sortMap: Record<SortType, string> = {
    'Name Z to A': "Name (Z to A)",
    'Name A to Z': "Name (A to Z)",
    'Price Lowest to Highest': "Price (low to high)",
    'Price Highest to Lowest': "Price (high to low)",
};

export function isSortedAlpha(array: string[], ascending = true) {
    const sorted = [...array].sort((a, b) => a.localeCompare(b));
    return ascending ? array.join() === sorted.join() : array.join() === sorted.reverse().join();
}

export function isSortedNumeric(array: string[], ascending = true) {
    const numbers = array.map(x => parseFloat(x.replace('$','')));
    const sorted = [...numbers].sort((a, b) => a - b);
    return ascending ? numbers.join() === sorted.join() : numbers.join() === sorted.reverse().join();
}

// Map to validate items
export const sortValidationMap = (inventoryItem: Locator): Record<SortType, () => Promise<boolean>> => ({
    'Name Z to A': async () => {
        const names = await inventoryItem.locator('[data-test="inventory-item-name"]').allTextContents();
        return isSortedAlpha(names, false);
    },
    'Name A to Z': async () => {
        const names = await inventoryItem.locator('[data-test="inventory-item-name"]').allTextContents();
        return isSortedAlpha(names, true);
    },
    'Price Lowest to Highest': async () => {
        const prices = await inventoryItem.locator('[data-test="inventory-item-price"]').allTextContents();
        return isSortedNumeric(prices, true);
    },
    'Price Highest to Lowest': async () => {
        const prices = await inventoryItem.locator('[data-test="inventory-item-price"]').allTextContents();
        return isSortedNumeric(prices, false);
    }
});
