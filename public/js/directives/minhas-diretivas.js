angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
    ddo.transclude = true;


		ddo.scope = {
			titulo: '@'
		};

		ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
	.directive('minhaFoto', function() {
		var ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
			titulo: '@',
			url: '@'
		};

		ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
		
		return ddo;
	})
	.directive('muuBotãoPerigo', function(){
		var ddo = {}
		ddo.restrict = "E";

		ddo.scope = {
			nome: '@',
			acao: '&'
		}

		ddo.templateUrl = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>'

		return ddo;
	})