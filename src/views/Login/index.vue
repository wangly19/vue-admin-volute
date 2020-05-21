<template>
  <div class="login-container">
    <login-header></login-header>
    <div class="login-main">
      <div class="login-main__svg">
        <svg-icon name="login_notes" className="login-svg" />
      </div>
      <div class="login-main__form">
        <a-form id="login-form" :form="loginData" class="login-form" @submit="handleSubmit">
          <!-- 用户 -->
          <a-form-item>
            <a-input
            size="large"
            v-decorator="[
                'username',
                { rules: [{ required: true, message: $t('login.username') }] },
              ]" :placeholder="$t('login.username')">
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <!-- 密码 -->
          <a-form-item>
            <a-input
            size="large"
            type="password"
            v-decorator="[
              'password',
              { rules: [{ required: true, message: $t('login.password') }] },
            ]"
            :placeholder="$t('login.password')">
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox class="check-text" block>
              {{$t('login.forget')}}
            </a-checkbox>
            <!-- 提交按钮，默认的submit事件 -->
            <a-button type="primary" style="width: 80%;" size="large"
            :loading="loginState" html-type="submit">
              {{$t('login.loginButton')}}
            </a-button>
            <a-button style="float: right;" size="large" icon="thunderbolt"/>
          </a-form-item>
          <a-form-item>
            <div class="icon-group">
              <svg-icon name="wechat" className="login-btn" />
              <svg-icon name="alipay" className="login-btn" />
              <svg-icon name="weibo " className="login-btn" />
              <svg-icon name="github" className="login-btn" />
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from './component/header'
export default {
  data: () => ({
    loginState: false
  }),
  methods: {
    handleSubmit (e) {
      this.loginState = true
      e.preventDefault()
      this.loginData.validateFields((err, values) => {
        // 验证成功
        if (!err) {
          // console.log('Received values of form: ', values)
        }
      })
    }
  },
  components: {
    LoginHeader
  },
  beforeCreate () {
    this.loginData = this.$form.createForm(this, { name: 'login_form' })
  }
}
</script>

<style lang="scss">
  .login-container {
    width: 100%;
    height: 100%;
    @include flex($direction: column);
    .login-main {
      flex: 1;
      width: inherit;
      @include flex($justify: flex-start, $align: flex-start);
      background: $bg-color;
      &__svg {
        flex: 1;
        @include flex($justify: center, $align: center);
        height: 100%;
        .login-svg {
          width: 60%;
          height: 70%;
        }
      }
      &__form {
        width: 300px;
        @include radius();
        margin: $font-large * 6;
        padding: $font-large * 2;
        background: $light-color;
        transition: box-shadow .5s;
        &:hover {
          box-shadow: $box-shadow-base;
        }
        .check-text {
          color: $primary-color;
        }
        .icon-group {
          .login-btn {
            width: 35px;
            height: 35px;
            cursor: pointer;
          }
          @include flex($justify: space-around);
        }
      }
    }
  }

</style>
