export const errorMessages = (error)=>{
    return error.responseJSON;
}

export const randomColor = ()=>{
    let color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
     return color;
}