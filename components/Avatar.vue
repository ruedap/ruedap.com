<template lang="pug">
  div(:class="$style.root")
    img(:class="$style.image" src="~/assets/images/avatar.png")
</template>

<style lang="scss" module>
.root {
  --width: 120px;
  display: block;
  padding: 10px;
  border-radius: 999px;
  height: var(--width);
  width: var(--width);
  background-color: #e4e4e4;
}

.image {
  width: 100%;
  border-radius: 999px;
  opacity: 0.8;
}
</style>
