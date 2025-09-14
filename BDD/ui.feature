Feature: Elementos visuais essenciais

  Scenario: Verificar elementos após login
    Given que o usuário está logado
    When ele acessa a página de produtos
    Then o logo da aplicação deve estar visível
    And o ícone do carrinho deve estar visível
    And o botão do menu lateral deve estar visível
    And o botão de logout deve estar acessível no menu
