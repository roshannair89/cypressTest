import { smokeTest } from './Smoke'

Cypress._.each(['macbook-16', 'iphone-8','samsung-s10','ipad-mini'], viewport => {
  it(`works on ${viewport}`, () => {
    cy.login()
    cy.viewport(viewport)
    smokeTest()
  })
})