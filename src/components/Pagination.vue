<template>
    <div class="inline-flex mb-10 mt-6">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                @click="goToPage(0)">
            First
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                :disabled="pageNum <= 1"
                @click="goToPage(pageNum -2)">
            Prev
        </button>
        <button v-for="(num, key) in pagesCount"
                :key="key"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                :class="{currentPage: pageNum === key + 1}"
                @click="goToPage(key)"
                v-show="num < pageNum + 5 && num > pageNum - 5">
            {{ num }}
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                :disabled="pageNum >= pagesCount"
                @click="goToPage(pageNum)">
            Next
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                @click="goToPage(pagesCount - 1)">
            Last
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            pagesCount: {
                type: Number,
                required: true
            },
            pageNum: {
                type: Number,
                required: true
            }
        },
        methods: {
            goToPage(key) {
                this.$emit('changePage', key)
            }
        }
    }
</script>

<style scoped>
    .currentPage {
        background: #2d3748;
        color: #e2e8f0;
        cursor: default;
    }
    .currentPage:hover {
        background: #2d3748;
    }
</style>