import { httpGetRequest } from './util/fetch-data.js';
import employeeView from './views/employee.js'
import createElementFromTemplate from './util/createElementFromTemplate.js'

window.addEventListener("load", function (e) {
  /*
        HTTP GET Request for JSON data

        Model
        "https://reqres.in/api/users"

        View
        - Template Literal String of Markup
        - Convert the template to a dom node
        - Seed the template with the data
        - Wrap the data in a container
        - Append the container to the dom
    */

    httpGetRequest("https://reqres.in/api/users").then(result => {
        // passing data to and getting back an array of template literals with
        // data inside
        const templates = employeeView(result.data)
        console.log(templates)
        const markup = createElementFromTemplate(templates)
    })
});
