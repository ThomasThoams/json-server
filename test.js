describe('Cypress Test', () => {
    it('Visits Example.com', () => {
        cy.visit('https://example.com');
        cy.contains('Example Domain');
    });
});

const { defineConfig } = require('cypress');
const { spec } = require('node:test/reporters');

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/**/*.cy.js',
        baseUrl: 'https://example.com',
    },
});