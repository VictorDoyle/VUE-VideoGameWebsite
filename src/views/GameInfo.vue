<template>
  <div class="about">
   <!-- main game content info -->
   <mainGameInfo />
  <!-- import footer -->
  <mainPageFooter />
  </div>
</template>


<script>



import mainGameInfo from '@/components/GameInfo/mainGameInfo.vue'


import mainPageFooter from '@/components/Homepage/mainPageFooter.vue'


export default {
  name: 'Game Info',
  components: {
    mainGameInfo,
    mainPageFooter,

  }
}
</script>