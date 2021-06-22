<template>
    <div id="mainPageContentIntro">
        <h1 id="contentHeroTitle"> NEW CHARACTERS </h1>
       <div class="mainCharactersGrid">
           <div id="leftCharacter">
               <h4> Play Against Fierce New Enemies</h4>
               <div class="characterTextLink">
                   <h3> DISCOVER THE STORY </h3>
               </div>
               <div id="leftCharImage">
               </div>
               

           </div>
            <div id="midCharacter">
                <h4> Play Against Fierce New Enemies</h4>
                <div class="characterTextLink">
                    <h3> SEE THE GAME DETAILS </h3>
                </div>
                <div id="midCharImage">
                </div>

           </div>
            <div id="rightCharacter">
                <h4> Play Against Fierce New Enemies</h4>
                <div class="characterTextLink">
                    <h3> LEARN ABOUT THE NEW MODES </h3>
                </div>
                <div id="rightCharImage">
                </div>

           </div>
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

.characterTextLink {
    color:#8a8c4a;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 70px;
}

/* on hover show information hidden behind characterTextLink with overflow hidden */



</style>