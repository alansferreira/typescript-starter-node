import { logger } from '@/logger'
import { sum } from '@/module'

// Display startup banner
logger.banner('TypeScript Starter Node')
logger.info('Starting application...')

// Example: using the sum function
const result = sum(5, 3)
logger.success(`Sum result: ${result}`)

// Example logging different levels
logger.section('Logging Examples')
logger.info('This is an info message')
logger.success('Operation completed successfully')
logger.warn('Warning: Something needs attention')
logger.error('Error message (non-fatal)')
logger.debug('Debug information')

logger.divider()
logger.info('Application ready!')
logger.list(['TypeScript enabled', 'Vitest configured', 'Path aliases active', 'Release workflow active'])
logger.divider()

