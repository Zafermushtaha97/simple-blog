<template>
    <div>
        <h1>{{pagename}}:</h1>
        <h5>{{pagedescription}}</h5>


        <div class="container">
            <div class="row">
                <div class="col col-md-8 col-sm-4">
                   <BlogPost v-for="post in posts" :key="post.id" class="mt-4" :views="post.views" 
                   :title="post.title" :date="post.date" :content="post.content" :auther="post.auther"
                   :category="post.category"/>
                </div>
                <div class="col col-md-4 col-sm-8">
                    <SideBar/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlogPost from '@/components/blog/BlogPost.vue'
import SideBar from '@/components/blog/SideBar.vue'
import jsondatapost from '../../json/date.json'


export default {
    data:function(){
        return{
            pagename:"Blog",
            pagedescription:"This page use for display info about blog",
            posts:jsondatapost

        }

        
    },
    name:"blog",
    components:{
        BlogPost,
        SideBar
    }
}
</script>