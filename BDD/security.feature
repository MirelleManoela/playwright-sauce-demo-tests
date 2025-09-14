Feature: Segurança de navegação

  Scenario Outline: Acesso direto a páginas protegidas sem login
    Given que o usuário não está autenticado
    When ele acessa diretamente a URL "<rota>"
    Then ele deve ser redirecionado para a tela de login

    Examples:
      | rota                    |
      | /inventory.html        |
      | /cart.html             |
      | /checkout-step-one.html |
      | /checkout-step-two.html |
      | /checkout-complete.html |
