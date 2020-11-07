export function row(content,styles='') {
    return `<div class = "row" style = "${styles}">${content}</div>`
}
export function col(content) {
    return `<div class = col-sm>${content}</div>`
}
export function css(styles={}) {
    const keys = Object.keys(styles);
    const array = keys.map((key)=>{
        return `${key} : ${styles[key]}`
    })
    console.log(array.join(';'))
    return array.join(';');
}