describe('template spec', () => {
  it('text', () => {
    cy.visit('https://grandel.ge/cifruli-teqnika/')
    cy.get(".gp-footer-form-block__title").should("have.text", "გამოიწერე")

    })

    it('value', () => {
      cy.visit('https://grandel.ge/cifruli-teqnika/')
      cy.get("#subscr_email227").type('giorgigakharia@gmail.com').should("have.value", "giorgigakharia@gmail.com")
    })

    it('class', () => {
      cy.visit('https://grandel.ge/cifruli-teqnika/')
      cy.get(".et-container").should("exist")
    })


})

