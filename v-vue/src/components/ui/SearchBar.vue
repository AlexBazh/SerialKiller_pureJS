<template>
    <input :placeholder= placeholder>
</template>

<script>
export default {
    name: "SearchBar",
    props: ['placeholder']
}
</script>

<style scoped>
    input{
        width: 820px;
        padding: 20px 24px;
        border: none;
        background: #F2F2F2;
        border-radius: 12px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #A2A3A5;
    }
</style>