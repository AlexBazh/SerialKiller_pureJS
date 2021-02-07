<template>
    <li>
        <a href="">{{menu.title}}</a>
        
    </li>
</template>

<script>
export default {
    name: "HeaderMenuItem",
    props: {
        menu: {
            type: Object
        }
    }
}
</script>

<style scoped>
    li{
        padding: 12px 0px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        display: inline;
        margin: 0 20px;
        
    }
    li a{
        text-decoration: none;
        color: #1D233A;
    }
    li a:hover {
        color: #475FEF;
    }
</style>