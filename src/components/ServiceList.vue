<template>
    <div class="wrapper">
        <img :src="data.url" alt=""/>
        <div> {{ data.type }} </div>
    </div>
</template>

<script setup>
const { data } = defineProps(['data']);


</script>

<style lang="scss">
.wrapper {
    // border: blue solid 2px;
    border-radius: 8px;
    overflow: hidden;
    >img {
        border: none;
        width: 100%;
        vertical-align: middle; 
    }
    >div {
        width: 100%;
        height: 30%;
        font-size: 28px;
        line-height: 3;
        font-weight: bold;
        letter-spacing: 3px;
        text-align: center;
        color: white;
        background-color: rgb(8, 147, 240);
    }
}
</style>