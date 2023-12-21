Cypress.Commands.overwrite('log', (originalFn, ...message) => {
  if (Cypress.config('isInteractive')) {
    return originalFn(...message);
  } else {
    return cy.task('log', message);
  }
});
