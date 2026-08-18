import nunjucks from 'nunjucks'
import path from 'path'

export function render_template(name: string, data: object): string {
  const templatesPath = path.join(process.cwd(), 'public', 'templates')
  nunjucks.configure(templatesPath, { autoescape: true })

  return nunjucks.render(name, data)
}
