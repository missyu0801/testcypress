

describe('Alerts', () =>{
    it('Test1: Javascript alert with text and ok button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        
        //trigger events to view alert properties check the text in prompt
        cy.on('window:alert',(alertwindow) => {
            //t is a variable to capture alert-window
            expect(alertwindow).to.contains('I am a JS Alert');
        })
        //assertion
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    it('Test2: Javascript confirmation alert with text and ok button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        
        //trigger events to view alert properties check the text in prompt
        cy.on('window:confirm',(confirmwindow) => {
            //t is a variable to capture alert-window
            expect(confirmwindow).to.contains('I am a JS Confirm');
        })
        //assertion cypress automatically clsoed alert window ok button
        cy.get("#result").should('have.text','You clicked: Ok')
    })


    it('Test3: Javascript confirmation alert with text and cancel button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        
        //trigger events to view alert properties check the text in prompt
        cy.on('window:confirm',(confirmwindow) => {
            //t is a variable to capture alert-window
            expect(confirmwindow).to.contains('I am a JS Confirm');
        })
         //assertion closed alert window by cancel button
        cy.on('window:confirm',()=> false);
       
        cy.get("#result").should('have.text','You clicked: Cancel')
    })


    it('Test4: Javascript prompt alert with user input text and ok and cancel button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        
        //trigger events to view alert properties and input the text in prompt
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('Hello world');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        //assertion cypress automatically closed alert window by ok button
        cy.get("#result").should('have.text','You entered: Hello world')
    })

    it('Test5: Javascript prompt alert with user input text and cancel button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        
        //trigger events to view alert properties and input the text in prompt
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome');
        })
        
        cy.get("button[onclick='jsPrompt()']").click();

        //assertion cypress closed alert window by cancel button
        cy.on('window:prompt',()=> false);
        cy.get("#result").should('have.text','You entered: null')
    })

    it('Test6: Authenticated Alert by passing username and password as parameter', () => {
        //Scenario1 directly inject into the url
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin", password:"admin"}})
        //assertion
        cy.get(".example").should('have.contain',"Congratulations! You must have the proper credentials.")
        
        
    })

    it.only('Test7: Authenticated Alert by inserting username and password in the url', () => {
        //Scenario1 directly inject into the url
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth",{auth:{username:"admin", password:"admin"}})
        //assertion
        cy.get(".example").should('have.contain',"Congratulations! You must have the proper credentials.")
        
        
    })









})