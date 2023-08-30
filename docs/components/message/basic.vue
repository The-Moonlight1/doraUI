<template>
  <dora-button :plain="true" @click="open">Show message</dora-button>
  <dora-button :plain="true" @click="openVn">VNode</dora-button>
</template>

<script lang="ts" setup>
  import { h } from 'vue';
  import { DoraMessage } from '@dora-ui/components/message';
  const open = () => {
    DoraMessage('this is a message.');
  };

  const openVn = () => {
    DoraMessage({
      message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')])
    });
  };
</script>
