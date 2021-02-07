<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {
    name: "Heading1",
    props: ['title']
}
</script>

<style>
    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 64px;
        color: #1D233A;
        margin: 96px 0 16px; 
    }
    
</style>