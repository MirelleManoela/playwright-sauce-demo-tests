Feature: Carrinho de compras

  Scenario: Adicionar item ao carrinho
    Given que o usuário está logado
    And está na página de produtos
    When ele clica em "Add to cart" no item "Sauce Labs Backpack"
    Then o ícone do carrinho deve exibir 1 item

  Scenario: Remover item do carrinho
    Given que o usuário adicionou dois itens ao carrinho
    When ele acessa o carrinho e clica em "Remove" no item "Sauce Labs Backpack"
    Then o item removido não deve estar mais presente
    And o outro item deve permanecer

  Scenario: Persistência do carrinho após logout e login
    Given que o usuário adicionou um item ao carrinho
    When ele faz logout e login novamente
    Then o item deve continuar presente no carrinho
