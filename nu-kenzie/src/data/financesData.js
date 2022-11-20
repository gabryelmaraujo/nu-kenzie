const financesData = [
    // {id: 1, description: "Salário recebido", type: "entrada", value: 2500 },
    // {id: 2, description: "Conta de luz", type: "saida", value: 150 },
  ]


const aleatoryId = () => {

  const min = Math.ceil(1)
  const max = Math.floor(999999)
  
  const newId = Math.floor(Math.random()*(max - min) + min)

  return newId

}

export { financesData, aleatoryId }