# MERN Stack Tasks App (MySQL) 

This application belongs to the set of tutorials made with [React Hooks](https://es.reactjs.org/docs/hooks-intro.html).

This project is Full Stack, so I am using technologies like [Nodejs](https://nodejs.org/en/), [Express](https://expressjs.com/es/guide/routing.html) and [MySQL](https://hub.docker.com/_/mysql) database for the backend and [React](https://reactjs.org/) for the frontend.

This application is in charge through a form to register tasks with their title, description, date of creation and if it is done or not. Then, we can view a list of all the tasks, where we can modify, delete or mark them as done.

![MERN Stack Tasks App (MySQL)](https://i.ibb.co/4Rqt25v/mern-stack-tasks-app-mysql.png)

![Form MERN Stack Tasks App (MySQL)](https://i.ibb.co/kDHWHtY/form-mern-stack-tasks-app-mysql.png)

To create this project we have used [Vite + React](https://vitejs.dev/guide/)

For this application we have also used libraries such as [TailwinCSS](https://tailwindcss.com/docs/guides/vite) to style it, [Formik](https://formik.org/docs/overview) to develop forms in a more comfortable way. Backend libraries like [Express](https://www.npmjs.com/package/express), [mysql2](https://www.npmjs.com/package/mysql2), [nodemon](https://www.npmjs.com/package/nodemon) and [morgan](https://www.npmjs.com/package/morgan). I also use [Axios](https://axios-http.com/es/docs/intro) for the communication API between frontend and backend.

We have used [React Hooks](https://es.reactjs.org/docs/hooks-intro.html) like **useState**, **useEffect** and **useContext**.

## Quick start

To deploy this project, you should first install both the server and client node_modules packages. To do this, open two terminals separately. In one of them go to the main project folder and run: 

```bash
npm install
```

In the other terminal, go to the client directory and there run: *npm install* in the same way.

After installation make sure you have mysql installed locally or via docker. In the project path /server/db.js I have created a basic configuration file to use mysql. Make sure you have the same database and configuration in your mysql.

Finally, in both terminals, both root and client execute the command:

```bash
npm run dev
```

In the browser type the url:

```url
http://localhost:5173/
```
## Compile dist files

To compile the dist files you need to go to client path and execute:

```bash
npm run build
```

This will create the static dist files. In the main path of the project execute:
```bash
npm run start
```
You will be able to use the web from http://localhost:3000

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
