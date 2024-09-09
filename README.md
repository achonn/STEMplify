<a id="readme-top"></a>

# STEMplify

A tool to simplify text and files.

![homepage](https://github.com/user-attachments/assets/91946117-d05a-4192-ab43-3a5630be1fce)

Welcome to **STEMplify**! This platform simplifies text while retaining important keywords and supports different levels of simplification. It also allows for the simplification of `.html` and `.docx` files.


Features:

- **Text Simplification**: Simplify text while preserving key information.
- **Keyword Inclusion**: Retain specified keywords (multiple) in the simplified text.
- **Levels of Simplification**: Choose from three levels of simplification:
  - **Level 1**: Basic simplification, focusing on readability.
  - **Level 2**: Intermediate simplification, balancing readability and detail.
  - **Level 3**: Advanced simplification, emphasizing clarity and essential content.
- **File Support**: Simplify text from `.html` and `.docx` files.

## Technologies Used

This project is a web tool built with React & TypeScript for the frontend, MongoDB (Mongoose for schema management) and Express.js for the backend.

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation

_Below is an example of how you can run a local version of STEMplify on your machine_

1. Generate a **COHERE_API_TOKEN``** at <code>[https://docs.cohere.com/docs/chat-api]((https://docs.cohere.com/docs/chat-api))</code>
2. Clone the repo
   ```sh
   git clone git@github.com:achonn/STEMplify.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your <code>.env</code> file
5. Enter your API in `.env` file
   ```sh
   COHERE_API_TOKEN = 'ENTER YOUR COHERE_API_TOKEN';
   ```
6. Enter your mongodb url in `.env` file
   ```sh
   MONGODB_URL = 'ENTER YOUR MONGODB URL`
   ```
7. Set Cookie details
   ```sh
   CORS_ORIGIN = http://localhost:5173
   PORT = 'ENTER YOUR PORT NUMBER'
   ```
8. Start frontend server
   ```sh
   cd frontend/src
   npm run dev
   ```
9. Start backend server
    ```sh
    cd backend/src
    npm run dev
    ```
10. Once the servers are running, open your web browser and navigate to <code>http://localhost:5173</code> to access the chat application.
<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Usage
_Below are some screenshots of threddit in the browser_
<div>
  Simplify Text Page<br>
  <img src="https://github.com/user-attachments/assets/19c574b6-81ae-43b9-944a-c36110c7b0c5" width="600">
</div>
<br>

<div>
  Simplify File Page<br>
  <img src="https://github.com/user-attachments/assets/2d311ce4-9977-43e6-9fd9-98340f443786" width="600">
</div>
<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Usage

Simplify Text Video:


https://github.com/user-attachments/assets/91c7aeef-b6e9-45ed-b7ff-edbcc08a081b




Simplify File Video:


https://github.com/user-attachments/assets/7e3b17da-f868-40bd-974a-08f348bec2b1




<p align="right">(<a href="#readme-top">back to top</a>)</p>


