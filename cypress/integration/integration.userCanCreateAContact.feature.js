/* add contact tests for address book
1. User can access homepage (the localhost:3001)
2. User can click on an element called 'add-contact'
3. User can add contact elements, name number etc
4. User can click save element
*/

describe('user can create a contact', () => {
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

    it('displays the name of the new contact', () => {
        cy.get('#contact-list').should('contain', 'Kayla')
    })

    it('displays the phone number of the new contact', () => {
        cy.get('#contact-list').should('contain', '0700 101010')
    })
})
