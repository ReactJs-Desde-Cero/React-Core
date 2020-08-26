export const suma = (a, b) => a + b

export const resta = (a, b) => a - b

export const multiplicaion = (a, b) => a * b

export const division = (a, b) => a / b

export const getRandomNum = (min, max) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}
