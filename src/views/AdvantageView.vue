<script>

</script>

<template>
    <div class="adv-wrapper">
        <h2>我们的优势</h2>
        <p>—— Advantage ——</p>
        <section>
            <div class="adv-img"></div>
            <div class="adv-img"></div>
            <div class="adv-img"></div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.adv-wrapper {
    margin: 50px auto 30px auto;

    >p {
        color: #0B83DB;
    }

    >section {
        border: red 2px solid;
        width: 60%;
        display: flex;
        background: transparent;
        justify-content: space-between;

        padding: 20px 0 40px 0;

        >.adv-img {
            box-shadow: 0 1px 4px 0 rgb(165, 166, 167);
            width: calc(33.3% - 20px);
            height: 15rem;

            &+& {
                margin-right: 10px;
            }
        }
    }
}</style>