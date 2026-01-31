


function here(){
  let phonrnumber = '9034538737'
let msg = 'Ma auta khatey ho  mero naam saroj motey ho ani ma dheroi motey xu ani ma dheroi hagxu ,, hagera hagera toilet bharinxa hapta hapta ma'
let encodedmsg = encodeURIComponent(msg)
let url  = `https://wa.me/${phonrnumber}?text=${encodedmsg}`
window.location.href=url
}