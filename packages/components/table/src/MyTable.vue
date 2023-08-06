<script setup lang="ts">
  import { computed } from 'vue';

  import { Props } from './table';
  const props = defineProps(Props);
</script>

<template>
  <table class="dora-table">
    <tr>
      <th v-for="(t, index) in columns" :key="index">
        {{ t }}
      </th>
    </tr>
    <tr v-for="(n, i) in data" :key="i">
      <td v-for="(e, j) in columns" :key="j">
        {{ n[e] }}
      </td>
    </tr>
  </table>
</template>
