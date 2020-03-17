<template>
    <div>
        <h1 class="title-contact text-center">Contact Us</h1>
        <div class="contact-info bg-aliceblue">
          <div class="container ">
            <div class="row mx  pa-3">
                <div class="col col-md-6">
                    <div class="bg-white pa-4">
                        <form action="#">
                            <h2 class="h4 text-black mb-5 text-center">Contact Form</h2> 
                        <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" class="form-control rounded-pill">
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" class="form-control rounded-pill">
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label> 
                  <input type="email" id="email" class="form-control rounded-pill">
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" class="form-control rounded-pill">
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control border-30" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Send Message" class="btn-contact">
                </div>
              </div>
                </form>
                    </div> 
                </div>
                <div class="col col-md-6 ">
                    <div class="bg-white pa-4">

                    <div class="p-4 mb-3 bg-white">
                      <p class="mb-0 font-weight-bold">Address</p>
                      <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                      <p class="mb-0 font-weight-bold">Phone</p>
                      <p class="mb-4 "><a href="#" class="primary-color">+1 232 3235 324</a></p>

                      <p class="mb-0 font-weight-bold">Email Address</p>
                      <p class="mb-0 "><a href="#" class="primary-color">youremail@domain.com</a></p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
    data:function(){
        return{
           
        }

        
    },
    name:"Contact"
}
</script>
<style lang="css" scoped>
.title-contact{
    font-size: 3rem;
    color: #000;
    font-family: sans-serif;
    margin-top: 40px;
}
.mx{
    margin: 0px;
}
.pa-3{
  padding: 3em;
}
.bg-white{
    background-color: white;
    padding: 2em;
}
.bg-aliceblue{
  background-color: aliceblue;
}
.primary-color{
  color: #32dbc6 !important;
}
.border-30{
  border-radius: 30px;
}
.btn-contact{
    margin-top: 25px;
    border-radius: 25px;
    border: 0px;
    padding: 10px;
    color: white;
    background-color: #32dbc6;
    border-color: #32dbc6;
    padding: 15px 30px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: .1em;
}
</style>