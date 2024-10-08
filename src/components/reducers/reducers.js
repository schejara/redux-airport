const airlineList = (state = ["indigo","sprit"], action) => {  
    if(action.type === 'ADDAIRLINE') {
    
    return state =[...state, action.payload]
  }
  return state
}

  let reducers = {
    
    airlineList : airlineList
}

export default reducers