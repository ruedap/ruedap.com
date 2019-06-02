<template lang="pug">
  a(:href="href" :class="$style.icon") {{ name }}
</template>

<script>
export default {
  props: {
    name: String,
    href: String
  }
}
</script>

<style lang="scss" module>
@font-face {
  font-family: 'dapicons';
  src: url('~assets/fonts/dapicons.eot');
  src: url('~assets/fonts/dapicons.eot?#iefix') format('embedded-opentype'),
    url('~assets/fonts/dapicons.woff') format('woff'),
    url('~assets/fonts/dapicons.ttf') format('truetype'),
    url('~assets/fonts/dapicons.svg#dapicons') format('svg');
  font-weight: normal;
  font-style: normal;
}

@mixin icon {
  font-family: 'dapicons';
  speak: none;
  font-feature-settings: 'liga', 'dlig';
  text-rendering: optimizeLegibility;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

.icon {
  @include icon;
}
</style>
