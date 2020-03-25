<template>
    <div id="app" class="container mx-auto text-center">
        <h1 class="text-4xl font-black">Characters from "Rick and Morty"</h1>
        <character-list/>
    </div>
</template>

<script>
    import CharacterList from "./components/CharacterList";

    export default {
        components: {
            CharacterList
        }
    }
</script>

<style src="./assets/tailwind.css"/>