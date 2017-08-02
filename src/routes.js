import ShowBlogs from './components/showBlog.vue';
import AddBlog from './components/addBlog.vue';
import SingleBlog from './components/singleBlog.vue';
import About from './components/about.vue';
import Contact from './components/contact.vue';

export default [
    {path:'/',component:ShowBlogs},
    {path:'/add',component:AddBlog},
    {path:'/blog/:id',component:SingleBlog},
    {path:'/about',component:About},
    {path:'/contact',component:Contact}
]