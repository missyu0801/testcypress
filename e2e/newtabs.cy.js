describe('Open tabs', () => {

    it.skip('Test1: tab open approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")//parent tab
        cy.get(".example>a[href='/windows/new']").invoke('removeAttr','target').click() //open link in same tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back') //go back to parent tab
    })

    it('Test2: tab open approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")//parent tab
        cy.get(".example>a[href='/windows/new']").then((store_element) =>{
            let url = store_element.prop('href');
            cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back') //go back to parent tab
    })
})