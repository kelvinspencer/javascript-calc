<?php

require_once("class.calc.php");


$calc = new calc();



?>

<!DOCTYPE html>
<html lang="en" dir="">
    <head>

        <title>Dynamic Calculator - Sample Project</title>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dynamic Calculator - Sample Project" />

        <meta name="author" content="Kelvin Spencer" />
        
        <link rel="stylesheet" href="css/style.css?<?=time()?>">
        <link href='https://fonts.googleapis.com/css?family=Electrolize|Press+Start+2P' rel='stylesheet' type='text/css'>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
        <script src="js/calc.js?<?=time()?>"></script>
        
        
    </head>

	<body>
    	<div id="container">
    		
            <div id="calc">
            	<div id="display_cntr">
                	<input text="text" id="display" value="0" readonly>
                </div>
                <div class="buttons numbers">
                	<?php // Numbers ?>
                	<?php for($i = 9; $i >= 0; $i--){ ?>
                		<div class="button" rel="<?=$i?>"><?=$i?></div>
                	<?php } ?>
                    <div class="button" rel=".">.</div>
                    <div class="button" rel="=">=</div>
                </div>
                <div class="buttons functions">
                	<div class="button" rel="c">C</div>
                	<div class="button" rel="+">+</div>
                    <div class="button" rel="-">-</div>
                    <div class="button" rel="x">&times;</div>
                    <div class="button" rel="/">&divide;</div>
                
                </div>
            </div>
            
    	</div>
    </body>
</html>

