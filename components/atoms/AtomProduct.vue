<template lang="pug">
  article(:class="$style.root")
    h1(:class="$style.name") {{ name }}
    a(:class="$style.imageLink" :href="imageLink")
      img(:class="$style.image" :src="imagePath()" :alt="name")
    div(:class="$style.body")
      time(:class="$style.time" :dateTime="pubdate") {{ time }}
      h2(:class="$style.heading")
        a(:class="$style.headingLink" :href="headingLink") {{ heading}}
      div(v-html="description")
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
    },
    headingLink: {
      type: String,
      default: '',
      required: true
    },
    heading: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    imagePath: function() {
      return require('~/assets/images/products/' + this.image)
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
