<template>
  <div>关于-about

    {{userName}}
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue'
export default {
  setup () {
    const store = useStore();
    const userName = computed(() => store.state.user.userName);


    return {
      userName
    }
  }

}
</script>

<style>

</style>