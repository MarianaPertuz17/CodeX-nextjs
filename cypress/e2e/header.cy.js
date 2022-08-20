describe('header', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a').contains('Sandbox').click()
    cy.url().should('include', '/sandbox')
    cy.contains('Difficulty')
  })
})

