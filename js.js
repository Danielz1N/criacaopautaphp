var app = angular.module('pautaApp', []);
			
app.controller('pautaController', function($scope) 
{
	$scope.inputs=[{index:1,val:''}];
	$scope.atualIndex=1;
	$scope.addProp = function(){
		++$scope.atualIndex;
		$scope.inputs.push({index:$scope.atualIndex,val:''});
		
	}
}	
);