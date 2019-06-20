/**
 * React frontend for Order Pick written in SuiteScript 2.0
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType Suitelet
 */
define(['N/file', 'N/search', 'N/url', 'N/config'],
  function (file, search, url, config) {
    return {
      onRequest: function (context) {
        var apiEndpoint =   url.resolveScript({
          scriptId: 'customscript_dt_order_entry_restlet',
          deploymentId: 'customdeploy_dt_order_entry_restlet'
        });

        var companyPreferences = config.load(config.Type.COMPANY_INFORMATION);
        var companyName = companyPreferences.getValue('companyname');

        // noinspection CheckTagEmptyBody
        var html = '<!doctype html>\n' +
          '   <html lang="en">' +
          '       <head>\n' +
          '           <meta charset="utf-8">\n' +
          '           <script>\n' +
          '               window.apiEndpoint = "' + apiEndpoint + '";\n' +
          '               window.nsCompanyName = "' + companyName + '";\n' +
          '           </script>\n' +
          '           <link type="text/css" rel="stylesheet" href="' + getFileUrl('order-entry.css') + '"/>\n' +
          '           <title>Order Entry</title>\n' +
          '       </head>\n' +
          '       <body>\n' +
          '           <div id="root"></div>\n' +
          '       </body>\n' +
          '       <script type="text/javascript" src="' + getFileUrl('order-entry.js') + '"></script>\n' +
          '   </html>\n';

        context.response.write(html);

        //////////////////////////////////////////////////////////

        function getFileUrl(filename) {
          var results = search.create({
            type: 'file',
            filters: [
              ['name', 'is', filename]
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
