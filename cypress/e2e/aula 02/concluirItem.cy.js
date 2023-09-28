import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na lista de toDo', () => {
    
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


    it('Concluir um item da lista de toDO', () => {
        telaInicial.concluirItem()        
    });

});