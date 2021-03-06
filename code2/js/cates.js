$(function() {
    $(".category_ul").on("click",">li>a",function() {
        $(this).siblings("ul").toggle();
        $(this).parent().siblings("li").find("ul").slideUp();
        var titleid = $(this).attr("data_title_id");
        var $that = $(this);
        categoryTpls(titleid,$that);
    })
    getCategoryTitle();
})

function getCategoryTitle() {
    $.ajax({
        url:url+"api/getcategorytitle",
        success:function(data) {
            var html = template("categoryTpl",data);
            $(".category_ul").html(html);
        }
    })
}


function categoryTpls(titleid,that) {
    $.ajax({
        url:url+"api/getcategory?titleid="+titleid,
        success:function(data) {
            var html = template("categoryTpls",data);
            var $ul = that.siblings("ul");
            $ul.html(html);
        }
    })
}