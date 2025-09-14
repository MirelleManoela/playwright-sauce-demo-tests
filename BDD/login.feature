Feature: Autenticação de usuário

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When ele preenche o campo de usuário com "standard_user"
    And preenche o campo de senha com "secret_sauce"
    And clica no botão de login
    Then ele deve ser redirecionado para a página de produtos

  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When ele preenche o campo de usuário com "usuario_invalido"
    And preenche o campo de senha com "senha_invalida"
    And clica no botão de login
    Then uma mensagem de erro deve ser exibida
