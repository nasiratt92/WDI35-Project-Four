# Bottle-it

### Overview
A site for soft drink fans to celebrate cool and hipster soft drinks.

[Bottle-it - Link](bit.ly/bottle-it)

![picture alt](https://i.imgur.com/ilGKzRq.png "Home Page")

### Key features:

- Index page of soft-drinks
- Form to add new drink to the index including feature to latitude and longitude of store locations.
- News feed regarding world news on soft-drinks
- Fan drinks events listings
- Add event "Soft drink Jam" feature (i.e. Fans can host an event where one of the soft drinks from the drinks index will be drank)
- Two buttons to Social media share the site using Twitter and Facebook account  

### Technologies:

- HTML5
- SCSS
- JavaScript (ECMAScript 6)
- Lodash
- Node.js
- ReactJS
- bulma
- Express.js
- mongoose
- morgan
- mongoose
- Git
- GitHubs
- Heroku
- Trello
- Yarn

### Technical Requirements

You must:

* **Build a full-stack application** by making your own backend and your own front-end <kbd>✓</kbd>
* **Use an Express API** to serve your data from a Mongo database. <kbd>✓</kbd>
* **Consume your API with a separate front-end** built with React. <kbd>✓</kbd>
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models. <kbd>✓</kbd>
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut. <kbd>✓</kbd>
* **Have a visually impressive design**
* **Be deployed online** so it's publicly accessible. <kbd>✓</kbd>
---

### Project planning

As common practice in with developers, a handy note pad and pen were used to plan out models and to  calculate and agree on project MVP.


### Trello

A trello board was created to manage the project development. The trello board served as a key tool to stable development.

Trello Screenshot:
![trello](https://i.imgur.com/RBmSXTr.jpg)

[Trello board - Link](https://trello.com/b/JfmP3gqt)

---
### Challenges and Problems

A valuable skill I honed with this project was how to be time conscience when bug fixing without losing site of the overall project timeline.

Some other examples include:
- Creating a date picker using a React plugin without using HTML form field type "Date". Initially I intended to use [bulma-calender](https://wikiki.github.io/components/calendar/) an extension to my CSS framework, however after few hours I was not able to integrate this into the form field due to time, and I changed my method of approach to a React plugin (react-day-picker). The plugin was easily installed and was simple to import into the form.
- Uploading an image of the drink using file picker. This was a challenge I imposed on myself to after completing project MVP. The backend model contained a field type:Buffer to store image. The front end form submission had a field type: "file" was created. However, I was not able to understand the props which were handed over and was not able to write a function store the image.

As an overview this project served as a learning curve for many developer skills, the most important being time management. I had achieved my MVP and second degree MVP development, however, I was not able to fully complete the additional features. Which resulted in time shortage on some frontend development and styling.


---
### Wins
- Worked with React components to create web app.
- Backend fully completed and successfully tested all RESTFUL routes in [insominia](https://insomnia.rest/) app.
- Used [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for routing in the web app.
- Displayed two index components adjacently on [Event and News](https://bottle-it.herokuapp.com/eventsAndNews) page.
- Worked with a React plugin i.e. created a date picker for new events form.
- Wrote a function to log user's current latitude and longitude for drinks location form input.
- Interacted with external web API for the news feed.
- Deployed to Heroku

---
### Branding
I used [Hatchful](https://hatchful.shopify.com/), an online tool, to create a suitable emblem. Hatchful provided me with numerous resources for branding including:
* Hero image
* Landing page image
* numerous wireframes for social media platforms
* favicon file

[Link - full branding  resources supplied by Hatchful](./src/assets/HatchfulExport-All "Hatchful resorces folder")


The wireframes supplied were sufficient to complete site design scheme as developer.

##### Wireframe Screenshots:

![picture alt](https://i.imgur.com/dellLeT.png "Home Page wireframe")

![picture alt](https://i.imgur.com/SlYgah5.png "Home Page wireframe")

---

### Future Features

- Use Google vision API to to check the uploaded image if the drink is available from an on-line retailer and if so automatically save it drink's url model.
- Use the file picker in the add drinks form to save drink image without needing to rely on on-line URL or web API.
- Use star rating field in the Drinks model using radio buttons.
