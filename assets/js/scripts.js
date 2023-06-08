const itemChecked = () => {
    const inputsChecked = document.querySelectorAll('input[type=checkbox]:checked')
    let objetoSet = new Set()
    let index = 1
    for (let input of inputsChecked) {
        objetoSet.add({id: index, value: input.value})
        index++
    }
    console.log(objetoSet)

    let mapa  = new Map()
    for (const item of objetoSet){
        mapa.set(item.id, item.value)
    }
    console.log(mapa)

}

