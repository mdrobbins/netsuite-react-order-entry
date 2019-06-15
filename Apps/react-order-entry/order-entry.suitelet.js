/**
 * React frontend for Order Pick written in SuiteScript 2.0
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType Suitelet
 */
define(["N/file", "N/search"],
  function (file, search) {
    return {
      onRequest: function (context) {
        // noinspection CheckTagEmptyBody
        var html = '<!doctype html>' +
          '   <html lang="en">\n' +
          '       <head>\n' +
          '           <meta charset="utf-8">\n' +
          '           <title>Order Entry</title>\n' +
          '           <link type="text/css" rel="stylesheet" href="' + getFileUrl('order-entry.css') + '"/>\n' +
          '       </head>\n' +
          '       <body>\n' +
          '           <div id="root"></div>\n' +
          '       </body>\n' +
          '       <script type="text/javascript" src="' + getFileUrl('order-entry.js') + '"></script>\n' +
          '   </html>\n';

        context.response.write(html);

        //////////////////////////////////////////////////////////

        function getFileUrl(fileName) {
          var results = search.create({
            type: 'file',
            filters: [
              ['name', 'startswith', fileName]
            ],
            columns: [
              'url'
            ]
          }).run().getRange({ start: 0, end: 1 });

          if (Array.isArray(results) && results.length > 0) {
            return results[0].getValue('url');
          }
        }
      }
    };
  });
