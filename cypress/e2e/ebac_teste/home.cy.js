/// <reference types="cypress" />

describe('Teste de Automação com Cypress', () => {
    it('Adicionar Contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    
        cy.get('[type="text"]').type('João');
        cy.get('[type="email"]').type('joao@email.com');
        cy.get('[type="tel"]').type('11987654321');
        cy.contains('Adicionar').click();
    });

    it('Editar Contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');

        // Certificar-se de que o contato existe na lista antes de editar
        cy.contains('João').should('exist');

        // Localizar o contato desejado na tabela (assumindo que o contato já exista)
        cy.get('[data-id="edit"]').within(() => {
          // Clicar no botão de edição do contato
            cy.get('button[class="edit"]').click();
        });

        // Preencher os campos do formulário de edição
        cy.get('[type="text"]').clear().type('João Silva');
        cy.get('[type="email"]').clear().type('joao.silva@email.com');
        cy.get('[type="tel"]').clear().type('999999999');

        // Clicar no botão de salvar a edição
        cy.contains('Salvar').click();

        // Verificar se a edição do contato foi realizada corretamente
        cy.contains('Contato atualizado com sucesso!');
    });


    it('Remover Contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');

      // Certificar-se de que o contato existe na lista antes de remover
        cy.contains('João').should('exist');

      // Localizar o contato desejado na tabela (assumindo que o contato já exista)
        cy.contains('João').parent('tr').within(() => {
        // Clicar no botão de exclusão do contato
        cy.get('button[class="delete"]').click();
    });

      // Verificar se o contato foi removido corretamente
        cy.contains('Contato removido com sucesso!');
        cy.contains('João').should('not.exist');
    });
});