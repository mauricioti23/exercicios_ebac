/// <reference types="cypress" />

describe('Testes da Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);  // espera a API carregar os contatos
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Joao da Silva');
    cy.get('input[placeholder="E-mail"]').type('joao@email.com');
    cy.get('input[placeholder="Telefone"]').type('11999999999');
    cy.contains('button', 'Adicionar').click();

    cy.contains('Joao da Silva').should('exist');
  });

  it('Deve editar um contato existente', () => {
    cy.contains('Joao da Silva')
      .parents('div')
      .filter(':has(button:contains("Editar"))')
      .first()
      .within(() => {
        cy.contains('Editar').click();
      });

    cy.get('input[placeholder="Nome"]').clear().type('Joao Editado');
    cy.get('input[placeholder="E-mail"]').clear().type('joaoeditado@email.com');
    cy.get('input[placeholder="Telefone"]').clear().type('11888888888');
    cy.contains('button', 'Salvar').click();

    cy.contains('Joao Editado').should('exist');
  });

  it('Deve remover um contato', () => {
    cy.contains('Joao Editado')
      .parents('div')
      .filter(':has(button:contains("Deletar"))')
      .first()
      .within(() => {
        cy.contains('Deletar').click();
      });

    cy.contains('Joao Editado').should('not.exist');
  });
});
