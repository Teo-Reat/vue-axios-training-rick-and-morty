<template>
    <div>
        <div class="mt-12">
            <input type="text"
                   v-model="params.name"
                   @keydown.enter="getList"
                   @focus="params.page = 1"
                   placeholder="Enter character name here..."
                   class="rounded-l bg-teal-300 px-4 py-2 w-76">
            <button class="bg-teal-300 hover:bg-teal-400 text-teal-800 font-bold py-2 px-4 rounded-r"
                    @click="getList">Search
            </button>
        </div>
        <div class="text-6xl px-10 py-8 bg-red-200 border-red-400 rounded-lg my-4" v-if="!data">{{error}}</div>
        <template v-if="data">
            <div class="antialiased text-gray-900">
                <div class="flex xsm:justify-center sm:justify-between flex-wrap">
                    <app-character :character="character" v-for="character in data.results" :key="character.id"
                                   :load="load"/>
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
                load: false
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
                this.load = true;
                axios.get('https://rickandmortyapi.com/api/character/', {params: this.params})
                    .then(response => (this.data = response.data))
                    .catch((error) => {
                        this.data = null;
                        this.error = error.response.data.error;
                    })
                    .finally(() => setTimeout(() => this.load = false, 5000));

            },
            fetchNumPage(index) {
                this.params.page = index + 1;
                this.getList()
            },
        }
    }
</script>