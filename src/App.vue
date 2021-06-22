<template>
  <div id="main-nav">
      <div id="left-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link>
      <router-link to="/game-info">Game Info</router-link>
      </div>
      <div id="right-nav">
        <router-link to="/buy-now"> Buy Now </router-link>
      </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family:'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#main-nav {
  padding: 30px;
  background-color: black;
}

#left-nav {
  float: left;
}

#right-nav {
  float: right;
}

#main-nav a {
  font-weight: bold;
  color: whitesmoke;
  margin-left: 40px;
  margin-right: 40px;
}

#main-nav a.router-link-exact-active {
  color: black;
  width: 300px;
  height: 300px !important;
  background-color: burlywood;
}
</style>
