<template>
    <footer id="mainpageFooter">
        <div class="footerContent">
            <div id="footerLeft">
                <router-link to="/" class="footerNavLinks">UBISOFT</router-link> 
                <router-link to="/" class="footerNavLinks">HOME</router-link> 
                <router-link to="/news" class="footerNavLinks">NEWS</router-link>
                <router-link to="/game-info" class="footerNavLinks">GAME INFO</router-link>
            </div>

            <div id="footerRight">
                <img class="socialLinkLogo" src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6htnsL4NtlpGqIG7nehH4y/fbc47c2dcd35743457c26e438d3e2d0f/_Ubisoft__global_instagram_logo.png" alt="instagram icon" loading="lazy">
                <img class="socialLinkLogo" src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qr5vgdJh6wU6y5WdAgb0P/f2938f864a107f2db7c86a2b1bdab660/_Ubisoft__global_twitter_logo.png" loading="lazy">
                <img class="socialLinkLogo" src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qD6KHarSZ9h2uc7G5o20C/10c9770cf91907d417a61ba3f03954aa/_Ubisoft__global_twitch_logo.png" alt="twitch icon" loading="lazy">
                <img class="socialLinkLogo" src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/32xRzuzxNUJYa3QO5iY8B5/7b048bf697702593da82c3325e7dc0d2/_Ubisoft__global_facebook_logo.png" alt="facebook icon" loading="lazy">

                <!-- ratings images -->
                <div><a aria-label="ESRB Privacy Certified Logo Seal" href="http://www.esrb.org/confirm/ubisoft-confirmation.aspx" target="blank" rel="noreferrer noopener"><img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3TWaCi5CyuZBRpzsRP1iy/6384003e7b534b4962db554a21c696bb/esrb-privacy-footer.jpg" alt="ESRB Privacy Certified Logo Seal" loading="lazy"></a><a href="http://www.esrb.org/ratings/ratings_guide.jsp" target="blank" rel="noreferrer noopener"><img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/44yI0aiRvryF7aWuR8QbG0/a2be51de2c076ab2d32c757e71c2b92d/grbreakpoint-esrb-rating-m_descriptors.jpg" loading="lazy"></a></div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
  name: 'mainPageFooter',
}
</script>

<style scoped>


.footerContent {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas: "footerLeft footerRight";
    background-color: black;
    width: 100%;
    height: 30vh;
}

.socialLinkLogo {
    width: 50px;
    margin: 10px;
    margin-left: auto;
    margin-right: 30px;
    grid-area: footerRight;
}

.socialLinkLogo:hover {
    width: 55px;
    transition: all .3s ease;
}


#footerLeft {
    grid-area: footerLeft;
    position: relative;
}

.footerNavLinks {
    text-decoration: none;
    color: whitesmoke;
    margin: 25px;
    text-align: left;
    font-size: 25px;
    margin-left: 10vh;
    width: 100%;
    display: block;
    width: 150px;
}

.footerNavLinks:hover {
    color: grey;
    transition: all .3s ease;
}


#footerRight {
    grid-area: footerRight;
    float: right;
    margin-top: 35px;
}


</style>