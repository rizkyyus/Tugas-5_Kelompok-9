/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import BooksController from '../app/controllers/Http/BooksController.js'

// Book routes
router.get('/books', [BooksController, 'index'])
router.get('/books/:id', [BooksController, 'show'])
router.post('/books', [BooksController, 'store'])
router.put('/books/:id', [BooksController, 'update'])
router.delete('/books/:id', [BooksController, 'destroy'])

// Serve static files
router.get('/', async ({ response }) => {
  return response.download('public/index.html')
})
