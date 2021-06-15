import axiosObj from 'axios'

export const axios = axiosObj.create({
  baseURL: import.meta.env.VITE_API_ENTRY,
  timeout: 4000,
  responseType: 'json',
  withCredentials: true,
})

axios.interceptors.request.use((config) => {
  const headers = config.headers
  const authToken = localStorage.getItem('at01')

  headers['Accept-Language'] = 'ko'

  if (authToken) {
    headers['Authorization'] = `Token ${authToken}`
  }

  return config
})
