# Book Management System

A simple book management system built with AdonisJS and vanilla JavaScript.

## Features

- Create, Read, Update, and Delete (CRUD) operations for books
- Responsive design
- Real-time updates
- Form validation
- User-friendly interface

## Prerequisites

- Node.js (v16 or higher)
- MySQL (v8 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   NODE_ENV=development
   PORT=3333
   APP_KEY=your-app-key-here
   HOST=localhost
   LOG_LEVEL=debug

   # Database Configuration
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your-password
   DB_DATABASE=book_management
   ```

4. Create the database:
   ```sql
   CREATE DATABASE book_management;
   ```

5. Run database migrations:
   ```bash
   node ace migration:run
   ```

6. Start the development server:
   ```bash
   node ace serve --watch
   ```

7. Open your browser and navigate to `http://localhost:3333`

## API Endpoints

### Books

- `GET /books` - Get all books
- `GET /books/:id` - Get a specific book
- `POST /books` - Create a new book
- `PUT /books/:id` - Update a book
- `DELETE /books/:id` - Delete a book

### Request/Response Format

#### Create/Update Book
```json
{
  "title": "string",
  "author": "string",
  "genre": "string",
  "published_year": number
}
```

#### Response Format
```json
{
  "data": {
    "id": number,
    "title": "string",
    "author": "string",
    "genre": "string",
    "publishedYear": number,
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
}
```

## Project Structure

```
├── app/
│   ├── controllers/    # API controllers
│   ├── models/        # Database models
│   └── middleware/    # Custom middleware
├── config/           # Configuration files
├── database/
│   └── migrations/   # Database migrations
├── public/          # Static files
└── start/          # Application startup files
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
