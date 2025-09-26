package com.examly.springapp.service;


import com.examly.springapp.model.Interview;
import com.examly.springapp.repository.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterviewService {

    @Autowired
    private InterviewRepository interviewRepository;

    public Interview addInterview(Interview interview) {
        return interviewRepository.save(interview);
    }

    public List<Interview> getAllInterviews() {
        return interviewRepository.findAll();
    }

    public Interview updateInterview(Long id, Interview updated) {
        Interview interview = interviewRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Interview not found with ID: " + id));
        interview.setCandidateName(updated.getCandidateName());
        interview.setInterviewerName(updated.getInterviewerName());
        interview.setDate(updated.getDate());
        interview.setTime(updated.getTime());
        interview.setStatus(updated.getStatus());
        interview.setFeedback(updated.getFeedback());
        return interviewRepository.save(interview);
    }

    public void deleteInterview(Long id) {
        if (!interviewRepository.existsById(id)) {
            throw new RuntimeException("Interview not found with ID: " + id);
        }
        interviewRepository.deleteById(id);
    }
}


