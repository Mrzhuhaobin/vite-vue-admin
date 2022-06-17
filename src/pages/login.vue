<template>
  <div class="page page-login">
    <div class="login-container">
      <div class="login-title">后台管理系统</div>
      <div class="login-form">
        <el-form ref="ruleFormRef" :model="form" label-width="80px" size="large" :rules="rules">
          <el-form-item label="用户名：" prop="user">
            <el-input v-model="form.user" ></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password" type="password" ></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button type="primary" size="large" style="width: 100%" @click="handleSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import { api_login } from '@/service/testRequest.js';
import { useRouter } from 'vue-router';
import { ElMessage as Message } from 'element-plus';
import { useStore } from 'vuex';
import { routeList } from '@/router/routes'

export default {
  setup () {
    const ruleFormRef = ref(null);
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          { required: true, message: '请输入用户名', trigger: 'blur'}
        ]
      },
      form: {
        user: '',
        password: ''
      }
    });
    const handleSubmit = async () => {
      const goLogin = async () => {
        const res = await api_login(state.form);
        console.log('res', res);
        if (res.success) {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          store.commit('user/doSetUser', res.data.user);
          let userType = res.data.user.userType;
          const enableRouteList = routeList.filter(route => route.meta.userType <= userType);
          localStorage.setItem('enableRouteList', JSON.stringify(enableRouteList));
          store.commit('routes/doSetRoute', enableRouteList);
          // enableRouteList.forEach(route => {
          //   router.addRoute(
          //     'layout',
          //     route
          //   )
          // });
          console.log('user', store.state.user)
          router.push('/')
        }
      }
      ruleFormRef.value.validate((valid, field) => {
        if (valid) {
          goLogin()
        } else {
          Message.error('请正确填写表单')
        }
      });
      
    };
    onMounted(() => {
      console.log('路由信息', routeList)
    })
    
    return {
      ruleFormRef,
      ...toRefs(state),
      handleSubmit,
    }
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  .login-container {
    width: 550px;
    height: 500px;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: #fff 1px 1px 2px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-title {
      line-height: 45px;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 80px;
    }
    .login-form {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>