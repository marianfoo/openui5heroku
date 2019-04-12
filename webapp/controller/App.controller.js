sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast',
	'jquery.sap.global',
	'sap/m/MessageBox',
	'sap/m/Button',
	'sap/m/Dialog',
	'sap/m/Label',
	'sap/m/Popover',
	'sap/m/List',
	'sap/m/StandardListItem',
	'sap/ui/core/Fragment'
], function (Controller, JSONModel, MessageToast, MessageBox, jQuery, Button, Dialog, Label, Popover, List, StandardListItem, Fragment) {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.App", {
		onInit: function () {
				sap.ui.core.LocaleData.getInstance(sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale()).mData[
					"weekData-firstDay"] = 1;
			// create model
			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2017", "10", "13", "8", "0"),
				people: [{
					pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
					name: "T1 Wolfgang",
					role: "Teamleiter",
					appointments: [{
						start: new Date("2017", "10", "13", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "Nossol Töpen mit Raupe",
						info: "weitere Information",
						type: "Type15"
					}]
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "T2 Roland",
					role: "Teamleiter",
					appointments: [{
						start: new Date("2017", "10", "13", "00", "00"),
						end: new Date("2017", "10", "13", "24", "00"),
						title: "Roland Platzhalter",
						info: "Canteen",
						type: "Type14"
					}, {
						start: new Date("2017", "10", "14", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "Höreth Uwe",
						info: "weitere Information",
						type: "Type14"
					}]
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "T3 Marco",
					role: "Teamleiter",
					appointments: [{
						start: new Date("2017", "10", "13", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "Sabine:  Himmelkron Geiersbach",
						info: "Pflanzarbeiten und Ansaat, Holder + Hans Herr Sack 1. und 2.4 nicht da",
						type: "Type16"
					}]
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "T4 Benni",
					role: "Teamleiter",
					appointments: [{
						start: new Date("2017", "10", "13", "00", "00"),
						end: new Date("2017", "10", "13", "24", "00"),
						title: "Sabine: Juraschek-Ambrosius",
						info: "Restarbeiten, Raupe, Bagger   Zaunarbeiten mit Hans!!",
						type: "Type13"
					}, {
						start: new Date("2017", "10", "14", "00", "00"),
						end: new Date("2017", "10", "16", "24", "00"),
						title: "Meier, Bayreuth Eichendorffring 30",
						info: "Holzterrasse abbauen und neue mit Douglasie bauen etc..",
						type: "Type13"
					}, {
						start: new Date("2017", "10", "17", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "Harsdorf Brauhaus",
						info: "Pflaster verfugen kleine Pflanzarbeit + Hübner Günther Sandstein abflexen Pflanzen",
						type: "Type13"
					}]
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "T5 Rüdiger",
					role: "Teamleiter",
					appointments: [{
						start: new Date("2017", "10", "13", "00", "00"),
						end: new Date("2017", "10", "13", "24", "00"),
						title: "Pirl, Kulmbach,",
						info: "Vorgarten Ansaat 1 Std. + evlt. Bodendecker rein",
						type: "Type12",
					}, {
						start: new Date("2017", "10", "14", "00", "00"),
						end: new Date("2017", "10", "14", "24", "00"),
						title: "Günther Bau",
						info: "Stadtsteinach - Frühjahrspflege 1 Tag / 3 AK",
						type: "Type12",
					}, {
						start: new Date("2017", "10", "15", "00", "00"),
						end: new Date("2017", "10", "15", "24", "00"),
						title: "Hotel zur Post, Wirsberg",
						info: "4x Kugelahorn schneiden Rüdiger 1 Tag allein Frühling",
						type: "Type12",
					}, {
						start: new Date("2017", "10", "16", "00", "00"),
						end: new Date("2017", "10", "16", "24", "00"),
						title: "Schötz, Lehenthaler Nussleite",
						info: "Pflanzarbeiten und Bodenaustausch, zwingend KRAN, 6AK/h",
						type: "Type12",
					}, {
						start: new Date("2017", "10", "17", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "Frankenberger, Rugendorf ",
						info: "Rüdiger + Alex, Wurzelstockfräse, Heckenschere,  1 x Juniperus virginiana 'Grey Owl' 60/80 bestellen",
						type: "Type12",
					}]
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "Raupe",
					appointments: [{
						start: new Date("2017", "10", "13", "00", "00"),
						end: new Date("2017", "10", "13", "24", "00"),
						title: "T3 Marco",
						type: "Type02"
					}, {
						start: new Date("2017", "10", "15", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "T4 Marco",
						type: "Type02"
					}]
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "Kran",
					appointments: [{
						start: new Date("2017", "10", "14", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "T4 Benni",
						type: "Type03"
					}]
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "Bagger",
					appointments: [{
						start: new Date("2017", "10", "13", "00", "00"),
						end: new Date("2017", "10", "17", "24", "00"),
						title: "T1 Wolfgang",
						type: "Type04"
					}]
				}]
			});
			this.getView().setModel(oModel);

		},

		roles: {
			donna: "Donna Moore",
			manager: "manager",
			admin: "admin"
		},

		handleRoleChange: function () {
			this.getView().getModel().refresh(true);
		},

		getUserRole: function () {
			return this.roles[this.byId("userRole").getSelectedKey()];
		},

		canModifyAppointments: function (sRole) {
			var sUserRole = this.getUserRole();

			if (sUserRole === this.roles.manager || sUserRole === this.roles.admin || sUserRole === sRole) {
				return true;
			}
		},

		handleAppointmentDragEnter: function (oEvent) {
			if (this.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
				oEvent.preventDefault();
			}
		},

		handleAppointmentDrop: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment"),
				oStartDate = oEvent.getParameter("startDate"),
				oEndDate = oEvent.getParameter("endDate"),
				oCalendarRow = oEvent.getParameter("calendarRow"),
				bCopy = oEvent.getParameter("copy"),
				oModel = this.getView().getModel(),
				oAppBindingContext = oAppointment.getBindingContext(),
				oRowBindingContext = oCalendarRow.getBindingContext(),
				handleAppointmentDropBetweenRows = function () {
					var aPath = oAppBindingContext.getPath().split("/"),
						iIndex = aPath.pop(),
						sRowAppointmentsPath = aPath.join("/");

					oRowBindingContext.getObject().appointments.push(
						oModel.getProperty(oAppBindingContext.getPath())
					);

					oModel.getProperty(sRowAppointmentsPath).splice(iIndex, 1);
				};

			if (bCopy) { // "copy" appointment
				var oProps = jQuery.extend({}, oModel.getProperty(oAppointment.getBindingContext().getPath()));
				oProps.start = oStartDate;
				oProps.end = oEndDate;

				oRowBindingContext.getObject().appointments.push(oProps);
			} else { // "move" appointment
				oModel.setProperty("start", oStartDate, oAppBindingContext);
				oModel.setProperty("end", oEndDate, oAppBindingContext);

				if (oAppointment.getParent() !== oCalendarRow) {
					handleAppointmentDropBetweenRows();
				}
			}

			oModel.refresh(true);

			MessageToast.show(oCalendarRow.getTitle() + "'s '" + "Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate +
				"\n and end at \n" + oEndDate + ".");
		},

		handleAppointmentResize: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment"),
				oStartDate = oEvent.getParameter("startDate"),
				oEndDate = oEvent.getParameter("endDate");

			if (!this.isAppointmentOverlap(oEvent, oAppointment.getParent())) {
				MessageToast.show("Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate +
					".");

				oAppointment
					.setStartDate(oStartDate)
					.setEndDate(oEndDate);
			} else {
				MessageToast.show("As a manager you can not resize events if they overlap with another events");
			}
		},

		// handleAppointmentCreate: function (oEvent) {
		// 	var oStartDate = oEvent.getParameter("startDate"),
		// 		oEndDate = oEvent.getParameter("endDate"),
		// 		oPlanningCalendarRow = oEvent.getParameter("calendarRow"),
		// 		oModel = this.getView().getModel(),
		// 		sPath = oPlanningCalendarRow.getBindingContext().getPath();

		// 	oModel.getProperty(sPath).appointments.push({
		// 		title: "New Appointment",
		// 		start: oStartDate,
		// 		end: oEndDate
		// 	});

		// 	MessageToast.show("New Appointment is created at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");

		// 	oModel.refresh(true);
		// },

		isAppointmentOverlap: function (oEvent, oCalendarRow) {
			var oAppointment = oEvent.getParameter("appointment"),
				oStartDate = oEvent.getParameter("startDate"),
				oEndDate = oEvent.getParameter("endDate"),
				bAppointmentOverlapped;

			if (this.getUserRole() === this.roles.manager) {
				bAppointmentOverlapped = oCalendarRow.getAppointments().some(function (oCurrentAppointment) {
					if (oCurrentAppointment === oAppointment) {
						return;
					}

					var oAppStartTime = oCurrentAppointment.getStartDate().getTime(),
						oAppEndTime = oCurrentAppointment.getEndDate().getTime();

					if (oAppStartTime <= oStartDate.getTime() && oStartDate.getTime() < oAppEndTime) {
						return true;
					}

					if (oAppStartTime < oEndDate.getTime() && oEndDate.getTime() <= oAppEndTime) {
						return true;
					}

					if (oStartDate.getTime() <= oAppStartTime && oAppStartTime < oEndDate.getTime()) {
						return true;
					}
				});
			}

			return bAppointmentOverlapped;
		},
		handleAppointmentSelect: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment");

			if (oAppointment) {
				this._handleSingleAppointment(oAppointment);
			} else {
				this._handleGroupAppointments(oEvent);
			}
		},

		handleOkButton: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				oStartValue = oFrag.byId("myPopoverFrag", "startDate").getDateValue(),
				oEndValue = oFrag.byId("myPopoverFrag", "endDate").getDateValue(),
				sInfoValue = oFrag.byId("myPopoverFrag", "moreInfo").getValue(),
				sTitleValue = oFrag.byId("myPopoverFrag", "title").getValue(),
				sAppointmentPath = this._oDetailsPopover.getBindingContext().sPath;

			this._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/start", oStartValue);
			this._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/end", oEndValue);
			this._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/info", sInfoValue);
			this._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/title", sTitleValue);
			this._oDetailsPopover.close();
		},

		handleCancelButton: function (oEvent) {
			this._oDetailsPopover.close();
		},

		handleAppointmentCreate: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oBeginButton;

			this._createDialog();

			oFrag.byId("myFrag", "selectPerson").setSelectedItem(oFrag.byId("myFrag", "selectPerson").getItems()[0]);

			oDateTimePickerStart = oFrag.byId("myFrag", "startDate");
			oDateTimePickerEnd = oFrag.byId("myFrag", "endDate");
			oBeginButton = this.oNewAppointmentDialog.getBeginButton();

			oDateTimePickerStart.setValue("");
			oDateTimePickerEnd.setValue("");
			oDateTimePickerStart.setValueState("None");
			oDateTimePickerEnd.setValueState("None");

			this.updateButtonEnabledState(oDateTimePickerStart, oDateTimePickerEnd, oBeginButton);
			this.oNewAppointmentDialog.open();
		},

		handleAppointmentAddWithContext: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				currentRow,
				sPersonName,
				oSelect,
				oSelectedItem,
				oSelectedIntervalStart,
				oStartDate,
				oSelectedIntervalEnd,
				oEndDate,
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oBeginButton;

			this._createDialog();

			currentRow = oEvent.getParameter("row");
			sPersonName = currentRow.getTitle();
			oSelect = this.oNewAppointmentDialog.getContent()[0].getContent()[1];
			oSelectedItem = oSelect.getItems().filter(function (oItem) {
				return oItem.getText() === sPersonName;
			})[0];
			oSelect.setSelectedItem(oSelectedItem);

			oSelectedIntervalStart = oEvent.getParameter("startDate");
			oStartDate = oFrag.byId("myFrag", "startDate");
			oStartDate.setDateValue(oSelectedIntervalStart);

			oSelectedIntervalEnd = oEvent.getParameter("endDate");
			oEndDate = oFrag.byId("myFrag", "endDate");
			oEndDate.setDateValue(oSelectedIntervalEnd);

			oDateTimePickerStart = oFrag.byId("myFrag", "startDate");
			oDateTimePickerEnd = oFrag.byId("myFrag", "endDate");
			oBeginButton = this.oNewAppointmentDialog.getBeginButton();

			oDateTimePickerStart.setValueState("None");
			oDateTimePickerEnd.setValueState("None");

			this.updateButtonEnabledState(oDateTimePickerStart, oDateTimePickerEnd, oBeginButton);
			this.oNewAppointmentDialog.open();
		},

		_validateDateTimePicker: function (oDateTimePickerStart, oDateTimePickerEnd) {
			var oStartDate = oDateTimePickerStart.getDateValue(),
				oEndDate = oDateTimePickerEnd.getDateValue(),
				sValueStateText = "Start date should be before End date";

			if (oStartDate && oEndDate && oEndDate.getTime() <= oStartDate.getTime()) {
				oDateTimePickerStart.setValueState("Error");
				oDateTimePickerEnd.setValueState("Error");
				oDateTimePickerStart.setValueStateText(sValueStateText);
				oDateTimePickerEnd.setValueStateText(sValueStateText);
			} else {
				oDateTimePickerStart.setValueState("None");
				oDateTimePickerEnd.setValueState("None");
			}
		},

		updateButtonEnabledState: function (oDateTimePickerStart, oDateTimePickerEnd, oButton) {
			var bEnabled = oDateTimePickerStart.getValueState() !== "Error" && oDateTimePickerStart.getValue() !== "" && oDateTimePickerEnd.getValue() !==
				"" && oDateTimePickerEnd.getValueState() !== "Error";

			oButton.setEnabled(bEnabled);
		},

		handleDetailsChange: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				oDTPStart = oFrag.byId("myPopoverFrag", "startDate"),
				oDTPEnd = oFrag.byId("myPopoverFrag", "endDate"),
				oOKButton = oFrag.byId("myPopoverFrag", "OKButton");

			if (oEvent.getParameter("valid")) {
				this._validateDateTimePicker(oDTPStart, oDTPEnd);
			} else {
				oEvent.getSource().setValueState("Error");
			}

			this.updateButtonEnabledState(oDTPStart, oDTPEnd, oOKButton);
		},

		handleCreateChange: function (oEvent) {
			var oFrag = sap.ui.core.Fragment,
				oDateTimePickerStart = oFrag.byId("myFrag", "startDate"),
				oDateTimePickerEnd = oFrag.byId("myFrag", "endDate"),
				oBeginButton = this.oNewAppointmentDialog.getBeginButton();

			if (oEvent.getParameter("valid")) {
				this._validateDateTimePicker(oDateTimePickerStart, oDateTimePickerEnd);
			} else {
				oEvent.getSource().setValueState("Error");
			}

			this.updateButtonEnabledState(oDateTimePickerStart, oDateTimePickerEnd, oBeginButton);
		},

		_createDialog: function () {
			var oFrag = sap.ui.core.Fragment,
				that = this,
				oStartDate,
				oEndDate,
				sTitle,
				sInfoResponse,
				oNewAppointment,
				oModel,
				sPath,
				oPersonAppointments;

			if (!that.oNewAppointmentDialog) {

				that.oNewAppointmentDialog = new Dialog({
					title: 'Add a new appointment',
					content: [
						sap.ui.xmlfragment("myFrag", "sap.ui.demo.todo.view.Create", this)
					],
					beginButton: new Button({
						text: 'Create',
						enabled: false,
						press: function () {
							oStartDate = oFrag.byId("myFrag", "startDate").getDateValue();
							oEndDate = oFrag.byId("myFrag", "endDate").getDateValue();
							sTitle = oFrag.byId("myFrag", "inputTitle").getValue();
							sInfoResponse = oFrag.byId("myFrag", "moreInfo").getValue();

							if (oFrag.byId("myFrag", "startDate").getValueState() !== "Error" && oFrag.byId("myFrag", "endDate").getValueState() !==
								"Error") {

								oNewAppointment = {
									start: oStartDate,
									end: oEndDate,
									title: sTitle,
									info: sInfoResponse
								};
								oModel = that.getView().getModel();
								sPath = "/people/" + oFrag.byId("myFrag", "selectPerson").getSelectedIndex() + "/appointments";
								oPersonAppointments = oModel.getProperty(sPath);

								oPersonAppointments.push(oNewAppointment);

								oModel.setProperty(sPath, oPersonAppointments);
								that.oNewAppointmentDialog.close();
							}
						}
					}),
					endButton: new Button({
						text: 'Close',
						press: function () {
							that.oNewAppointmentDialog.close();
						}
					})
				});

				that.oNewAppointmentDialog.addStyleClass("sapUiContentPadding");
				this.getView().addDependent(that.oNewAppointmentDialog);

			}
		},

		_handleSingleAppointment: function (oAppointment) {
			var oFrag = sap.ui.core.Fragment,
				oAppBC,
				oTitleInput,
				oDateTimePickerStart,
				oDateTimePickerEnd,
				oInfoInput,
				oOKButton;

			if (!this._oDetailsPopover) {
				this._oDetailsPopover = sap.ui.xmlfragment("myPopoverFrag", "sap.ui.demo.todo.view.Details", this);
				this.getView().addDependent(this._oDetailsPopover);
			}

			// the binding context is needed, because later when the OK button is clicked, the information must be updated
			oAppBC = oAppointment.getBindingContext();

			this._oDetailsPopover.setBindingContext(oAppBC);

			oTitleInput = oFrag.byId("myPopoverFrag", "title");
			oDateTimePickerStart = oFrag.byId("myPopoverFrag", "startDate");
			oDateTimePickerEnd = oFrag.byId("myPopoverFrag", "endDate");
			oInfoInput = oFrag.byId("myPopoverFrag", "moreInfo");
			oOKButton = oFrag.byId("myPopoverFrag", "OKButton");

			oDateTimePickerStart.setDateValue(oAppointment.getStartDate());
			oDateTimePickerEnd.setDateValue(oAppointment.getEndDate());
			oInfoInput.setValue(oAppointment.getText());
			oTitleInput.setValue(oAppointment.getTitle());

			oDateTimePickerStart.setValueState("None");
			oDateTimePickerEnd.setValueState("None");

			this.updateButtonEnabledState(oDateTimePickerStart, oDateTimePickerEnd, oOKButton);
			this._oDetailsPopover.openBy(oAppointment);
		},

		_handleGroupAppointments: function (oEvent) {
			var aAppointments,
				sGroupAppointmentType,
				sGroupPopoverValue,
				sGroupAppDomRefId,
				bTypeDiffer;

			aAppointments = oEvent.getParameter("appointments");
			sGroupAppointmentType = aAppointments[0].getType();
			sGroupAppDomRefId = oEvent.getParameter("domRefId");
			bTypeDiffer = aAppointments.some(function (oAppointment) {
				return sGroupAppointmentType !== oAppointment.getType();
			});

			if (bTypeDiffer) {
				sGroupPopoverValue = aAppointments.length + " Appointments of different types selected";
			} else {
				sGroupPopoverValue = aAppointments.length + " Appointments of the same " + sGroupAppointmentType + " selected";
			}

			if (!this._oGroupPopover) {
				this._oGroupPopover = new Popover({
					title: "Group Appointments",
					content: new Label({
						text: sGroupPopoverValue
					})
				});
			} else {
				this._oGroupPopover.getContent()[0].setText(sGroupPopoverValue);
			}
			this._oGroupPopover.addStyleClass("sapUiPopupWithPadding");
			this._oGroupPopover.openBy(document.getElementById(sGroupAppDomRefId));
		}

	});
});
