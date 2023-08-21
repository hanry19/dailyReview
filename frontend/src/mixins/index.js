import axios from "axios";
import router from '@/router/router';

export default {
    install(Vue) {

        Vue.prototype.$api = (url, param = {}, fnCallBack, fnErrorCallBack, responseType) => {
            axios.defaults.baseURL = '/api'
            axios.get(url)
                .then(fnCallBack)
                .catch(error => {
                    console.error('#### error ####')
                    console.error(error)
                    console.error('#### error ####');
                    fnErrorCallBack(error);
                });
        };
        // Vue.prototype.$api = (url, param = {}, fnCallBack, fnErrorCallBack, responseType) => {
        //
        //     const config = {
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         // responseType: responseType
        //     };
        //
        //     axios.post(url, param, config)
        //         .then(fnCallBack)
        //         .catch(error => {
        //             console.error('#### error ####')
        //             console.error(error)
        //             console.error('#### error ####');
        //             fnErrorCallBack(error);
        //         });
        // };
    },
}