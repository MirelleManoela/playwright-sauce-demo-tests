Feature: Sessão do usuário

  Scenario: Logout
    Given que o usuário está logado
    When ele clica no botão de menu lateral
    And clica em "Logout"
    Then ele deve ser redirecionado para a tela de login
