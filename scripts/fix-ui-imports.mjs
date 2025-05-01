import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

function replaceInFiles(dir) {
  const files = readdirSync(dir)

  for (const file of files) {
    const fullPath = join(dir, file)
    if (statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath)
    } else if (
      fullPath.endsWith('.ts') ||
      fullPath.endsWith('.tsx') ||
      fullPath.endsWith('.vue')
    ) {
      const content = readFileSync(fullPath, 'utf-8')

      // Troca tudo que for @shared/styles/*
      const newContent = content.replace(/@shared\/styles\//g, '@ui/')

      if (content !== newContent) {
        writeFileSync(fullPath, newContent)
        console.log(`✅ Updated ${fullPath}`)
      }
    }
  }
}

// Começa a partir do src/
replaceInFiles('src/')
