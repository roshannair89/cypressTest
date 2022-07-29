import { smokeTest } from './Smoke'


	Cypress._.each(['macbook-15', 'iphone-8', 'samsung-s10'], viewport => {
		it(`Testing on ${viewport}`, () => {
			cy.login()
			cy.viewport(viewport)
			smokeTest()
			cy.injectAxe()
			cy.customCheckAlly()
		})
	})
