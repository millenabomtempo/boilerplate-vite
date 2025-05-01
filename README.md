# Boilerplate Vite + React + Typescript [![codecov](https://codecov.io/gh/millenabomtempo/boilerplate-vite/branch/main/graph/badge.svg)](https://codecov.io/gh/millenabomtempo/boilerplate-vite)

Esse projeto é um boilerplate inicial utilizando:

- Vite
- React
- Typescript
- React Router
- React Hook Form
- Zod
- TanStack Query
- Chakra UI
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

5. Crie o arquivo `.env`:

```bash
cp .env.example .env
```

6. Rode o servidor de desenvolvimento:

```bash
pnpm dev
```

7. Rode o servidor com mocks:

```bash
pnpm mock
```

---

## 📁 Estrutura de Pastas

```
src/
├── app/
│   └── nome-do-modulo/
│       ├── components/
│       └── pages/
├── mocks/
├── shared/
│   ├── components/
│   ├── interfaces/
│   └── styles/
│       ├── components/
│       ├── recipes/
│       └── theme.ts
```

---

## ⚙️ Geração de Código com Plop

Execute:

```bash
pnpm generate
```

### Opções Disponíveis

#### 📦 `Module`

Cria estrutura de um novo módulo com serviços, mocks e interfaces.

- `src/app/<modulo>/service/index.ts`
- `src/shared/interfaces/<modulo>.ts`
- `src/mocks/handlers/<modulo>/index.ts`
- `src/mocks/handlers/<modulo>/mock.ts`

#### 🧱 `ModuleComponent`

Cria um componente dentro de um módulo.

- `src/app/<modulo>/components/<componente>/index.tsx`
- `src/app/<modulo>/components/<componente>/index.test.tsx`
- `src/app/<modulo>/components/<componente>/styles.ts`

#### 📄 `ModulePage`

Cria uma página dentro de um módulo.

- `src/app/<modulo>/pages/<pagina>/index.tsx`
- `src/app/<modulo>/pages/<pagina>/index.test.tsx`
- `src/app/<modulo>/pages/<pagina>/styles.ts`

#### 🔗 `SharedComponent`

Cria um componente reutilizável compartilhado.

- `src/shared/components/<componente>/index.tsx`
- `src/shared/components/<componente>/index.test.tsx`

#### 🎨 `ComponentRecipe`

Cria uma recipe para estilização com Chakra.

- `src/shared/styles/recipes/<recipe>.ts`
- Atualiza automaticamente o `theme.ts`

#### 🧩 `ComponentSlotRecipe`

Igual ao anterior, mas para componentes com múltiplos slots (usando `slots` do Chakra UI).

---

## 💅 Chakra UI

O projeto usa Chakra UI com **@chakra-ui/cli**, **Recipes** e **Slot Recipes** para estilos desacoplados e reaproveitáveis.

### Criar um novo snippet (componente UI Chakra):

```bash
pnpm ui:snippet
```

### Gerar tipos automáticos do tema:

```bash
pnpm ui:typegen
```

---

## 🧪 Rodando os testes

Rodar todos os testes:

```bash
pnpm test
```

Rodar com interface visual:

```bash
pnpm test:ui
```

Gerar cobertura de testes:

```bash
pnpm test:coverage
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
- [Chakra UI](https://chakra-ui.com/)
- [Mock Service Worker (MSW)](https://mswjs.io/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Plop.js](https://plopjs.com/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Commitizen](https://commitizen.github.io/cz-cli/)
- [Commitlint](https://commitlint.js.org/)
- [GitHub Actions](https://docs.github.com/en/actions)

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
![Build Status](https://github.com/SEU-USUARIO/SEU-REPO/actions/workflows/ci.yml/badge.svg)
```

---
