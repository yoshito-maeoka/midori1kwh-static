jQuery.noConflict();
var j$ = jQuery;
j$(function() {
  j$("img.alignleft, img.alignright, img.aligncenter").each(function() {
    var $this = j$(this);
    var klass = $this.attr("class");
    var title = $this.attr("title");
    var alt = $this.children("img").eq(0).attr("alt");
    var result = "";
    /*
    var span = $this.next();
    if (span.html() != "") {
    result += "<br />";
    }
    */
    if ((title !== undefined) && title != "") {
      result += "<b>" + title + "</b>";
    }
    if ((alt !== undefined) && alt != "") {
      result += '<br />' + alt;
    }
    if (result != "") {
      //result = j$(result).wrap("<span></span>");
      //$this.append(result);
      $this.removeClass(klass);
      //$this.css("float", "left");
      $this.wrap("<div class='" + klass +"'></div>");
      $this.after("<p class='caption' style='width:" + $this.width() + "px'>" + result + "</p>");
    }
  });
});
      
      
