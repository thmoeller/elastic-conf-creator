/*

Copyright: Thorsten Moeller (2018)

Usage:  node creator.js template-file inputlist-file

Output: Config file will always get the name from the values in the first column of the inputlist file

Note:   Take care that the column names in the inputlist are the same like the placeholder names you want to use
        in the template, but with surrounding tag chars( e.g. column in inputlist  = username => placeholder in template = <username>)
        This is case sensitive

Process:
    1. Create inputlist with the content you want to replace in the config
    2. Create a teamplate config and set placeholders according to input list
    3. Run creator.js (see Usage)
    4. Deploy config files to logstash config folder

*/

var csv = require('csv-array');
var fs = require('fs');
var mysql = require('mysql');

// Read the template given as commandline argument
fs.readFile(process.argv[2], 'utf8', function (err, template) {
    if (err) {
        console.log(err);
    }

    // Read the list of systems
    csv.parseCSV(process.argv[3], function (data) {

        //Iterate over all systems
        for (var i = 0; i < data.length; i++) {

            var newconf = template;

            //Iterate over all columns to replace the values in the template
            for (var key in data[i]) {
                //Headers in system.txt must equal the placeholders in template surrounded by tags like <myheader>
                var value = data[i][key].toString().trim();

                // Create the RegEx for the replacement of all occurrances
                var placeholder = new RegExp("<" + key.trim() + ">", "g")

                //replace tag with value from system.txt
                newconf = newconf.replace(placeholder, value);

            }

            let cfgitem = data[i][Object.keys(data[i])[0]]

            //console.log(data[i][Object.keys(data[i])[0]]);
            //write new template with replacement to file
            fs.writeFile("output/" + cfgitem + ".conf", newconf, 'utf8', function (err) {
                if (err) {
                    return console.log(err)
                } else {
                    return console.log("Config file " + cfgitem + ".conf created sucessfully!")
                }
            });

        }

    }, true);

});

