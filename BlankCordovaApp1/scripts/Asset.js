//(function () {
//var MobileServiceClient = WindowsAzure.MobileServiceClient;
//var client = new MobileServiceClient("https://test12345678.azure-mobile.net/", "xQHOPPVRZDRVIBDKNeITGrYrDqYfqz36");
//var assetTable = client.getTable('Asset');

function createAsset(asset) {


    assetTable.insert(asset).done(function (result) {
        alert(JSON.stringify(result));
    }, function (err) {
        alert("Error: " + err);
    });
}

function getAssetById(assetId, successCallback) {
    var MobileServiceClient = WindowsAzure.MobileServiceClient;
    var client = new MobileServiceClient("https://test12345678.azure-mobile.net/", "xQHOPPVRZDRVIBDKNeITGrYrDqYfqz36");
    var assetTable = client.getTable('Asset');
    var query = assetTable.where({
        id: assetId
    }).read().done(function (results) {
        successCallback(results);
    }, function (err) {
        alert("Error: " + err);
    });
}

function getAsset(assetJson) {
    var query = assetTable.where(assetJson).read().done(function (results) {
        alert(JSON.stringify(results));
    }, function (err) {
        alert("Error: " + err);
    });
}
//})();