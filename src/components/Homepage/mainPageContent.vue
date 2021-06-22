<template>
    <div id="mainPageContentIntro">
        <h1 id="contentHeroTitle"> NEW CHARACTERS </h1>
       <div class="mainCharactersGrid">
           <div id="leftCharacter">
               <div class="characterTextBio"> 
            <router-link to="/game-info">
               <h2> WORLD AND STORY</h2>
                <p>Discover the diverse open world of Auroa and the deadly Wolves that have made it their home. </p>
                <h3> DISCOVER THE STORY </h3>
                </router-link> 
               </div>
               <div id="leftCharImage">
               </div>
               

           </div>
            <div id="midCharacter">
                <div class="characterTextBio"> 
                <router-link to="/game-info">
                    <h2> GAMEPLAY FEATURES</h2>
                    <p>Explore the many features and abilities you'll have at your disposal. </p>
                    <br>
                    <h3> SEE THE GAME DETAILS </h3>
                </router-link>
               </div>
                <div id="midCharImage">
                </div>

           </div>
            <div id="rightCharacter">
                <div class="characterTextBio"> 
                <router-link to="/game-info">
                    <h2> GAME MODES</h2>
                    <p>Play your way with solo, co-op, and multiplayer modes in an ever evolving world.</p>
                    <h3> LEARN ABOUT THE NEW MODES </h3>
                </router-link>
                </div>
                <div id="rightCharImage">
                </div>

           </div>
       </div>

       <div class="buyNowContent">
           <h2 id="buyNowTitle"> Buy Breakpoint Now</h2>
           <h3 id="buyNowPlatform">Available now on Xbox One, STADIA, PS4, and PC</h3>

           <img id="buyNowBanner" src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3WPDq7N4O9Wg3DkkwM7SFc/cc9cd68b932736cf0a29cce6cccf4589/Ubisoft__GRB_960x540.jpg" loading="lazy">

           <h2 id="buyNowOverlayText">Ubisoft Subscription Service UBISOFT+ Available Now  </h2>
           <h3 id="buyNowOverlayTextSub">Accesss the premium edition* of Ghost Recon Breakpoint including automatic updates and a growing catalogue of 100+ PC games with Ubisoft+.</h3>
       </div>

       <div> 
       </div>
    </div>
</template>


<script>

export default {
  name: 'mainPageContent',
}
</script>

<style scoped>

#mainPageContentIntro {
    position: relative;
}
#contentHeroTitle {
    font-size: 65px;
    color: whitesmoke;
    z-index: 10;
    margin-top: 50px;
}

.mainCharactersGrid {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-template-areas: "leftCharacter midCharacter rightCharacter";
}

/* character showcase */

#leftCharacter {
    border-radius: 15px;
    background-color: black;
    color: whitesmoke;
    opacity: (0.5);
    height: 500px;
    width: 300px;
    grid-area: leftCharacter;
    margin-left:auto;
    position: relative;
    z-index: 30;
}

#leftCharImage {
    background-image: url('~@/assets/MainHeroFocus.jpg');
    z-index: -10;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 65vh;
    border-radius: 15px;
}

#midCharacter {
    border-radius: 15px;
    background-color: black;
    color: whitesmoke;
    opacity: (0.5);
    height: 500px;
    width: 300px;
    grid-area: midCharacter;
    margin-left:auto;
    margin-right: auto;
    position: relative;
    z-index: 30;
}

#midCharImage {
    background-image: url('~@/assets/HeroFocus2.jpg');
    z-index: -10;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 35vh;
    border-radius: 15px;
}

#rightCharacter {
    border-radius: 15px;
    background-color: black;
    color: whitesmoke;
    opacity: (0.5);
    height: 500px;
    width: 300px;
    grid-area: rightCharacter;
    margin-right: auto;
    position: relative;
    z-index: 30;
}

#rightCharImage {
    background-image: url('~@/assets/Fury.jpg');
    z-index: -10;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 35vh;
    border-radius: 15px;
}

/* link to showcase info on character cards */

.characterTextBio {
    position: absolute;
    bottom: 0;
    background-color: black;
    height: 130px;
    overflow: hidden; 
}

.characterTextBio:hover { 
    height: 200px;
    transition: all .5s ease;
}

a {
    text-decoration: none;
    color: whitesmoke;
}

/* buy now content */

.buyNowContent {
    color: whitesmoke;
}

#buyNowTitle {
    font-size: 40px;
}

#buyNowPlatform {
    font-size: 30px;
}

#buyNowBanner {
    width: 100%;
    object-fit: cover;
    height: 80vh;
    object-position: 0 0;
}

#buyNowOverlayText {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10vh;
}

#buyNowOverlayTextSub {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5vh;
}

</style>