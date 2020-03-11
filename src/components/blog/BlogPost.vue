<template>
    <div class="post text-left">
        <div class="post-title">{{title}}</div>
        <span class="post-date">{{date}}</span>
        <p class="post-content"> {{content | shorten}}</p>
        <span class="post-views">{{views}} views</span>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-auther">by:{{auther}}</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{category}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["views","title","date","content","auther","category"],
    name:"BlogPost"
}
</script>

<style lang="scss" scoped>
.post{
    box-shadow: 0 0 10px #dddddd;
    padding: 18px;
    position: relative;
    .post-views{
        position: absolute;
        top: 7px;
        right: 7px;
        border: 1px solid darkgray;
       font-size: 12px;
        border-radius: 6px;
        padding: 3px;
        background-color: #4e4e61;
        color: whitesmoke;
    }
    .post-title{
            font-weight: bold;
        font-size: 22px;
        color: #677579;
    }
    .post-date{
        color: #677579db;
        padding-top: 4px;
        display: block;
        font-size: 15px
    }
    .post-content{
        line-height: 1.7;
        color: #171e21;
    }
    .post-auther{
        background-color: #75a0c1;
        padding: 7px;
        border-radius: 6px;
        color: whitesmoke;
    }
    .post-category{
        background-color: #8eaf70;
        padding: 6px;
        color: whitesmoke;
        border-radius: 6px;
    }
}
</style>