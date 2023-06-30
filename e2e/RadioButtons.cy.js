describe('Check Radio Button', () => {

    it('Test1: Check Radio buttons', () => {   
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //assert if radio button is displayed
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        //select radio button
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

    })

    it('Test2: Check all check box', () => {   
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // select all checkbox
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

    })

    it('Test3: unselect all selected check box', () => {   
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // select all checkbox
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //unselect all selected radio button and checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
    

    })

    it('Test4: select certain check box from the list', () => {   
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // select all checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

        
    

    })

})