import chalk from 'chalk'

const LOG_LEVELS = {
  INFO: 'ℹ',
  SUCCESS: '✓',
  WARN: '⚠',
  ERROR: '✖',
  DEBUG: '◆',
}

export const logger = {
  /**
   * Display a colored banner with the title
   */
  banner(title: string): void {
    console.log()
    console.log(chalk.cyan('╔' + '═'.repeat(title.length + 2) + '╗'))
    console.log(chalk.cyan(`║ ${title} ║`))
    console.log(chalk.cyan('╚' + '═'.repeat(title.length + 2) + '╝'))
    console.log()
  },

  /**
   * Display a section header
   */
  section(title: string): void {
    console.log()
    console.log(chalk.bold.blue(`→ ${title}`))
    console.log()
  },

  /**
   * Display a divider line
   */
  divider(): void {
    console.log(chalk.gray('─'.repeat(60)))
  },

  /**
   * Info level log (cyan)
   */
  info(message: string, data?: unknown): void {
    console.log(chalk.cyan(`${LOG_LEVELS.INFO} ${message}`), data ?? '')
  },

  /**
   * Success level log (green)
   */
  success(message: string, data?: unknown): void {
    console.log(chalk.green(`${LOG_LEVELS.SUCCESS} ${message}`), data ?? '')
  },

  /**
   * Warning level log (yellow)
   */
  warn(message: string, data?: unknown): void {
    console.log(chalk.yellow(`${LOG_LEVELS.WARN} ${message}`), data ?? '')
  },

  /**
   * Error level log (red)
   */
  error(message: string, data?: unknown): void {
    console.log(chalk.red(`${LOG_LEVELS.ERROR} ${message}`), data ?? '')
  },

  /**
   * Debug level log (gray)
   */
  debug(message: string, data?: unknown): void {
    console.log(chalk.gray(`${LOG_LEVELS.DEBUG} ${message}`), data ?? '')
  },

  /**
   * Display a key-value pair with nice formatting
   */
  pair(key: string, value: unknown): void {
    console.log(chalk.gray(`  ${key}:`), chalk.white(value))
  },

  /**
   * Display a list of items
   */
  list(items: string[]): void {
    items.forEach((item) => {
      console.log(chalk.cyan(`  • ${item}`))
    })
  },
}
