export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Proíbe imports de @shared/styles, use @ui',
    },
    fixable: 'code',
    messages: {
      noSharedUI:
        "Importe qualquer coisa de 'styles' usando '@ui', não '@shared/styles'.",
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (
          typeof node.source.value === 'string' &&
          node.source.value.startsWith('@shared/styles/')
        ) {
          const correctedPath = node.source.value.replace(
            '@shared/styles/',
            '@ui/',
          )
          context.report({
            node,
            messageId: 'noSharedUI',
            fix: (fixer) =>
              fixer.replaceText(node.source, `'${correctedPath}'`),
          })
        }
      },
    }
  },
}
