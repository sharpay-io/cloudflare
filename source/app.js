(function () {

	/*global INSTALL_OPTIONS*/

	window.addEventListener("load", function () {
		var options = INSTALL_OPTIONS;
		var code = (options.code || '').trim();
		if (!code) {
			// eslint-disable-next-line no-console
			console.log('Sharpay: Disabled. Register your site on https://app.sharpay.io/');
			return;
		}

		var vendorDiv = document.createElement('div');
		vendorDiv.id = 'sharpay_widget_floating';
		vendorDiv.setAttribute('data-sharpay', code);

		if( options.position == 'left' ) {
			vendorDiv.setAttribute('data-left', 'true');
		} else {
			vendorDiv.setAttribute('data-right', 'true');
		}

		if( options.color == 'dark' ) {
			vendorDiv.setAttribute('data-dark', 'true');
		} else {
			vendorDiv.setAttribute('data-light', 'true');
		}

		if( options.counter == 'separate' ) {
			vendorDiv.setAttribute('data-sharecount', 'true');
		} else if( options.counter == 'all' ) {
			vendorDiv.setAttribute('data-sharecount', 'true');
			vendorDiv.setAttribute('data-sharecount-mode', 'site');
		}

		if ( options.image ) {
			vendorDiv.setAttribute('data-image', options.image);
		}

		document.body.appendChild(vendorDiv);

		var vendorScript = document.createElement('script');
		vendorScript.src = 'https://app.sharpay.io/api/script.js';
		document.body.appendChild(vendorScript);
	});
}());
