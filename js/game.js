class Game{
    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
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
    constructor(img,name,price,version,quality,sell,desc) {
        this._img = img;
        this._name = name;
        this._price = price;
        this._version = version;
        this._quality = quality;
        this._sell = sell;
        this._desc = desc;
    }
    getHTML(){
        let html = `<td>
                        <tr>${this.img}</tr>
                        <tr>${this.name}</tr>
                        <tr>${this.price}</tr>
                        <tr>${this.version}</tr>
                        <tr>${this.quality}</tr>
                        <tr>${this.sell}</tr>
                        <tr>${this.desc}</tr>
                    </td>`
        return html;

    }
}