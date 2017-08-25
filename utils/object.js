export const getValue = (o, k) => {
  return obj.entries().find(({key, value}) => {
    return key === k && value
  })
}