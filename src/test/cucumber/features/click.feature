Feature: Test how clicks are handled on a certain element
    As a developer
    I want to be able to test how (double) clicks are handled by certain elements

    Background:
        Given I open the site "/"

    Scenario: Single click on a link should navigate to another page
        When  I click on the link "Navigate to example.com"
        Then  I expect the url to contain "https://example.com"
