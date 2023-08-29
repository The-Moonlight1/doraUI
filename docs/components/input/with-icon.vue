<template>
  <div class="demo-input-suffix">
    <div class="demo-row">
      <span class="demo-row-label">attributes</span>
      <dora-input v-model="input1" class="w-50 m-2" placeholder="Pick a date" suffix-icon="calendar" />
      <dora-input v-model="input2" class="w-50 m-2" placeholder="Type something" prefix-icon="search" />
    </div>
  </div>
  <div class="demo-input-suffix">
    <div class="demo-row">
      <span class="demo-row-label">slots</span>
      <dora-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
        <template #suffix>
          <dora-icon class="dora-input__icon" name="calendar" />
        </template>
      </dora-input>
      <dora-input v-model="input4" class="w-50 m-2" placeholder="Type something">
        <template #prefix>
          <dora-icon class="dora-input__icon" name="search" />
        </template>
      </dora-input>
    </div>
    <dora-input suffixIcon="aixin" clearable="true"></dora-input>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const input1 = ref('');
  const input2 = ref('');
  const input3 = ref('');
  const input4 = ref('');
</script>

<style scoped lang="scss">
  .demo-row {
    display: flex;
    margin-bottom: 20px;
    .demo-row-label {
      width: 300px;
    }
    .dora-input {
      margin-right: 20px;
    }
  }
</style>
