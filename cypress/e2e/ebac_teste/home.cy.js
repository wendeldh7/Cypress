/// <reference types="cypress" />

describe('Teste de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('[data-testid="add-contact-button"]').click();
        cy.get('[data-testid="name-input"]').type('João');
        cy.get('[data-testid="tel-input"]').type('(11) 98765-4321');
        cy.get('[data-testid="email-input"]').type('joao@example.com');
        cy.get('[data-testid="save-contact-button"]').click();
        cy.contains('Contato adicionado com sucesso!').should('be.visible');
        cy.contains('João').should('be.visible');
    });
});

describe('Teste de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('[data-testid="add-contact-button"]').click();
        cy.get('[data-testid="name-input"]').type('João');
        cy.get('[data-testid="phone-input"]').type('(11) 98765-4321');
        cy.get('[data-testid="email-input"]').type('joao@example.com');
        cy.get('[data-testid="save-contact-button"]').click();
        cy.contains('Contato adicionado com sucesso!').should('be.visible');
        cy.contains('João').should('be.visible');
    });

    it('Deve alterar um contato existente', () => {
        cy.contains('João').click();
        cy.get('[data-testid="edit-contact-button"]').click();
        cy.get('[data-testid="name-input"]').clear().type('João Silva');
        cy.get('[data-testid="phone-input"]').clear().type('(11) 99999-9999');
        cy.get('[data-testid="email-input"]').clear().type('joao.silva@example.com');
        cy.get('[data-testid="save-contact-button"]').click();
        cy.contains('Contato alterado com sucesso!').should('be.visible');
        cy.contains('João Silva').should('be.visible');
        cy.contains('(11) 99999-9999').should('be.visible');
        cy.contains('joao.silva@example.com').should('be.visible');
    });

    it('Deve remover um contato existente', () => {
        cy.contains('João Silva').click();
        cy.get('[data-testid="delete-contact-button"]').click();
        cy.contains('Contato removido com sucesso!').should('be.visible');
        cy.contains('João Silva').should('not.exist');
    });
});