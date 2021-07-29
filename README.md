# SharePoint Online View It (spo_view_it)
Chrome extension to force SharePoint Online to use Reading View for Word and Excel documents


Available on [Chrome Web Store: SPO View It](https://chrome.google.com/webstore/detail/spo-view-it/omljlibfjloccmdmmlpcnlijjneabhjm)

Sometimes SharePoint Online defaults to opening a Word or Excel document in the *Editing View* instead of the preferred *Reading View*.

* this extension changes the URL so that the *Reading View* is opened
* this is done by changing the URL parameter: `action=default` to `DefaultItemOpen=1&Action=View`
* you will still be able to then use: Edit Document -> Edit in Browser

Icon Used: http://www.iconarchive.com/show/influenza-icons-by-cute-little-factory/Aspirin-icon.html

____

## July 2020 Update

The SharePoint online backend must have changed and `version 1.0` is no longer compatible.  You will need to upgrade this extension to `version 1.1`.

This is how `version 1.1` changes a *sharepoint.com* URL:
* Removes any `action=` parameter
* Removes any `mobileredirect=` parameter
* Then appends: `DefaultItemOpen=1&Action=View` to the end of the URL
