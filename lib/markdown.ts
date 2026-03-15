import { marked } from 'marked'

export function renderMarkdown(markdown: string): string {
  // Changed: Ensure marked.parse resolves to a string for strict typing
  const html = marked.parse(markdown || '', { async: false })
  return typeof html === 'string' ? html : ''
}