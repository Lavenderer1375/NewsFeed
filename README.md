# News Feed App

This is a simple news feed application built with React using Vite as the build tool. It allows users to browse news articles from different sources and filter them based on various criteria.
With the 'Dockerfile' image added, there should be now problem to start running the project on any device.
Also I'm currently working in another front end position but my intention is to change my job, so excuse me if this project is a bit messy specifically in styling, cuz I had to work through it in the office and home and squeeze it between my schedule.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) or yarn

### Installing Dependencies

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Lavenderer1375/NewsFeed.git
```

2. Navigate to the project directory:

```bash
cd news-feed-app
```

3. Install the necessary dependencies:

```bash
npm install
```

or with yarn:

```bash
yarn install
```

### Running the Project

Once the dependencies are installed, you can run the project using the following command:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

This command starts the development server and opens the application in your default web browser.

### Building the Project

To build the project for production deployment, run:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

This command generates optimized production-ready files in the `dist` directory.

### Running with Docker

Alternatively, you can run the project using Docker. Make sure you have Docker installed on your machine. Build the Docker image using:

```bash
docker build -t my-newsfeed .
```

Run the Docker container:

```bash
docker run -d -p 8080:80 my-newsfeed
```

You can now access the application at [http://localhost:8080](http://localhost:8080).

## Project Structure

The project structure is as follows:

```
.
├── src/                  # Source files
│   ├── components/       # React components
│   ├── pages/            # Page components
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
├── Dockerfile            # Docker configuration file
├── .eslinrc.cjs          # ES-Lint configuration file
├── .gitignore            # gitignore file for working with git repos
├── index.html            # Main index.html file
├── package-lock.json
├── tailwind.config.js    # Tailwind configuration file
└── vite.config.js        # Vite configuration file
```

## Technologies Used

- React
- Vite
- Axios
- React Query
- Tailwind CSS (for styling)
- Docker

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---
