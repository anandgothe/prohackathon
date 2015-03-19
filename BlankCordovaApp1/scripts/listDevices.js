var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope)
{
    $scope.assetLists = getData();
});



function displayList() {
    var data = getData();
    createList(data);
}

function getData() {
    return [
        { Id: 1, Name: 'Device 1', AssignedTo: 'User 1' },
        { Id: 1, Name: 'Device 2', AssignedTo: 'User 2' },
        { Id: 1, Name: 'Device 3', AssignedTo: 'User 3' },
        { Id: 1, Name: 'Device 4' },
        { Id: 1, Name: 'Device 5' },
    ];
}

function createList(data) {
    var container = document.createElement('ul');
    container.setAttribute('id', 'list-container');

    for(var i = 0, max = data.length; i < max; i++) {
        container.appendChild(createListItem(data[i]));
    }

    document.body.appendChild(container);
}

function createListItem(data) {
    data = data || {};

    var $item = $('<li />', { 'class': 'device-details' }),
        $id = $('<span />', { 'class': 'device-id', text: data.id }),
        deviceName = $('<span />', { 'class': 'device-id', text: data.id }),
        assignedTo = document.create
}