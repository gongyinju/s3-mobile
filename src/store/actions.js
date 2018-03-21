export default {
    getUserState (context,appid) {
    	s3.ajax('/user/userData',{},appid).then(result => {
			if(result.retCode == '500') {
				context.commit('userLogout')
			} else {
				let user = result.user
				context.commit('setCurrentUser',user)
 				if(user.UserEntityroles){
 					let role = user.UserEntityroles[0]
 					context.commit('setCurrentRole',role)
 				}
			}
    	}).catch(error => {
    		context.commit('userLogout')
    	})
    },
    getBranchCompany (context,appid) {

    },
    getCurrentDealer (context,cutomerId){
    	
    }
}
