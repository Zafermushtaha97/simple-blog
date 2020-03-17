<template>
  <div class="home">
    <div class="bg-img">
     <h2 class="title">We Love To Build Web Apps</h2>
     <button class="btn-home" href="/contact">
     <router-link to="/contact">Contact Us</router-link>
     </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  
  
  }
}
</script>
<style  scoped>
.home{
  text-align: center;
}
.bg-img{
  background-image: url(../assets/hero_1.jpg);
  background-size: cover;
  height: 560px;
}
.bg-img .title{
padding-top: 15% ;
justify-content: center;
font-size: 3rem;
font-weight: 400;
color: #fff;
}
.btn-home{
      margin-top: 25px;
    border-radius: 25px;
    border: 0px;
    padding: 10px;
    color: #212529 !important;
    background-color: #32dbc6;
    border-color: #32dbc6;
    padding: 15px 30px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: .1em;

}
.btn-home a{
  color: #212529;
}
.btn-home a:hover{
  color: #212529;
  text-decoration: none;
}
</style>