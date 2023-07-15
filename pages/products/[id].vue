<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      necessitatibus laborum veniam illum quos ad fugiat suscipit exercitationem
      rem beatae!
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
    layout:'products'
})
</script>

<style scoped></style>
