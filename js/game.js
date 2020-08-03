class Game {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get img() {
        return this._img;
    }
    set img(value) {
        this._img = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get quality() {
        return this._quality;
    }
    set quality(value) {
        this._quality = value;
    }
    get sell() {
        return this._sell;
    }
    set sell(value) {
        this._sell = value;
    }
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    constructor(name, img, price, version, quality, sell, desc) {
        this._name = name;
        this._img = img;
        this._price = price;
        this._version = version;
        this._quality = quality;
        this._sell = sell;
        this._desc = desc;
    }
    getHTML() {
        return `
                    <td>
                        <img src="${this._img}" >
                    </td>
                   <td>${this._name}</td>              
                   <td>${this._price}</td>              
                   <td>${this._version}</td>              
                   <td>${this._quality}</td>              
                   <td>${this._sell}</td>              
                   <td>${this._desc}</td>`;
    }
    updateGame(name,img,price, version, quality, sell, desc){
        this.name = name;
        this.img = img;
        this.price = price;
        this.version = version;
        this.quality = quality;
        this.sell = sell;
        this.desc = desc;
    }
    getHtmlViewUser(){
        return `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${this.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.price}</p>
                            <a href="#" class="btn btn-primary">Chi tiết</a>
                        </div>
                    </div>
                   `;
    }
}