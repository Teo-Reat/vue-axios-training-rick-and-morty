<template>
    <div>
        <input type="text"
               v-model="params.name"
               @change="getList"
               @focus="params.page = 1"
               placeholder="Search..."
               class=" rounded bg-gray-300 px-4 py-2">
        <div class="text-6xl px-10 py-8 bg-red-200 border-red-400 rounded-lg my-4" v-if="!data">{{error}}</div>
        <template v-if="data">
            <div class="antialiased text-gray-900">
                <div class="flex xsm:justify-center sm:justify-between flex-wrap">
                    <app-character :character="character" v-for="(character, key) in data.results" :key="key"/>
                </div>
            </div>
            <app-pagination :pages-count="data.info.count" :page-num="params.page" @changePage="fetchNumPage"/>
        </template>
    </div>
</template>

<script>
    import AppCharacter from "./Character";
    import Pagination from "./Pagination";
    import axios from "axios";

    export default {
        data() {
            return {
                data: null,
                params: {
                    page: 1,
                    name: '',
                },
                error: '',
            }
        },
        components: {
            AppCharacter,
            AppPagination: Pagination,
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                axios.get('https://rickandmortyapi.com/api/character/', {params: this.params})
                    .then(response => (this.data = response.data))
                    .catch((error) => {
                        this.data = null;
                        this.error = error.response.data.error;
                    });

            },
            fetchNumPage(index) {
                this.params.page = index + 1;
                this.getList()
            },
        }
    }
</script>