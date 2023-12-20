Cypress.Commands.overwrite('log', (originalFn, message) => {
  if (Cypress.config('isInteractive')) {
    return originalFn(typeof message === 'object' ? JSON.stringify(message, null, 2) : message);
  } else {
    return cy.task('log', message);
  }
});
