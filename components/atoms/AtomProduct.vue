<template lang="pug">
  article(:class="$style.root")
    h1(:class="$style.name") {{ name }}
    a(:class="$style.imageLink" :href="imageLink")
      img(:class="$style.image" :src="image" :alt="name")
    div(:class="$style.body")
      time(:class="$style.time" :dateTime="pubdate") {{ time }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    imageLink: {
      type: String,
      default: '',
      required: true
    },
    image: {
      type: String,
      default: '',
      required: true
    },
    time: {
      type: String,
      default: '',
      required: true
    },
    pubdate: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.root {
}

.name {
}

.imageLink {
}

.image {
}

.body {
}
.time {
}
</style>
