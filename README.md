# Sensedia Full-Stack Developer Challenge

The challenge consist on the development of 6 user stories based of their priorities, utilizing Sensedia's API and following the given layout.

## Commit Standard

**Sn: description**
For a story, where 'n' is the number of the story.
**Sn-B: description**
For the bonus of a particular story.

## Tech Stack

- CSS sass
- Formik
- Next.js
- React.js
- Uuidv4
- Jest

## Prerequisites

- [Next.js](https://nextjs.org/) 14
- [Node.js](https://nodejs.org/en) 18.17 or later

## Dependencies Installation

```sh
npm install
```

## Execution

```sh
npm run dev
```

## Run Unit Tests

```sh
npm run test
```

## Notes

==US1 display the city:== a constant of type array was created with 20 cities and one is randomly selected for each user.

==USX Post and albums counters:== in the table, posts/albums are showed as a number, this value is calculated counting the posts/albums a user has associated using the corresponding endpoints.

==USX the blocked property:== since a user doesn't have the property 'blocked' and this new property can't be added by using PUT, this was resolved by appending the string '|blocked' to the property 'name'. So when a user is blocked it is removed from the list because the list is filtering the users without the blocked string to be displayed in the table.

==USX Register:== the fields "Nombre completo", "Ciudad", "Días de la semana" of the registration form are not being used in the actual POST call since these properties don't exist in the schema and new properties can't be added to it.

==US3 /user/{username}:== Considered this route as a user detail view for each user of the table, since the username can't be unique, the actual route is user/{id} where the user id is unique.

==US5 dropdown menu:== a json file was created with user data to be used in the menu for the user initial and name.
