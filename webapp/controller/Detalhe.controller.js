sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ovly.fiori_20.cadastro_de_alunos.controller.Detalhe", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ovly.fiori_20.cadastro_de_alunos.view.Detalhe
		 */

		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			var oRotaExibir = oRouter.getRoute("exibir");
			oRotaExibir.attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function (oEvent) { //Declarar PARAMETRO
			// debugger;
			var oArguments = oEvent.getParameters().arguments;
			var oDataModel = this.getView().getModel();
			var sPath = oDataModel.createKey("Students", {
				Id: oArguments.codigo
			});
			this.getView().bindElement("/" + sPath);
		},
		
		toUpper: function(s){
			if(s){
				return s.toUpperCase();
			}
			
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ovly.fiori_20.cadastro_de_alunos.view.Detalhe
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ovly.fiori_20.cadastro_de_alunos.view.Detalhe
		 */
		//	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ovly.fiori_20.cadastro_de_alunos.view.Detalhe
		 */
		//	onExit: function() {
		//
		//	}
		
		/**
		 *@memberOf ovly.fiori_20.cadastro_de_alunos.controller.Detalhe
		 */
		onBack: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("listagem");
		}
	});
});