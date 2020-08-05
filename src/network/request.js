import Axios from "axios";

export function request(config) {
  const instance = new Axios.create({
    baseURL: 'http://123.207.32.32:8000/',
    timeout: 3000
  })
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    // console.error(error)
  })
  instance.interceptors.response.use(res => {
    res.data = [{id: 1, name: 'name-1'},{id: 2, name: 'name-2'}]
    return res.data
  }, error => {
    // console.error(error)
  })
  return instance(config)
}
