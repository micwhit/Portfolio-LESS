/* ==========================================================================
   Pagination
   ========================================================================= */
	(function($) {
		  $.fauxPaginate = function(rowGroup, container) {
				function Pagination(el) {
						this.el  = el;
						this.paginatedElements = el.length;
						this.currentPaginationNumb = 1;

						this.createPageButtons = function(){
							  $('<div class="pagination-area top"/>').insertBefore('.itemGroup:first')
								$('<a href="#" class="pagination page-left">prev</a>').appendTo('.top');
								$('<a href="#" class="pagination page-right">next</a>').appendTo('.top');
						}

						this.identifyCollections = function(perPageNumb){
							var itemNumber = 1, groupNum = 1,
							itemsPerPage = perPageNumb,
							remainder = this.paginatedElements % perPageNumb;

							this.el.children('article').each(function(){

								$(this).addClass('item' + itemNumber);
								$(this).addClass('group' + groupNum);

								if( itemNumber % itemsPerPage) {
									itemNumber++;
								}else {
									itemNumber = 1;
									$('<a href="#" class="pageGroup">' +  groupNum + '</a> ').insertBefore('.page-right');
									groupNum++;
								}
							});
							if(remainder) {;
								$('<a href="#" class="pageGroup">' +  groupNum + '</a> ').insertBefore('.page-right');
							}
						}

						this.identifyPagination = function(){
							var pageGroupNumber = 1;
							$('a.pageGroup').each(function(){
								$(this).addClass('group'+ pageGroupNumber);
								pageGroupNumber++;
							});
						}

						this.hideshowRows = function(){
							$('.itemGroup' + '.hidden.'+ "group" + this.currentPaginationNumb ).removeClass('hidden')
							$('.itemGroup').not(".group" + this.currentPaginationNumb ).addClass('hidden')
							$('.pageGroup' + ".group" + this.currentPaginationNumb ).css('color', 'red');
							$('.pageGroup').not(".group" + this.currentPaginationNumb ).css('color', 'black');
						}

						this.initiateGroups = function(){
							$('itemGroup').addClass('hidden');
							this.currentPaginationNumb = 1;
							this.hideshowRows();
						}
				}

				var pages = new Pagination($('.' + container + ''));
				pages.createPageButtons();
				pages.identifyCollections(rowGroup);
				pages.identifyPagination();
				pages.initiateGroups();

				$('a.pageGroup').click(function(event){
				 pages.currentPaginationNumb = $(this).text();
				 pages.hideshowRows();
				 event.preventDefault();
				});

				//Many pages
				$('a.pageGroup').each(function(){
					var page_numb = $(this).text();
					var maxPaginationPages = 4;
					if(page_numb >= maxPaginationPages ){
					$(this).addClass('hidden');
					$('a.pageGroup:last').removeClass('hidden').addClass('last_page');
					$('<span>...</span>').insertBefore('.last_page');
					}
				});

				$('a.page-left').click(function(event) {
					event.preventDefault();
					if (  pages.currentPaginationNumb  > 1) {
						pages.currentPaginationNumb--

						pages.hideshowRows();
						$('.page-left[class*="gr"]').removeClass();
						$(this).addClass('page-left');
						$(this).addClass('group' +  pages.currentPaginationNumb );
					}
				});

				$('a.page-right').click(function(event) {
					event.preventDefault();

					var total = Math.floor($('a.pageGroup').length);

					if ( pages.currentPaginationNumb < total  ) {
						pages.currentPaginationNumb++;

						$('.pag-right[class*="gr"]').removeClass();
						$(this).addClass('page-right');
						$(this).addClass('group' + pages.currentPaginationNumb);
						pages.hideshowRows();
					}
				});
			}
}( jQuery ));
