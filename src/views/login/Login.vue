<template>
  <div class="login">
    <liu-header>登录/注册</liu-header>
    <div class="content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            登录/注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import LiuHeader from "@/components/share/LiuHeader.vue";
import { Form,Field,Button,Toast  } from "vant";
import api from '@/axios/api';
import storage from 'good-storage';
export default {
  components: {
    LiuHeader,
    [Form.name]: Form,
    [Field.name]:Field,
    [Button.name]:Button,
    [Toast.name]:Toast 
  },
  data() {
      return {
          username: '',
          password: '',
      }
  },
  methods: {
      onSubmit(values) {
        // console.log('submit',values);
        api.userLogin({name:values['用户名'],password:values['密码']}).then(data=>{
            if(data.errcode == 0){
                storage.session.set('token',data.data.token);
                Toast.success('登录成功');
                this.$router.back();
            }else{
                Toast.fail('请检查输入的信息');
            }
        })
      }
  },
};
</script>

<style scoped></style>
