import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar itens da lista', () => {
    
    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - ANTES DE CADA TESTE
     */
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice,array ){
            telaInicial.inputText(item)
        })
    })


    it('deleção de um item da lista', () => {
        telaInicial.deletarItem()
    });



});