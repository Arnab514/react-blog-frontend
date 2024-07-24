# Blog Website Frontend

A simple and elegant blog website frontend built with React, Tailwind CSS, and React Quill.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Local Storage](#local-storage)
- [Navbar](#navbar)
- [License](#license)

## Features

- Create, update, and view blogs.
- Support for uploading thumbnail images from URL or local device.
- Rich text editing for blog content using React Quill.
- Categorize blogs with multiple topics.
- Responsive design with Tailwind CSS.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/blog-website-frontend.git
    cd blog-website-frontend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the development server:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Components

### Navbar

The `Navbar` component provides navigation links to the Home page and the Create Blog page, and includes icons for LinkedIn, GitHub, email, and a personal portfolio website.

### Home

The `Home` component fetches blogs from local storage and displays them in a responsive grid layout. Each blog card shows the thumbnail, title, author, date, topics, and links to read or edit the blog.

### CreateBlog

The `CreateBlog` component provides a form to create a new blog. It includes fields for title, author, date, thumbnail (from URL or local device), content, and topics. The blog is saved to local storage.

### UpdateBlog

The `UpdateBlog` component allows editing an existing blog. It pre-fills the form with the blog's current details and updates the blog in local storage upon submission.

### BlogGrid

The `BlogGrid` component displays a grid of blog cards with thumbnails, titles, and content.

## Local Storage

The `localStorage.js` utility file provides functions to save and retrieve data from local storage.

### saveToLocalStorage

```js
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
