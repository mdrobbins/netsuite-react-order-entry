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
        var html = '<!doctype html>' +
          '   <html lang="en">' +
          '       <head>' +
          '           <meta charset="utf-8">' +
          '           <script>' +
          '               window.apiEndpoint = "' + apiEndpoint + '";' +
          '               window.nsCompanyName = "' + companyName + '";' +
          '           </script>' +
          '           <title>Order Entry</title>' +
          '       </head>' +
          '       <body>' +
          '       <style>' + getFileContents('order-entry.css') + '</style>' +
          '           <div id="root"></div>' +
          '       </body>' +
          '       <script>' + getFileContents('order-entry.js') + '</script>' +
          '   </html>';

        context.response.write(html);

        //////////////////////////////////////////////////////////

        function getFileContents(filename) {
          var files = search.create({
            type: 'file',
            filters: [
              ['name', 'is', filename]
            ]
          }).run().getRange({ start: 0, end: 1 });

          return (files || []).reduce(function (contents, fileRecord) {
            return file.load({ id: fileRecord.id }).getContents();
          }, '');
        }
      }
    };
  });
