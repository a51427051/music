
import { get } from '@/utils/request'
const API_URL = 'http://neteasecloudmusicapi.zhaoboy.com'
export function getBanner (params) {
  return get(`${API_URL}/banner`, params)
}
export function getSearchHot (params) {
  return get(`${API_URL}/search/hot`, params)
}
export function getSearchSuggest (params) {
  return get(`${API_URL}/search/suggest`, params)
}
