<template lang="pug">
  article(:class="$style.root_wideImage")
    h1(:class="$style.name") {{ name }}
    a(:class="$style.imageLink" :href="imageLink")
      img(:class="$style.image" :src="imagePath()" :alt="name")
    div(:class="$style.body")
      time(:class="$style.time" :dateTime="pubdate") {{ time }}
      h2(:class="$style.heading")
        a(:class="$style.headingLink" :href="headingLink") {{ heading}}
      div(:class="$style.description" v-html="description")
    nav(:class="$style.more")
      a(:class="$style.moreLink" :href="headingLink") 続きを読む
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
  max-width: 860px;
  padding: 32px;
  font-size: 16px;
  background-color: #f2f2f2;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05), 0 0 0 10px #f7f7f7 inset;
}

/* コンテンツ幅より広い画像で表示するモディファイア */
.root_wideImage {
  @extend .root;

  @include media-breakpoint-up(lg) {
    .imageLink {
      margin-right: -12%;
      margin-left: -12%;
    }
  }
}

.name {
  display: none;
}

.imageLink {
  display: block;
  max-width: 1000px;
  margin-bottom: 32px;
}

@mixin imageShadow {
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2) inset;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    right: 10px;
    bottom: 0;
    left: 10px;
    content: '';
    border-radius: 100px 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
}

.image {
  @include imageShadow;
  width: 100%;
}

.body {
  margin-bottom: 32px;
  text-align: center;
}

.time {
  display: block;
  margin-bottom: 20px;
  font-family: $a-fontFamily-georgia;
  font-size: 20px;
}

.heading {
  font-size: 23px;
  font-weight: $a-fontWeight-normal;
}

.headingLink {
  @include a-color-link-effect;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.description {
  line-height: 1.8;
  text-align: left;
}

.more {
  margin-bottom: 20px;
  text-align: center;
}

.moreLink {
  @include a-color-link-effect;
}
</style>
