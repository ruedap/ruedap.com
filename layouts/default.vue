<template lang="pug">
div(:class="$style.root")
  div(:class="$style.inner")
    div(:class="$style.header")
      page-header
    div
      nuxt
    div(:class="$style.header")
      page-header
</template>

<script>
import PageHeader from '~/components/organisms/PageHeader.vue'
export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" module>
.root {
  scroll-snap-type: y proximity;
  max-height: 100vh;
  overflow-y: scroll;
  background-image: url('~assets/images/bg-pattern.png');
  background-repeat: repeat;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('~assets/images/bg-lines.png');
  background-repeat: repeat-y;
  background-position: center top;
}

.header {
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 6rem;
}
</style>
