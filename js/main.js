let manager = new GameManager('MOUNTION SHOP.RAIN');
display(manager.getHtml());
function display(table) {
    document.getElementById('result').innerHTML = table;
}
function addGame() {
    let name = document.getElementById('game-name').value;
    let img = document.getElementById('game-img').value;
    let price = document.getElementById('game-price').value;
    let version = document.getElementById('game-version').value;
    let quality = document.getElementById('game-quality').value;
    let sell = document.getElementById('game-sell').value;
    let desc = document.getElementById('game-desc').value;
    let game = new Game(name, img, price, version, quality, sell, desc);
    manager.addGame(game);
    display(manager.getHtml());
    document.getElementById('form-add').reset();
}
display(manager.getHtml());
function deleteGame(id) {
    manager.deleteGame(id);
    display(manager.getHtml());
}
let countId = 0;
function updateGame(id) {
    let game = manager.getGameById(id);
    let name = document.getElementById('edit-name').value = game.name;
    let img = document.getElementById('edit-img').value = game.img;
    let price = document.getElementById('edit-price').value = game.price;
    let version = document.getElementById('edit-version').value = game.version;
    let quality = document.getElementById('edit-quality').value = game.quality;
    let sell = document.getElementById('edit-sell').value = game.sell;
    let desc = document.getElementById('edit-desc').value = game.desc;
    countId =  id;
}
function editGame() {
    let name = document.getElementById('edit-name').value;
    let img = document.getElementById('edit-img').value;
    let price = document.getElementById('edit-price').value;
    let version = document.getElementById('edit-version').value;
    let quality = document.getElementById('edit-quality').value;
    let sell = document.getElementById('edit-sell').value;
    let desc = document.getElementById('edit-desc').value;
    manager.games[countId].updateGame(name, img, price, version, quality, sell, desc)
    display(manager.getHtml());
    document.getElementById('form-edit').reset();
}
