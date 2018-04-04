var TEXT_COLOR = 'blue',
    TEXT_COLOR_HOVER = 'red';

$(".hover-sound").each(function(i, el) {

  var _e = document.createElement('audio'),
      $e = $(_e),
      $el = $(el);

  $e.attr('src', 'audio/' + el.getAttribute('file-sound'))
  $e.css({ 'display': 'none' })
  $el.css({ 'color': TEXT_COLOR})
  document.body.appendChild(_e)

  $(this)
    .mouseover(function(){
      $el.css({ 'color': TEXT_COLOR_HOVER })
      _e.play()
    })
    .mouseout(function(){
      $el.css({ 'color': TEXT_COLOR})
    })

})

$(".hover-img").each(function(i, el) {

  var _e = document.createElement("img"),
      $e = $(_e),
      $el = $(el);

  $e.attr("src", "images/" + el.getAttribute("file-img"))
  $e.css({ 'position': 'absolute', 'display':'none', 'z-index': 99 })
  $el.css({ 'color': TEXT_COLOR})
  el.parentNode.insertBefore(_e, el.nextSibling)

  $(this)
    .mouseover(function(){
      $el.css({ 'color': TEXT_COLOR_HOVER })
      $e.css({ 'display': 'block' })
    })
    .mouseout(function(){
      $el.css({ 'color': TEXT_COLOR})
      $e.css({ 'display': 'none' })
    })

})
