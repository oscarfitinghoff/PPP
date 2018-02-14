<template>
  <div id="app" class="o-content">
    <header class="">
      <nav class="c-navigation">
        <ul class="c-navigation__list">
          <li class="c-navigation__item">
            <router-link to="/">Ny match</router-link>
          </li>
          <li class="c-navigation__item">
            <router-link to="/Standings">Tabell</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="c-logo">
      <img class="c-logo__img" src="./assets/ping-pong-racket.svg">
    </div>
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Settings from './components/Settings'

const config = {
  apiKey: Settings.apiKey,
  authDomain: Settings.authDomain,
  databaseURL: Settings.databaseURL,
  version: 'v0_1'
}
Firebase.initializeApp(config)
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./assets/scss/1_settings/settings.global";
@import "./assets/scss/5_objects/objects.content";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
body {
  font-family: 'Lato', sans-serif;
}
.c-logo {
  margin: 0 auto;
  width: 10rem;
}
.c-navigation {
  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__item {
    &:not(:first-child) {
      margin-left: $spacing-small;
    }
  }
}
</style>


