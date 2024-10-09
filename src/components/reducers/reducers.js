const airlineList = (state = [], action) => {  
    if(action.type === 'ADDAIRLINE') {
    
    return state =[...state, { name: action.payload.name, count: action.payload.count }];
  }
  return state
}



  let reducers = {
    airlineList : airlineList,
    
}

export default reducers