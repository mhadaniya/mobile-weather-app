import 'package:flutter/material.dart';

dynamic weatherInterpretation = {
  "0": {"description": "Clear sky", "icon": "wb_sunny"},
  "1": {"description": "Mainly clear", "icon": "wb_sunny"},
  "2": {"description": "Partly cloudy", "icon": "partly_sunny"},
  "3": {"description": "Overcast", "icon": "cloud"},
  "45": {"description": "Fog", "icon": "fog"},
  "48": {"description": "Depositing rime fog", "icon": "fog"},
  "51": {"description": "Drizzle: Light", "icon": "water_drop"},
  "53": {"description": "Drizzle: Moderate", "icon": "water_drop"},
  "55": {"description": "Drizzle: Dense intensity", "icon": "water_drop"},
  "56": {"description": "Freezing Drizzle: Light", "icon": "ac_unit"},
  "57": {"description": "Freezing Drizzle: Dense intensity", "icon": "ac_unit"},
  "61": {"description": "Rain: Slight", "icon": "umbrella"},
  "63": {"description": "Rain: Moderate", "icon": "umbrella"},
  "65": {"description": "Rain: Heavy intensity", "icon": "umbrella"},
  "66": {"description": "Freezing Rain: Light", "icon": "ac_unit"},
  "67": {"description": "Freezing Rain: Heavy intensity", "icon": "ac_unit"},
  "71": {"description": "Snow fall: Slight", "icon": "ac_unit"},
  "73": {"description": "Snow fall: Moderate", "icon": "ac_unit"},
  "75": {"description": "Snow fall: Heavy intensity", "icon": "ac_unit"},
  "77": {"description": "Snow grains", "icon": "ac_unit"},
  "80": {"description": "Rain showers: Slight", "icon": "umbrella"},
  "81": {"description": "Rain showers: Moderate", "icon": "umbrella"},
  "82": {"description": "Rain showers: Violent", "icon": "umbrella"},
  "85": {"description": "Snow showers: Slight", "icon": "ac_unit"},
  "86": {"description": "Snow showers: Heavy", "icon": "ac_unit"},
  "95": {"description": "Thunderstorm: Slight or moderate", "icon": "bolt"},
  "96": {"description": "Thunderstorm with slight hail", "icon": "bolt"},
  "99": {"description": "Thunderstorm with heavy hail", "icon": "bolt"}
};

IconData getIconData(String iconCode) {
  switch (iconCode) {
    case 'wb_sunny':
      return Icons.wb_sunny;
    case 'partly_sunny':
      return Icons.wb_sunny;
    case 'cloud':
      return Icons.cloud;
    case 'fog':
      return Icons.cloud;
    case 'water_drop':
      return Icons.water_drop;
    case 'ac_unit':
      return Icons.ac_unit;
    case 'umbrella':
      return Icons.umbrella;
    case 'bolt':
      return Icons.bolt;
    default:
      return Icons
          .help_outline; // Return a default icon in case the icon code is not found
  }
}
