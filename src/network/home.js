import {request} from "./request";

export function getData() {
  return request({
    url: '/home/data'
  })
}
