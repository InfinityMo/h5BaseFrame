<template>
  <div class="page">
    <div class="stricky">
      <van-dropdown-menu active-color="#1989fa"
                         class="dropdown">
        <van-dropdown-item v-model="selectShop"
                           :options="shops" />
      </van-dropdown-menu>
      <van-cell-group class="cell-group">
        <van-cell title="检查时间"
                  :value="linkPamams.checkTime" />
        <van-cell title="检查链接数"
                  :value="linkPamams.linkNum" />
        <van-cell title="敏感词链接数"
                  :value="linkPamams.sensitiveWords" />
      </van-cell-group>
      <ul class="flex-between table-title">
        <li>标题</li>
        <li>敏感词</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="pull-list">
      <van-pull-refresh v-model="refreshing"
                        head-height=60
                        pulling-text="下拉刷新"
                        @refresh="onRefresh">
        <template #loosing>
          <img class="doge"
               src="@/assets/img/logo.png" />
        </template>
        <template #loading>
          <img class="doge"
               src="@/assets/img/logo.svg" />
        </template>
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad">
          <ul class="list-wrap"
              ref="listBox">
            <li v-for="item in list"
                :key="item.id"
                @click="toTaobao(item.link)"
                class="flex-between">
              <div class="item text-left "
                   v-html="item.title"></div>
              <div class="item text-center warn-text">{{item.words.join('、')}}</div>
              <a class="item text-right"><span>查看</span></a>
            </li>
          </ul>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem, Cell, CellGroup, List, Dialog, PullRefresh } from 'vant'
export default {
  name: 'Home',
  components: {
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [List.name]: List,
    [Dialog.name]: Dialog,
    [PullRefresh.name]: PullRefresh
  },
  data () {
    return {
      selectShop: '',
      shops: [
        {
          value: 1,
          text: '悦诗风吟官方旗舰店'
        },
        {
          value: 2,
          text: '珂润官方旗舰店'
        },
        {
          value: 3,
          text: '花王官方旗舰店'
        }],
      linkPamams: {
        checkTime: '15分钟前',
        linkNum: 37,
        sensitiveWords: 40
      },
      list: [
        {
          id: 1,
          title: '1-MINON蜜浓全身用美白洗发沐浴露控油 清爽型 120ml/450ml  控油清爽不粘腻 ',
          words: ['美白', '控油'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.45.177c2e91wZTSzq&id=599324556816&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15'
        },
        {
          id: 2,
          title: '2-MINON蜜浓氨基酸滋润防晒保湿 水油平衡清透调肤水150ml 改善肌肤粗糙',
          words: ['防晒'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.48.177c2e91wZTSzq&id=599326360470&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15&skuId=4367992478464'
        },
        {
          id: 3,
          title: '3-MINON蜜浓氨基酸滋润保湿 柔和洁面泡沫 150ml 清洁毛孔 实力控油 ',
          words: ['控油', '保湿'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.60.177c2e91wZTSzq&id=599468192387&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15&skuId=4197482176546'
        }, {
          id: 4,
          title: '4-MINON蜜浓全身用美白洗发沐浴露控油 清爽型 120ml/450ml  控油清爽不粘腻 ',
          words: ['美白', '控油'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.45.177c2e91wZTSzq&id=599324556816&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15'
        },
        {
          id: 5,
          title: '5-MINON蜜浓氨基酸滋润防晒保湿 水油平衡清透调肤水150ml 改善肌肤粗糙',
          words: ['防晒'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.48.177c2e91wZTSzq&id=599326360470&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15&skuId=4367992478464'
        },
        {
          id: 6,
          title: '6-MINON蜜浓氨基酸滋润保湿 柔和洁面泡沫 150ml 清洁毛孔 实力控油 ',
          words: ['控油', '保湿'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.60.177c2e91wZTSzq&id=599468192387&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15&skuId=4197482176546'
        }, {
          id: 7,
          title: '7-MINON蜜浓氨基酸滋润防晒保湿 水油平衡清透调肤水150ml 改善肌肤粗糙',
          words: ['防晒'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.48.177c2e91wZTSzq&id=599326360470&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15&skuId=4367992478464'
        },
        {
          id: 8,
          title: '8-MINON蜜浓氨基酸滋润保湿 柔和洁面泡沫 150ml 清洁毛孔 实力控油 ',
          words: ['控油', '保湿'],
          link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.60.177c2e91wZTSzq&id=599468192387&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15&skuId=4197482176546'
        }
      ],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  created () {
    this.list.map((item, index) => {
      const arr = item.words.join('|')
      const reg = new RegExp(arr, 'g')
      this.list[index].title = item.title.replace(reg, ($1) => {
        return `<span style="color:red;font-weight:bold;">${$1}</span>`
      })
    })
  },
  mounted () {
    // this.$toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    //   loadingType: 'spinner'
    // })
    // this.$toast.show()
    // setTimeout(() => {
    //   this.$toast.hide()
    // }, 200)
    // alert(sessionStorage.getItem('userCode'))
    // this.container = this.$refs.container
    this.selectShop = 3
    // this.testRequest()
  },
  methods: {
    testRequest () {
      this.$request.get('https://randomuser.me/api').then(res => {
        this.linkPamams.checkTime = res.info.results
        this.linkPamams.linkNum = res.info.version
        this.linkPamams.sensitiveWords = res.info.seed
      })
    },
    toTaobao (link) {
      const selfLink = link
      const schemaLink = link.replace(/^https/i, 'taobao')
      const reg = /mobi/i
      if (reg.test(window.navigator.userAgent.toLowerCase())) {
        // 直接唤起淘宝
        this.$dd.biz.util.openLink({
          url: schemaLink, // 页面名称
          onFail: function () {
            // 如果直接唤起淘宝失败，则直接打开链接
            this.$dd.biz.util.openLink({
              url: selfLink
            })
          }
        })
      } else {
        this.$dd.biz.util.openLink({
          url: selfLink
        })
        // window.open(selfLink)
      }
    },
    onLoad () {
      // this.loading = false
      // this.finished = true
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          // this.list = [...this.list, ...this.list]
          this.list.push({
            id: this.list[this.list.length - 1].id + 1,
            title: `${this.list[this.list.length - 1].id + 1}-MINON蜜浓氨基酸滋润防晒保湿 水油平衡清透调肤水150ml 改善肌肤粗糙`,
            words: ['防晒'],
            link: 'https://detail.tmall.hk/hk/item.htm?spm=a1z10.3-b-s.w4011-22052267827.48.177c2e91wZTSzq&id=599326360470&rn=2c77dff55c813bcad2834457d2ede885&abbucket=15&skuId=4367992478464'
          })
        }
        // 加载状态结束
        this.loading = false
        this.refreshing = false
        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
