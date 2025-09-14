# 🧪 Projeto: Automação de Testes com Playwright – Sauce Demo

Este projeto é uma suíte de testes automatizados desenvolvida com [Playwright](https://playwright.dev/) para validar funcionalidades da aplicação [Sauce Demo](https://www.saucedemo.com/). Ele cobre cenários funcionais, visuais e de segurança, aplicando boas práticas de organização e escrita de testes.

---

## 🎯 Objetivo

Automatizar os cenários de teste funcionais, aplicando boas práticas de estruturação de código, clareza nos testes e análise crítica da aplicação.

---

## ⚙️ Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) – Framework de automação de testes
- TypeScript – Tipagem estática e organização de código
- Node.js – Ambiente de execução
- Gherkin (BDD) – Documentação dos cenários em linguagem natural
- HTML Report – Relatório visual dos testes

---

## 📁 Estrutura do Projeto
playwright-sauce-demo-tests/ 
├── pages/ # Page Objects com ações encapsuladas 
├── tests/ # Testes organizados por funcionalidade 
├── bdd/ # Documentação dos cenários em formato BDD 
├── playwright.config.ts 
└── README.md

---

## 🧩 Cenários Cobertos (28 testes)

| Nº | Cenário | Status |
|----|---------|--------|
| 1  | Login com credenciais válidas | ✅ |
| 2  | Login com credenciais inválidas | ✅ |
| 3  | Adicionar item ao carrinho | ✅ |
| 4  | Remover item do carrinho | ✅ |
| 5  | Ordenação por preço (menor → maior) | ✅ |
| 6  | Ordenação por nome (A → Z) | ✅ |
| 7  | Ordenação por preço (maior → menor) | ✅ |
| 8  | Ordenação por nome (Z → A) | ✅ |
| 9  | Validar item correto no checkout | ✅ |
| 10 | Campos obrigatórios no checkout (4 variações) | ✅ |
| 11 | Preencher campos corretamente | ✅ |
| 12 | Soma dos valores dos itens | ✅ |
| 13 | Soma do total com taxa | ✅ |
| 14 | Mensagem "Thank you for your order!" | ✅ |
| 15 | Botão "Back Home" | ✅ |
| 16 | Logout | ✅ |
| 17 | Persistência do carrinho após logout/login | ✅ |
| 18 | Botão “Remove” no carrinho | ✅ |
| 19 | Ordenação combinada (nome + preço) | ✅ |
| 20 | ❌ Cancelado – site aceita caracteres especiais |
| 21 | Acesso direto a URLs protegidas (5 testes) | ✅ |
| 22 | Elementos visuais essenciais | ✅ |

---

## 📄 Documentação BDD

Todos os cenários estão documentados em formato Gherkin na pasta `/BDD`, organizados por funcionalidade:
bdd/
├── login.feature
├── cart.feature 
├── sorting.feature
├── checkout.featur
├── session.feature 
├── security.feature 
└── ui.feature


Esses arquivos servem como documentação funcional e podem ser usados para comunicação entre QA, devs e stakeholders.

---

## 🚀 Como Instalar e Rodar os Testes

### 1. Instalar dependências
```bash
npm install
```

### 2. Instalar os navegadores do Playwright
```bash
npx playwright install
```

### 3. Rodar todos os testes
```bash
npx playwright test
```

### 4. Rodar com navegador visível
```bash
npx playwright test --headed
```

### 5. Rodar um teste específico
```bash
npx playwright test tests/login-valid.spec.ts --headed
```

---

## 📊 Como Gerar Relatório HTML

### 1. Executar testes com reporter ativado
```bash
npx playwright test --reporter=html
```

### 2. Abrir o relatório no navegador
```bash
npx playwright show-report
```

O relatório será gerado na pasta `playwright-report/` e pode ser salvo ou compartilhado.

---

### 🌐 Modo de execução do navegador


Os testes foram executados em dois modos:

- **Headless**: modo padrão, onde o navegador roda em segundo plano sem interface gráfica.
- **Headed**: usado para depuração e visualização dos testes em tempo real, com o navegador visível.

Para rodar os testes com o navegador aberto, utilize:
```bash
npx playwright test --headed

## 🧠 Estratégia de Automação

- Testes isolados e independentes
- Uso de Page Object Model para encapsular ações
- Validação de mensagens, URLs, elementos visuais e dados
- Cobertura funcional, visual e de segurança
- Documentação BDD para clareza e colaboração

---


