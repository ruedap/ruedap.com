<template lang="pug">
div(:class="$style.root")
  profile-link(name="twitter" href="https://twitter.com/ruedap")
  profile-link(name="github" href="https://github.com/ruedap")
  profile-link(name="mail" href="mailto:ruedap@ruedap.com")
</template>

<script>
import ProfileLink from '~/components/atoms/AtomProfileLink.vue'
export default {
  components: {
    ProfileLink
  }
}
</script>

<style lang="scss" module>
.root {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}
</style>
