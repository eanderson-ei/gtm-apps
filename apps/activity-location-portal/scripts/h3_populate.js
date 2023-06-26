/**
 * Adds a column to a 2d array with the hex code given a latitude and 
 * longitude column and a resolution.
 * @param {Number[][]} data - 2d array of data
 * @param {Number} lat_col - index of the column with latitude
 * @param {Number} lon_col - index of the column with longitude
 * @param {Number} resolution - desired H3 resolution (recommend 6)
 */
function add_h3(data, lat_col, lon_col, resolution) {
    // load H3 bindings for JavaScript
    eval(UrlFetchApp.fetch("https://unpkg.com/h3-js").getContentText());

    if(data.length > 0) {
        data.forEach(row => {
            if(typeof row[lat_col] == "number" && typeof row[lon_col] == "number") {
                // get h3 index
                let h3Index = h3.latLngToCell(row[lat_col], row[lon_col], resolution);
                // push to row
                row.push(h3Index);
            } else {
                row.push(null);
            };
        });
    };
}
