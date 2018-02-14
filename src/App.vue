<template>
  <div id="app" class="o-content">
    <header class="">
      <nav class="navbar is-info">
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Ny match</router-link>
            <router-link to="/Standings" class="navbar-item">Tabell</router-link>
          </div>
        </div>
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
</style>


