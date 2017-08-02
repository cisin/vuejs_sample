<template>
    <!-- Page Content -->
    <div class="container">

        <!-- Jumbotron Header -->
        <header class="jumbotron hero-spacer">
            <h1>A Warm Welcome to Yrblogs!</h1>
            <p>One could not determine the niche of the blog by simply looking at Dumb Little Man. But one could easily determine by looking at its tagline “Tips for Life”.</p>
            <p><router-link to="/add" class="btn btn-primary btn-large">Add new blog!</router-link>
            </p>
        </header>

        <hr>

        <!-- Title -->
        <div class="row">
            <div class="col-lg-12">
                <h3>Latest Blogs</h3>
            </div>
        </div>
        <!-- /.row -->

        <!-- Page Features -->
        <div class="row text-center">

            <div class="col-md-3 col-sm-6 hero-feature" v-for="blog in blogs">
                <div class="thumbnail">
                    <!--<img src="http://placehold.it/800x500" alt="">-->
                    <div class="caption">
                        <h3>{{blog.title | title-snippet}}</h3>
                        <p>{{blog.content | snippet}}</p>
                        <div class="read-more">
                            <p>
                                <router-link v-bind:to="'/blog/'+blog.id" class="btn btn-primary">Read More!</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; ......</p>
                </div>
            </div>
        </footer>

    </div>
    <!-- /.container -->
</template>

<script>
    export default {
        data() {
            return {
                blogs: []
            }
        },
        created() {
            this.$http.get('https://vuejs-blog-36525.firebaseio.com/posts.json').then((data) => {
                return data.json();
            }).then((data)=>{
                var allBlogs = [];
                for(let key in data){
                    data[key].id = key;
                    allBlogs.push(data[key]);
                }
                this.blogs = allBlogs;
            });
        },
        filters: {
            'title-snippet': (value) => {
                return value.slice(0, 20);
            }
        }
    }
</script>
<style>
.read-more{
    margin:0 auto;
}
.caption{
    height:200px;
}
.hero-feature{
    width:30%;
}
</style>