<template>
    <div>
        <h1>Posts</h1>
    </div>
    <ul>
        <li class="card" v-for="project in projects">
            <h2>{{ project.title }}</h2>
            <p> {{ project.content  }}</p>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return {
                projects: []
            }
        },
        methods: {
            fetchPosts() {
                axios.get('http://127.0.0.1:8000/api/posts').then( (res) => {
                    this.projects = res.data.results.data
                })
            }
        },
        created(){
            this.fetchPosts()
        }
    }
</script>

<style lang="scss" scoped>

</style>