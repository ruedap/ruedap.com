<template lang="pug">
div(:class="$style.root")
  logo
  avatar(:class="$style.avatar")
  profile-link(name="github" href="https://github.com/ruedap")
</template>

<script>
import Logo from '~/components/Logo.vue'
import Avatar from '~/components/Avatar.vue'
import ProfileLink from '~/components/atoms/ProfileLink.vue'
export default {
  components: {
    Logo,
    Avatar,
    ProfileLink
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
