<script setup lang="ts">
// import '@dora-ui/theme-chalk/src/index.scss'
// import DoraButton from '@dora-ui/components/button';


</script>

<template>
    <div class="app">
        <h2>我是开发调试页面</h2>
        <DoraButton>按钮默认尺寸</DoraButton>
        <dora-button size="medium">按钮中等尺寸</dora-button>
        <dora-button size="small">按钮小尺寸</dora-button>
        <dora-button size="mini">按钮极小尺寸</dora-button>
        <dora-button size="tiny">按钮超小尺寸</dora-button>
        <br />

        <dora-button plain type="primary">朴素按钮</dora-button>
        <dora-button round type="primary">椭圆</dora-button>
        <dora-button disabled type="primary">禁止</dora-button>
        <dora-button circle type="primary">圆</dora-button>
    </div>
</template>

<style lang="less" scoped></style>