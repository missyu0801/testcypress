describe('Frames', () => {
    it.skip('Test1: Approach1', () => {
        //steps
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            
            iframe.clear().type("Hello Cypress {cmd+a}")
            cy.get('button[aria-label="Bold"').click
    })

    it('Test2: Approach 2  using custom commands', () => {
        //steps
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe('#mce_0_ifr').clear().type("Hello Cypress {cmd+a}")
        cy.get('button[aria-label="Bold"').click

    })


  })