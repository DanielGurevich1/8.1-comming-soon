class Toast {
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(selector); 
        this.DOM = null;
    }

    /**
     * 
     * @param {string} type Zinutes tipas. Vieninteliai galimi variantai: success | error
     * @param {}
     */
    how() {
        this.DOM.classList.add('visible');
    }
    show() {
        this.DOM.classList.remove('visible');
    }

    render() {
        const HTML = `<div class="toast">
        <i class-"fa fa-check"></i>
        <p> your message here </p>
        <i class-"fa fa-check"></i>
        </div>`;
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}