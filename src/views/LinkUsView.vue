<script>

</script>

<template>
    <div class="link_container">
        <div class="flex-box">
            <div class="text">
                <h2>联系我们</h2>
                <ol>
                    <li>
                        <i class="iconfont icon-post"></i>
                        <span>邮箱：</span>
                    </li>
                    <li>
                        <i class="iconfont icon-map"></i>
                        <span>公司地址：</span>
                    </li>
                    <li>
                        <i class="iconfont icon-tel"></i>
                        <span>联系电话：</span>
                    </li>
                </ol>
            </div>
            <div class="map-img">
                <img src="../assets/img/map.png" alt="公司地址图">
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
$color: white;

.link_container {
    border: red 2px solid;
    background-color: green;
    color: $color;
    padding: 30px 100px 20px 100px;

    >div.flex-box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 400px;
            border: red solid 2px;
        }

        ol {
            display: flex;
            flex-direction: column;
            // vertical-align: baseline;
            align-self: center;

            li {
                .iconfont {
                    font-size: 32px;

                }
            }

        }

    }

    >h2 {
        color: $color;
    }
}</style>