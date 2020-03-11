<template>
  <div class="about  mt-4">
    <h2>{{pagename}} </h2>
    <p v-bold>{{pagedescription}}</p>
    <!-- <WelCome/> -->
  </div>
</template>
<script>
//import WelCome from '@/components/WelCome.vue'

export default {
  data:function(){
    return{
      pagename:'About us',
      pagedescription:"page for dispaly about us"
    }
  },
  components:{
    // WelCome
  }
  
}
</script>