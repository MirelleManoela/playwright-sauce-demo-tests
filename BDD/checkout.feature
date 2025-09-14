Feature: Processo de checkout

  Scenario: Validar item correto no checkout
    Given que o usuário adicionou um item ao carrinho
    When ele inicia o checkout
    Then o item exibido deve ser o mesmo que foi adicionado

  Scenario Outline: Validação de campos obrigatórios
    Given que o usuário está na tela de checkout
    When ele preenche os campos:
      | First Name   | Last Name   | Zip Code   |
      | <firstName>  | <lastName>  | <zipCode>  |
    And clica em "Continue"
    Then uma mensagem de erro deve ser exibida

    Examples:
      | firstName | lastName | zipCode |
      |           |          |         |
      | Mirelle   |          | 50000   |
      |           | Silva    | 50000   |
      | Mirelle   | Silva    |         |

  Scenario: Preencher informações corretamente
    Given que o usuário está na tela de checkout
    When ele preenche First Name, Last Name e Zip Code corretamente
    And clica em "Continue"
    Then ele deve avançar para a próxima etapa do checkout

  Scenario: Validar soma dos itens no overview
    Given que o usuário adicionou dois itens ao carrinho
    When ele chega na tela de overview
    Then o Item total deve ser igual à soma dos preços dos itens

  Scenario: Validar total com taxa
    Given que o usuário está na tela de overview
    When ele verifica o Total
    Then o Total deve ser igual ao Item total mais a taxa

  Scenario: Finalizar compra com sucesso
    Given que o usuário está na tela de overview
    When ele clica em "Finish"
    Then a mensagem "Thank you for your order!" deve ser exibida

  Scenario: Retornar à página inicial após finalizar compra
    Given que o usuário finalizou a compra
    When ele clica em "Back Home"
    Then ele deve ser redirecionado para a página de produtos
