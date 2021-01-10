const toggle = (state=false, action) => {
    switch (action.type){
        case 'IS_TOGGLED':{
            return !state
        }
        default: return state
    }
}

export default toggle
