<template lang="pug">
div(:class="$style.root")
  logo
  avatar(:class="$style.avatar")
</template>

<script>
import Logo from '~/components/Logo.vue'
import Avatar from '~/components/Avatar.vue'
export default {
  components: {
    Logo,
    Avatar
  }
}
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  margin-top: 4rem;
}
</style>
