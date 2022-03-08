describe('Study buddy app', () => {
  it('Renders an unauthenticated app', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
  });

  it('Allows user to authenticate', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('Test1234');
    cy.findByText(/sign in/i).click();
    cy.findByText(/logged as/i).should('exist');
  });
});
