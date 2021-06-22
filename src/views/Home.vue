<template>
  <div class="home">
    <!-- top section banner -->
    <mainPageBanner />
    <!-- main content mid -->
    <mainPageContent />
    <!-- footer section -->
    <mainPageFooter/>
    
  </div>
</template>

<script>



import mainPageBanner from '@/components/Homepage/mainPageBanner.vue'
import mainPageContent from '@/components/Homepage/mainPageContent.vue'
import mainPageFooter from '@/components/Homepage/mainPageFooter.vue'

export default {
  name: 'Home',
  components: {
    mainPageBanner,
    mainPageContent,
    mainPageFooter,
  }
}
</script>
