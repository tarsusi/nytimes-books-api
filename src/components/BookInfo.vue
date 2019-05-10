<template>
  <div class="book-info">
    <div class="info-title">{{ this.title }}</div>
    <div class="info-value">{{ this.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'book-info',
  props: {
    title: String,
    value: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.book-info {
  display: flex;
  justify-content: space-between;

  padding: 0 8px 8px;

  &:not(:first-child) {
    padding-top: 8px;
  }

  border-bottom: 1px solid #e10963;

  &:nth-child(2n) {
    background-color: rgba(#b5b5b5, 0.4);
  }

  .info-title {
    font-size: 18px;
    font-weight: bold;
  }

  .info-value {
    padding-left: 8px;
    text-align: right;
  }
}
</style>
