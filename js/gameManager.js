class GameManager{
    constructor(name) {
        this.name = name;
        this.games = [];
        this.data = [];
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
    let table = `<table class="table table-hover">
             <tr>
             <th>IMG</th>
             <th>NAME</th>
             <th>PRICE</th>
             <th>VERSION</th>
             <th>QUALITY</th>
             <th>SELL</th>
             <th>DESCRIPTION</th>
             <th colspan="2">Action</th>
             </tr>`;
    for (let i = 0; i < this.games.length; i++) {
        table += "<tr>" + this.games[i].getHTML() + this.getButton(i) + "</tr>";
    }
    return table;
}

getButton(id) {
    return `<td><button ONCLICK="deleteGame(${id})" class="btn btn-danger">DELETE</button></td>
                        <td><button type="button" data-toggle="modal" data-target="#staticBackdrop" onclick="updateGame(${id})" class="btn btn-primary">UPDATE</button></td>
                `;
}
getGameById(id){
    return this.games[id];
}
}
