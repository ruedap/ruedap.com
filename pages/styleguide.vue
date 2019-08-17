<template lang="pug">
section
  .testbox
    .testbox__item_1 test
    .testbox__item_2 test2
    .testbox__item_3 test
    .testbox__item_4 test
</template>

<style lang="scss">
.testbox {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 50px 1fr;
}

.testbox__item_1 {
  box-sizing: border-box;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  padding: 10px;
  background-color: red; // stylelint-disable-line
}

.testbox__item_2 {
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  background-color: blue; // stylelint-disable-line
}

.testbox__item_3 {
  grid-column: 1 / 2;
  grid-row: 2 / 2;
  background-color: yellow; // stylelint-disable-line
}

.testbox__item_4 {
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  background-color: gray; // stylelint-disable-line
}
</style>
