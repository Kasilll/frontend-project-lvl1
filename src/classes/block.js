import {row,col,css} from '../utils'
class block {
    constructor(type,value,options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }
    toHTML() {
        throw new Error('метод toHTML должен быть реализован')
    }
}

export class Titleblock extends block {
    constructor(value,options) {
        super('title',value,options);
    }
    toHTML() {
        const style = this.options.style; 
        return row(col(`<h1>${this.value}<h1>`),css(style)); 
    }
}

export class Imageblock extends block {
    constructor(value,options) {
        super('image',value,options);
    }
    toHTML() {
        return row(`<img src = "${this.value}">`)
    }
}

export class Textblock extends block {
    constructor(value,options) {
        super('text',value,options);
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`))
    }
}

export class Columsblock extends block {
    constructor(value,options) {
        super('colums',value,options)
    }
    toHTML() {
        let str = '';
        console.log(this.value);
        for(let i = 0 ; i<this.value.length;i++) {
            str+=
           `<div class="col-sm">
                <h1>${this.value[i]}</h1>
            </div>`
        }
        console.log(str)
        return `
        <div class="row"> 
        ${str}       
        </div>`
    }
}