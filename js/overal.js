
jQuery("document").ready(function($){
	$(".phone").mask("+7(999)999-9999");
	$('h1').after('<hr>'); 
	/*откровенный костыль для входа на страницу администратора*/
	$("#out").click(function(){
		if($("#login").val()=="markova" && $("#password").val()=="E8861e2c2103"){

			location.href = "../admin/seestat.php";
		}else{
			$("h2").hide();
			$("#enter").prepend("<h2>Неверно введены логин и пароль.</h2>");
		}
	});
	/*работа с лайтбоксами*/
	$(".lightBox").wrapInner("<div class='box'></div>");
	$(".lightBox").click(function() {
	    document.location.href = '#'+$(this).parents().attr('id')+1; 
  	});
});