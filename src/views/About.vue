<template>
  <div class="about  mt-4">
    <h2 class="title-about text-center">Our Team</h2>
    <div class="about-text">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima pariatur eius aliquid! Id illum dolore labore dicta cum nostrum perferendis quos voluptatibus vitae magnam blanditiis dolorum quidem, odit maiores aliquam sit amet, consectetur adipisicing elit. Minima pariatur eius aliquid! Id illum dolore labore dicta cum nostrum perferendis quos voluptatibus vitae magnam blanditiis dolorum quidem, odit maiores</p>
    </div>
   
    <!-- <WelCome/> -->
  </div>
</template>
<script>
//import WelCome from '@/components/WelCome.vue'

export default {
  data:function(){
    return{
  
    }
  },
  components:{
    // WelCome
  }
  
}
</script>
<style lang="css" scoped>
.title-about{
  font-size: 3rem;
    color: #000;
    font-family: sans-serif;
    margin-top: 35px;
    text-align: center;
}
.about-text{
  padding: 20px;
    background-color: aliceblue;
    -webkit-box-shadow: 17px 17px 0px -10px rgba(220,219,222,1);
    -moz-box-shadow: 17px 17px 0px -10px rgba(220,219,222,1);
    box-shadow: 17px 17px 0px -10px rgba(220,219,222,1);
    margin:40px 80px;
    line-height: 1.8;
    font-size: 1em;

}
</style>