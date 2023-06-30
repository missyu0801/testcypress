describe('Drop down testing', () => {

    it.skip('Test1: Normal dropdown with seelct', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html?submit=success")

        //select items from the dropdown
        cy.get('#zcf_address_country').select('Nepal').should('have.value', 'Nepal')  
    })

    it.skip('Test2: Dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('span#select2-billing_country-container').click()
        cy.get('.select2-search__field').type("Italy").type('{enter}')
        //assertion
        cy.get('span#select2-billing_country-container').should('have.text', 'Italy')  

    })

    it.skip('Test3: Auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type("Delhi")
        cy.get('.suggestion-title').contains("Delhi University").click()
        //assertion
        cy.get('.mw-page-title-main').should('be.visible')
        

    })

    it('Test4: Dynamic dropdown', () => {
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("cypress automation tool")
        //count total number of options
        cy.get('.wM6W7d').should('have.length',12)

        cy.get('.wM6W7d').each(($el, index, $list)=>  {
            if($el.text() == 'cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })
        //assertion

        cy.get("#APjFqb").should('have.value','cypress automation tool')
        
        

    })
})