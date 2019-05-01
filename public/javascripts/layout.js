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
      })
  })
  // fold the sideber and switch into the icon navigation
  $('#ehb-sidebar-fold').on('click', function(){
    $('#ehb-spacer').animate({ 'width': sidebarMinWidth });
    $('.sidebar')
      .css('overflow', 'hidden')
      .animate({ width: sidebarMinWidth }, function(){
        $(this).css('overflow', 'visible')
        $('#ehb-sidebar-accordion').addClass('uk-hidden')
        $('#ehb-sidebar-iconnav').removeClass('uk-hidden')
      })
  })
  $('#ehb-menu-icon').on('click', function() {
    UIkit.offcanvas('#offcanvas-nav').show();
  })
})
