describe('given `Github` of `Cypress-io` company', () => {
    context('when user in `add-cypress-custom-command-in-typescript` repository', () => {
        before(() => {
            cy.visit('/cypress-io/add-cypress-custom-command-in-typescript');
        });
        it('should verify presence of text', () => {
            cy.get('article p:nth-child(2)').should('contain.text', 'TypeScript support to Cypress');
        });
    });
});
