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
    Eh = "eh",
    En = "en",
    Ru = "ru",
}
