<template>
  <div class="c-logo">
    <img class="c-logo__img" :src="img">
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  props: [
    'img'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/1_settings/settings.colors";
@import "../assets/scss/1_settings/settings.global";
@import "../assets/scss/5_objects/objects.content";
.c-logo {
  margin: 0 auto;
  width: 10rem;
}
</style>
