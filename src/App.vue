<template>
    <m-layout id="app">
        <div class="bg__global"></div>
        <site-nav></site-nav>
        <keep-alive>
           <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </m-layout>
</template>

<script>
/**
     *
     */

import SiteNav from 'render/site-nav';

import Layout from './components/layout/src/layout.vue';


'use strict';

const Shop = {};

Shop.socket = null;

Shop.connect = function (host) {
  if ('WebSocket' in window) {
    Shop.socket = new WebSocket(host);
  } else if ('MozWebSocket' in window) {
    Shop.socket = new MozWebSocket(host);
  } else {
    console.log('Error: WebSocket is not supported by this browser.');
    return;
  }

  Shop.socket.onopen = function () {
    console.log('Info: WebSocket connection opened.');
  };

  Shop.socket.onclose = function (event) {
    console.log('Client notified socket has closed', event);
  };

  Shop.socket.onmessage = function (message) {
    console.log(`---${message.data}`);
  };
};

Shop.initialize = function (id) {
  console.log(window.location.host);
  if (!id) {
    id = String(`T${new Date().getTime()}`);
    console.log(`iid:${id}`);
  }
  if (window.location.protocol == 'http:') {
    Shop.connect(`ws://${window.location.host}/Diancan/ws/cart/${id}`);
  } else {
    Shop.connect(`wss://${window.location.host}/Diancan/ws/cart/${id}`);
  }
};

Shop.sendMessage = function (data) {
  if (data) {
    Shop.socket.send(data);
  }
};
export default {
  name: 'app',
  components: {
    SiteNav,
    'm-layout': Layout,
  },
};
</script>

<style lang="less">
    @import 'common/less/render.less';
</style>
