# Personal Blogging Platform API

This is a RESTful API that powers a personal blog. The API provides endpoints to create, read, update, and delete blog articles.

## Features

- Return a list of articles with optional filters such as publishing date or tags.
- Return a single article specified by its ID.
- Create a new article to be published.
- Delete a single article specified by its ID.
- Update a single article specified by its ID.

## Tech Stack

- Backend Framework: Fastify with Node.js
- Database: MongoDB

## Getting Started

### Prerequisites

- Node.js (version X.X.X or higher)
- MongoDB (version X.X.X or higher)

## Installation

1. Clone the repository:

```
git clone https://github.com/holydexboi/personalblog-fastify.git
cd personal-blogging-platform-api
```

1. Install dependencies:

```
npm install
```

1. Running the API
   To start the API server:

```
npm start
```

## API Endpoints

1. Get a list of articles: **_GET_** `/post`

1. Get a single article: **_GET_** `/post/:id`

1. Create a new article: **_POST_** `/post/create`

1. Delete an article: **_DELET_** `/post/delete/:id`

1. Update an article: **_PUT_** `/post/edit/:id`

## Usage

Use a tool like Postman or curl to interact with the API endpoints.
Refer to the endpoints section for available routes and required parameters.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
