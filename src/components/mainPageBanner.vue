<template>
  <div id="homepageHeroBanner">
  <img id="ghostReconBannerImage" alt="mainpage hero banner ghost recon" src="../assets/mainLogoBanner.jpg">

    <div class="homepageHeroButtons">
      <div id="homepageLeftButton">
        <img id="operatorLeftImage" alt="mainpage ghost recon operator 1" src="../assets/operatorTwo.png">

        <h4> 01 </h4>
        <h2> OPERATION AMBER SKY: LIVE EVENT</h2>
        <p> Team up with Rainbow Six Operators Ash, Finka and Thatcher</p>
      </div>

      <div id="homepageMidButton">
        <img id="operatorMidImage" alt="mainpage ghost recon operator 3" src="../assets/operatorOne.png">

        <h4> 02 </h4>
        <h2> GHOST EXPERIENCE 2.0</h2>
        <p> Customize Your Ghost Experience Like Never Before</p>
      </div>

      <div id="homepageRightButton">
        <img id="operatorRightImage" alt="mainpage ghost recon operator 3" src="../assets/operatorThree.png">

        <h4> 03 </h4>
        <h2> UNLIMITED ACCESS TO UBISOFT</h2>
        <p> Get Access To The Most Premium Edition of Ghost Recon Breakpoint including DLCs</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mainPageBanner',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#homepageHeroBanner {
  position: relative;
}
#ghostReconBannerImage {
  position: relative;
  left:0px;
  z-index: 1;
  width: 100%;
  object-fit: cover;
  height: 80vh;
}

/* background banner behind buttons */
.homepageHeroButtons {
  position: absolute;
  width: 100%;
  height: 20vh;
  z-index: 15;
  bottom: 0;
  background-color: black;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  grid-template-areas: "leftButton midButton rightButton";
}

#homepageLeftButton {
  grid-area: leftButton;
  color: whitesmoke;
  opacity: 0.7;
  position: relative;
  z-index: 15;
}

#homepageMidButton {
  grid-area: midButton;
  color: whitesmoke;
  opacity: 0.7;
  position: relative;
  z-index: 20;
}

#homepageRightButton {
  grid-area: rightButton;
  color: whitesmoke;
  opacity: 0.7;
  position: relative;
  z-index: 15;
}

#homepageLeftButton:hover {
    opacity: 1;
    background-color: rgb(75, 75, 75);
    transition:all 0.3s ease;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    box-shadow: inset 0 0 0 1px whitesmoke;
}

#homepageMidButton:hover {
    opacity: 1;
    background-color: rgb(75, 75, 75);
    transition:all 0.3s ease;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    box-shadow: inset 0 0 0 1px whitesmoke;
}

#homepageRightButton:hover {
    opacity: 1;
    background-color: rgb(75, 75, 75) ;
    transition:all 0.3s ease;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    box-shadow: inset 0 0 0 1px whitesmoke;
}

/* Soldier images behind banner */

#operatorLeftImage {
  width: 150px;
  position: absolute;
  bottom: 0px;
  z-index: -15;
  left: 25vh;
  filter: blur(1px);
}

#operatorMidImage {
  width: 150px;
  position: absolute;
  bottom: 0px;
  z-index: -15;
  left: 25vh;
  filter: blur(1px);
}

#operatorRightImage {
  width: 150px;
  position: absolute;
  bottom: 0px;
  z-index: -15;
  left: 25vh;
  filter: blur(1px);
}

#operatorLeftImage:hover {
  filter: blur(0px);
}

#operatorMidImage:hover {
  filter: blur(0px);
}

#operatorRightImage:hover {
  filter: blur(0px);
}




</style>
