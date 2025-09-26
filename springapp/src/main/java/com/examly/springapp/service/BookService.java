// Folder: com.examly.springapp.service
// File: BookService.java

package com.examly.springapp.service;

import com.examly.springapp.model.Book;
import com.examly.springapp.model.Review;
import com.examly.springapp.repository.BookRepository;
import com.examly.springapp.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepo;

    @Autowired
    private ReviewRepository reviewRepo;

    public Book saveBook(Book book) {
        return bookRepo.save(book);
    }

    public List<Book> getAllBooksWithAvgRating() {
        List<Book> books = bookRepo.findAll();
        return books.stream().map(book -> {
            List<Review> reviews = reviewRepo.findByBookId(book.getId());
            double avg = reviews.stream().mapToInt(Review::getRating).average().orElse(0.0);
            book.setDescription(book.getDescription() + " | Avg Rating: " + String.format("%.2f", avg));
            return book;
        }).collect(Collectors.toList());
    }
}
