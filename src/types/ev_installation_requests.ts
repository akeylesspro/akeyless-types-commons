import type {
    Client,
    EvCanbusSupportedModel,
    EvInstallationEngineType,
    EvInstallationRequestCarInput,
    EvInstallationRequestStatus,
    Site,
} from "../interfaces";
import type { BoardMaker } from "./global";

type EvSiteNode = Pick<Site, "id" | "sites" | "type">;

export const EV_INSTALLATION_REQUESTS_COLLECTION = "nx-ev-installation-requests";

export const EV_CANBUS_SUPPORTED_MODELS_COLLECTION = "nx-ev-canbus-supported-models";

const EV_CANBUS_BOARD_MAKERS: BoardMaker[] = ["erm", "jimi", "jimi_iothub", "ruptela", "servision"];

export const EV_CANBUS_HARDWARE_OPTIONS: string[] = EV_CANBUS_BOARD_MAKERS.map((maker) => maker.toUpperCase());

const EV_CANBUS_HARDWARE_LABELS: Record<string, string> = { ERM: "ERM FD" };

export const getEvCanbusHardwareLabel = (hardware: string): string => EV_CANBUS_HARDWARE_LABELS[hardware] || hardware;

export const EV_INSTALLATION_REQUEST_OPEN_STATUSES: EvInstallationRequestStatus[] = ["new", "in_progress"];

export const EV_INSTALLATION_ENGINE_TYPES: EvInstallationEngineType[] = ["EVs", "HEVs"];

const EV_INSTALLATION_FUEL_TYPE_NAMES: Record<EvInstallationEngineType, string> = { EVs: "חשמל", HEVs: "חשמל/בנזין" };

export const isEvInstallationEngineType = (value: unknown): value is EvInstallationEngineType =>
    EV_INSTALLATION_ENGINE_TYPES.includes(value as EvInstallationEngineType);

export const buildEvInstallationManualGovInfo = (
    car: Pick<EvInstallationRequestCarInput, "manufacturer" | "model" | "car_year" | "color" | "engine_type">
): Record<string, string | boolean> => ({
    is_manually_filled: true,
    engine_type: car.engine_type,
    sug_delek_nm: EV_INSTALLATION_FUEL_TYPE_NAMES[car.engine_type],
    tozeret_nm: car.manufacturer,
    kinuy_mishari: car.model,
    shnat_yitzur: car.car_year,
    tzeva_rechev: car.color,
});

export const EV_INSTALLATION_REQUEST_MAX_CARS = 200;

export const EV_INSTALLATION_REQUEST_MIN_TEXT_LENGTH = 2;

export const normalizeEvCarNumber = (value: string): string => value.trim().replace(/[^a-zA-Z0-9]/g, "");

export const getEvCarYears = (): string[] => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 41 }, (_, index) => String(currentYear - index));
};

export const isValidEvDriverPhone = (phone: string): boolean => /^\+\d{11,15}$/.test(phone);

export const formatEvInstallationAddress = (street: string, houseNumber: string, city: string): string =>
    `${street.trim()} ${houseNumber.trim()}, ${city.trim()}`;

export const getEvSupportedModelKey = (brand: string, model: string): string => {
    const clean = (value: string) => (value || "").trim().replace(/\s+/g, " ").toLowerCase();
    return JSON.stringify([clean(brand), clean(model)]);
};

export const getEvSupportedHardwareByModel = (models: EvCanbusSupportedModel[]): Map<string, string[]> => {
    const hardwareByModel = new Map<string, string[]>();
    models.forEach((model) => {
        const key = getEvSupportedModelKey(model.brand, model.model);
        const hardware = Array.isArray(model.hardware)
            ? model.hardware.filter((value): value is string => typeof value === "string").map((value) => value.trim()).filter(Boolean)
            : [];
        hardwareByModel.set(key, [...new Set([...(hardwareByModel.get(key) || []), ...hardware])].sort());
    });
    return hardwareByModel;
};

export const isValidEvInstallationHardware = (hardware: string, supportedHardware: string[], currentHardware?: string): boolean =>
    !!hardware && (hardware === currentHardware || supportedHardware.includes(hardware));

export const isValidIsraeliIdOrCompanyNumber =(value: string): boolean => {
    const digits = value.trim().padStart(9, "0");
    if (!/^[0-9]{9}$/.test(digits) || Number(digits) === 0) {
        return false;
    }
    const checksum = digits.split("").reduce((sum, digit, index) => {
        const weighted = Number(digit) * ((index % 2) + 1);
        return sum + (weighted > 9 ? weighted - 9 : weighted);
    }, 0);
    return checksum % 10 === 0;
};

export const getReachableSiteIds = (sites: Pick<Site, "id" | "sites">[], rootSiteId?: string): Set<string> => {
    const sitesById = new Map(sites.map((site) => [site.id, site]));
    const reachable = new Set<string>();
    const pending = rootSiteId ? [rootSiteId] : [];
    while (pending.length) {
        const site = sitesById.get(pending.pop());
        if (site?.sites && site.id && !reachable.has(site.id)) {
            reachable.add(site.id);
            pending.push(...site.sites);
        }
    }
    return reachable;
};

export const getEvInstallationSites = <T extends EvSiteNode>(sites: T[], client: Pick<Client, "root_site" | "installation_root_site">): T[] => {
    const reachable = getReachableSiteIds(sites, client.root_site);
    return sites.filter((site) => !!site.id && reachable.has(site.id) && (site.id === client.installation_root_site || site.type === "installation_site"));
};
