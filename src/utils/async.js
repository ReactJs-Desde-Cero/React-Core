export const getDataCallback = (callback) => {

  const name = 'Alexander Ayra'

  setTimeout(() => {
    callback(name)
  }, 2000)
}
