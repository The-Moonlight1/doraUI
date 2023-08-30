<template>
  <dora-button :plain="true" @click="openHTML">Use HTML String</dora-button>
</template>

<script lang="ts" setup>
  import { DoraMessage } from '@dora-ui/components/message';

  const openHTML = () => {
    DoraMessage({
      dangerouslyUseHTMLString: true,
      message: '<strong>This is <i>HTML</i> string</strong>'
    });
  };
</script>
