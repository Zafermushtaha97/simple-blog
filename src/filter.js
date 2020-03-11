import Vue from "vue";

//shoter text
Vue.filter('shorten',function(content){
    return content.substring(0,70)+"..."
        
    
})
