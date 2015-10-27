/*globals jQuery, document */
/*jslint sloppy: true, vars: true, white: true, maxerr: 50, indent: 4 */
/*
 * This is the javascript that looks for overlays
 */
(function(jQuery) {
  /*
   * Apply an overlay to all the links with class infoIco like
   */
  function prepOverlay() {
    jQuery('[data-overlay-ajax]').prepOverlay({
      subtype: 'ajax'
    });
    jQuery('[data-overlay-iframe]').prepOverlay({
      subtype: 'iframe'
    });
    jQuery('[data-overlay-image]').prepOverlay({
      subtype: 'image'
    });
  }
  jQuery(document).ready(prepOverlay);
}(jQuery));
