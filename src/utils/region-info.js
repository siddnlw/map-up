const REGION_INFO = {
  India: {
    points: [24.1613484, 77.9324215],
    zoomLevel: 5,
    currency_symbol: "₹",
    units_of_speed: "Kilometers per hour (kmph)",
    units_of_distance: "Kilometers (km)",
    units_of_volume: "Liters (l)",
    timezone: "India Standard Time (GMT + 5:30)",
  },
  "United States": {
    points: [41.7860603,-102.0853276],
    zoomLevel: 4,
    currency_symbol: "$",
    units_of_speed: "Miles per hour (mph)",
    units_of_distance: "Miles (m)",
    units_of_volume: "Gallons (gal)",
    timezone: "Eastern Standard Time (GMT - 5)",
  },
  "United Kingdom": {
    points: [55.3781, -2.436],
    zoomLevel: 5,
    currency_symbol: "£",
    units_of_speed: "Miles per hour (mph)",
    units_of_distance: "Miles (m)",
    units_of_volume: "Gallons (gal)",
    timezone: "Greenwich Mean Time (GMT)",
  },
};

export default REGION_INFO;
