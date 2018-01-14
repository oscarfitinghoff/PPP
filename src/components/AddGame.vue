<template>
  <div class="o-content">
    <h1 class="c-page-start">{{ msg }}</h1>
    <div class="c-competitors">
      <div class="c-competitors__item">
        <h3 class="c-competitors__heading">Winner</h3>
        <div class="c-competitor" @click="removePlayer('0')" v-bind:class="{ 'is-active': game[0].name.length > 0 }">
          <div class="c-competitor__img-wrapper">
            <img src="" alt="">
          </div>
          <div class="c-competitor__name">{{ game[0].name }}</div>
        </div>
      </div>
      <div class="c-competitors__item">
        <h3 class="c-competitors__heading">Loser</h3>
        <div class="c-competitor" @click="removePlayer('1')" v-bind:class="{ 'is-active': game[1].name.length > 0 }">
          <div class="c-competitor__img-wrapper">
            <img src="" alt="">
          </div>
          <div class="c-competitor__name">{{ game[1].name }}</div>
        </div>
      </div>
    </div>
    <div class="c-add-game" v-if="done">
      <button class="c-btn c-add-game__action" @click="addGame">Add Game</button>
    </div>
    <div class="c-players" v-else>
      <div class="c-players__item" v-for="item in selections" :key="item.id">
        <div class="c-player" @click="addPlayer(item)">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddGame',
  data() {
    return {
      msg: 'Add Game',
      done: false,
      game: [
        {
          name: '',
          img: ''
        },
        {
          name: '',
          img: ''
        }
      ],
      selections: [
        {
          name: 'Leif',
          img: '../assets/icons/128_1.png'
        },
        {
          name: 'Arne',
          img: '../assets/icons/128_1.png'
        },
        {
          name: 'Anders',
          img: '../assets/icons/128_1.png'
        },
        {
          name: 'Björn',
          img: '../assets/icons/128_1.png'
        },
        {
          name: 'Arnold',
          img: '../assets/icons/128_1.png'
        }
      ]
    }
  },
  methods: {
    addPlayer(item) {
      let index
      if (this.game[0].name.length === 0) {
        index = 0
      } else if (this.game[1].name.length === 0) {
        index = 1
      }
      this.game[index].name = item.name
      this.game[index].img = item.img
      this.checkIfDone()
    },
    removePlayer(player) {
      this.game[player].name = ''
      this.game[player].img = ''
      this.done = false
    },
    addGame() {
      this.$router.push('Standings')
    },
    checkIfDone() {
      if (this.game[0].name.length !== 0 && this.game[1].name.length !== 0) {
        this.done = true
      } else {
        this.done = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/1_settings/settings.colors";
@import "../assets/scss/1_settings/settings.global";
@import "../assets/scss/5_objects/objects.content";
@import "../assets/scss/6_components/components.buttons";
.o-content {
  margin: 0 auto;
  max-width: 30rem;
}
.c-page-start {
  text-align: center;
}
.c-competitors {
  display: flex;
  &__heading {
    text-align: center;
  }
  &__item {
    flex: 1 1 0px;
  }
}
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
    background: $gray-light;
  }
  &__name {
    margin-top: auto;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
}
.c-add-game {
  display: flex;
  justify-content: center;
  &__action {

  }
}
.c-players {
  display: flex;
  flex-wrap: wrap;
  &__item {
    flex: 1 1 0px;
  }
}
.c-player {
  margin: $spacing-small;
  padding: $spacing;
  background: $midnight;
  border-radius: $global-radius;
  color: $white;
  text-align: center;
  cursor: pointer;
}
</style>
