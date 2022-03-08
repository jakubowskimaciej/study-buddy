describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('Test1234');
    cy.findByText(/sign in/i).click();
    cy.findByText(/logged as/i).should('exist');
  });

  it('Allows to create a new note and delete it', () => {
    cy.visit('/notes');
    cy.findByText(/title/i).click().type('My cypress note');
    cy.findByTestId(/content/i)
      .click()
      .type('lorem ipsum dolor sit amet');
    cy.findByText(/add/i).click();
    cy.findAllByText(/My cypress note/i).should('exist');
    cy.findAllByText(/My cypress note/i)
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click();
    cy.findAllByText(/My cypress note/i).should('not.exist');
  });
});
