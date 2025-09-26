package com.examly.springapp.controller;


import com.examly.springapp.model.Interview;
import com.examly.springapp.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interviews")
@CrossOrigin(origins = "https://8081-cbcfadadebd329831151bccfaccecfeight.premiumproject.examly.io/")
public class InterviewController {

    @Autowired
    private InterviewService interviewService;

    @PostMapping("/add")
    public Interview addInterview(@RequestBody Interview interview) {
        return interviewService.addInterview(interview);
    }

    @GetMapping("/list")
    public List<Interview> getAllInterviews() {
        return interviewService.getAllInterviews();
    }

    @PutMapping("/update/{id}")
    public Interview updateInterview(@PathVariable Long id, @RequestBody Interview interview) {
        return interviewService.updateInterview(id, interview);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteInterview(@PathVariable Long id) {
        interviewService.deleteInterview(id);
        return "Interview deleted successfully";
    }
}
