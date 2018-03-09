import store from './../store'
var submitUrl,baseURL='http://109.6.29.153:3000/api'

s3.ajax = function(url,param,appid,options){
  options = options || {}
  param = param || {}
  var option = s3.extend(defaultOptions,options)
  appid = appid || 's3Core'
  var urlReg = /(http)(s?):\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/)?([a-zA-Z0-9\-\,\?\,\'\/\\\+&amp%\$#_]*)?/
  if(urlReg.test(url)){
      option.url = url
  }else{
      option.url = option.baseUrl + '/'+ appid + url
  }
<<<<<<< HEAD
  option.data = JSON.stringify(param)
  if(!urlReg.test(option.baseUrl) && !urlReg.test(url)){
      throw new Error("未定义的ajax提交地址 请先调用S3.setBaseUrl来定义ajax的提交地址.")
  }
  return new Promise(function(resolve, reject){
    axios(option).then(function (res){
      var retData =  res.data
      if(option.url.indexOf('unicorn.sdc.cs.icbc')>-1){
        retData = JSON.parse(retData.result).data
      }
      if(retData["ESPRESSO_RETURN_VERSION"]){
        if(retData.status === "001"||retData.status === "002"||retData.status === "003"){
          retData.retCode = '400'
          retData.retMsg = '调用失败'
        }else{
          retData = retData.data
        }
      }
      if (retdata["status"] && retdata.status === "004") {
        store.commit('userLogout')
        store.commit('setCurrentUser',null)
        store.commit('setCurrentDealer',null)
        store.commit('setCurrentCompany',null)
        store.commit('setCurrentRole',null)
=======
  if(!submitUrl)
    submitUrl = baseURL;
  var url = submitUrl+'/'+appid+id;
  timeout ? axios_config = {params:paramStr,timeout:timeout} : axios_config = {params:paramStr};
  if(method == 'post'){
    var P_post = new Promise(function(resolve, reject){
      axios.post(url,axios_config)
        .then(function (res){
          var retData =  res;
          if(retData["ESPRESSO_RETURN_VERSION"]){
            if(retData.status === "001"||retData.status === "002"||retData.status === "003"){
              retData.retCode = '400';
              //加入stroe
              store.commit('userLogout');
              store.commit('setCurrentUser',null);
              store.commit('setCurrentDealer',null);
              store.commit('setCurrentCompany',null);
              store.commit('setCurrentRole',null);
              reject({
                status:"400",
                retCode:"400",
                retMsg:'用户登陆已超时，请重新登陆'
              });
            }else
              retData = retData.data;
          }
          resolve(retData);
        }).catch(function (error) {
>>>>>>> e1bd2ecdd2828a38bf23ab2e2fef665ba9cc4e9f
        reject({
            status:"400",
            retCode:"400",
          retMsg:'用户登陆已超时，请重新登陆'
        })
      } else {
        resolve(retData)
      }
    }).catch(function (error) {
        reject({
            status:"400",
            retCode:"400",
            retMsg:error
        })
        throw new Error(error)
    })
  })
}
const HttpProtptype = function () {}

HttpProtptype.install = function (Vue, options) {
  // 全局挂载 $http
  Vue.prototype.$http = s3.ajax
}

export default HttpProtptype
