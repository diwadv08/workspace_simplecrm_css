// Folder: com.examly.springapp.repository
// File: BookRepository.java

package com.examly.springapp.repository;

import com.examly.springapp.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {}
