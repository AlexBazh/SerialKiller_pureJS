<template>
    <ul>
        <HeaderMenuItem
            v-for="menu of menus"
            :menu="menu"
            :key="menu.id"
        />
    </ul>
</template>

<script>
import HeaderMenuItem from './HeaderMenuItem'

export default {
    name: "HeaderMenuList",
    components: {
        HeaderMenuItem
    },
    props: ['menus']
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
</style>