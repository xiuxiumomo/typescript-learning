<template>
    <div id="container">
        {{msg}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'hello world'
        }
    }
}
</script>
<style lang="less" scoped>
#container{
    color: red;
}
</style>