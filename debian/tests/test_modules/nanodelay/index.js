let delay = (ms, value) =>
  new Promise(resolve => {
    setTimeout(resolve, ms, value)
  })

export { delay }
