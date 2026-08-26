export const catchErrorLog = (fn,err) => {
    console.log({
        location: fn,
        error: err
    });
    
}