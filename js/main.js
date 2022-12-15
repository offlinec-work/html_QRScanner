$(function() {
    // function onScanSuccess(decodedText, decodedResult) {
    //     console.log(`Code scanned = ${decodedText}`, decodedResult);
    // }
    // var html5QrcodeScanner = new Html5QrcodeScanner(
    //     "qr-reader", { fps: 10, qrbox: 250 });
    // html5QrcodeScanner.render(onScanSuccess);

	var vf = $(window).outerWidth()*.5;

    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        /* handle success */
        console.log(decodedText, decodedResult)

        $('#qr-shaded-region').remove();
        endScan();
       
    };

    function endScan(){
    	 html5QrCode.stop().then((ignore) => {
		  // QR Code scanning is stopped.
        	console.log('scanning ended');
		}).catch((err) => {
		  // Stop failed, handle it.
		});
    }
    const config = { fps: 10, qrbox: vf, aspectRatio: 1	 };

    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);


});