# Boilerplate Vite + React + Typescript [![codecov](https://codecov.io/gh/SEU-USUARIO/SEU-REPO/branch/main/graph/badge.svg)](https://codecov.io/gh/SEU-USUARIO/SEU-REPO)

Esse projeto é um boilerplate inicial utilizando:

- Vite
- React
- Typescript
- React Router
- React Hook Form
- Zod
- TanStack Query
- Mock Service Worker (MSW)
- Vitest para testes
- ESLint e Prettier para lint e formatação
- Husky e Lint-staged para hooks de pré-commit
- Commitizen e Commitlint para padronização de commits
- GitHub Actions para integração contínua (CI)

---

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/millenabomtempo/boilerplate-vite.git
```

2. Instale as dependências:

```bash
pnpm install
```

3. Configure o Husky:

```bash
pnpm prepare
```

4. Configure o Mock Service Worker:

```bash
npx msw init ./public --save
```

5. Criar arquivo `.env`.

```shell
cp .env.example .env
```

6. Rode o servidor de desenvolvimento:

```bash
pnpm dev
```

7. Rode o servidor de mock:

```bash
pnpm mock
```

---

## 🧪 Rodando os testes

Rodar todos os testes:

```bash
pnpm test
```

---

## 🛡️ Lint e Formatação

Rodar o lint e corrigir automaticamente problemas de lint:

```bash
pnpm lint
```

Formatar todo o código com Prettier:

```bash
pnpm prettier
```

---

## 🔥 Commits padronizados

Este projeto utiliza **Commitizen** para padronizar as mensagens de commit seguindo o padrão **Conventional Commits**.

**Como fazer um commit:**

```bash
pnpm commit
```

Você será guiado por perguntas interativas para escolher:

- Tipo de mudança (feat, fix, chore, refactor, etc.)
- Descrição breve
- Detalhes adicionais (opcional)

⚠️ **Commits fora do padrão são bloqueados automaticamente pelo Husky + Commitlint.**

---

## 🛠 Tecnologias usadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [Mock Service Worker (MSW)](https://mswjs.io/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Commitizen](https://commitizen.github.io/cz-cli/)
- [Commitlint](https://commitlint.js.org/)
- [GitHub Actions](https://docs.github.com/en/actions) (CI/CD)

---

## ⚙️ Integração Contínua (CI)

Este projeto utiliza **GitHub Actions** para garantir a qualidade automática do código a cada `push` ou `pull request`.

O workflow realiza:

- Instalação das dependências (`pnpm install`)
- Validação de lint (`pnpm lint`)
- Build da aplicação (`pnpm build`)
- Execução dos testes (`pnpm test`)

O workflow está configurado em:

```bash
.github/workflows/ci.yml
```

Assim, garantimos que todo código enviado para o repositório:

- Está passando nos testes.
- Não quebra o build.
- Está dentro dos padrões de lint definidos.

---

## 🎨 Editor Config

Este projeto possui um arquivo `.editorconfig` para garantir padrões de código entre diferentes editores.

Certifique-se de que seu editor suporte `.editorconfig` ou instale a extensão necessária.

---

## 📢 Lembrete rápido:

- No badge no topo: **trocar `SEU-USUARIO` e `SEU-REPO`** pelo seu usuário e nome do repositório do GitHub!

Exemplo:

```markdown
![Build Status](https://github.com/millena-dev/boilerplate-vite/actions/workflows/ci.yml/badge.svg)
```

---
