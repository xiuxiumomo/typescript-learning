<template>
  <div class="hello">
      {{msg}}
      <button @click="btnClick">点击</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class ShowBox extends Vue {
    @Prop() private msg!: string;
    @Emit('clickFn') clicked(params = {}) { return };
    btnClick() {
        this.clicked({ name: 'lee' })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
