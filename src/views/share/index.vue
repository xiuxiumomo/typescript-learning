<template>
  <div class="my">
    <div class="top"></div>
    <div class="s-box" ref="wrapper">
      <ul>
        <li v-for="(item,index) in dataArr" :key="index">{{item.name}}</li>
        <div v-if="moreLoading">加载中</div>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import BScroll from "better-scroll";
@Component({})
export default class Share extends Vue {
  scroll: any
  moreLoading: boolean = false;
  dataArr = [
    {
      id: 1,
      name: "aa"
    },
    {
      id: 2,
      name: "bb-2"
    },
    {
      id: 3,
      name: "bb-3"
    },
    {
      id: 4,
      name: "bb-4"
    },
    {
      id: 5,
      name: "bb-5"
    },
     {
      id: 6,
      name: "bb-6"
    },
     {
      id: 7,
      name: "bb-7"
    },
     {
      id: 8,
      name: "bb-8"
    },
     {
      id: 9,
      name: "bb-9"
    },
     {
      id: 10,
      name: "bb-10"
    },
     {
      id: 11,
      name: "bb-11"
    },
     {
      id: 12,
      name: "bb-12"
    },
     {
      id: 13,
      name: "bb-13"
    },
     {
      id: 14,
      name: "bb-14"
    },
     {
      id: 15,
      name: "bb-15"
    }
  ]
  private initScroll() {
    let wrapper: any = this.$refs.wrapper
    this.scroll = new BScroll(wrapper, {

    })
    this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.moreLoading = true;
        }
    })

}
private mounted() {
    this.initScroll()
}
}
</script>
<style lang="less">
li{
    height: 50px;
    margin-bottom: 20px;
    background-color: #ccc;
}
.top {
  height: 200px;
  background-color: #666;
}
.s-box{
    margin-top: 30px;
    overflow: hidden;
    height: 300px;
}
</style>


