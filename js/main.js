$(document).ready(function(){
	var temp_value;

	function check_if_number(value){
		if (!isNaN(value)){
			$("#error").html(" ");
			return true;
		} else {
			$("#error").html("second value is not a number please recheck");
			return false;
		}
	}
	function reset_list(){
		$('#oreder_list').empty();
	};

	function delete_item(value) {
		if (check_if_number(value)){
			value--;
			$("#oreder_list").find( "li:eq("+value+")" ).remove();
		}
	};

	function mark_done_item(value) {
		if (check_if_number(value)){
			value--;
			$("#oreder_list").find( "li:eq("+value+")" ).css("text-decoration","line-through");
		}
	};
		function unmark_done_item(value) {
		if (check_if_number(value)){
			value--;
			$("#oreder_list").find( "li:eq("+value+")" ).css("text-decoration","none");
		}
	};

	function check_command(value){
		var str1 = value.split(' ');
		var first_word=str1[0];
		console.log(first_word);
		
		switch (first_word) {
		  case "reset":
		  		console.log("going to reset the shopping list");
		  		reset_list();
		    break;
		  case "delete":
		    	console.log("going to delete");
		     	delete_item(str1[1]);	
		    break;
		  case "done":
		  		console.log("going to mark item as done");
		  		mark_done_item(str1[1]);
		    break;
		    case "undo":
		  		console.log("going to unmark item as done");
		  		unmark_done_item(str1[1]);
		    break;
		    
		  default:
		    	console.log("going to add");
		    	$("#oreder_list").append("<li>"+temp_value+"</li>")
				$("#error").html(" ");
		    break;		 
		} 
	};
	
	$("#cmd_input").focus();
	$("#cmd_input").change(function(){
		temp_value=$(this).val();
		check_command(temp_value);
		$(this).val("");
		console.log('input value changed');
	});
})