<template>
    <div class="banner">
        <h3>Rating for each season and episode</h3>
        <p>Check the rating of each episode and season to understand watching this show or not</p>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
    .banner{
        background: #475FEF url(../../assets/futurama.png) no-repeat right bottom;
        border-radius: 12px;
        color: #fff;
        width: 868px;
        margin-top: 16px;
    }
    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        padding: 24px 32px 0;
        margin: 0;
    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: rgba(255, 255, 255, 0.8);
        padding: 8px 32px 24px;
        margin: 0;
    }
</style>