export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeOnEsc = this._closeOnEsc.bind(this);

    }

    open() {
        this._popup.classList.add("popup_active");
        document.addEventListener('keydown',this._closeOnEsc);
    }

    close() {
        this._popup.classList.remove("popup_active");
        document.removeEventListener('keydown', this._closeOnEsc);  
    }

    _closeOnEsc(e) {
        if (e.key === 'Escape') {
            this.close();
        };
    }; 

    setEventListeners () {
        const closeButton = this._popup.querySelector(".popup__close");
        this._popup.addEventListener('mousedown', (e) => {
            const popup = e.currentTarget;
            if (e.target === popup || e.target === closeButton)
            {this.close()}
        });

    }
}