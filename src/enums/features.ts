export enum FeaturesBoard {
    extra_battery = "extra_battery",
}

export enum FeaturesClient {
    pdi = "pdi",
    alert_management = "alert_management",
    biometry = "biometry",
    cawamo = "cawamo",
    charge_tracking = "charge_tracking",
    contact_by_email = "contact_by_email",
    cut_on_off = "cut_on_off",
    doors_open_close = "doors_open_close",
    keypad_code_change = "keypad_code_change",
    no_installation_sms_to_end_user = "no_installation_sms_to_end_user",
    polygon_scheduler = "polygon_scheduler",
    servision = "servision",
    vibration_level_control = "vibration_level_control",
    vibration_on_off = "vibration_on_off",
    installation_confirmation_email = "installation_confirmation_email",
}

export enum FeaturesDashboard {
    client_admin = "client_admin",
    site_admin = "site_admin",
    capacity_admin = "capacity_admin",
    dashboard_user = "dashboard_user",
    super_admin = "super_admin",
}

export enum FeaturesInstaller {
    super_technician = "super_technician",
    installer = "installer",
    uninstall = "uninstall",
    maintenance = "maintenance",
    desktop_mode = "desktop_mode",
    tests = "tests",
    tools = "tools",
    access_all_clients = "access_all_clients",
}

export declare enum FeaturesToolbox {
    super_admin = "super_admin",
    toolbox_user = "toolbox_user",
    car_catalog = "car_catalog",
    sms_configurations = "sms_configurations",
    tools = "tools",
    equipment_options = "equipment_options",
    manage_equipment = "manage_equipment",
    manage_boards = "manage_boards",
    manage_clients = "manage_clients",
    manage_users = "manage_users",
    manage_cars = "manage_cars",
    manage_credits = "manage_credits",
    call_center_user = "call_center_user",
}

export interface UserPermissionsObject {
    toolbox?: Record<`${FeaturesToolbox}`, boolean>;
    installer?: Record<`${FeaturesInstaller}`, boolean>;
    dashboard?: Record<`${FeaturesDashboard}`, boolean>;
    reports?: Record<string, boolean>;
}

export type userPermissionsObjectValue<T extends keyof UserPermissionsObject> = keyof UserPermissionsObject[T];
