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
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scan').addEventListener('click', this.scan, false);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    scan: function() {
        console.log('scanning');
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) { 
            if(result.text=="12312"){
                document.getElementById("main").innerHTML = "<a href=\"index.html\">yenile</a><br><h1>Philips h101 model Televizyon</h1><img src=\"img/televizyon.png\"><br><br>Özet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özet <br><br><button type=\"button\" class=\"btn btn-primary\" aria-label=\"Left Align\">&nbsp; Yorumları Okuyun&nbsp;</button><br><button type=\"button\" class=\"btn btn-primary\" aria-label=\"Left Align\">&nbsp; Yorum Yapın&nbsp;</button>";   
            } 
            if(result.text=="11235"){
                document.getElementById("main").innerHTML = "<a href=\"index.html\">yenile</a><br><h1>Ayakkabı</h1><img src=\"img/ayakkabi.jpg\"><br><br>Özet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özetÖzet özet özet.Özet özet özet <br><br><button type=\"button\" class=\"btn btn-primary\" aria-label=\"Left Align\">&nbsp; Yorumları Okuyun&nbsp;</button><br><button type=\"button\" class=\"btn btn-primary\" aria-label=\"Left Align\">&nbsp; Yorum Yapın&nbsp;</button>";   
            } 
            if(result.text=="13521"){
                    document.getElementById("main").innerHTML = "<iframe height=\"400\" src=\"https://0.s3.envato.com/files/119977692/index.html\"></iframe>"; 
            }
            if(result.text=="11293"){
                dem();   
            }
            console.log(result);
            /*
            if (args.format == "QR_CODE") {
                window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
            }
            */
            if(!(document.getElementById("info").indexOf("t24.com.tr") > -1)){
            document.getElementById("info").innerHTML ="Lütfen doğru kodu okuttuğunuza emin olunuz."
            }
        }, function (error) { 
            console.log("Tarama hatası.: ", error); 
        } );
    },

};
