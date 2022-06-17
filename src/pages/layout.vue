<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px" class="my_aside">
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="defaultActiveKey"
        text-color="#fff"
        :router="true"
        >
          <el-menu-item v-for="route in enableRouteList" :key="route.path" :route="route" :index="route.path">{{route.meta.menuName}}</el-menu-item>
        </el-menu>
        <div class="user_name">
          {{userName}}
          <el-button type="primary" @click="logout">退出登录</el-button>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router'

export default {
  setup () {
    const state = reactive({
      defaultActiveKey: '/'
    });
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const userName = computed(() => store.state.user.userName);
    const enableRouteList = store.state.routes.enableRouteList;

    const logout = () => {
      localStorage.setItem('user', '');
      store.commit('user/doSetUser', {
        userName: '',
        userType: ''
      });
      localStorage.setItem('enableRouteList', '');
      store.commit('routes/doSetRoute', []);
      router.replace('/login');
    }
    onMounted(() => {
      console.log('routes', route.path)
      state.defaultActiveKey = route.path
    })
    return {
      ...toRefs(state),
      userName,
      enableRouteList,
      logout
    }
  }
}
</script>

<style lang="scss" scoped>
.common-layout {
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  .my_aside {
    display: flex;
    flex-direction: column;
    position: relative;
    & >ul {
      flex-grow: 1;
    }
    .user_name {
      position: absolute;
      bottom: 20px;
      padding-left: 20px;
      width: 100%;
    }
  }
}
</style>