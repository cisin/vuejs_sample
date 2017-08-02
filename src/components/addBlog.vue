<template>
    <div class="container">
         <div class="jumbotron hero-spacer centered">
            <h2>Add new blog post</h2>
            <div>
               <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" placeholder="Enter blog title here" v-model="blog.title" v-on:keydown="error = ''">
                    </div>
                   <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" rows="3" v-model="blog.content" v-on:keydown="error = ''"></textarea>
                    </div>
                    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Preview</button>
                    <button type="submit" class="btn btn-primary" v-on:click.prevent="createBlog">Submit</button>
               </form>
               <br>
               <span v-if="success" class="alert alert-success success">Thank you! your blog is added successfuly.</span>
               <span v-if="error" class="alert alert-danger error">{{error}}</span>
            </div>
        </div>
        <!--preview modal-->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
            
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h3 class="modal-title">{{blog.title}}</h3>
                </div>
                <div class="modal-body">
                <p>{{blog.content}}</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
            
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                blog: {
                    title: '',
                    content: ''
                },
                success: false,
                error: ''
            }
        },
        methods: {
            createBlog() {
                if (this.blog.title == '' || this.blog.title == null) {
                    this.error = 'Plaese enter a title!';
                } else {
                    if (this.blog.content == '' || this.blog.content == null) {
                        this.error = 'Plaese enter some content for the blog!';
                    } else {
                        this.$http.post('https://vuejs-blog-36525.firebaseio.com/posts.json', this.blog).then((data) => {
                            this.success = true;
                            this.blog.title = '';
                            this.blog.content = '';
                            setTimeout(() => {
                                this.success = false;
                            }, 2000);
                        });
                    }
                }
            }
        }
    }
</script>
<style>
    .success,.error {
        margin-left: 30%;
    }
</style>