<template>
    <div class="m-dialog-all-white-mask">
        <div class="m-preload">
            <div class="m-preload-icon"></div>
            <div class="m-preload-txt" v-html="title"></div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    title: String,
  },
};
</script>
