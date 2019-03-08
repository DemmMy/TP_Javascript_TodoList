var todoApp=angular.module('todoApp',[]);
todoApp.controller('Control',['$scope', function($scope, tableau){
    $scope.tableau=[];
    
    $scope.ajouter=function(){
        var object={
            nom : $scope.task,
            checked : false
        };
        $scope.tableau.push(object);
        
    };

    $scope.supprimer=function($index){
        $scope.tableau.splice($index,1);
    };


    $scope.isSelect=function($index){
        if($scope.tableau[$index].checked){
            $scope.tableau[$index].checked=false;
        }
        else{
            $scope.tableau[$index].checked=true;
        }
    }
}]);