<template>
  <div class="c-competitor" @click="removePlayer(index)" v-bind:class="{ 'is-active': competitor.name.length > 0 }">
    <div class="c-competitor__img-wrapper">
      <img class="c-competitor__img" src="../assets/icons/256_15.png" alt="">
    </div>
    <div class="c-competitor__name">{{ competitor.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Competitor',
  props: [
    'competitor',
    'index'
  ],
  data() {
    return {

    }
  },
  methods: {
    removePlayer(player) {
      this.$emit('clicked', player)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/1_settings/settings.colors";
@import "../assets/scss/1_settings/settings.global";
.c-competitor {
  display: flex;
  flex-direction: column;
  margin: $spacing-tiny;
  background: $white;
  &.is-active {
    cursor: pointer;
  }
  &__img-wrapper {
    width: 100%;
    height: 10rem;
    margin-bottom: $spacing-tiny;
    // background: $gray-light;
    text-align: center;
  }
  &__img {
    max-height: 100%;
  }
  &__name {
    margin-top: auto;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
}
</style>
