<template>
    <div>
        <router-link :to="{ name: 'people.index' }">People</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
