var app = angular.module('pautaApp', []);
			
app.controller('pautaController', function($scope) 
{
	$scope.inputs=[{index:1,val:''}];
	$scope.atualIndex=1;
	$scope.addProp = function(){
		++$scope.atualIndex;
		$scope.inputs.push({index:$scope.atualIndex,val:''});
		
	}
//ainda falta o acesso ao banco de dados. Estou fazendo com PDO
var arr=[];
for(index in $scope.inputs){
	if($scope.inputs[index].val.length<=0)
		continue;
	else
		arr.push($scope.inputs[index].val)
}
}	
);
