Feature: Ordenação de produtos

  Scenario: Ordenar por preço do menor para o maior
    Given que o usuário está na página de produtos
    When ele seleciona a opção "Price (low to high)"
    Then os produtos devem ser exibidos em ordem crescente de preço

  Scenario: Ordenar por preço do maior para o menor
    Given que o usuário está na página de produtos
    When ele seleciona a opção "Price (high to low)"
    Then os produtos devem ser exibidos em ordem decrescente de preço

  Scenario: Ordenar por nome de A a Z
    Given que o usuário está na página de produtos
    When ele seleciona a opção "Name (A to Z)"
    Then os produtos devem ser exibidos em ordem alfabética crescente

  Scenario: Ordenar por nome de Z a A
    Given que o usuário está na página de produtos
    When ele seleciona a opção "Name (Z to A)"
    Then os produtos devem ser exibidos em ordem alfabética decrescente

  Scenario: Ordenação combinada por nome e preço
    Given que o usuário ordenou os produtos por nome A-Z
    When ele muda a ordenação para "Price (low to high)"
    Then os produtos devem ser exibidos em ordem crescente de preço
