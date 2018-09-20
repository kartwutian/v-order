<template>
    <m-bscroll @scroll="scroll"
        :listenScroll="listenScroll"
        :probeType="probeType"
        :data="data"
        ref="contacts">
        <li v-for="group in data" class="menu__group" ref="contactsGroup">
            <h2 class="menu__group-title">{{group.title}}</h2>
            <ul class="menu__group-list">
                <li @click="openDetail(item)" v-for="item in group.items" class="menu__list-item">
                    <m-lazyload class="menu__item-img" :data-src="item.originImg" bg-img></m-lazyload>
                    <span class="menu__item-desc">{{item.name}}</span>
                </li>
            </ul>
        </li>
        <div class="menu__shortcut" slot="out" @touchstart.stop.prevent="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove" @touchend.stop>
            <ul>
                <li v-for="(item, index) in shortcutList" :data-index="index" class="menu__shortcut-item"  :class="{'current': currentIndex===index}" ref="shortcutItems">{{item}}
                </li>
            </ul>

        </div>
        <div class="menu__nav" ref="contactsNav" slot="out" v-show="fixedTitle">
            <div class="menu__fixed-title">{{fixedTitle}} </div>
        </div>
    </m-bscroll>
</template>

<script type="text/babel">


export default {
  name: 'menu-list',
  data() {
    return {
      scrollY: -1,
      currentIndex: 0,
      diff: -1,
    };
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
    this.touch = {};
    this.listHeight = [];
  },
  mounted() {
    setTimeout(() => {
      this.TITLE_HEIGHT = this.$refs.contactsNav.offsetHeight;
      this.ANCHOR_HEIGHT = this.$refs.shortcutItems[0].offsetHeight;
      this._calculateHeight();
    }, 20);
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  computed: {
    shortcutList() {
      return this.data.map(group => group.title.substr(0, 1));
    },
    fixedTitle() {
      if (this.scrollY > 0) {
        return '';
      }
      return this.data[this.currentIndex] ? this.data[this.currentIndex].title : '';
    },
  },
  methods: {
    scroll(pos) {
      this.scrollY = pos.y;
    },
    onShortcutTouchStart(e) {
      const anchorIndex = $utils.getData(e.target, 'index');
      const firstTouch = e.touches[0];
      this.touch.y1 = firstTouch.pageY;
      this.touch.anchorIndex = anchorIndex;

      this._scrollTo(anchorIndex);
    },
    onShortcutTouchMove(e) {
      const firstTouch = e.touches[0];
      this.touch.y2 = firstTouch.pageY;
      const delta = (this.touch.y2 - this.touch.y1) / this.ANCHOR_HEIGHT | 0;
      console.log(delta);
      const anchorIndex = parseInt(this.touch.anchorIndex) + delta;
      console.log(anchorIndex);
      this._scrollTo(anchorIndex);
    },
    _scrollTo(index) {
      if (!index && index !== 0) {
        return;
      }
      if (index < 0) {
        index = 0;
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2;
      }
      this.scrollY = -this.listHeight[index];
      this.$refs.contacts.scrollToElement(this.$refs.contactsGroup[index], 0);
    },
    _calculateHeight() {
      this.listHeight = [];
      const list = this.$refs.contactsGroup;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    openDetail(item) {
      console.log(item);
    },
  },
  watch: {
    data() {
      setTimeout(() => {
        this._calculateHeight();
      }, 20);
    },
    scrollY(newY) {
      const listHeight = this.listHeight;
      // 当滚动到顶部，newY>0
      if (newY > 0) {
        this.currentIndex = 0;
        return;
      }
      // 在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        const height1 = listHeight[i];
        const height2 = listHeight[i + 1];
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i;
          this.diff = height2 + newY;
          return;
        }
      }
      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2;
    },
    diff(newVal) {
      const fixedTop = (newVal > 0 && newVal < this.TITLE_HEIGHT) ? newVal - this.TITLE_HEIGHT : 0;
      if (this.fixedTop === fixedTop) {
        return;
      }
      this.fixedTop = fixedTop;
      this.$refs.contactsNav.style.transform = `translate3d(0,${fixedTop}px,0)`;
    },
  },
};

</script>

<style lang="less">

</style>
