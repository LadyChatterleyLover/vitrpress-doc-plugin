import { createApp, ref, watch } from 'vue'
import MessageComponent from './message.vue'
import type { App } from 'vue'
import type { MessageOptions } from '../types'

const margin = 60
const height = 28

const messageArr = ref<any[]>([])

const Message = (options: MessageOptions) => {
  if (typeof options === 'string') {
    options = {
      message: options,
      duration: 3000,
    }
  }
  const messageApp = createApp(MessageComponent, options as any)
  showMessage(messageApp, options.duration as number)
}

const showMessage = (app: App, duration = 3000) => {
  const fragment = document.createDocumentFragment()
  const vm: any = app.mount(fragment)
  messageArr.value.push(vm)
  setTop(vm)
  vm.setVisible(true)
  watch(
    () => messageArr.value,
    () => setTop(vm)
  )
  document.body.appendChild(fragment)
  hideMessage(app, vm, duration)
}

const hideMessage = (app: App, vm: any, duration = 3000) => {
  watch(
    () => vm.closeFlag,
    (val) => {
      if (val) {
        vm.closeTimer = setTimeout(() => {
          app.unmount()
          messageArr.value = messageArr.value.filter((item) => item !== vm)
          clearTimeout(vm.closeTimer)
          vm.closeTimer = null
          vm.closeFlag = false
        }, 300)
      }
    }
  )
  vm.timer = setTimeout(async () => {
    await vm.setVisible(false)
    app.unmount()
    messageArr.value = messageArr.value.filter((item) => item !== vm)
    clearTimeout(vm.timer)
    vm.timer = null
  }, duration)
}

const setTop = (vm: any) => {
  const currentIndex = messageArr.value.indexOf(vm)
  vm.setTop(margin * currentIndex + height)
}

Message.success = (options: MessageOptions | string) => {
  if (typeof options === 'string') {
    Message({
      type: 'success',
      message: options,
    })
  } else {
    Message({
      type: 'success',
      message: options.message,
      ...(options as MessageOptions),
    })
  }
}
Message.info = (options: MessageOptions | string) => {
  if (typeof options === 'string') {
    Message({
      type: 'info',
      message: options,
    })
  } else {
    Message({
      type: 'info',
      message: options.message,
      ...(options as MessageOptions),
    })
  }
}
Message.warning = (options: MessageOptions | string) => {
  if (typeof options === 'string') {
    Message({
      type: 'warning',
      message: options,
    })
  } else {
    Message({
      type: 'warning',
      message: options.message,
      ...(options as MessageOptions),
    })
  }
}
Message.error = (options: MessageOptions | string) => {
  if (typeof options === 'string') {
    Message({
      type: 'danger',
      message: options,
    })
  } else {
    Message({
      type: 'danger',
      message: options.message,
      ...(options as MessageOptions),
    })
  }
}

export default Message
