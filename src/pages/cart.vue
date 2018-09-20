<template>
    <ul ref="cart" class="cart">
        <div class="cart__header flex">
            <span class="cart__header-left vfont icon-back" @click="back">
                购物车
            </span>
            <div class="cart__header-right flex-item">
                <span>合计:</span>
                <span class="cart__total">￥ {{totalMoney}} 元</span>
            </div>
        </div>
        <div class="cart__tip" v-if="isShowTip" >
            <router-link class="cart__tip-txt" to="/menu">去点餐</router-link>
        </div>
        <li class="cart__group" v-for="(group,key1) in cart">
            <div class="group__title-wrap">
                <span class="group__title">{{group.title}}</span>
            </div>
            <div class="cart__item flex" v-for="(item,key2) in group.items">
                <img class="cart__item-img" :src="item.smallImg" @click="openDetail(item)">
                <div class="cart__item-right flex-item">
                    <div class="cart__item-name">{{ item.name }}</div>
                    <div class="cart__item-others flex">
                        <div class="cart__item-price">￥ {{ item.discountPrice }}</div>
                        <div class="cart__item-num">
                            <span class="m-spinner">
                                <a href="javascript:;" ref="minus" @click="substract(key1,key2,item)" class="vfont icon-subtract"></a>
                                <input type="number" ref="numInput" class="spinner-input"  v-model="item.num" disabled placeholder=""/>
                                <a href="javascript:;" ref="add" @click="plus(key1,key2,item)" class="vfont icon-plus"></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <div class="cart__btn-submit flex-item" v-tapmode @click="submit" >下单</div>

    </ul>

</template>

<script>
export default {
  name: 'o-cart',
  data() {
    return {
    };
  },
  created() {
    console.log(this.cart);
  },
  activated() {
    this.$store.commit('UPDATEISSHOWBTNCART');
  },
  deactivated() {
    this.$store.commit('UPDATEISSHOWBTNCART');
  },
  computed: {
    isShowTip() {
      return !this.cart.length;
    },
    cart() {
      return this.$store.getters.cart;
    },
    totalMoney() {
      let total = 0;
      for (const key1 in this.cart) {
        for (const key2 in this.cart[key1].items) {
          total += this.cart[key1].items[key2].num * this.cart[key1].items[key2].discountPrice;
        }
      }
      return total;
    },
  },
  methods: {
    back() {
      history.go(-1);
    },
    openDetail(item) {
      this.$store.commit('UPDATAINDEX', item.pos);
      this.$router.push({ path: `/detail/${item.pos}` });
    },
    substract(key1, key2, item) {
      if (item.num === 1) {
        this.deleteItem(key1, key2, item);
        return;
      }
      this.$store.commit('SUBSTRACTTOCART', { key1, key2 });
    },
    plus(key1, key2, item) {
      this.$store.commit('PLUSTOCART', { key1, key2 });
    },
    deleteItem(key1, key2, item) {
      this.$dialog.confirm({
        mes: `确认不要${item.name}吗?`,
        opts: () => {
          this.$store.commit('DELETEITEMINCART', { key1, key2 });
          this.$dialog.notify({
            mes: `${item.name}已取消`,
            timeout: 2000,
          });
        },
      });
    },
    submit() {
      this.$store.commit('GENERATEBILL', {
        totalMoney: this.totalMoney,
        cartInfo: this.cart,
      });
    },
  },
  watch: {
  },
};
</script>
<style lang="less">

</style>

