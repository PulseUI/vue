<template>
  <div class="text">
    <input type="text">
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'TextField',
}
</script>