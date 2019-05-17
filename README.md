<a href="https://www.buymeacoffee.com/faragos" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>


The idea behind this tool is that you can download a Liferay page with Vue portlets. \
It prepares a Liferay page for webpack.

``npx liferay-vue-utils http://localhost:8080``

# Example
https://github.com/faragos/liferay-vue-utils-example

# What does it?
It generates a **public** folder with the following content:
- **index.html** (Indexpage for Webpack)
- **vueComponents.json** (data all Vue calls)

# How it works
It scans for the following attribute on a HTML-tag:
````
data-portlet-type="vue"
````
1. If the script finds the attribute on a tag it copies the **id** and generates a json file.
1. If the following script tag has a "Vue call" with the following structure, then the script also saves it.
1. In the end it checks all script-tags removes all "Vue calls"

*Vue calls get found the following way:*
````
new Vue(
...
)
````

# Development with Webpack (Recommended)

## Why Webpack and not Liferay Blade Deploy?
There are some drawbacks with the Liferay development and Vue. When you use the webpack you work around this problems.

The mains advantages are:
1. No caching
1. Build needs 1 sec
1. Hotreload (reloads the page when build is finished)
1. Vue Devtools are working
1. Good Errormessages

## How to set it up
1. create a **liferay.vue.config.js** in the root of the module.
1. Add ``auth.token.check.enabled=false`` to the portal-ext.properties
1. Configure your http to redirect to webpack


### Example for liferay.vue.config.js
````
module.exports = {
  protocol: 'http',
  host: '[URL]',
  port: 3000
}
````

## How to update your index.html
``npx liferay-vue-utils http://localhost:8080``



## Problems
*I always get: ``Path must be a string. Received undefined``* -> Ignore it
