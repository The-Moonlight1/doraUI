<template>
  <dora-button plain type="success" @click="open2">success</dora-button>
  <dora-button plain type="warning" @click="open3">warning</dora-button>
  <dora-button plain type="info" @click="open1">info</dora-button>
  <dora-button plain type="danger" @click="open4">danger</dora-button>
  <dora-button plain @click="closeAll">closeAll</dora-button>
</template>

<script lang="ts" setup>
  import { DoraMessage } from '@dora-ui/components/message';

  const open1 = () => {
    DoraMessage('this is a message.');
  };
  const open2 = () => {
    DoraMessage({
      message: 'Congrats, this is a success message.',
      type: 'success'
    });
  };
  const open3 = () => {
    DoraMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning'
    });
  };
  const open4 = () => {
    DoraMessage.error('Oops, this is a error message.');
  };

  const closeAll = () => {
    DoraMessage.closeAll();
  };
</script>
