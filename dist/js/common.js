$(document).ready(function(){var n=!0;$("#sandwich").click(function(){n=(0==n?$(".menu").slideUp():$(".menu").slideDown(),!n)}),$("#sandwich, .menu_item").click(function(){$("#sandwich").toggleClass("active")})});