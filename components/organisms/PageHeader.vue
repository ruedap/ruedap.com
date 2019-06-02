<template lang="pug">
div(:class="$style.root")
  logo
  avatar(:class="$style.avatar")
  profile-links
</template>

<script>
import Logo from '~/components/atoms/Logo.vue'
import Avatar from '~/components/atoms/Avatar.vue'
import ProfileLinks from '~/components/molecules/ProfileLinks.vue'
export default {
  components: {
    Logo,
    Avatar,
    ProfileLinks
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
