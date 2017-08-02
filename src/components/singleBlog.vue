<template>
    <div class="container">
        <div class="jumbotron hero-spacer">
            <h1>{{blog.title}}</h1>
            <p>{{blog.content}}</p>
            <p><router-link to="/" class="btn btn-primary btn-large">Goto Home!</router-link>
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            this.$http.get('https://vuejs-blog-36525.firebaseio.com/posts/'+this.id+'.json').then((data) => {
                this.blog = data.body;
            });
        }
    }
</script>