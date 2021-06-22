<template>
    <div id="gameInfoBanner">
        <div id="gameInfoHeroImage">
                <h1 id="gameInfoTitle"> COMBAT TACTICS</h1>
        </div>

        <div class="gameInfoContent">
            <div id="gameInfoCards">
                <div id="gameInfoCardOne">
                    <div id="CardOneLeft">
                        <div class="cardBackDrops">
                    <img src="../../assets/GameplayPreview2.jpg">
                        </div>
                    </div>
                    <div id="CardOneRight">
                        <h2> SPECIALIZING CLASSES</h2>
                        <h4 class="cardDescription">You won’t be locked into your class choice permanently. You and your squad can change your classes at a Bivouac. If you need more firepower, you can pick a class that emphasizes assault. If you want to try more stealth, you could switch to the Panther.
                        </h4>
                        <h4 class="cardDescription">The Panther class is for players who want to become masters of infiltration. Panthers quickly engage enemies at close range before retreating back into stealth. Their special skill allows them to create a cloud of smoke, making them invisible to the enemy for a few seconds and giving them the opportunity to counterattack or disappear. While Panthers do not have access to loud or heavy weapons, they compensate for that by being harder to detect, quicker on the move, and facing no damage reduction when using suppressors.
                        </h4>
                        <h4 class="cardDescription"> For all the sniper players out there, the Sharpshooter is the class of choice. Skillful and deadly, Sharpshooters can load three special bullets in their rifles, dealing large amounts of damage to enemies. Sharpshooters are also able to hold their breath longer than other players in order to stabilize their aim, and they reload long-range weapons faster too.</h4>
                    </div>
               
                </div>

                <div id="gameInfoCardTwo">
                    <div id="CardTwoLeft">
                        <h2> NEW CONTENT UPDATES</h2>
                        <h4 class="cardDescription">Stealth is the name of the game with this new class. Use your Sonar Vision to detect enemies through walls and use the Shock Pistol to eliminate enemies stealthily. Plus Reflex shot, shadow master, and handgun proficiency passive skills make this class the ultimate stealth killer.
                        </h4>
                        <h4 class="cardDescription">The Year 1 Pass includes complete access to Episode 1, Episode 2, and Episode 3 Red Patriot adventures, along with the ability to invite non-owners to play their missions. Year 1 Pass owners also get one-week early access to all the new classes, beginning with the Engineer, Echelon, and Pathfinder. The pass also includes the Special Operation Forces pack, which includes various gear items.</h4>
                        <h4 class="cardDescription">Episode 3 begins on September 15, 2020, with the release of the new adventure: Red Patriot. You will also discover a new class, the Pathfinder, as well as a new PVP map: Riverbank. Additional content will be available later this episode.
                        The Pathfinder class, which is a versatile scout, will be introduced to the game on September 15 for Season Pass owners as one-week early access. Then, all players will have access to the Pathfinder class when the exclusivity period ends.
                        </h4>
                    </div>
                    <div id="CardTwoRight">
                        <img src="../../assets/HeroFocus3.jpg">
                    </div>
                </div>

                <div id="gameInfoCardThree">
                    <div id="CardThreeLeft">
                        <img src="../../assets/GameplayPreview1.jpg">
                    </div>
                    <div id="CardThreeRight">
                        <h2> HAZARD AT EVERY CORNER</h2>
                        <h4 class="cardDescription">In Tom Clancy’s Ghost Recon Breakpoint, you’ll be pitted against Walker and his Wolves, but they’re not the only threat. Working with the Wolves are Sentinel, a Private Military Contractor (PMC) that have been hired to take care of security throughout the island. During the stream we showed three Sentinel archetypes, with more coming over the summer!
                        </h4>
                        <br>
                        <h4 class="cardDescription">Enemies will work together better than ever before to take you down. On top of the new enemy archetypes, enemy AI has evolved to provide a better stealth experience to all players. Now, if the enemy becomes suspicious, depending on the risk of the situation, they will choose to either stalk the player’s last-known position, or send out a radio call to either alert the camp or send over reinforcements. The player’s last-known position will also be managed more realistically than before, with enemies needing to investigate before they can actually find you if you remain hidden.</h4>
                    </div>
                </div>
            
            </div>
            
            
            
            
            
            
            
            
        </div>
    </div>
</template>


<script>
export default {
   name: 'mainGameInfo',
}
</script>


<style scoped>

#gameInfoHeroImage {
    background-image: url("https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Rsuhqe74DG9QQ1CQSBgpb/123f59c995b75be39456054181058127/GRB_AMBER_SKY_Keyart.jpg");
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    width: 100%;
    height: 80vh;
}

/* SECTION: Content */
#gameInfoTitle {
    color: whitesmoke;
    font-size: 65px;
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2vh;
}

/* game card grid */

#gameInfoCardOne, #gameInfoCardTwo, #gameInfoCardThree {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas: "leftCard rightCard";
}

#CardOneLeft {
    grid-area: leftCard;
}

#CardOneLeft img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
}
#CardOneRight {
    grid-area: rightCard;
    color: whitesmoke;
    background-color: black;
    background-image: url('~@/assets/background_splashimg.jpg');
    background-size: cover;
}

/* game card 2 */
#CardTwoRight {
    grid-area: rightCard;
}

#CardTwoRight img {
    width: 100%;
    height: 50vh;
    object-position: 0 0;
    object-fit: cover;
}
#CardTwoLeft {
    grid-area: leftCard;
    color: whitesmoke;
    background-color: black;
    background-image: url('~@/assets/background_splashimg.jpg');
    background-size: cover;
}

/* game card 3 */
#CardThreeLeft {
    grid-area: leftCard;
}

#CardThreeLeft img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
}
#CardThreeRight {
    grid-area: rightCard;
    color: whitesmoke;
    background-color: black;
    background-image: url('~@/assets/background_splashimg.jpg');
    background-size: cover;
}

.cardDescription {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
}


</style>