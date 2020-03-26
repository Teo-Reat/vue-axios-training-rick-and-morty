<template>
    <div>
        <input type="text" v-model="search" @keyup="getFilteredList" class="rounded bg-gray-200 px-4 py-2">
        <div>{{ search }}</div>
        <app-pagination :pages-count="pagesCount" :page-num="pageNum" @changePage="fetchNumPage"></app-pagination>
        <div class="text-6xl px-10 py-8 bg-red-200 border-red-400 rounded-lg" v-if="error">No results.</div>
        <div class="flex">
            <div class="flex justify-between flex-wrap">
                <app-character :character="character" v-for="(character, key) in info" :key="key"></app-character>
            </div>
        </div>
        <app-pagination :pages-count="pagesCount" :page-num="pageNum" @changePage="fetchNumPage"></app-pagination>
    </div>
</template>

<script>
    import AppCharacter from "./Character";
    import Pagination from "./Pagination";
    import axios from "axios";

    export default {
        data() {
            return {
                info: [],
                pageNum: 1,
                pagesCount: 0,
                search: '',
                error: 0,
            }
        },
        components: {
            AppCharacter,
            AppPagination: Pagination,
        },
        mounted() {
            this.getList();
            this.getPageCount();
        },
        methods: {
            getList() {
                axios.get(`https://rickandmortyapi.com/api/character/?page=${this.pageNum}`)
                    .then(response => (this.info = response.data.results));
            },
            getPageCount() {
                axios.get('https://rickandmortyapi.com/api/character/')
                    .then(response => (this.pagesCount = response.data.info.pages));
            },
            getFilteredList() {
                axios.get(`https://rickandmortyapi.com/api/character/?name=${this.search}`)
                    .then(response => (this.info = response.data.results))
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                    });
                this.$emit('filterByName');
                this.getPageSearchCount();
            },
            getPageSearchCount() {
                axios.get(`https://rickandmortyapi.com/api/character/?name=${this.search}`)
                    .then(response => (this.pagesCount = response.data.info.pages));
            },
            fetchNumPage(index) {
                this.pageNum = index + 1;
                this.getList()
            },
        }
    }
</script>