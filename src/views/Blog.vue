<template>
    <div class="blog">
        <h5 class="text-center">{{pagedescription}}</h5>
        <div class="container">
            <div class="row">
                <div class="col col-md-12 col-sm-4">
                   <BlogPost v-for="post in posts" :key="post.id" class="mt-4" :views="post.views" 
                   :title="post.title" :date="post.date" :content="post.content" :auther="post.auther"
                   :category="post.category"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlogPost from '@/components/blog/BlogPost.vue'
//import SideBar from '@/components/blog/SideBar.vue'
import jsondatapost from '../../json/date.json'


export default {
    data:function(){
        return{
            pagename:"Blog",
            pagedescription:"This page use for display info about blog",
            posts:jsondatapost,
            totalCount:null,

        }

        
    },
    name:"blog",
    components:{
        BlogPost,
       
    },
    mounted(){
        console.log(this.posts)
        
        
    },
    // methods:{
    //     getblogs(){
    //   axios.get('https://my-json-server.typicode.com/Zafermushtaha97/json-serve/posts').then((res) => {
    //     this.blogs = this.blogs ? this.blogs.concat(res.data) : res.data;
    //         console.log(this.blogs)
    //     // this.totalCount = res.headers['x-total-count'];
    //   })
    // },
    // }
}
</script>
<style lang="css" scoped>

</style>