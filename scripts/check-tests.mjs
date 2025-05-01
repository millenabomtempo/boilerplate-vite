#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

import chalk from 'chalk'

const changedFiles = process.argv.slice(2)

let hasError = false
const errors = [] // Acumula os erros para mostrar depois

// Função para obter o caminho relativo a partir da pasta src
function getRelativePath(file) {
  const srcIndex = file.indexOf('src')
  return srcIndex >= 0 ? file.slice(srcIndex) : file
}

// Verifica se o arquivo está em um dos diretórios desejados
function isInValidPath(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/') // Normaliza para Windows/Linux

  // Verifica se o arquivo está em qualquer um dos diretórios desejados
  return (
    /src\/shared\/components\/[^/]+\/[^/]+\.tsx/.test(normalizedPath) || // src/shared/components/nome-do-componente/
    /src\/app\/[^/]+\/pages\/[^/]+\/[^/]+\.tsx/.test(normalizedPath) || // src/app/nome-do-modulo/pages/nome-do-componente/
    /src\/app\/[^/]+\/components\/[^/]+\/[^/]+\.tsx/.test(normalizedPath) // src/app/nome-do-modulo/components/nome-do-componente/
  )
}

// Procura o arquivo de teste possível
function findTestFile(file) {
  const fileName = path.basename(file, path.extname(file))
  const dirName = path.dirname(file)

  const possiblePaths = [
    path.join(dirName, `${fileName}.test.tsx`), // Verifica o arquivo de teste direto no diretório
    path.join(dirName, '__tests__', `${fileName}.test.tsx`), // Verifica se existe dentro de __tests__
  ]

  // Verifica os possíveis caminhos para encontrar o arquivo de teste
  for (const testPath of possiblePaths) {
    if (fs.existsSync(testPath)) {
      return testPath
    }
  }

  return null
}

console.log(
  chalk.cyan(
    '\n🔍 Checando se existem testes para os componentes modificados...\n',
  ),
)

for (const file of changedFiles) {
  if (
    file.endsWith('.tsx') &&
    !file.includes('.test.') &&
    isInValidPath(file)
  ) {
    const testFile = findTestFile(file)

    const relativeFile = getRelativePath(file) // Obtém o caminho relativo a partir de src

    if (!testFile) {
      // Armazena o erro na lista de erros
      errors.push(
        chalk.red(
          `❌ Erro: O componente "${relativeFile}" não possui arquivo de teste.`,
        ),
      )
      hasError = true
      break // Para o script imediatamente após o primeiro erro
    } else {
      const content = fs.readFileSync(testFile, 'utf8')
      const hasTest = /(?:test|it)\s*\(/.test(content)

      const relativeTestFile = getRelativePath(testFile) // Caminho relativo do arquivo de teste

      if (!hasTest) {
        // Armazena o erro na lista de erros
        errors.push(
          chalk.red(
            `❌ Erro: O teste "${relativeTestFile}" existe mas não contém nenhum teste. Por favor, adicione testes no arquivo "${relativeTestFile}".`,
          ),
        )
        hasError = true
        break // Para o script imediatamente após o primeiro erro
      }
    }
  }
}

if (hasError) {
  console.log(errors.join('\n')) // Exibe todos os erros encontrados
  console.log(
    chalk.red('\n🛑 Commit bloqueado. Corrija os testes antes de continuar.\n'),
  )
  process.exit(1)
} else {
  console.log(chalk.green('\n🎉 Todos os componentes têm testes válidos!\n'))
}
