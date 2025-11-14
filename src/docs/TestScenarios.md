# Test scenarios for E-commerce [Swag Labs](https://www.saucedemo.com)

Planned scenarios for E-commerce Swag labs to be automated: 

## Login - Done

```gherkin
Feature: Login
  Scenario: Successful login with valid credentials
    Given the user navigates to the login page
    When they enter valid username and password
    Then they should be redirected to the main page
  Scenario: Login with invalid credentials 
    Given the user navigates to the login page
    When they enter invalid username or password
    Then they see the warning message
    And  is not logged in 
```
## Add/Remove items from the cart - Done

```gherkin
Feature: Add and remove items from the cart 
  Scenario: Add items in the cart with success 
    Given the user is in the main page 
    When they click to add a item to the cart 
    Then number of items on the cart should increase

  Scenario: Remove items in the cart with success
    Given the user is in the main page
    When they click to remove a item from the cart
    Then number of items on the cart should reduce
```
## Sort products - Done

```gherkin
Feature: Sort products
  Scenario: Sort products
    Given the user is in the main page 
    When they click to sort the products by <sortType>
    Then they see the products listed from <orderOne> to <orderTwo>
    
    Example:
      | sortType    | orderOne | orderTwo| 
      | Low to high | lowest   | highest | 
      | High to low | highest  | lowest  |
      | A -> Z      |  A       |    Z    |
      | Z -> A      |  Z       |    A    |
```


## Buy products 

```gherkin
Feature: Buy a products
  Scenario: Make checkout with success
    Given the user click on the cart to start the checkout
    When they click to checkout 
    And add the correct information to the Checkout information section 
    And click in Finish 
    Then they see the success page for the Checkout

```