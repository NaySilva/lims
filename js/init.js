(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    
    
    
    $('#botao-nibble').click(function(){  //efeito formulario flutuante
    
    	
		$('#formulario-nibble').css('position','fixed');
		$('#formulario-nibble').css('display','block');
		$('#formulario-nibble').css('z-index','1000');
		$('#botao-nibble-fechar').css('z-index','1200');
		var largura = $('body').width();
		
	
		var larguraform = $('#formulario-nibble').width();
	
		var left = (largura-larguraform)/2;
	
		$('#formulario-nibble ~ nav').css('opacity','0.2');
		$('#formulario-nibble ~ div').css('opacity','0.2');
		$('#formulario-nibble ~ footer').css('opacity','0.2');
		
		
		$('#formulario-nibble').css('margin-top','100px');
		$('#formulario-nibble').css('margin-left',left+'px');
		$('#formulario-nibble').css('display','block');
		
		$('#botao-nibble-fechar').click(function(e){
			$('#formulario-nibble').css('display','none');
			$('#formulario-nibble ~ div').css('opacity','1.0');
			$('#formulario-nibble ~ nav').css('opacity','1.0');
		$('#formulario-nibble ~ div').css('opacity','1.0');
		$('#formulario-nibble ~ footer').css('opacity','1.0');
			
			
		});
	
		});  //fim formulario flutuante
		
		
		
		
  
  }); // end of document ready
  $('.carousel').carousel();
  
  


})(jQuery); // end of jQuery name space