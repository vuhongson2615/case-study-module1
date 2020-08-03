class GameManager {
    constructor(name) {
        this.name = name;
        this.games = [];
        this.data = [];
    }
    init() {
        for (let i = 0; i < this.data.length; i++) {
            let game = new Game(this.data[i]._name, this.data[i]._img, this.data[i]._price, this.data[i]._version, this.data[i]._quality, this.data[i]._sell,this.data[i]._desc);
            this.addGame(game);
        }
    }
    addGame(game) {
        this.games.push(game)
    }
    deleteGame(id) {
        this.games.splice(id, 1)
    }
    updateGame(game,name,img,price, version, quality, sell, desc) {
        game.updateGame(name,img,price, version, quality, sell, desc);
    }
    getHtml() {
        let table = `
            <table class="table table-hover">
             <tr>
             <th>IMG</th>
             <th>NAME</th>
             <th>PRICE</th>
             <th>VERSION</th>
             <th>QUALITY</th>
             <th>SELL</th>
             <th>DESCRIPTION</th>
             <th id="th-action" colspan="2">Action</th>
             </tr>`;
        for (let i = 0; i < this.games.length; i++) {
            table += "<tr>" + this.games[i].getHTML() + this.getButton(i) + "</tr>";
        }

        return table;
    }
    getButton(id) {
        return `
                       <td><button type="button" data-toggle="modal" data-target="#staticBackdrop" onclick="updateGame(${id})" class="btn btn-success">UPDATE</button></td>
                       <td><button ONCLICK="deleteGame(${id})" class="btn btn-danger">DELETE</button></td>
                `;
    }
    getGameById(id){
        return this.games[id];
    }
}