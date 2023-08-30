<template>
  <dora-button :plain="true" @click="open1">message</dora-button>
  <dora-button :plain="true" @click="open2">success</dora-button>
  <dora-button :plain="true" @click="open3">warning</dora-button>
  <dora-button :plain="true" @click="open4">error</dora-button>
</template>

<script lang="ts" setup>
  import { DoraMessage } from '@dora-ui/components/message';

  const open1 = () => {
    DoraMessage({
      showClose: true,
      message: 'This is a message.'
    });
  };
  const open2 = () => {
    DoraMessage({
      showClose: true,
      message: 'Congrats, this is a success message.',
      type: 'success'
    });
  };
  const open3 = () => {
    DoraMessage({
      showClose: true,
      message: 'Warning, this is a warning message.',
      type: 'warning'
    });
  };
  const open4 = () => {
    DoraMessage({
      showClose: true,
      message: 'Oops, this is a error message.',
      type: 'error'
    });
  };
</script>
