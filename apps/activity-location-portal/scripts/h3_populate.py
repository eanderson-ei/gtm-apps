import pandas as pd
import geopandas as gpd
import h3pandas
from shapely.geometry import Point

def add_h3(df, lat_col='Latitude*', lon_col='Longitude*', resolution=6):
    """
    Adds a column to a dataframe with the hex code given a latitude and 
    longitude column and a resolution. 

    Parameters:
    ----------
    df: pd.GeoDataFrame
        geodataframe with latitude and longitude
    lat_col: str
        name of the column with latitude
    lon_col: str
        name of the column with longitude
    resolution: int
        desired H3 resolution
    """
    df = df.dropna(axis=0, subset=[lat_col, lon_col])
    gdf = gpd.GeoDataFrame(
        df,
        geometry=gpd.points_from_xy(df[lat_col], df[lon_col]),
        crs=4326
    )

    gdf_hex = gdf.h3.geo_to_h3(resolution)

    return gdf_hex