<template>
  <div id="main-nav">
      <div id="left-nav">
      <img id="websiteLogo" alt="Ghost Recon Logo" src="./assets/logo.png">
      <router-link to="/">Home</router-link> 
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

body {
  margin: 0 !important; 
}

#websiteLogo {
  width: 200px;
  position: absolute;
  left: 15px;
  top: 5px;
}

#main-nav {
  height: 70px;
  background-color: black;
}

#left-nav {
  float: left;
  margin-left: 200px;
  margin-top: 25px;
}

#right-nav {
  float: right;
  margin-top: 25px;
}

#main-nav a {
  font-weight: bold;
  color: whitesmoke;
  margin-left: 40px;
  margin-right: 40px;
}

#main-nav a.router-link-exact-active {
  /* TODO: change color and add animation */
  color: aqua;
}


</style>
