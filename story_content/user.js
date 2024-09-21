function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5srWkjIEsa2":
        Script1();
        break;
  }
}

function Script1()
{
  var p = GetPlayer();
 var placeHolderText;

$(":input").each(function() {
var place = $(this).attr('placeholder');

if (place !== undefined)
{
 placeHolderText = place.split("|");
 if (placeHolderText.length==2)
{
 $(this).data('bd_place',placeHolderText[0]); 
 $(this).attr('placeholder',placeHolderText[1]);
 $(this).bind('input propertychange', function() {

p.SetVar($(this).data("bd_place"),$(this).val());
});
}
}
 });
}

