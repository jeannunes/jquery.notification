/*
JQuery Notification V1.0
Developed by Jean Nunes.
  - fb.me/jeanrnm
  - twitter.com/jeanrnm
If you find any bugs, text me ;)
*/
	(function ($) {
    $.extend({
        notificate: function (settings) {
			// Check if browser supports notifications
			
			Notification.requestPermission().then(function(result) {
					
					var options = jQuery.extend({
						icon: null,
						title: null,
						body: null,
						tag: null,
						timeOut: 5000,
						timestamp: Math.floor(Date.now()),
						click: function () {}
					}, settings);
					
					if (!("Notification" in window)) {
						alert("This browser does not support system notifications");
					  }

					  // Let's check whether notification permissions have already been granted
					  else if (Notification.permission === "granted") {
						// If it's okay let's create a notification
							var notification = new Notification(options.title,{body:options.body,icon:options.icon,timestamp:options.timestamp,tag:options.tag});
							notification.onclick = options.click();
							setTimeout(notification.close.bind(notification), options.timeOut);
					  }

					  // Otherwise, we need to ask the user for permission
					  else if (Notification.permission !== 'denied') {
						Notification.requestPermission(function (permission) {
						  // If the user accepts, let's create a notification
						  if (permission === "granted") {
							var notification = new Notification(options.title,{body:options.body,icon:options.icon,timestamp:options.timestamp,tag:options.tag});
							notification.onclick = options.click();
							setTimeout(notification.close.bind(notification), options.timeOut);
						  }
						});
					  }
			
			});
		}
	});
	})(jQuery);
