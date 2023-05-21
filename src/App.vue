<script setup>
import HeaderView from './views/HeaderView.vue';
import SwiperSlide from './views/SwiperSlide.vue';
import AboutUsView from './views/AboutUsView.vue';
import ServiceView from './views/ServiceView.vue';
import AdvantageView from './views/AdvantageView.vue';
import LinkUsView from './views/LinkUsView.vue';
import FooterView from './views/FooterView.vue';

</script>

<template>
    <div class="layout">
        <HeaderView></HeaderView>
        <SwiperSlide></SwiperSlide>
        <div class="setmargin">
            <AboutUsView></AboutUsView>
            <ServiceView />
            <AdvantageView />
        </div>
        <LinkUsView />
        <FooterView/>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    padding: 0;
    >.setmargin {
        margin: 0 100px;
    }
}
</style>
