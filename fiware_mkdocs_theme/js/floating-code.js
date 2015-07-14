$( document ).ready(function() {
   $('#toogleFloating').click(function(){ 
   	toogleCode();
   });

   $(window).resize(function(){
   	setFloatingElements();
   });
   setFloatingElements();
   floatCode=localStorage.getItem("floatCode");
   
   if(typeof floatCode === 'undefined')
   {
   	floatCode=true;
   }

   if(  ! (floatCode==='true') ) 
   {
   		toogleCode();
   }

});//end document ready


function setFloatingElements(){

	if ( $( window ).width() > 1200 &&  $('.no_float').length < 1)
	{	
		$("p+pre").prev().addClass('pre_code');
		$("ul+pre, ol+pre").each(function(){
			if($(this).prev().find('pre').length<1)
			{
				$(this).prev().addClass('pre_code');	
			}
			else
			{
				$(this).addClass('fullWidth');
				$(this).prev().removeClass('pre_code');
			}
		});
		$("li>pre").prev().addClass('pre_code');
		$("li>pre").parent().addClass('pre_code');
		 if ( ("chrome" in window ) || ("safari" in window ) ){
		 	$("li pre").prev().css("margin-top","-1.5em");
		 	$("li pre").css("margin-top","-1.5em");
		}
	}
	else
	{
		$("p+pre, ul+pre, ol+pre").prev().removeClass('pre_code');
		$("li pre").prev().css("float",'');
		if ( ("chrome" in window ) || ("safari" in window )  ){
		 	$("li pre").prev().css("margin-top",'');
		 	$("li pre").css("margin-top",'');
		}
	}
}


function toogleCode()
{
	$('div.rst-content').find('.section').toggleClass('no_float');
    localStorage.setItem("floatCode", $('.no_float').length<1);
   	setFloatingElements();
    return false; 
}