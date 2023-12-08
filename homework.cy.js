describe('template spec', () => {
    it('text', () => {
      cy.visit('https://technoboom.ge//')
      cy.get('a[href="https://technoboom.ge/index.php?m=445"]').should("have.text", "სპეციალური შეთავაზება")
      cy.get('#search').type('sony').should("have.value", 'sony')
      cy.get('.c-advantages').find('h4').should("have.text", "ჩვენი უპირატესობები")
      
     
      })
  })
  