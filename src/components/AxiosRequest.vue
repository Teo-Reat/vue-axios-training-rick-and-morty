<template>
    <div class="flex">
        <button @click="fetchPrevPage" class="bg-gray-200 rounded-lg w-64 mr-3 shadow" :disabled="pageNum < 2"></button>
        <div class="flex justify-between flex-wrap">
            <app-character :character="character" v-for="(character, key) in info" :key="key"></app-character>
        </div>
        <button @click="fetchNextPage" class="bg-gray-200 w-64 ml-3 rounded-lg shadow"></button>
    </div>
</template>

<script>
    import Character from "./Character";

    export default {
        data() {
            return {
                info: '',
                pageNum: 1,
            }
        },
        components: {
            appCharacter: Character
        },
        beforeCreate() {
            const axios = require('axios').default;
            axios.get('https://rickandmortyapi.com/api/character/?page=1')
                .then(response => (this.info = response.data.results))
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },
        methods: {
            fetchNextPage() {
                this.pageNum++;
                const axios = require('axios').default;
                axios.get('https://rickandmortyapi.com/api/character/?page=' + this.pageNum)
                    .then(response => (this.info = response.data.results))
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            },
            fetchPrevPage() {
                this.pageNum--;
                const axios = require('axios').default;
                axios.get('https://rickandmortyapi.com/api/character/?page=' + this.pageNum)
                    .then(response => (this.info = response.data.results))
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            },
        }
    }
</script>

<style scoped></style>