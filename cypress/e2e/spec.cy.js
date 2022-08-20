describe('My First Test', () => {
  it('Site', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Get Ready to land")
  })
})