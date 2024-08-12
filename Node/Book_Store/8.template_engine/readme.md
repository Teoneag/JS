# Embedded Template Engine

An embedded template engine in Express is a library or module that allows you to write dynamic HTML templates that can be rendered on the server-side and sent to the client as a response. 

These templates are embedded within the application code and can be used to generate the final HTML that is sent to the client.

# How to embedd template engine?

You can add an embedded template engine in Express by using a module ejs.
First, you would need to install the package by running the following command in your terminal:

```js
npm install ejs
```

Then, in your Express app's main file, you would require the package and set it as the template engine:

```js
app.set('view engine', 'ejs');
```

Finally, you would need to create views in the views folder, with the correct file extension(.ejs), and render them using the render method:

```js
app.get('/', function (req, res) {
    res.render('index');
});
```

This will render the views/index.ejs file and return the HTML to the client.

## How to display data in the HTML file using the ejs template?

In order to display data in an HTML file using the EJS template engine in Express, you will need to pass the data to the render method when rendering the view.

First, you will need to create an object that contains the data you want to pass to the view, for example:


```js
const data = {
    title: 'My Website',
    user: {
        name: 'John Doe',
        age: 30
    },
    items: ['item1', 'item2', 'item3']
};
```

Then, in your route handler, you can pass the data object to the render method:

```js
app.get('/', function (req, res) {
    res.render('index', { data: data });
});
```


Finally, in your views/index.ejs file, you can access the data using EJS tags. For example, you can display the title by adding <%= data.title %> in the appropriate place in your HTML file, and you can loop through the items array by adding:

```js
<% data.items.forEach(function(item) { %>
    <li><%= item %></li>
<% }); %>
```


It's also possible to assign a variable to the data and use it directly in the views:

```js
app.get('/', function (req, res) {
    res.render('index', data);
});
```

so you can use <%= title %> instead of <%= data.title %> in the views.


