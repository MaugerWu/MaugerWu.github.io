$(function() {
	var objs = $(".article-entry .article-more-a");
	for (var i = 0;i < objs.length; i++) {
		$(".article-entry .article-more-a").remove()
	}
	
	$(".gitment-editor-footer-tip").empty();
	$(".gitment-container .gitment-footer-container").empty();
	
	var obj=$(".header-menu").find("a")[3];
	$(obj).attr("target","_blank")
	
	$('.article-entry ul').attr("style", "margin-left: 20px;")
	
	// 畅言去广告
	$('.module-cmt-footer').attr("style", "display:none !important;");
	$('#feedAv').attr("style", "display:none !important;");
	$('#pop_ad').attr("style", "display:none !important;");
});