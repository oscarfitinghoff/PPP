<template>
  <div class="o-content">
    <div class="c-logo">
      <img class="c-logo__img" src="../assets/soccer-cup.svg">
    </div>
    <h1 class="c-page-start">{{ title }}</h1>
    <div class="c-standings">
      <table class="table c-table">
        <thead>
          <tr>
            <th>Namn</th>
            <th>Vinster</th>
            <th>Förluster</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tr v-for="item in reverse" :key="item.id">
          <td class="c-table__max">{{ item.name }}</td>
          <td class="c-table__number">{{ item.wins }}</td>
          <td class="c-table__number">{{ item.losses }}</td>
          <td class="c-table__number">{{ item.diff }}</td>
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
  firebase: {
    players: playersRef.orderByChild('wins')
  },
  data() {
    return {
      title: 'Tabell'
    }
  },
  computed: {
    reverse() {
      return this.players.reverse()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/5_objects/objects.content";
.c-logo {
  margin: 0 auto;
  width: 10rem;
}
.c-page-start {
  text-align: center;
}
.c-table {
  width: 100%;
  &__max {
    width: 99%;
  }
  &__number {
    text-align: right;
  }
}
</style>
