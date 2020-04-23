export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
    
      //This is will mutate the state:
      //state.push(action.course)
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
