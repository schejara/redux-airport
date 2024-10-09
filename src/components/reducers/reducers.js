const airlineList = (state = [], action) => {  
    if(action.type === 'ADDAIRLINE') {
    
    return state =[...state, { name: action.payload.name, count: action.payload.count }];
  }
  return state
}

const planeCount = (state = 0, action) => {
    
    if(action.type === 'ADDCOUNT') {
      return state + 1
    } 
  
    return state
  }

  let reducers = {
    airlineList : airlineList,
    planeCount : planeCount
}

export default reducers