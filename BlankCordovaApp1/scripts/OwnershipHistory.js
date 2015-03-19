(function () {
    var MobileServiceClient = WindowsAzure.MobileServiceClient;
    var client = new MobileServiceClient("https://test12345678.azure-mobile.net/", "xQHOPPVRZDRVIBDKNeITGrYrDqYfqz36");
    var historyTable = client.getTable('OwnershipHistory');
   

    function getHistoryByAssetId(assetId) {
        var query = historyTable.where({
            deviceId: assetId
        }).read().done(function (results) {
            alert(JSON.stringify(results));
        }, function (err) {
            alert("Error: " + err);
        });
    }

    function getUser(historyJson) {
        var query = historyTable.where(historyJson).read().done(function (results) {
            alert(JSON.stringify(results));
        }, function (err) {
            alert("Error: " + err);
        });
    }
})();