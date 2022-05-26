<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>waifu puzzle - by antonio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="wrapper">
        <div class=tela id=container>    
            <?php
                for ($i = 1; $i < 25; $i++) {
                    echo "<div id=n$i class=tile data-value=$i></div>";
                }
            ?>
            <div class="tela popup" id="inicio"></div>          
            <div class="tela popup" id="next_level"></div>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>