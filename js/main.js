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