export type MessageType = 'success' | 'info' | 'warning' | 'danger'

export interface MessageOptions {
  message?: string
  type?: MessageType
  duration?: number | string
  showClose?: boolean
  center?: boolean
}
