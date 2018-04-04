export default {
	roleId (state){
		if (state.currentRole){
			return state.currentRole.RoleEntityid
		} else {
			return null
		}
	},
	isLogedIn (state) {
		if(!state.isLogedIn){
			state.isLogedIn = s3.istore.get('isLogedIn')
			state.currentUser = s3.istore.get('currentUser')
			state.isFirstLogedIn = !!s3.istore.get('isFirstLogedIn')
		}
		return state.isLogedIn
	}
}