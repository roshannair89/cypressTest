///<reference types="cypress"/>

describe("Yaraworks-SMOKE TEST SUITE", () => {

    beforeEach(() => {

        cy.fixture('profile').then(function ($font) {
            cy.visit('/')
        })

    })


    it('Yara home and Login screen check', () => {

        //cy.contains('Yara')//Check Yara logo is visible
        cy.contains("EN").should('have.attr', 'type', 'button')///Language toggle check
        cy.contains("Sign in to your organization") //Org check
        cy.get('#organization').should('be.visible').type('Telus') //Enter Org as Telus
        cy.contains('Continue').should('have.attr', 'type', 'submit').click() //Click on Continue
        //Check Login page
        cy.contains('Sign in to TELUS')//Check user is redirected to Telus login screen
        cy.contains("Continue with Single Sign-on").should('have.attr', 'type', 'button')//Check user has the option to Sign in using SSO


    })

    it('Yara Admin and App option screen', () => {
        //Sign in using Email/Password on dev     
        cy.fixture('profile').then(function ($font) {
            cy.login($font.email, $font.password)
        })

        cy.get('[data-testid=image-variant-next-image]').should('be.visible')//Yara Logo check
        cy.contains("EN").should('have.attr', 'type', 'button')//Language toggle Check
        cy.contains("Logout").should('have.attr', 'href', '/logout')//Logout button check
        cy.get('#id').contains('Where would you like to start today?')//Welcome screen label
        cy.contains("Admin").should('have.attr', 'href', 'https://dev.yaraworks.com/admin')//Check if Admin button is present
        cy.contains("App").should('have.attr', 'href', 'https://dev.yaraworks.com/app')//Check if App button is present

    })

    it('Yara App screen', () => {
        //Sign in using Email/Password on dev     
        cy.fixture('profile').then(function ($font) {
            cy.login($font.email, $font.password)
        })

        cy.get('[href="https://dev.yaraworks.com/app"]').should('be.visible').click()//Select App
        cy.contains("Yara")//Yara logo
        cy.contains("Spaces").should('have.attr', 'href', '/app/spaces')//Spaces nav icon
        cy.contains("Mixer").should('have.attr', 'href', '/app/mixer')//Mixer nav icon
        cy.contains("Account")//Account nav icon
        cy.contains("Admin").should('have.attr', 'href', 'https://dev.yaraworks.com/admin/en-ca')//Admin link
        cy.contains('Support')//Support link
        cy.contains("Logout").should('have.attr', 'href', 'https://dev.yaraworks.com/logout')//Log out button
        cy.contains("EN").should('have.attr', 'type', 'button')//Language toggle

        cy.get('[href="/app/spaces?space-event=book-room"]').contains('New Meeting')//New Meeting button
        cy.get('[href="/app/spaces?space-event=book-desk"]').contains('Reserve a desk')//Desk Reservation button
        cy.contains("Mixer").should('have.attr', 'href', '/app/mixer')//Mixer Button
        //Current month/year label check
        var d = new Date();
        var month = d.toLocaleString('default', { month: 'long' })
        var year = d.getFullYear()
        cy.contains(month + ' ' + year)
        cy.get('.ccWIeH').contains('Next in your day')//Next in your day label
        cy.contains("Have some free time?")
        cy.contains("Meet for Coffee")
        cy.contains("Grab a Bite")
        cy.contains("Meet for Happy Hour").click()
        cy.wait(1000)
        cy.contains('Back to Mixer').click()//Click Back to Mixer
        cy.contains("Mixer")
        cy.contains("How it works")
        //cy.contains('Pick an activity')
        cy.contains("Settings")
        cy.contains("Meet for Coffee")
        cy.contains("Grab a Bite")
        cy.contains("Meet for Happy Hour")

        //below code is to check all hyperlinks
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
          })

    })



})