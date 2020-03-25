<template>
    <div id="app" class="container mx-auto text-center">
        <h1 class="text-4xl font-black">Characters from "Rick and Morty"</h1>
        <axios-request></axios-request>
    </div>
</template>

<script>
    import AxiosRequest from "./components/AxiosRequest";

    export default {
        components: {
            axiosRequest: AxiosRequest
        }
    }
</script>

<style src="./assets/tailwind.css">