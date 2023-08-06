<script setup lang="ts">
  const entityIcons = [
    { name: 'shang2' },
    { name: 'xia2' },
    { name: 'zuo3' },
    { name: 'you3' },
    { name: 'zuo5' },
    { name: 'you5' },
    { name: 'xia4' },
    { name: 'shang4' },
    { name: 'quyutu' },
    { name: 'dianzhuangtu' },
    { name: 'aixin' }
  ];
</script>

<template>
  <ul class="demo-icon-list">
    <li class="demo-icon-item" v-for="icon in entityIcons" :key="icon.name">
      <DoraIcon :name="icon.name"></DoraIcon>
      <span>{{ icon.name }}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      flex-basis: 110px;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border: 1px solid #eee;
      span {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
  .vp-doc li + li {
    margin: 0;
  }
</style>
