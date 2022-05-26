(function() {
    var tiles = [],
        resposta = [];
    var inicio = document.getElementById("inicio");
        inicio.addEventListener("click", startGame, false);
    var next_level = document.getElementById("next_level");

    function init() {
        for (var i = 1; i < 25; i++){
            var tile = document.getElementById("n"+i);
            tile.style.background = "url(images/waifu/"+i+".png)";
            tile.addEventListener("click", trocar, false);
            tiles.push(tile);
        }
        tiles.push(null);
        resposta = tiles;

        renderizar();
    }
    function renderizar() {
        for (var i in tiles) {
            var tile = tiles[i]
            if (tile) {
                tile.style.left = (i%5) * 110 + "px";
                if (i < 5) {
                    tile.style.top = "0px";
                } else if (i < 10) {
                    tile.style.top = "100px";
                } else if (i < 15) {
                    tile.style.top = "200px";
                } else if (i < 20) {
                    tile.style.top = "300px";
                } else if (i < 25) {
                    tile.style.top = "400px";
                }
            }
        }
    }

    function trocar() {
        var index = tiles.indexOf(this);

        if (index % 5 !== 0) {
            if (!tiles[index-1]) {
                tiles[index-1] = this;
                tiles[index] = null;
            }
        }
        
        if (index % 5 !== 4) {
            if (!tiles[index+1]) {
                tiles[index+1] = this;
                tiles[index] = null;
            }
        }
        
        if (index > 4) {
            if (!tiles[index-5]) {
                tiles[index-5] = this;
                tiles[index] = null;
            }
        }
        
        if (index < 20) {
            if (!tiles[index+5]) {
                tiles[index+5] = this;
                tiles[index] = null;
            }
        }
        renderizar();
        if (check_level()) {
            next();
        }
    }

    function check_level() {
        for (var i in tiles) {
            var x = tiles[i];
            var y = resposta[i];

            if (x !== y) {
                return false
            }
        }
        return true;
    }

    function next() {
        next_level.style.opacity = "1";
        next_level.style.zIndex = "1";
        setTimeout(function(){
            next_level.addEventListener("click", startGame, false);
        }, 500)
        renderizar();
    }

    function randomSort(oldTiles) {
        var newTiles;
        do {
            newTiles = [];
            while (newTiles.length < oldTiles.length) {
                var i = Math.floor(Math.random() * oldTiles.length);
                if (newTiles.indexOf(oldTiles[i]) < 0) {
                    newTiles.push(oldTiles[i]);
                }
            }
        } while (!validarJogo(newTiles));

        return newTiles;
    }

    function validarJogo(array) {
        var inversoes = 0;
        var len =  array.length;

        for (var i = 0; i < len -1; i++) {
            for (var j = i+1; j < len; j++) {
                if (array[i] && array[j] && array[i].dataset.value < array[j].dataset.value) {
                    inversoes++;
                }
            }
        }
        return inversoes % 2 === 0;
    }

    function startGame() {
        tiles = randomSort(tiles);
        this.style.opacity = "0";
        this.style.zIndex = "-1";
        this.removeEventListener("click", startGame, false)
        renderizar();
    }

    init();
}());