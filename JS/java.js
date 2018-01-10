$(function () {

    $("#submit").click(function () {
        var quest1 = $("#q1").val();
        alert(quest1);
        localStorage.setItem('question1',quest1);
		
		var quest2 = $("#q2").val();
        alert(quest2);
        localStorage.setItem('question2',quest2);
		
		var quest3 = $("#q3").val();
        alert(quest3);
        localStorage.setItem('question3',quest3);
		
		var quest4 = $("#q4").val();
        alert(quest3);
        localStorage.setItem('question4',quest4);
		
		var quest5 = $("#q5").val();
        alert(quest5);
        localStorage.setItem('question5',quest5);
	});
	
	if(localStorage.getItem('question1')){
        $('#q1').val(localStorage.getItem('question1'));
    }
	
	if(localStorage.getItem('question2')){
        $('#q2').val(localStorage.getItem('question2'));
    }
	
	if(localStorage.getItem('question3')){
        $('#q3').val(localStorage.getItem('question3'));
    }
	
	if(localStorage.getItem('question4')){
        $('#q4').val(localStorage.getItem('question4'));
    }
	
	if(localStorage.getItem('question5')){
        $('#q5').val(localStorage.getItem('question5'));
    }
	
});

	
	

 
	
	
