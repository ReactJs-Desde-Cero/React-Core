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

export const getUsers = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users/5')
  const user = await res.json()

  return user
}
