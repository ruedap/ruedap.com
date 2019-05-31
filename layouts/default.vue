<template lang="pug">
.container
  .container-inner
    .header
      logo
    .content
      nuxt
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-image: url('~assets/images/bg-pattern.png');
  background-repeat: repeat;
}

.container-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('~assets/images/bg-lines.png');
  background-position: center top;
  background-repeat: repeat-y;
  padding: 6rem;
}

.header {
  min-height: 100vh;
}
</style>
