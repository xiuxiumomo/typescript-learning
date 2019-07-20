<template>
  <div class="detail" id="detail">
    <div class="hd">

    </div>
    <div class="wrap">
      <div class="top-head">
        <div class="title ellipse-2">{{goodDetail.title}}</div>
        <div class="flex-box author">
          <span v-if="goodDetail.author">作者:{{goodDetail.author.loginname}}</span>
          <span>回复于:{{goodDetail.last_reply_at}}</span>
        </div>
      </div>
      <div class="content" v-html="goodDetail.content"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
@Component({})
export default class ArticleDetail extends Vue {
  id: string = "";
  @Getter("goodDetail", { namespace: "good" })
  goodDetail!: any;
  @Action("getGoodNewsDetail", { namespace: "good" })
  getGoodNewsDetail!: any;
  private async getHomeData() {
    let { id } = this;
    let res = await this.getGoodNewsDetail({ id, mdrender: false });
    if (res) {
      console.log(this.goodDetail);
    }
  }
  private onClickLeft() {
      history.go(-1)
  }
  private created() {
    let id = this.$route.params.id;
    this.id = id;
  }
  private mounted() {
    this.getHomeData();
  }
}
</script>

