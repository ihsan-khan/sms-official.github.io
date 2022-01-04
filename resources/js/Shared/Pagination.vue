<template>
    <Component
      :is="link.url ? 'Link' : 'span'"
      v-for="link in links"
      :href="link.url"
      v-html="link.label"
      class="px-1"
      :key="link.url"
      :class="{ 'text-gray-500': ! link.url, 'font-bold' : link.active }"
    />
</template>

<script>
export default {
  props: {
    links: Array
  }
};
</script>