import { atom, useAtom } from "jotai";

import type { CameraPosition } from "../reearth/types";

// default settings
const plateauApiUrl = atom<string | undefined>(undefined);
export const usePlateauApiUrl = () => useAtom(plateauApiUrl);

const projectId = atom<string | undefined>(undefined);
export const useProjectId = () => useAtom(projectId);

const geoApiUrl = atom<string | undefined>(undefined);
export const useGeoApiUrl = () => useAtom(geoApiUrl);

const gsiTileUrl = atom<string | undefined>(undefined);
export const useGsiTileUrl = () => useAtom(gsiTileUrl);

const googleStreetViewApiKey = atom<string | undefined>(undefined);
export const useGoogleStreetViewApiKey = () => useAtom(googleStreetViewApiKey);

const hideFeedback = atom(false);
export const useHideFeedback = () => useAtom(hideFeedback);

// custom settings

const cityName = atom<string | undefined>(undefined);
export const useCityName = () => useAtom(cityName);

const cityCode = atom<string | undefined>(undefined);
export const useCityCode = () => useAtom(cityCode);

const primaryColor = atom<string | undefined>(undefined);
export const usePrimaryColor = () => useAtom(primaryColor);

const logo = atom<string | undefined>(undefined);
export const useLogo = () => useAtom(logo);

const siteUrl = atom<string | undefined>(undefined);
export const useSiteUrl = () => useAtom(siteUrl);

const initialPedestrianCoordinates = atom<CameraPosition | undefined>(undefined);
export const useInitialPedestrianCoordinates = () => useAtom(initialPedestrianCoordinates);

const plateauGeojsonUrl = atom<string | undefined>(undefined);
export const usePlateauGeojsonUrl = () => useAtom(plateauGeojsonUrl);
