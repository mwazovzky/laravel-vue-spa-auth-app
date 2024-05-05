import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  install: (app, options) => {
    app.provide('http', http)
  }
}
