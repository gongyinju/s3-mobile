<template>
  <div>
  	<s3-login :logo="logo" :company="company" :success="success"></s3-login>
  </div>
</template>

<script>
import s3Login from '@/components/s3-login.vue'

export default {
  data () {
  	return {
      company: config.basic.companyName,
      logo: config.basic.logo,
      success: '/'
  	}
  },
  computed: {

  },
  components: {
  	s3Login
  },
  mounted () {
    
  }
}
</script>