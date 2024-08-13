// cypress/support/cypress.d.ts

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    login(): Chainable<Subject>;
    setLocalStorage(key: string, value: string): Chainable<Subject>;
    clearLocalStorage(): Chainable<Subject>;
  }
}
