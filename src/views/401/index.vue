<template>
  <div class="flex-center forbidden-wrap">
    <div class="forbidden">
      <img src="@/assets/img/401.svg">
      <p>对不起，您无权限访问！请联系管理员！</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'forbidden',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.forbidden-wrap {
  .forbidden {
    padding-top: 50px;
    text-align: center;
    p {
      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
