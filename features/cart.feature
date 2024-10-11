Feature: Cart feature

    @testcaseId @regression @smoke 
    Scenario: A guest user, I can add a product at item details page to Cart
        Given I select a product item from search result
        And I add product to cart
        Then I should see number 1 in cart icon
        And I should see the product information in my cart
