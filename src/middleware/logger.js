const logger = (store) => (next) => (action) => {
    console.group(action.type)
        // next will be dispatch function
        const returnValue = next(action);
        //get the new state
        console.log("The new state is: ", store.getState())
    console.groupEnd()

    return returnValue
}

export default logger