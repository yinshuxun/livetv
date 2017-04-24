import http from 'http'
import https from 'https'

export const requestAsync = (host, port, path, method, headers, encoding = 'utf-8') => {
  const options = {
    host, port, path, method, headers
  }
}

const httpActions = [http, https]

export const getAsync = (url, isHttps = false, coding = 'utf-8') => {
  isHttps = !!isHttps ? 1 : 0
  return new Promise((resolve, reject) => {
    httpActions[isHttps].get(url, ret => {
      let html = ""
      ret.setEncoding(coding)
      ret.on("data", chunk => {
        html += chunk
      })
      ret.on("end", () => {
        resolve(html)
      })
    }).on("error", e => {
      reject(e)
    })
  })
}