<template>
    <div>
        Character page
        {{ datala }}
        {{ link.params }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en', q: 100
                    },
                    hash: '#data'
                }
            }
        }
    }
</script>

<style scoped>

</style>