(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    $('#btn_membros').click(function(){
    	
    	$('#index-banner').css('display','none');
    	$('.section').css('display','none');
    	$('#nibble_lista').css('display','none');
    	$('#nibble_membros').css('display','block');
    	$('#pj_projetos').css('display','none');
    	
    });
    
      $('#btn_home').click(function(){
    	
    	$('#index-banner').css('display','block');
    	$('.section').css('display','block');
    	$('#nibble_membros').css('display','none');
    	$('#nibble_lista').css('display','none');
    	$('#pj_projetos').css('display','none');
    });
     $('#btn_publicacoes').click(function(){
    	
    	$('#index-banner').css('display','none');
    	$('.section').css('display','none');
    	$('#nibble_membros').css('display','none');
    	$('#nibble_lista').css('display','block');
    	$('#pj_projetos').css('display','none');
    });
    $('#btn_projetos').click(function(){
    	$('#index-banner').css('display','none');
    	$('.section').css('display','none');
    	$('#nibble_membros').css('display','none');
    	$('#nibble_lista').css('display','none');
    	$('#pj_projetos').css('display','block');
    });
    
    
    
    
    $('#pj_projetos #lis_projetos li').hover(function(e){ //efeito sobre a lista de projetos
    	
    	$(this).css('background-color','#D9EAF7');
    	
    	
    },
    function(e){
    	
    	$(this).css('background-color','#FFFFFF');
    	
    	
    });//fim efeito sobre lista projetos
    
    
    
    
    $('#nibble_membros li').hover(function(e){ //efeito sobre a lista de membros
    	
    	$(this).css('background-color','#D9EAF7');
    	
    	
    	
    },
    function(e){
    	
    	$(this).css('background-color','#FFFFFF');
    	
    	
    });//fim efeito sobre lista de membros
    
    
    
    
    
    $('#nibble_membros li img').hover(
    function(e){
    	
    	$(this).css('height','100px');
    	$(this).css('width','100px');
    	
    }, 
    function(e){
    	
    		$(this).css('height','45px');
    	$(this).css('width','45px');
    	
    	
    });
    
    
    
    
    
    var len=$('.conteudo').text().length; //efeito sobre a listagem de publicações
        if(len>80)
        {
           // $('.conteudo').text($('.conteudo').text().substr(0,90)+'...');
           var query = $('.conteudo').text().split(" ", 12);
                query.push('...');
                var res = query.join(' ');
            $('.conteudo').text(res);
        }
	
	
	$('#nibble_lista ul .listas').hover(function(e){
		$(this).css('box-shadow','10px 6px 11px 1px rgba(0,0,0,0.75)');
	},
	function(e){
		
		$(this).css('box-shadow','0px 0px 34px -14px rgba(0,0,0,0.75)');
		
	});//fim do efeito da listagem de publicações
    
    
    
    
    $('#btn_contato').click(function(){  //efeito formulario flutuante
    
    	
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