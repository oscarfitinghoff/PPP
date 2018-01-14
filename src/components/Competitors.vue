<template>
    <div class="c-competitors">
      <div class="c-competitors__item">
        <h3>Winner</h3>
        <div class="c-competitor" @click="removePlayer('0')">
          <div class="c-competitor__img-wrapper">
            <img src="" alt="">
          </div>
          <div class="c-competitor__name">{{ game[0].name }}</div>
        </div>
      </div>
      <div class="c-competitors__item">
        <h3>Loser</h3>
        <div class="c-competitor" @click="removePlayer('1')">
          <div class="c-competitor__img-wrapper">
            <img src="" alt="">
          </div>
          <div class="c-competitor__name">{{ game[1].name }}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Copmetitors',
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/1_settings/settings.colors";
@import "../assets/scss/1_settings/settings.global";
.c-competitors {
  display: flex;
  &__item {
    flex: 1 1 0px;
  }
}
.c-competitor {
  display: flex;
  flex-direction: column;
  margin: $spacing-tiny;
  background: $white;
  &__img-wrapper {
    width: 100%;
    height: 10rem;
    margin-bottom: $spacing-tiny;
    background: $gray-light;
  }
  &__name {
    margin-top: auto;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
}
</style>
