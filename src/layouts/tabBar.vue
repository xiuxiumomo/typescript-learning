<template>
    <div class="tab-bar">
        <div
            v-for="(item, idx) in tabs"
            :key="idx"
            :class="['bar-item', tabBar == item.name ? 'active':'']"
            @click="clickHandler(item.name)"
        >
            <i :class="['iconfont', item.icon]"></i>
            <div class="label">{{item.label}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    export default class TabBar extends Vue  {
        tabs: any[] =  [
                    {
                        label: "精华",
                        icon: "icon-good",
                        name: "goods"
                    },
                    {
                        label: "问答",
                        icon: "icon-ask",
                        name: "ask"
                    },
                    {
                        label: "分享",
                        icon: "icon-share",
                        name: "share"
                    },
                    {
                        label: "职位",
                        icon: "icon-job",
                        name: "job"
                    },

                ]
        get tabBar() {
            return this.$route.name;
        }
        public clickHandler( routerName: string ): void {
           this.$router.push({ name: routerName });
        }
    };
</script>
<style lang="less" scoped>
    .tab-bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 0.9rem;
        border-top: 1px solid #f4f4f4;
        cursor: pointer;
        background-color: #ffffff;
        .bar-item {
            flex: 1;
            font-size: 0.28rem;
            text-align: center;
            .iconfont {
                font-size: .4rem;
            }
        }
        .bar-item.active {
            color: red;
        }
    }
</style>
