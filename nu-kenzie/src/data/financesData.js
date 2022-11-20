const financesData = []


const aleatoryId = () => {

  const min = Math.ceil(1)
  const max = Math.floor(999999)
  
  const newId = Math.floor(Math.random()*(max - min) + min)

  return newId

}

export { financesData, aleatoryId }