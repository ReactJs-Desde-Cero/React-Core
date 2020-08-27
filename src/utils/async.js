export const getDataCallback = (callback) => {

  const name = 'Alexander Ayra'

  setTimeout(() => {
    callback(name)
  }, 300)
}

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Alexander Ayra')
    }, 300)
  })
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 300)
  })
}
