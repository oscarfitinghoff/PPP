<template>
  <div class="o-content">
    <h1>{{ msg }}</h1>
    <div class="c-standings">
      <table class="c-standings__table">
        <tr v-for="item in standings" :key="item.id">
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
export default {
  name: 'Standings',
  data() {
    return {
      msg: 'Standings',
      standings: [
        {
          name: 'Leif',
          wins: 4,
          losses: 2,
          diff: 2
        },
        {
          name: 'Arne',
          wins: 3,
          losses: 2,
          diff: 1
        },
        {
          name: 'Leif',
          wins: 2,
          losses: 4,
          diff: -2
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/5_objects/objects.content";
</style>
