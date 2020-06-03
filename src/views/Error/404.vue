<template>
  <a-result status="404" title="404" :sub-title="$t('error.info')">
    <template #extra>
      <a-button type="primary" size="large" @click="$router.push({ path: '/' })">返回首页</a-button>
    </template>
  </a-result>
</template>

<script>
import Login from '@/api/http/login_api'
import User from '@/api/dbBean/userBean'

export default {
  async created () {
    const user = new User('wangly', '123456')
    const loginAPI = new Login(user)
    const { data } = await loginAPI.loginAPI()
    console.log(data)
  }
}
</script>

<style lang="scss" scoped>
  .header-container {
    height: 40px;
  }
</style>
