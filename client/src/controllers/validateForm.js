export const validateForm = (name, value)=> {
    switch (name) {
        case "name":
            if(!value.length)
            return 'Enter a breed';
        // case "minHeight":
        //     if(!value.length && !Number(value))
        //     return
        // case "maxHeight":
        //     setError({
        //         ...errors,
        //         [name]: e.target.value,
        //         });
        // break;  

        // case "minWeight":
        //     setError({
        //         ...errors,
        //         [name]: e.target.value,
        //         });
        // break; 

        // case "maxWeight":
        //     setError({
        //         ...input,
        //         [name]: e.target.value,
        //         });
        // break; 

        // case "minWeight":
        //     setError({
        //         ...input,
        //         [name]: e.target.value,
        //         });
        // break; 

        // case "maxLifeSpan":
        //     setError({
        //         ...input,
        //         [name]: e.target.value,
        //         });
        // break; 
    
        default:
            return false;
    }
}
