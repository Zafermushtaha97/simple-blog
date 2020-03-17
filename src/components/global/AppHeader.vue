<template>
    <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
         <h1 class="logo">WebApps</h1></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item ">
          <router-link to="/" class="nav-link active" exact-active-class>Home</router-link>
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
<style lang="css" scoped>
.logo{
  font-size: 2em;
}
.navbar{
  padding: 0px !important;
}
.navbar-nav .nav-link.active{
  color: dimgrey;

}
.navbar-nav li .nav-link{
  font-size: 1.2em;
  color: #000;
}

</style>