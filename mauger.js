$(function() { 
	var objs = $('.article-entry .article-more-a');
	for (var i = 0; i < objs.length; i++)
	{
		$('.article-entry .article-more-a').remove();
	}
	$('.gitment-editor-footer-tip').empty();
	$('.gitment-container .gitment-footer-container').empty();
});