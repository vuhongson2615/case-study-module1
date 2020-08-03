const GAME = 'game';
let games = loadData();

function saveData() {
    localStorage.setItem(GAME, JSON.stringify(manager.games));
}

function loadData() {
    return localStorage.hasOwnProperty(GAME)? JSON.parse(localStorage.getItem(GAME)): [];
}