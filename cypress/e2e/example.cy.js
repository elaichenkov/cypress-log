it('example from README', () => {
cy.log('Hello World!');
cy.log({ foo: { bar: { baz: 'baz' } } });
cy.log(['foo', 'bar', 'baz']);
});
