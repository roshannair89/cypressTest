export const YaraAppTest = () => {
    cy.visit('/')
    cy.contains("Yara App").click()

}
