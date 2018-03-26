<template>
  <div>
  	<s3-login :logo="logo" :company="company" :success="success"></s3-login>
  	<mt-popup v-model="showFirstLogin" position="right">
		<s3-firstLogin :success="success"></s3-firstLogin>
  	</mt-popup>
  </div>
</template>

<script>
import s3Login from '@/components/s3-login.vue'
import s3FirstLogin from '@/components/s3-firstlogin.vue'

export default {
  data () {
  	return {
      company: config.basic.companyName,
      logo: config.basic.logo,
      success: '/'
  	}
  },
  computed: {
  	showFirstLogin: {
  	 	get: function(){
  	 		return this.$store.state.isFirstLogedIn
  	 	},
  	 	set: function(){
  	 		this.$store.commit('userFirstLogin',this.showFirstLogin)
  	 	}
  	 }
  },
  components: {
  	s3Login,
  	s3FirstLogin
  }
}
</script>