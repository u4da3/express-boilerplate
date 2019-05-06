$(function(){
  'use strict';
  // Get Custom Properties
  var style = getComputedStyle(document.documentElement);
  var sidebarMinWidth = String(style.getPropertyValue('--ehb-sidebar-min-width')).trim();
  var sidebarMaxWidth = String(style.getPropertyValue('--ehb-sidebar-max-width')).trim();
  // expand the sideber and switch into the accordion navigation
  $('#ehb-sidebar-expand').on('click', function(){
    $('#ehb-spacer').animate({'width': sidebarMaxWidth });
    $('.sidebar')
      .css('overflow', 'hidden')
      .animate({ width: sidebarMaxWidth }, function(){
        $(this).css('overflow', 'visible')
        $('#ehb-sidebar-iconnav').addClass('uk-hidden')
        $('#ehb-sidebar-accordion').removeClass('uk-hidden')
        document.cookie = 'sidebar.iconnav=false';
      })
  })
  // fold the sideber and switch into the icon navigation
  $('#ehb-sidebar-fold').on('click', function(){
    var open_index = $('#ehb-sidebar-accordion>li.uk-open').index('.uk-parent');
    if (0 <= open_index) {
      UIkit.nav('#ehb-sidebar-accordion').toggle(open_index, true);
    }
    $('#ehb-spacer').animate({ 'width': sidebarMinWidth });
    $('.sidebar')
      .css('overflow', 'hidden')
      .animate({ width: sidebarMinWidth }, function(){
        $(this).css('overflow', 'visible')
        $('#ehb-sidebar-accordion').addClass('uk-hidden')
        $('#ehb-sidebar-iconnav').removeClass('uk-hidden')
        document.cookie = 'sidebar.iconnav=true';
      })
  })
  // open the offcanvas navigation for smart phones
  $('#ehb-menu-icon').on('click', function() {
    UIkit.offcanvas('#offcanvas-nav').show();
  })
})
