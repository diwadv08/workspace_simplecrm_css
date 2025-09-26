// File: ReviewService.java

package com.examly.springapp.service;

import com.examly.springapp.model.Review;
import com.examly.springapp.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepo;

    public Review saveReview(Review review) {
        return reviewRepo.save(review);
    }

    public List<Review> getReviewsByBookId(Long bookId) {
        return reviewRepo.findByBookId(bookId);
    }
}

