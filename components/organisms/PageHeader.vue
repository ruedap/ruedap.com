<template lang="pug">
div(:class="$style.root")
  atom-logo
  atom-avatar(:class="$style.avatar")
  profile-links
</template>

<script>
import AtomLogo from '~/components/atoms/AtomLogo.vue'
import AtomAvatar from '~/components/atoms/AtomAvatar.vue'
import ProfileLinks from '~/components/molecules/ProfileLinks.vue'
export default {
  components: {
    AtomLogo,
    AtomAvatar,
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
