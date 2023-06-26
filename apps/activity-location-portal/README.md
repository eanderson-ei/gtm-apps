# Activity Location Data Portal (Public)

**Share Activity Location Data with partners publicly**

---

The Activity Location Data Portal aggregates exact site location data using the [h3 hexagonal grid](https://h3geo.org/) to generalize data for public consumption. Implementing Partners and other stakeholders can identify where USAID is operating and collaborate with others. The Activity Location Data Portal (Public) is a component of the USAID/Guatemala Data Hub. Find it at [sites.google.com/guatemala-data-hub](https://www.sites.google.com/guatemala-data-hub).

---

![Screenshot](https://storage.googleapis.com/ei-dev-assets/assets/chrome_b3BqXZ8jMi.gif)

---

## How to get it

The best way to get this project is to install [Atlas](https://github.com/eanderson-ei/gtm-dms-alpha). Atlas includes the Activity Location Data template, Activity Location Data Compiler, and scripts necessary to aggregate and process Activity Location Data. Follow these instructions to install this web app within Atlas.

* Create a new Google Apps Script project and copy the Apps Script code found in the `scripts/standalone` directory. We recommend using `clasp`, see guidance below.

* Run the script `h3_clip.py` in the `scripts/` directory to get the geometries for H3 indices in your geography of choice. Copy and paste this Python code into a [Google Colab](https://colab.research.google.com/) notebook if you do not have Python installed locally. Update the `country` and `resolution` parameters before running. 
* Specify the path to your hex grid data (output of `h3_clip.py`). You can serve it using a raw link in GitHub in your fork of this repo.
* Specify the path to your Google Sheet containing generalized Activity Location Data (the `Activity Location Data Compiler` in `Atlas/Modules/Activity Location Data`). 
* Specify the path to any additional context layers (we provide schools and health sites--see bottom of `js.html`).

To set it up independently, you will need to convert point locations to H3 indices. The `script/` directory includes JavaScript and Python functions for this purpose to use in your application. The application expects a Google Sheet of generalized Activity Location Data with these columns:

| attribute                | definition                                                   | units                    | data_type        |
| ------------------------ | ------------------------------------------------------------ | ------------------------ | ---------------- |
| activity_name            | The official name of the Activity                            |                          | text             |
| activity_id              | The official (DIS or Activity DB) ID number of the Activity  |                          | integer          |
| latitude                 | A coordinate in decimal degrees in CRS WGS84 to 4-5 decimal points | decimal degrees (WGS 84) | double precision |
| longitude                | A coordinate in decimal degrees in CRS WGS84 to 4-5 decimal points | decimal degrees (WGS 84) | double precision |
| location_name            | The name or brief description of the location where the implementation activity took place |                          | text             |
| start_date               | The date the implementation activity took place or started   |                          | text             |
| end_date                 | The date the implementation activity ended, if the activity  |                          | text             |
| location_type            | The category of the site location type, selected from a list of options |                          | text             |
| location_type_other      | If the exact site location type is other, a brief description to characterize the site location |                          | text             |
| location_data_type       | Whether an implementation location, beneficiary location, or both |                          | text             |
| intervention_status      | Whether the implementation activity is ongoing or completed  |                          | text             |
| intervention_cost        | The cost in $USD of the implementation activity              | USD                      | money            |
| intervention_description | A brief description of the intervention                      |                          | text             |
| h3_index                 | H3 index for the exact site location                         |                          | text             |
| department               | Department of the exact site location                        |                          | text             |
| municipality             | Municipality of the exact site location                      |                          | text             |
| source                   | The URL of the Activity Template                             |                          | text             |
| updated                  | Datetime last updated                                        |                          | text             |

### Using clasp with Google Apps Script

Review this [guide](https://developers.google.com/apps-script/guides/clasp) on using clasp with Google Apps Script. Your organization may prevent the use of `clasp` by restricting access to your Google account.

## License

[Creative Commons Zero Public Domain Dedication (CC0)](https://creativecommons.org/publicdomain/zero/1.0/). You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. We make no warranties about the work, and disclaims liability for all uses of the work, to the fullest extent permitted by applicable law.

## Contact

For more information or support, contact Erik Anderson at <erianderson@usaid.gov>.



