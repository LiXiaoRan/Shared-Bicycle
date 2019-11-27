import JsonP from 'jsonp';
import $ from "jquery";

// 对jsonp进行二次封装，可以统一处理报错信息
export default class Axios{
    static jsonp(options){

         return new Promise((resolve, reject) => {
            JsonP(options.url,{
                param:'callback'
            }, function (err, response) {
               if(response.status === 'success'){
                   resolve(response);
               }else{
                   reject(response.message);
               }
            })
        })
        
    }
}