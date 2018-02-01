import axios from "axios";

const URL_PREFIX = "https://mock.yonyoucloud.com/mock/56/nc";

export default function request(url, options){
    return axios({
        method: options.method,
        url: URL_PREFIX + url,
        data: options.data,
        params : options.params
    });
}