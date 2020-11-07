import {css} from "./utils";
import {row,col} from "./utils.js";


 function title(block) {
    const style = block.options.style; 
    return row(col(`<h1>${block.value}<h1>`),css(style));    
}

function text(block) {  
    return row(col(`<p>${block.value}</p>`))
}
function colums(block) {
    let str = '';
    for(let i = 0 ; i<block.value.length;i++) {
        str+=
       `<div class="col-sm">
            <h1>${block.value[i]}</h1>
        </div>`
    }
    return `
    <div class="row">        
        ${str}        
    </div>`
}
 function image(block) {  
    return row(`<img src = "${block.value}">`)
}

export const templates = {
    title,
    text,
    image,
    colums
}