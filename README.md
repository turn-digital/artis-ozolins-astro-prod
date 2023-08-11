# GET ALL THIS STUFF

`npm install`
`npm run start || astro dev`
regenarate languages: `npx astro-i18next generate`

## How to change something

### If you want to change some texts

1. Go to /public/locales/ chose in which language you want to change some textx or in both
2. open en or lv folder, open translation.json file
3. You will see structure like this, so the name of the page and then inside curly braces you can find all the needed texts

   <code>
   {
   "index": {
   ...some code
   },
   "moderator": {
   ...some code
   },
   "pasakumu": {
   ...some code
   },
   "radio": {
   ...some code
   },
   "404": {
   ...some code
   }
   }
   </code>

4. You can also use ctrl + f to find some text inside of the file
   For example you want to change the title of the second article in the pasakumu page
   "The Ignition Events" should be changed to what you want and thats all
   <code>
   {
   "index": {
   ...some code
   },
   "moderator": {
   ...some code
   },
   "pasakumu": {
   ...some code
   "Article_2_Title": "The Ignition Events",
   ...some code
   },
   "radio": {
   ...some code
   },
   "404": {
   ...some code
   }
   }
   </code>

   5. Run npx astro-i18next generate

### How to change image

1. Upload you new image in piblic/assets/images/
2. Go to the src/pages/the name of the page
3. In const articles or in const reviews change the name of the desired pic
4. "/assets/images/DigitalasBrokastis.jpeg" -> "/assets/images/your-image-name.jpeg"
5. Run npx astro-i18next generate
