// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() { 
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
       // navigator.camera.getPicture();
        document.getElementById('camera-click').addEventListener('click', testClick, false);
        document.getElementById('list-click').addEventListener('click', listClick, false);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function listClick() {

        window.location = "ListDevices.html";
    }

    function testClick() {
        //navigator.camera.getPicture(onCameraSuccess, onCameraFail);
        cordova.plugins.barcodeScanner.scan(
      function (result) {
          debugger;
          window.location = "detail.html?assetId=" + result.text;
          /*alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);*/
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
    }

    function onCameraSuccess(){
        alert('success');
    }

    function onCameraFail(){
        alert('fail');
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();