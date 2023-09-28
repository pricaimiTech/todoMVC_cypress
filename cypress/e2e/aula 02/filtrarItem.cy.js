import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após adição de itens', () => {
    
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

        telaInicial.concluirItem()  
    })


    /**
     * clicar no filtro
     * o item ser exibido
     * e o contador deve bater a informação
     */
    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")
    });

    it.skip('Filtrar itens concluidos', () => {
        
    });

});