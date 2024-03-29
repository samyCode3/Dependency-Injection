

const asyncFunction = (func: any) => {
    return (request, response, next) => {
        func(request, response, next).catch(err => next(err))
    }

  
}

export default asyncFunction