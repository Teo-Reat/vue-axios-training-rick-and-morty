<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-3 my-5 bg-gray-200 character">
        <img class="h-64 w-full object-cover" :src="character.image" :alt="character.name">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ character.name }}</div>
            <p class="text-gray-700 text-base">
                Species: {{ character.species }}
            </p>
            <p class="text-gray-700 text-base">
                Status: {{ character.status }}
            </p>
            <p class="text-gray-700 text-base">
                Location: {{ character.location.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['character']
    }
</script>

<style scoped>
    .character:last-child {
        margin-right: auto;
    }
</style>