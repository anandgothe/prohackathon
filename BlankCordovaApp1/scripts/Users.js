(function () {
    var MobileServiceClient = WindowsAzure.MobileServiceClient;
    var client = new MobileServiceClient("https://test12345678.azure-mobile.net/", "xQHOPPVRZDRVIBDKNeITGrYrDqYfqz36");
    var userTable = client.getTable('Users');
    function createUser(user) {


        userTable.insert(user).done(function (result) {
            alert(JSON.stringify(result));
        }, function (err) {
            alert("Error: " + err);
        });
    }

    function getUserById(userId) {
        var query = userTable.where({
            userid: userId
        }).read().done(function (results) {
            alert(JSON.stringify(results));
        }, function (err) {
            alert("Error: " + err);
        });
    }

    function getUser(userJson) {
        var query = userTable.where(userJson).read().done(function (results) {
            alert(JSON.stringify(results));
        }, function (err) {
            alert("Error: " + err);
        });
    }
})();