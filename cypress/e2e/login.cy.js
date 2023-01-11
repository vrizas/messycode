/**
 * - Login spec
 *   - should display login modal correctly
 *   - should display validation popup when email is empty
 *   - should display validation popup when password is empty
 *   - should display validation popup when email is invalid
 *   - should display alert when email and password are wrong
 *   - should display alert and close login modal when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('button.login-btn').click()
  })

  it('should display login modal correctly', () => {
    cy.get('.login-form input[placeholder="Email"]').should('be.visible')
    cy.get('.login-form input[placeholder="Password"]').should('be.visible')
    cy.get('.login-form button[type="submit"]').contains(/^Login$/).should('be.visible')
  })

  it('should display validation popup when email is empty', () => {
    cy.get('.login-form input[placeholder="Password"]').type('bambang123')

    cy.get('.login-form button[type="submit"]').contains(/^Login$/).click()

    cy.get('.login-form input[placeholder="Email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  })

  it('should display validation popup when password is empty', () => {
    cy.get('.login-form input[placeholder="Email"]').type('bams@gmail.com')

    cy.get('.login-form button[type="submit"]').contains(/^Login$/).click()

    cy.get('.login-form input[placeholder="Password"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  })

  it('should display validation popup when email is invalid', () => {
    cy.get('.login-form input[placeholder="Email"]').type('bams')
    cy.get('.login-form input[placeholder="Password"]').type('bambang123')

    cy.get('.login-form button[type="submit"]').contains(/^Login$/).click()
    cy.get('.login-form input[placeholder="Email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'bams' is missing an '@'.")
    })
  })

  it('should display validation popup when email and password are wrong', () => {
    cy.get('.login-form input[placeholder="Email"]').type('coba@gmail.com')
    cy.get('.login-form input[placeholder="Password"]').type('coba')

    cy.get('.login-form button[type="submit"]').contains(/^Login$/).click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong')
    })
  })

  it('should display close login modal when email and password are correct', () => {
    cy.get('.login-form input[placeholder="Email"]').type('bams@gmail.com')
    cy.get('.login-form input[placeholder="Password"]').type('bambang123')

    cy.get('.login-form button[type="submit"]').contains(/^Login$/).click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login successful')
    })
    cy.get('nav button.logout-btn').contains(/^Logout$/).should('be.visible')
  })
})
