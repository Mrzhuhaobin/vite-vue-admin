<template>
  <el-config-provider :size="size" :z-index="zIndex" :local="local">
    <router-view></router-view>
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup () {
    return {
      local: zhCn,
      size: 'small',
      zIndex: 2000
    }
  }
  
})
</script>


<style>

</style>
