myApp.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $http, linkedinService) {


    $scope.connections = [];


    $scope.getUserProfile = function () {

        linkedinService.getProfile(function(err, result){
            if(err){
                console.log('error occured');
            }else{
                console.log('result', result);
                $rootScope.userprofile = result.values[0];
                $scope.insertMongo(result.values[0]);
                $location.path("/person");
            }
        });
    };

    $rootScope.allUser = function()
    {
        $http({
            method:'GET',
            url:'http://localhost:3000/api/person/',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'cache-control': 'no-cache, no-store, must-revalidate', 'Pragma' : 'no-cache', 'Expires' : '0'}
        }).success(function(result){
            $scope.usuarios = result;
            console.log(result);
        });
    };

    $rootScope.deleteUsers = function(id)
    {
        

        $http({
            method:'delete',
            url:'http://localhost:3000/api/person/'+id,
            data:$.param({id:id}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'cache-control': 'no-cache, no-store, must-revalidate', 'Pragma' : 'no-cache', 'Expires' : '0'}
        }).success(function(result){
             $rootScope.allUser();

        });


    };

    $rootScope.allUser();

    

    // insere no banco de dados
    $scope.insertMongo = function(result){
        $http({
            method:'POST',
            url:'http://localhost:3000/api/person/',
            data:$.param(result),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(result){
            return true;
        });
    };

    //logout and go to login screen
	$scope.logoutLinkedIn = function() {
		linkedinService.logout();

        delete $rootScope.userprofile;

		$rootScope.loggedUser = false;

        $location.path("/login");
	};

});