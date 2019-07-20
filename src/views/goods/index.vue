<template>
  <div id="goods" ref="goods">
    <div class="slide-wrap">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in imgArr" :key="index" class="banner-item">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="wrap">
      <van-skeleton title avatar :row="10" :loading="loading">
        <div class="list-box" id="list-box">
          <div
            class="item flex-box"
            v-for="(item,index) in goodList"
            :key="index"
            @click="goDetail(item)"
          >
            <div class="left-item flex-box">
              <div class="title ellipse-2">{{item.title}}</div>
              <div class="msg">
                <span>{{item.tab}}</span>
                <span>回复日期: {{item.last_reply_at}}</span>
              </div>
            </div>
            <div class="right-item">
              <img :src="item.author.avatar_url" />
            </div>
          </div>
          <div v-if="finished">没有更多了...</div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>
<script lang="ts">
interface Params {
  page?: number;
  limit?: number;
}
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { throttle } from "@/utils/index";
import { Toast } from "vant";
@Component({})
export default class Good extends Vue {
  loading: boolean = false;
  finished: boolean = false;
  timer: any;
  params = {
    page: 1,
    limit: 10
  };
  imgArr: any[] = [
    require("@/assets/img/good/2.jpg"),
    require("@/assets/img/good/3.jpg"),
    require("@/assets/img/good/4.jpg")
  ];
  @Getter("goodList", { namespace: "good" })
  goodList!: any;
  @Action("getGoodNewsList", { namespace: "good" })
  getGoodNewsList!: any;
  private async newsListFn(params: Params) {
    this.showToast();
    let res = await this.getGoodNewsList(params);
    if (res.success) {
      this.hideToast();
    }
  }
  private showToast() {
    console.log("加载中...");
  }
  private hideToast() {
    console.log("加载介绍...");
  }
  private loadMore() {
    let { page } = this.params;
    if (page < 5) {
      page += 1;
    } else {
      this.finished = true;
      return false;
    }
    this.params.page = page;
    this.params.limit = page * 10;
    this.newsListFn(this.params);
  }

  private isBottom() {
    if (this.goodList.length < 10) {
      return;
    }
    let dom: any = this.$refs.goods;
    let scrollHeight = dom.scrollHeight;
    let winHeight = dom.clientHeight;
    let scrollTop = dom.scrollTop;
    if (scrollTop + winHeight + 50 >= scrollHeight) {
      this.loadMore();
    }
  }
  private goDetail(item: any) {
    let { id } = item;
    this.$router.push({
      path: `/detail/${id}`
    });
  }
  private mounted() {
    let params = this.params;
    this.newsListFn(params);
    let dom: any = this.$refs.goods;
    dom.addEventListener("scroll", throttle(this.isBottom, 1000));
  }
}
</script>

