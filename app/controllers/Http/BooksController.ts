import type { HttpContext } from '@adonisjs/core/http'
import Book from '../../models/book.js'

export default class BooksController {
  public async index({ response }: HttpContext) {
    const books = await Book.all()
    return response.json({ data: books })
  }

  public async show({ params, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    return response.json({ data: book })
  }

  public async store({ request, response }: HttpContext) {
    const book = new Book()
    book.title = request.input('title')
    book.author = request.input('author')
    book.genre = request.input('genre')
    book.publishedYear = request.input('published_year')
    
    await book.save()
    return response.status(201).json({ data: book })
  }

  public async update({ params, request, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    book.title = request.input('title', book.title)
    book.author = request.input('author', book.author)
    book.genre = request.input('genre', book.genre)
    book.publishedYear = request.input('published_year', book.publishedYear)
    
    await book.save()
    return response.json({ data: book })
  }

  public async destroy({ params, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
    return response.json({ message: 'Book deleted successfully' })
  }
} 