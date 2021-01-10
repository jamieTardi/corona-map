

const country = (state="", action) => {
    switch (action.type){
        case 'NEW_COUNTRY':{
            return state
        }
        default: return state
    }
}

export default country
