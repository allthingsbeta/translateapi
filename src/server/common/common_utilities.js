   // Function to write to a file.
   writetofile = (fileName, data) => {
       var fs = require('fs');
       fs.writeFileSync(fileName, data, 'utf-8');
       console.log(`Files Saved`);
   }

   module.exports.writetofile = writetofile;