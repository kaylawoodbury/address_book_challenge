/* first tests for address book
1. User can access homepage (the localhost:3001)
2. User can click on an element called 'add-contact'
*/

describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
    })
})
