/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        debugger;
        var txtId = getParameterByName('assetId');
        var asset = getAssetById(txtId, app.fillDetailsForm);
    	//app.fillDetailsForm(asset);
    },
    
    
    fillDetailsForm: function (data) {
    	$('#hardwareId').attr('value',data[0].id);
    	$('#type').attr('value',data[0].hardwaretype);
    	$('#name').attr('value',data[0].dateofpurchase);
    	$('#assignedTo').attr('value',data[0].invoicenumber);
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
       
    }
};

app.initialize();

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$( "#view_history" ).click(function() {
	var id="comin";

	$.ajax({
	    type: "POST",
	    url: "history.html",
	    data: id,
	    dataType: "json",
	    success: function(data, textStatus) {
	        if (true) {
	            // data.redirect contains the string URL to redirect to
	            window.location.href = "history.html";
	        }
	        else {
	            // data.form contains the HTML for the replacement form
	            //$("#myform").replaceWith(data.form);
	        }
	    }
	});


});