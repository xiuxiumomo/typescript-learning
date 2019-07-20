<template>
    <div class="layout-container">
        <div class="content-container">
            <slot></slot>
        </div>
        <TabBar v-show="isBar"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TabBar from './tabBar.vue';
    @Component({
        components: {
            TabBar
        }
    })
    export default class Layout extends Vue {
        get isBar() {
            let routerName: string = this.$route.name || '';
            let whiteNameList = ["index", "share", "job", "ask", "goods"];
            if (whiteNameList.includes(routerName)) {
                return true;
            }
            return false;
        }
    };
</script>
<style lang="less" scoped>
    .layout-container {
        height: 100vh;
        background-color: #f2f2f2;
        .content-container {
            height: calc(100vh - 45px);
            overflow-x: hidden;
            overflow-y: scroll;
        }
    }
</style>
