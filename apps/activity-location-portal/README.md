# Activity Location Data Portal (Public)

**Share Activity Location Data with partners publicly**

---

The Activity Location Data Portal aggregates exact site location data using the [h3 hexagonal grid](https://h3geo.org/) to generalize data for public consumption. Implementing Partners and other stakeholders can identify where USAID is operating and collaborate with others. The Activity Location Data Portal (Public) is a component of the USAID/Guatemala Data Hub. Find it at [sites.google.com/guatemala-data-hub](https://www.sites.google.com/guatemala-data-hub).

---

![Screenshot](https://storage.googleapis.com/ei-dev-assets/assets/chrome_b3BqXZ8jMi.gif)

---

## How to get it

To replicate this project:

1. Copy this [Activity Location Data template](https://docs.google.com/spreadsheets/d/1sijmssVQYOq8hpHC4msTogvCZJXN0CsX8lbcjnRO6a8/copy) and collect Activity Location Data. See [ADS 579mab](https://www.usaid.gov/ads/policy/500/579mab) for details.
2. Run the script `h3_aggregate.py` (also available as a series of Google Colab notebooks if you do not have access to Python locally, see doc string in script file). 
   * Modify the boundary for clipping the hex grid to your boundary of choice.
   * Download the Activity Location Data template as a `.csv` and specify the path in the script. 
3. Upload the generalized Activity Location Data (the output of `h3_aggregate.py`) to a Google Sheet.
4. Create a new Google Apps Script project and copy the Apps Script code found in the `scripts/standalone` directory. We recommend using `clasp`, see guidance below.
   * Specify the path to your hex grid data (output of `h3_aggregate.py`; you can serve it using a raw link in GitHub in your fork of this repo).
   * Specify the path to your Google Sheet containing generalized Activity Location Data (from step 3). 
   * Specify the path to any additional context layers (we provide schools and health sites--see bottom of `js.html`).

### Using clasp with Google Apps Script

Review this [guide](https://developers.google.com/apps-script/guides/clasp) on using clasp with Google Apps Script. Your organization may prevent the use of `clasp` by restricting access to your Google account.

## License

[Creative Commons Zero Public Domain Dedication (CC0)](https://creativecommons.org/publicdomain/zero/1.0/). You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. We make no warranties about the work, and disclaims liability for all uses of the work, to the fullest extent permitted by applicable law.

## Contact

For more information or support, contact Erik Anderson at <erianderson@usaid.gov>.



