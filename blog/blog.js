$(document).ready(function(){
	/*подгрузка контената*/
	$(".blog").click(function(){
		var id=$(this).attr('id');
		var info =$(this).attr("href")+" #"+id;
		$("#blog").hide("fast", loadContent(info));
		$(".backBottom").css('display', 'block' );
		$("#loader").fadeIn("normal");
		return false;
	});

		function loadContent(info){
			$("#blog").load(info, "", function(){
				
				$("#blog").show("normal", hedeLoader());
			})
		}

		function hedeLoader(){
			$("#loader").fadeOut("normal")
		}
})