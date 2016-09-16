var linkedinServices = angular.module('linkedinServices',[]);


linkedinServices.
    factory('linkedinService', function($modal, $rootScope, $http){
        return {
            //basic profile
            getProfile : function (callback){
                IN.API.Profile("me")
                .fields("firstName", "lastName", "industry", "pictureUrl")
                .result(function (result){
                    $rootScope.$apply(function() {
                        callback(null, result);

                    });
                })
                .error(function error(error) {
                        callback(error,null)
                    });
            },

            insertMongo: function(result){
                $http({
                    method:'POST',
                    url:'/postime/backend/getNotification.php',
                    data:Object.toparams(obj),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(result){
                    return true;
                }).erro(function(callback){
                    return false;
                });
            },

            searchPeople : function(firstName, callback) {
                IN.API.PeopleSearch()
                .fields("firstName", "lastName", "distance")
                .params({"first-name": firstName})
                .result(function (result){
                    $rootScope.$apply(function() {
                        callback(null,result);
                    });
                })
                .error(function error(error) {
                        callback(error,null)
                    });
            },

            //return users connections
            getConnections : function(callback){
                IN.API.Connections("me")
                    .fields("id", "firstName", "lastName", "pictureUrl", "publicProfileUrl")
                    .result(function(result, metadata) {
                        $rootScope.$apply(function() {
                            callback(null,result);
                        });

                    })
                    //in case there is an error
                    .error(function error(e) {
                        callback(e,null)
                    });
            },
            //returns true if user is authorized
            isAuthorized : function(){
                return IN.User.isAuthorized();
            },
            logout : function(){
                return IN.User.logout();
            }

        }
    });
