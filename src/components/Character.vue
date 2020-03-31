<template>
    <div class="bg-white border rounded-lg overflow-hidden mt-3">
        <img class="h-64 w-full object-cover" :src="character.image" :alt="character.name">
        <div class="p-6">
            <h4 class="font-semibold text-lg mb-2 truncate">{{ character.name }}</h4>
            <p class="text-gray-600 text-base">
                <span class="font-semibold">Species: </span>{{ character.species }}
            </p>
            <p class="text-gray-600 text-base">
                <span class="font-semibold">Status: </span>{{ character.status }}
            </p>
            <p class="text-teal-600 text-base mt-6 leading-tight">
                <span class="font-semibold">Location: </span>
                <br>
                {{ character.location.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            character: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>