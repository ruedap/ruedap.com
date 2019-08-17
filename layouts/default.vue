<template lang="pug">
div#anchor(:class="$style.root")
  div(:class="$style.inner")
    div(:class="$style.header")
      page-header
    div
      nuxt
    div(:class="$style.header")
      page-header
    nuxt-link(:class="$style.anchorLink" v-scroll-to="'#anchor'" to)
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
  padding: 6rem 0;
}

.anchorLink {
  display: block;
  width: 14px;
  height: 14px;
  margin: 100px 0;
  background-color: rgba(#000, 0.02);
}
</style>
