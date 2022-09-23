<template>
  <h2 :id="`${name}-参数`" tabindex="-1">{{ name }} 参数</h2>
  <div v-html="sourceCode" />
  <template v-if="typeCode.length">
    <h2 :id="`${name} 类型定义`" tabindex="-1">{{ name }} 类型定义</h2>
    <div v-for="(item, index) in typeCode" :key="index" v-highlight v-html="marked(item)"></div>
  </template>
</template>

<script setup lang="ts">
import { onMounted, nextTick, computed } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

const vHighlight = {
  mounted(el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
}

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
  typeCode: {
    type: String,
  },
  name: {
    type: String,
  },
})

const sourceCode = computed(() => {
  return marked(props.source)
})
const typeCode = computed(() => {
  if (props.typeCode && props.typeCode.length) {
    return props.typeCode?.split(',')
  }
  return []
})
</script>

<style scoped></style>
