import REGION_INFO from "../utils/region-info";

export const changeRegion = (region) => ({
  type: "CHANGE_REGION",
  payload: {
    region,
    regionInfo: REGION_INFO[region],
  },
});
