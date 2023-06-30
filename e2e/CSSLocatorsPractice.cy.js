describe('My First Test', () => {

    it('Test1: css locator sample', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")  //attributes and tag input can be optional
        cy.get("[type='password']").type("admin123") //attributes and tag input can be optional
        cy.get("button[type='submit']").click() 
        cy.get("span.oxd-topbar-header-breadcrumb").contains("Dashboard") //assertion
        
    })
})