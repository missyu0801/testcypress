describe('Assert Test', () => {

    it('Test1: Implicit Assertions sample', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //implicit assertion 
        //check if url contains partial text orangehrmlive.com
        cy.url()
        .and('include','orangehrmlive.com')
        .and('contain','opensource-demo')
        //implicit assertion check if url is equals to the required url specification
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.title().should('include', 'Orange')
        .and('eq', "OrangeHRM")
        .and('contain', "HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')
        
        cy.get("a").should('have.length', 5)


        cy.get("input[name='username']").type("Admin")     //provide value in username field
        cy.get("input[name='username']").should('have.value', 'Admin') //check value input


    })

    it('Test2: Explicit Assertions sample', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //Explicit assertions
        cy.get("input[name='username']").type("Admin")  
        cy.get("[type='password']").type("admin123")
        cy.get('.oxd-button').click()

        
        let expName ="Paul Collings";
        cy.get(".oxd-userdropdown-name").then((x) => {
            //BDD style assertion
            let actName = x.text()
            expect(actName).to.equal(expName)         
            expect(actName).to.not.equal(expName)    
        
            //TDD style
            assert.equal(actName, expName)
            assert.not.equal(actName, expName)

            
         })

    })
})