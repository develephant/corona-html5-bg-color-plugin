//-----------------------------------------------------------------------------
// Background Color Plugin JS
// (c)2018 C. Byerley (develephant)
//-----------------------------------------------------------------------------
window.bgcolor_js = {
  setHex: function(hex_value) {
    var clr_val = hex_value ? hex_value : '#000000'
    document.body.style.backgroundColor = clr_val;
  },
  setColor: function(color_name) {
    var clr_val = color_name ? color_name : 'black'
    document.body.style.backgroundColor = clr_val;
  },
  setRGBA(r, g, b, a) {
    var red = r ? r : 0;
    var green = g ? g : 0;
    var blue = b ? b : 0;
    var alpha = a ? a : 1;
    document.body.style.backgroundColor = 'rgba('+red+', '+green+', '+blue+', '+alpha+')';
  }
}