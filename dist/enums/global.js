"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitStatus = exports.BoardStatus = exports.DefaultClient = void 0;
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
//# sourceMappingURL=global.js.map