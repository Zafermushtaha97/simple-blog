<template>
    <div class="header">
        <!-- <div class="logo">LOGO</div>
    <UL id="nav">
      <router-link to="/" tag="li"  class="text-warning">Home</router-link> |
      <router-link to="/about" tag="li">About</router-link>|
      <router-link to="/contact" tag="li">Contact</router-link>
    </ul> -->


    <nav class="navbar navbar-expand-lg navbar-dark bg-success static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
          <img src="http://placehold.it/150x50?text=Logo" alt="">
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
       
        <li class="nav-item active ">
          <router-link to="/" class="nav-link" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link  to="/about" class="nav-link" >About</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/blog" class="nav-link" >Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" replace>Contact</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
</template>
<script>
export default {
    name:"AppHeader"
}
</script>