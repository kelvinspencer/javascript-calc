/**
 *
 * Dynamic Calc
 * author: Kelvin Spencer
*/

var total = 0;
var second_value = 0;
var currentFunction = "";
var first_value = 0;
var current_value = 0;
var string_values = "";
var array_values = new Array();


function addToList(this_value,currentFunction){
	var this_array = new Array();
	if(currentFunction == null || currentFunction == ""){
		currentFunction = "Add";	
	}
	this_array = Array(this_value, currentFunction);
	
	array_values.push(this_array);
	
	jQuery("#display").val(this_value);	
	console.log(array_values);
}

jQuery(function(){
	
	jQuery("#calc").draggable();
	
	jQuery(".buttons.numbers .button").click(function(){
		var this_value = jQuery(this).attr("rel");
		
		if(this_value == "="){
			currentFunction = "Sum";
		} else if(this_value == "."){
			jQuery("#display").val((jQuery("#display").val()) + ".");	
		} else if(currentFunction != null && currentFunction != ""){
			addToList(this_value,currentFunction);
			jQuery("#display").val(this_value);	
		} else {
			if(parseFloat(jQuery("#display").val()) > 0){
				current_value = jQuery("#display").val();
			} else {
				current_value = "";
			}
			
			current_value = current_value.concat(this_value);
			jQuery("#display").val(current_value);	
			
		}
		
		
		
		if(currentFunction == "Sum"){
			
			for(i = 0; i < array_values.length; i++){
				var value = array_values[i][0];	
				var func = array_values[i][1];	
				
				if(func == "Add"){
					total += parseFloat(value);
				} else if(func == "Subtract"){
					total -= parseFloat(value);
				} else if(func == "Divide"){
					total /= parseFloat(value);
				} else if(func == "Multiply"){
					total *= parseFloat(value);
				}
				
			}
			
			jQuery("#display").val(total);	
			
			array_values = [];
			total = 0;
			currentFunction = "";
		} 
			
				
		
	});
	
	
	jQuery(".buttons.functions .button").click(function(){
		var this_value = jQuery("#display").val();
		
		if(currentFunction == null || currentFunction == ""){
			addToList(this_value,currentFunction);
		}
		
		currentFunction =  jQuery(this).attr("rel");
				
		if(currentFunction == "="){
			currentFunction = "Sum";
		} else if(currentFunction == "+"){
			currentFunction = "Add";
		} else if(currentFunction == "-"){
			currentFunction = "Subtract";
		} else if(currentFunction == "/"){
			currentFunction = "Divide";
		} else if(currentFunction == "x"){
			currentFunction = "Multiply";
		}  else if(currentFunction == "c"){
			array_values = [];
			total = 0;
			currentFunction = "";
			jQuery("#display").val(0);
		} 
		
		
	});
	
});