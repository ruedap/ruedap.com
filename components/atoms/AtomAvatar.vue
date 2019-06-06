<template lang="pug">
div(:class="$style.root")
  img(:class="$style.image" src="~/assets/images/avatar.png")
</template>

<style lang="scss" module>
.root {
  --width: 120px;

  display: block;
  width: var(--width);
  height: var(--width);
  padding: 10px;
  background-color: #e4e4e4;
  border-radius: 999px;
}

.image {
  width: 100%;
  border-radius: 999px;
  opacity: 0.8;
}
</style>
