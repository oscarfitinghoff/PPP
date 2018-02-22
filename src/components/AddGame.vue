<template>
  <div class="o-content">
    <div class="c-logo">
      <img class="c-logo__img" src="../assets/ping-pong-racket.svg">
    </div>
    <h1 class="c-page-start">{{ title }}</h1>
    <div class="c-competitors">
      <div class="c-competitors__item">
        <h3 class="c-competitors__heading">Vinnare</h3>
          <Competitor :competitor="game[0]" index="0" @clicked="removePlayer"></Competitor>
      </div>
      <div class="c-competitors__item">
        <h3 class="c-competitors__heading">Förlorare</h3>
        <Competitor :competitor="game[1]" index="1" @clicked="removePlayer"></Competitor>
      </div>
    </div>
    <div class="c-add-game" v-bind:class="{'is-hidden': !done}">
      <button class="button is-success c-add-game__action" @click="addGame">Lägg till match</button>
    </div>
    <div class="buttons is-centered" v-bind:class="{'is-hidden': done}">
      <button class="button is-primary" v-for="player in players" :key="player.id" :data-key="player['.key']">
        <div class="" @click="addPlayer(player)">{{ player.name }}</div>
      </button>
    </div>
    <createPlayer></createPlayer>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Competitor from './Competitor'
import CreatePlayer from './CreatePlayer'

const config = {
  version: 'v0_1'
}
const db = Firebase.database()
const gamesRef = db.ref(`${config.version}/games`)
const playersRef = db.ref(`${config.version}/players`)

export default {
  name: 'AddGame',
  components: {
    Competitor,
    CreatePlayer
  },
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
      logoUrl: '../assets/ping-pong-racket.svg'
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
      this.game[index]['.key'] = player['.key']
      this.game[index].name = player.name
      if (player['.key'] === this.game[0]['.key'] || player['.key'] === this.game[1]['.key']) {
        const element = document.querySelector(`[data-key="${player['.key']}"]`)
        element.setAttribute('disabled', true)
      }
      this.checkIfDone()
    },
    removePlayer(player) {
      console.log(player);
      if (this.game[player].name.length) {
        const element = document.querySelector(`[data-key="${this.game[player]['.key']}"]`)
        element.removeAttribute('disabled', false)
        this.game[player]['.key'] = ''
        this.game[player].name = ''
        this.game[player].img = ''
        this.done = false
      }
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

      playersRef.child(game[0]['.key']).set(winner)
      playersRef.child(game[1]['.key']).set(loser)
    },
    updateWinner(player) {
      const temp = this.playersObj[player['.key']]
      temp.wins += 1
      temp.losses = temp.losses
      temp.diff += 1
      delete temp['.key']
      return temp
    },
    updateLoser(player) {
      const temp = this.playersObj[player['.key']]
      temp.wins = temp.wins
      temp.losses += 1
      temp.diff -= 1
      delete temp['.key']
      return temp
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
.c-logo {
  margin: 0 auto;
  width: 10rem;
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
.c-add-game {
  display: flex;
  justify-content: center;
  &__action {

  }
}
</style>
