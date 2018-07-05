import axios from 'axios';
import store from "../store/index"
var qs = require('qs');

// const token = window.sessionStorage.getItem(store.state.token);
// axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
var instance = axios.create({
	headers: {'content-type': 'application/x-www-form-urlencoded'}
});

axios.defaults.baseURL = '/api';


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
// export const getDialog = params => { return instance.get(base+'/dialogue',{ params: params }); };
// export const getUser= params => { return instance.get(base+'/user',{ params: params }); };
export const getRebotContent = (params) => {
	 return instance.get('http://www.tuling123.com/openapi/api',{ params: params }); 
}
export const login = (data) =>{
	return axios.post('/denglu/denglu.php',data)
	// return axios.get('/denglu/a.php')
}

													