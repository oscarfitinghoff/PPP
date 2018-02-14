<template>
  <div class="o-content">
    <h1 class="c-page-start">{{ title }}</h1>
    <div class="c-competitors">
      <div class="c-competitors__item">
        <h3 class="c-competitors__heading">Vinnare</h3>
        <div class="c-competitor" @click="removePlayer('0')" v-bind:class="{ 'is-active': game[0].name.length > 0 }">
          <div class="c-competitor__img-wrapper">
            <img src="" alt="">
          </div>
          <div class="c-competitor__name">{{ game[0].name }}</div>
        </div>
      </div>
      <div class="c-competitors__item">
        <h3 class="c-competitors__heading">Förlorare</h3>
        <div class="c-competitor" @click="removePlayer('1')" v-bind:class="{ 'is-active': game[1].name.length > 0 }">
          <div class="c-competitor__img-wrapper">
            <img src="" alt="">
          </div>
          <div class="c-competitor__name">{{ game[1].name }}</div>
        </div>
      </div>
    </div>
    <div class="c-add-game" v-if="done">
      <button class="c-btn c-add-game__action" @click="addGame">Lägg till match</button>
    </div>
    <div class="c-players" v-else>
      <div class="c-players__item" v-for="player in players" :key="player.id">
        <div class="c-player" @click="addPlayer(player)">{{ player.name }}</div>
      </div>
    </div>
    <div class="c-create-player">
      <h3>Lägg till ny spelare</h3>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" v-model="newPlayer">
        </div>
        <div class="control">
          <a class="button is-link" type="button" @click="createPlayer(newPlayer)">Lägg till spelare</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Firebase from 'firebase'

const config = {
  version: 'v0_1'
}
const db = Firebase.database()
const gamesRef = db.ref(`${config.version}/games`)
const playersRef = db.ref(`${config.version}/players`)

export default {
  name: 'AddGame',
  firebase() {
    return {
      players: playersRef,
      playersObj: {
        source: playersRef,
        asObject: true
      }
    }
  },
  data() {
    return {
      title: 'Ny match',
      done: false,
      game: [
        {
          key: '',
          name: '',
          img: '',
          aka: ''
        },
        {
          key: '',
          name: '',
          img: '',
          aka: ''
        }
      ],
      selections: this.players,
      newPlayer: ''
    }
  },
  methods: {
    addPlayer(player) {
      let index
      if (this.game[0].name.length === 0) {
        index = 0
      } else if (this.game[1].name.length === 0) {
        index = 1
      }
      this.game[index].key = player['.key']
      this.game[index].name = player.name
      this.checkIfDone()
    },
    removePlayer(player) {
      this.game[player].key = ''
      this.game[player].name = ''
      this.game[player].img = ''
      this.done = false
    },
    checkIfDone() {
      if (this.game[0].name.length !== 0 && this.game[1].name.length !== 0) {
        this.done = true
      } else {
        this.done = false
      }
    },
    addGame() {
      gamesRef.push(this.game)
      this.updatePlayers(this.game)
    },
    updatePlayers(game) {
      const winner = this.updateWinner({ ...game[0] })
      const loser = this.updateLoser({ ...game[1] })

      playersRef.child(game[0].key).set(winner)
      playersRef.child(game[1].key).set(loser)
    },
    updateWinner(player) {
      const temp = this.playersObj[player.key]
      temp.wins += 1
      temp.losses = temp.losses
      temp.diff += 1
      delete temp['.key']
      return temp
    },
    updateLoser(player) {
      const temp = this.playersObj[player.key]
      temp.wins = temp.wins
      temp.losses += 1
      temp.diff -= 1
      delete temp['.key']
      return temp
    },
    createPlayer(player) {
      if (player.length) {
        const newPlayer = {
          name: player,
          img: '',
          aka: '',
          wins: 0,
          losses: 0,
          diff: 0
        }
        playersRef.push(newPlayer)
        // this.updateStanding(newPlayer)
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
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
}
.c-create-player {
  padding: $spacing-small;
}
</style>
