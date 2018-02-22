<template>
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
</template>

<script>

import Firebase from 'firebase'

const config = {
  version: 'v0_1'
}
const db = Firebase.database()
const playersRef = db.ref(`${config.version}/players`)
export default {
  data() {
    return {
      newPlayer: ''
    }
  },
  props: [],
  methods: {
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
.c-create-player {
  padding: $spacing-small;
}
</style>
