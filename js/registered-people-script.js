$(document).ready(function () {
    var objCommFunc = new commonFuncs();
    
    var dataToSend = {
        data : {
            'something' : ""
        },
        method : 'getAllRegisteredUsers'
    };
    var blockMsg = "Please be patient, we are fetching all registered users...";
    objCommFunc.makeRequest(dataToSend, blockMsg, buildRegisteredUsersTable);
    
    $('#ff-logo-lnk').click(function () {
        window.location.href = websiteAddress + "home.php";
    });
    
});