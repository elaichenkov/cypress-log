describe('template spec', () => {
  it('passes', () => {
    cy.log('string message');
    cy.log({
      level1: {
        prop1: 'value1',
        prop2: 'value2',
        level2: {
          prop3: 'value3',
          level3: {
            prop4: 'value4',
            level4: {
              prop5: 'value5',
              level5: {
                prop6: 'value6',
              },
            },
          },
        },
      },
    });
    cy.log(['value1', 'value2', 'value3', 'value4', 'value5', 'value6']);
  });
});

