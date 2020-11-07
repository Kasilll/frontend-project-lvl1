export class Sitebar {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        
    }    
    get template () {
        return [
            block ('text'),
            block ('title')
        ].join(''); 
    }
    init() {
        this.$el.insertAdjacentHTML('afterBegin',this.template);
        this.$el.addEventListener('submit',this.add)
    }
    add(event) {
        event.preventDefault();
    }

}

export function block(type) {
    return `
        <form name = "${type}"> 
            <h5>${type}</h5>
            <div class = "form-group">
                <input class = "form-control form-control-sm" name = "value" placeholder="value">  
            </div>
            <div class="form-group">
                <input type="text" class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
        <button type = "sumbit" class = "btn btn-primary btn-sm">Добавить</button> 
        </form>
        <hr />
    `
}