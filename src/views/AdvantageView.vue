<script setup>
import { advantages } from '../common.js'
import SecondTitle from "../components/SecondTitle.vue";
</script>

<template>
    <div class="adv-wrapper">
        <SecondTitle
            chinese-title="我们的优势"
            english-title="Advantage"
        />


        <section class="adv-img">
            <img
                v-for="item in advantages"
                :key="item.url"
                :src="item.url"
                :alt="item.description" />
        </section>

    </div>
</template>

<style lang="scss">
.adv-wrapper {
    border: 2px red solid;
    margin: 100px auto 30px;

    >section.adv-img {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>