"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageOptions = exports.ClientStatus = exports.UnitStatus = exports.BoardStatus = exports.DefaultClient = void 0;
var DefaultClient;
(function (DefaultClient) {
    DefaultClient["default"] = "akeyless";
    DefaultClient["camera_installation"] = "akeyless";
})(DefaultClient || (exports.DefaultClient = DefaultClient = {}));
var BoardStatus;
(function (BoardStatus) {
    BoardStatus[BoardStatus["ReadyForInstallation"] = 1] = "ReadyForInstallation";
    BoardStatus[BoardStatus["Installed"] = 2] = "Installed";
    BoardStatus[BoardStatus["Malfunction"] = 3] = "Malfunction";
    BoardStatus[BoardStatus["NoSim"] = 4] = "NoSim";
})(BoardStatus || (exports.BoardStatus = BoardStatus = {}));
var UnitStatus;
(function (UnitStatus) {
    UnitStatus[UnitStatus["NewOrder"] = 0] = "NewOrder";
    UnitStatus[UnitStatus["Installed"] = 1] = "Installed";
    UnitStatus[UnitStatus["WaitingForService"] = 2] = "WaitingForService";
    UnitStatus[UnitStatus["InstalledButNotActive"] = 3] = "InstalledButNotActive";
    UnitStatus[UnitStatus["NewInstallation"] = 4] = "NewInstallation";
})(UnitStatus || (exports.UnitStatus = UnitStatus = {}));
var ClientStatus;
(function (ClientStatus) {
    ClientStatus["Active"] = "active";
    ClientStatus["Suspended"] = "suspended";
    ClientStatus["Deleted"] = "deleted";
})(ClientStatus || (exports.ClientStatus = ClientStatus = {}));
var LanguageOptions;
(function (LanguageOptions) {
    LanguageOptions["Eh"] = "eh";
    LanguageOptions["En"] = "en";
    LanguageOptions["Ru"] = "ru";
})(LanguageOptions || (exports.LanguageOptions = LanguageOptions = {}));
//# sourceMappingURL=global.js.map