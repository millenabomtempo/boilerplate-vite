import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

function moduleExists(component) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const components = fs.readdirSync(path.join(__dirname, '../src/app'))

  return components.indexOf(component) >= 0
}

export default function (plop) {
  plop.setGenerator('Module', {
    description: 'Generate a module',
    prompts: [
      {
        type: 'input',
        name: 'ModuleName',
        message: 'What is the module name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{dashCase ModuleName}}/service/index.ts',
        templateFile: './service/index.ts.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/shared/interfaces/{{dashCase ModuleName}}.ts',
        templateFile: './interfaces/index.ts.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/mocks/handlers/{{dashCase ModuleName}}/index.ts',
        templateFile: './mock/index.ts.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/mocks/handlers/{{dashCase ModuleName}}/mock.ts',
        templateFile: './mock/mock.ts.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../src/mocks/handlers/index.ts',
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template:
          '$1\nimport { {{ camelCase ModuleName }}Handlers } from \'./{{dashCase ModuleName}}\'',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../src/mocks/handlers/index.ts',
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: '...{{ camelCase ModuleName }}Handlers,\n$1',
        abortOnFail: true
      }
    ]
  })

  plop.setGenerator('ModuleComponent', {
    description: 'Generate component for a module',
    prompts: [
      {
        type: 'input',
        name: 'ModuleName',
        message: 'In which module?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return moduleExists(value)
              ? true
              : 'The module must be created before the component'
          }

          return 'The module name is required'
        }
      },
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What should it be called?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{dashCase ModuleName}}/components/{{dashCase ComponentName}}/index.tsx',
        templateFile: './components/index.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/app/{{dashCase ModuleName}}/components/{{dashCase ComponentName}}/index.test.tsx',
        templateFile: './components/index.test.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/app/{{dashCase ModuleName}}/components/{{dashCase ComponentName}}/styles.ts',
        templateFile: './components/styles.ts.hbs',
        abortOnFail: true
      },
    ]
  })

  plop.setGenerator('ModulePage', {
    description: 'Generate pege for a module',
    prompts: [
      {
        type: 'input',
        name: 'ModuleName',
        message: 'In which module?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return moduleExists(value)
              ? true
              : 'The module must be created before the component'
          }

          return 'The module name is required'
        }
      },
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What should it be called?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{dashCase ModuleName}}/pages/{{dashCase ComponentName}}/index.tsx',
        templateFile: './page/index.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/app/{{dashCase ModuleName}}/pages/{{dashCase ComponentName}}/index.test.tsx',
        templateFile: './page/index.test.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/app/{{dashCase ModuleName}}/pages/{{dashCase ComponentName}}/styles.ts',
        templateFile: './page/styles.ts.hbs',
        abortOnFail: true
      },
    ]
  })

  plop.setGenerator('SharedComponent', {
    description: 'Generate a shared component',
    prompts: [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What should it be called?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/shared/components/{{dashCase ComponentName}}/index.tsx',
        templateFile: './components/index.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/shared/components/{{dashCase ComponentName}}/index.test.tsx',
        templateFile: './components/index.test.tsx.hbs',
        abortOnFail: true
      }
    ]
  })

  plop.setGenerator('ComponentRecipe', {
    description: 'Generate recipe for a component',
    prompts: [
      {
        type: 'input',
        name: 'RecipeName',
        message: 'What should it be called?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/shared/styles/recipes/{{camelCase RecipeName}}.ts',
        templateFile: './styles/recipe.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: '../src/shared/styles/theme.ts',
        pattern: /(\/\/ ADD RECIPE)/g,
        template: '$1\n      {{camelCase RecipeName}}: {{camelCase RecipeName}}Recipe,',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: '../src/shared/styles/theme.ts',
        pattern: /(\/\/ ADD IMPORT)/g,
        template: '$1\nimport { {{camelCase RecipeName}}Recipe } from \'./recipes/{{camelCase RecipeName}}\'',
        abortOnFail: true,
      },
    ],
  })

  plop.setGenerator('ComponentSlotRecipe', {
    description: 'Generate slot recipe for a component',
    prompts: [
      {
        type: 'input',
        name: 'RecipeName',
        message: 'What should it be called?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/shared/styles/recipes/{{camelCase RecipeName}}.ts',
        templateFile: './styles/slotRecipe.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: '../src/shared/styles/theme.ts',
        pattern: /(\/\/ ADD SLOT RECIPE)/g,
        template: '$1\n      {{camelCase RecipeName}}: {{camelCase RecipeName}}SlotRecipe,',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: '../src/shared/styles/theme.ts',
        pattern: /(\/\/ ADD IMPORT)/g,
        template: '$1\nimport { {{camelCase RecipeName}}SlotRecipe } from \'./recipes/{{camelCase RecipeName}}\'',
        abortOnFail: true,
      },
    ],
  })
}
