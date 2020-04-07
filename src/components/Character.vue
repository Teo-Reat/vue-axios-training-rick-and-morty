<template>
    <div class="mt-16 mx-1 w-76 cursor-pointer"
         @mouseenter="descriptionView = true"
         @mouseleave="descriptionView = false">
        <img class="h-64 w-full object-cover rounded-lg border shadow"
             :src="character.image"
             :alt="character.name"
             :class="{isLoad:load}">
        <div class="p-2 relative">
            <div class="p-4 top-0 -mt-8 left-0 mr-4 right-0 ml-4 bg-white rounded-lg shadow absolute"
                 :class="{isLoad:load}">
                <h4 class="font-semibold text-lg mb-2 text-center text-teal-600">{{ character.name }}</h4>
                <div class="" v-show="descriptionView">
                    <p class="text-gray-600 text-base">
                        <span class="font-semibold">Species: </span>{{ character.species }}
                    </p>
                    <p class="text-gray-600 text-base">
                        <span class="font-semibold">Gender: </span>{{ character.gender }}
                    </p>
                    <p class="text-gray-600 text-base">
                        <span class="font-semibold">Status: </span>{{ character.status }}
                    </p>
                    <p class="text-teal-600 text-base mt-6 leading-tight text-right">
                        <span class="font-semibold">Location: </span>
                        <br>
                        {{ character.location.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                descriptionView: false
            }
        },
        props: {
            character: {
                type: Object,
                required: true
            },
            load: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>
    .isLoad {
        filter: blur(5px);
    }
</style>