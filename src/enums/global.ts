export enum DefaultClient {
    default = "akeyless",
    camera_installation = "akeyless",
}

export enum BoardStatus {
    ReadyForInstallation = 1,
    Installed = 2,
    Malfunction = 3,
    NoSim = 4,
}
export enum EquipmentStatus {
    Ready = "ready",
    InUse = "in_use",
    Malfunction = "malfunction",
}
export enum EquipmentStatusReason {
    Kit = "kit",
    Installed = "installed",
    Broken = "broken",
    Lost = "lost",
    Defect = "defect",
    New = "new",
}

export enum UnitStatus {
    NewOrder = 0,
    Installed = 1,
    WaitingForService = 2,
    InstalledButNotActive = 3,
    NewInstallation = 4,
}

export enum ClientStatus {
    Active = "active",
    Suspended = "suspended",
    Deleted = "deleted",
}
export enum LanguageOptions {
    He = "he",
    En = "en",
    Ru = "ru",
    Th = "th",
}
export enum CountryOptions {
    US = "us",
    IL = "il",
    TH = "th",
}

export enum SiteType {
    root = "root",
    region = "region",
    office = "office",
    mobile_app_user = "mobile_app_user",
    installation_site_root = "installation_site_root",
    installation_site = "installation_site",
}
