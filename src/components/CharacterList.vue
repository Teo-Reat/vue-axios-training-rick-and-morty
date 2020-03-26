<template>
    <div>
        <app-pagination :pages-count="pagesCount" :page-num="pageNum" @changePage="fetchNumPage"></app-pagination>
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
                pagesCount: 0
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
            fetchNumPage(index) {
                this.pageNum = index + 1;
                this.getList()
            }
        }
    }
</script>