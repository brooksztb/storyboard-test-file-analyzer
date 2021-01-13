# Storyboard Coding Challenge - Audio File Analyzer UI

## Background

This project is my submission to Storyboard's audio inspection challenge. The project is intended to pull metadata from a static audio file, and display the results with specified data in the browser. The project is broken up into two different parts, `client` and `server`.

The client part of the project is a Vue based app, styled with tailwindcss a utility based css framework, and pulls the file data from a fetch request.

The server part of the project is an express server that hosts an endpoint to retrieve the file data, and utilizes a provided function to analyze the file.

## Preparation

### Step 1: Clone this repository.

```sh
$ git clone https://github.com/brooksztb/storyboard-test-file-analyzer.git
```

An important note for this repository, you'll need two separate command terminals open, one for the `client` and one for the `server`.

### Step 2: Install dependencies for the server.

After unpacking the repository, in one of the terminals, `cd` into `server` and install the `npm`
dependencies:

```sh
$ cd server
$ npm install
```

### Step 3: Install dependencies for the client.

After unpacking the repository, in the second terminal, `cd` into `client` and install the `npm`
dependencies:

```sh
$ cd client
$ npm install
```

After performing the above preparation steps, run this in your `server` terminal:

```sh
$ npm run start
```

This will start the express server on port 4000.

Once the server is running, run this in your `client` terminal

```sh
$ npm run serve
```

This will start the Vue app, and when you navigate to http://localhost:8080 you should see the following results:

![browser results](./fileAnalyzerUi.png)
