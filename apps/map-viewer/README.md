# Map Viewer

**Create choropleths from tabular data**

---

Map Viewer is simple Google Apps Script map platform built on Leaflet.  Users select a data asset and attribute to quickly create a choropleth map. The Map Viewer is a component of the USAID/Guatemala Data Hub. Find it at the [USAID/Guatemala Data Hub](https://sites.google.com/usaid.gov/guatemaladatahub).

---

![Screenshot](https://storage.googleapis.com/ei-dev-assets/assets/chrome_DW6GbdGqyH.gif)

---

## How to get it

To replicate this project:

1. Prepare and serve geospatial layer(s) online in GeoJSON format (we use raw links stored in this repo (at `../data/shp`)). This layer should define the boundaries over which the choropleth will be visualized.
2. Organize data assets in one or more Google Sheets using this [Dataset template](https://docs.google.com/spreadsheets/d/1DqNbMmfpTRe8g6wNdmHzVi3SsiYPEKwnichz6avU6K4/template/preview). Describe each attribute in the **Definitions** tab. 
   * Each data asset must include a unique hyperlink; a sheet in a Google Sheet document will have its own hyperlink.
   * Each data asset must include a column that can be joined to the geospatial data.
3. Copy this [Data Inventory template](https://docs.google.com/spreadsheets/d/1uZEq8SEx9LTki4XknoDsio4JdyHGJOf1zJbvF56iieM/copy)* and populate with an inventory of your data assets.
   * The **providers** sheet (optional) lists all data sources
   * The **directory** sheet lists all data assets
     * Provide the hyperlink to each asset in the *Asset Link* column.
     * Define the 
4. Create a new Google Apps Script project and copy the Apps Script code found in the `scripts/standalone` directory. We recommend using `clasp`, see guidance below.
5. Update the variable `DIRECTORYURL` in `Code.gs` with the URL of your copy of the Data Inventory template.

*The Data Inventory template includes a containerized version of the Data Catalog that adds a **Search** menu and *Search Datasets* menu item to launch the search bar as a modal dialog. See that project for more information.

### Using clasp with Google Apps Script

Review this [guide](https://developers.google.com/apps-script/guides/clasp) on using clasp with Google Apps Script. Your organization may prevent the use of `clasp` by restricting access to your Google account.

## License

[Creative Commons Zero Public Domain Dedication (CC0)](https://creativecommons.org/publicdomain/zero/1.0/). You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. We make no warranties about the work, and disclaims liability for all uses of the work, to the fullest extent permitted by applicable law.

## Contact

For more information or support, contact Erik Anderson at <erianderson@usaid.gov>.
