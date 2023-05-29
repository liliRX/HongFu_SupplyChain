<script setup>
import ServiceList from '../components/ServiceList.vue'
import { services } from "../common.js";
import SecondTitle from "../components/SecondTitle.vue";
</script>

<template>
    <div class="service-container">
        <SecondTitle chinese-title="核心服务" english-title="Service"/>
        <div class="service-list">
            <ServiceList v-for="item in services" :key="item.url" :data="item" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.service-container {
    margin-top: 80px;

    >.text {
        text-align: center;

        >p {
            color: #0B83DB;
        }
    }

    >.service-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
    }
}
</style>