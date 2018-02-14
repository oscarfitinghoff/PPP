<template>
  <div class="o-content">
    <h1>{{ msg }}</h1>
    <div class="c-standings">
      <table class="c-standings__table">
        <tr v-for="item in players" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.wins }}</td>
          <td>{{ item.losses }}</td>
          <td>{{ item.diff }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

const config = {
  version: 'v0_1'
}
const db = Firebase.database()
// const gamesRef = db.ref(`${config.version}/games`)
const playersRef = db.ref(`${config.version}/players`)

export default {
  name: 'Standings',
  firebase() {
    return {
      players: playersRef
    }
  },
  data() {
    return {
      msg: 'Standings'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/5_objects/objects.content";
</style>
