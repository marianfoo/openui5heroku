sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/ComponentSupport"], function(UIComponent) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.todo.Component", {
		metadata: {
			manifest: "json"
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		// init: function () {
		// 	// call the base component's init function
		// 	// UIComponent.prototype.init.apply(this, arguments);
		//
		// 	// enable routing
		// 	// this.getRouter().initialize();
		//
		// 	// set the device model
		// 	// this.setModel(models.createDeviceModel(), "device");
		// 	sap.ui.core.LocaleData.getInstance(sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale()).mData[
		// 		"weekData-firstDay"] = 1;
		// }
	});
});
