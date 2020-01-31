describe('user can delete a contact', () => {
    before('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Kayla')
        cy.get('#email').type('kaylasandoval@gmail.com')
        cy.get('#phone').type('0700 101010')
        cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('Learning to code')
        cy.get('#twitter').type('@kayla')
        cy.get('#submit').click()
    })

    it('clicks the remove button', () => {
        cy.get('#contact-list').should('contain', 'Kayla', '#remove').click()
        cy.get('#contact-list').not('contain', 'Kayla')
    	})
})