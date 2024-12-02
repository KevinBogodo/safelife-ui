
import { api } from "../../AxiosConfig"
import axios from "axios"
import { history } from "./historyFile"

// default
axios.defaults.baseURL = api.API_URL;
// type content
// axios.defaults.headers.post["Content-Type"]= "application/json";
// axios.defaults.headers.post["Content-Type"]= "multipart/form-data";
// type content
axios.defaults.headers.common["X-API-Version"]= "1";
// type content
const token = JSON.parse(localStorage.getItem("accessToken")) ? JSON.parse(localStorage.getItem("accessToken")) : null;
if(token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

//send interceptor
axios.interceptors.request.use(
    (config) => {
        // nprogress.start();
        return config;
      },
      (error) => {
        // nprogress.done();
        return Promise.reject(error);
    }
)

// Interception to capture errors
axios.interceptors.response.use(
    function (response) {
        // nprogress.done();
        return response.data ? response.data : response;
    },

    async function (error) {
        let message;
        switch (error.response.status) {
            case 400:
                message = error;
                break;
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            case 403:
                redirect('/')
                break;
            case 404:
                message = "Sorry! the data you are looking for could not be found";
                break;
            default:
                message = error.message || error;
        }
        // nprogress.done();
        return Promise.reject(error.response.data);
    }
)

/**
 * Set the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token
}

const removeAuthorization = () => {
    axios.defaults.headers.common["Authorization"] = ""
}

const redirect = (road) => {
    removeAuthorization()
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    history.push(road)
    window.location.reload()
}

class APIClient {
    /**
     * Fetches data from given url
     */

    // get = (url, params) => {
    //  return axios.get(url, params);
    //}
    get = (url, params) => {
        let response;
        let paramKeys = [];

        if (params) {
            Object.keys(params).map(key => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            })

            const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }

        return response;
    }

    /**
     * post given data to url
    */
    create = (url, data) => {
        return axios.post(url, data);
    }

    /**
     * Updates data
     */
    update = (url, data) => {
      return axios.patch(url, data);
    };

    put = (url, data) => {
      return axios.put(url, data);
    };

    /**
     * Delete
     */
    delete = (url, config) => {
      return axios.delete(url, { ...config });
    };
}
const getLoggedinUserToken = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return null;
    } else {
      return JSON.parse(token);
    }
}
export { APIClient, setAuthorization, removeAuthorization, getLoggedinUserToken}