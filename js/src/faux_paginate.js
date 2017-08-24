/* ==========================================================================
   Pagination
   ========================================================================= */	

	function pagination(holder) { 
	
		var g = {};
		var resultNum = [];
	
		
		g.ix = 1;
		g.yx=1;
		
		var ex = $(holder).length;
		vx=1,recordGoup = 6, bx =5, shoPageNum = 4;
	
		var remainder = ex % recordGoup;
	
	
		//alert(remainder);
	
		$(holder).each(function() {	
	
		
			$(this).addClass('item' + g.ix);
			$(this).addClass('no' + g.yx);
			
			//alert(g.yx);
			resultNum.push(g.yx);	
					
			if( g.ix % recordGoup) { 	
				g.ix++;
			}else {
				g.ix= 1;
				
				$('<a href="#" class="in">' +  g.yx  + '</a> ').insertBefore('.pagination_podcast a.pag-right');
				g.yx++;		
			}
			
			if ($(this).hasClass('no1')){
				$(this).removeClass('hidden');
			}				
							
		});
			
		//alert(remainder);
		if(remainder) {
		   $('<a href="#" class="in">' + g.yx + '</a> ').insertBefore('.pagination_podcast a.pag-right');
		   g.yx++;
		}
	
		$('a.in').each(function(){
			$(this).addClass('no'+ vx);
			vx++;
		});
		
		$('.pagination_podcast a.in').click(function(event){
			g.wx = $(this).text();
			$(holder + '.hidden.'+ "no" + g.wx ).removeClass('hidden');
			$(holder).not(".no" + g.wx ).addClass('hidden');
			event.preventDefault();				
		});
		
		//Many records
		$('.pagination_podcast a.in').each(function(){
		 	var page_numb = $(this).text();
			if(page_numb > shoPageNum ){
			$(this).addClass('hidden');
			}
		});
		$('.pagination_podcast a.in:last').removeClass('hidden').addClass('last_page');
		$('<span>...</span>').insertBefore('.last_page');
		
		$('.pagination_podcast .page-left').click(function(event) {
			event.preventDefault();	
			
			if ( g.wx > 0 ) {
				var yy = $(this).attr('class').substr(10,3)
				//alert(g.wx);			  
				$('.page-left[class*="n"]').removeClass();
				$(this).addClass('page-left');			
				$(this).addClass('no' + g.wx);   
				g.wx--
				
				
				$('.pod-info').each(function(){
					if(g.wx > 0){
						
						if ($(this).hasClass('no' + g.wx)){
							$(this).removeClass('hidden');
						}else {
							$(this).addClass('hidden');
						}
													
					}
				});
				
						
			}
			
					
		});
	
	
		$('.pagination_podcast .pag-right').click(function(event) {
			event.preventDefault();	
			
			var total = Math.floor($('.pagination_podcast a.in').length + 1);
			if ( g.wx < total  ) {
				//alert(total);			  
				$('.pag-right[class*="n"]').removeClass();
				$(this).addClass('pag-right');			
				$(this).addClass('no' + g.wx);   
				g.wx++
				
				$('.pod-info').each(function(){
					if(g.wx < total ){
						if ($(this).hasClass('no' + g.wx)){
							$(this).removeClass('hidden');
						}else {
							$(this).addClass('hidden');
						}
											
						/*make css into a list
						var trClassName  = $(this).attr('class').substr(5,3);
							
						//alert(trClassName + " " + "no" + wx);
						
						if (trClassName   != "no" +  wx ) {
							$(this).addClass('hidden');
						}else{
							$(this).removeClass('hidden');
						}
						*/
					}
				});
						
			}else {
				//alert("testy");
				return
			}
					
		});	
	}

	
$(window).bind("load", function() {	
	pagination("div.pod-info");	
});
 