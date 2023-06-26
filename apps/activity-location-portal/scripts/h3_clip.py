"""
Original files are located at
    https://colab.research.google.com/drive/1794pBBGK_8l1wBG2Zj_BaE0vUxW3tM5K
This notebook will 
(1) create a geoJSON layer of hex bins clipped to a country boundary
(2) save the geoJSON in the working directory
Update the `country_name` and `resolution` variables.
"""

import geopandas as gpd
from shapely.geometry import Polygon
import h3pandas

# Set variables
country_name = "Guatemala"
resolution = 6

# Get country boundary
gdf = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
gdf = gdf.loc[gdf['name'].eq('Guatemala')]

# Resample hexagons
hex_df = gdf.h3.polyfill_resample(resolution)

# Save data
hex_df.geometry.to_file("gtm-hex-6.geojson", driver='GeoJSON')