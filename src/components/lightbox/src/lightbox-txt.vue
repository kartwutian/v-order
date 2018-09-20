<template>
    <div style="display: none;">
        <slot name="top"></slot>
        <div class="m-lightbox-scroller">
            <slot name="content"></slot>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'm-lightbox-txt',
};
</script>
