<template>
    <div class="home">

        <h1>ask</h1>
        <show-box :msg="title" @clickFn="getClick"></show-box>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State, Action, Getter } from "vuex-class";
    import showBox from '@/components/showBox/index.vue';
    @Component({
        components: {
            showBox
        }
    })
    export default class Home extends Vue {
        title: string = 'aaa';
        @Getter("homeList", { namespace: 'home'})
        homeList!: any;
        @Action('getUserList', { namespace: 'home' }) getUserList!: any;
        private async getUserListFn() {
            let res = await this.getUserList();
            if (res.code === 200) {
                console.log(this.homeList)
            }
        }
        private mounted() {
            // this.getUserListFn();
        }
        private getClick( params= {} ) {
            console.log(params)
        }

    }
</script>

