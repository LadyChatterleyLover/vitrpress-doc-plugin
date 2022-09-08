<template>
  <transition name="cc-message">
    <div
      v-show="visible"
      :style="{ top: top + 'px' }"
      :class="[ns.b(), computedTypeClass, center ? ns.m('center') : '']"
    >
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
import { useNamespace } from "./useNamespace"
import type { MessageType } from "../types"

const ns = useNamespace("message")

const props = withDefaults(
  defineProps<{
    message?: string
    type?: MessageType
    center?: boolean
    showClose?: boolean
    offset?: number | string
  }>(),
  {
    message: "",
    type: "success",
    center: true,
    showClose: false,
    offset: 20,
  }
)
const visible = ref<boolean>(false)
const closeFlag = ref<boolean>(false)
const top = ref<number | string>(props.offset)
const setVisible = (v: boolean, duration = 300) => {
  return new Promise((resolve) => {
    visible.value = v
    setTimeout(() => {
      resolve("")
    }, duration)
  })
}
const setTop = (t: number) => {
  top.value = t
}

const setCloseFlag = (close: boolean) => {
  closeFlag.value = close
}

const handleClose = () => {
  setCloseFlag(true)
  setVisible(false, 0)
}
defineExpose({
  setVisible,
  setTop,
  setCloseFlag,
  closeFlag,
})
const computedTypeClass = computed(() => {
  if (props.type === "success") {
    return "bg-success"
  } else if (props.type === "info") {
    return "bg-info"
  } else if (props.type === "danger") {
    return "bg-danger"
  } else if (props.type === "warning") {
    return "bg-warning"
  } else {
    return ""
  }
})
</script>

<style scoped lang="scss">
.cc-message {
  display: flex;
  align-items: center;
  color: #fff;
  position: fixed;
  border-radius: 4px;
  height: 28px;
  left: 50%;
  width: 150px;
  padding: 20px;
  transform: translateX(-50%);
  z-index: 999;
  box-sizing: border-box;
  border-color: #e1f3d8;
  background: #f0f9eb;
  color: #67c23a;
  &--center {
    justify-content: center;
  }
}

.cc-message-enter-from,
.cc-message-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.cc-message-enter-active {
  transition: all 0.3s ease-in;
}
.cc-message-leave-active {
  transition: all 0.3s ease-out;
}
.dark .cc-message {
  background: #1c2518;
  border-color: #25371c;
  color: #67c23a;
}
</style>
