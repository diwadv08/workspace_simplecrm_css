package com.examly.springapp.model;


import javax.persistence.*;

@Entity
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String candidateName;
    private String interviewerName;
    private String date;   // e.g., "2025-08-05"
    private String time;   // e.g., "14:30"
    private String status; // Scheduled / Completed
    private String feedback;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCandidateName() { return candidateName; }
    public void setCandidateName(String candidateName) { this.candidateName = candidateName; }

    public String getInterviewerName() { return interviewerName; }
    public void setInterviewerName(String interviewerName) { this.interviewerName = interviewerName; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getFeedback() { return feedback; }
    public void setFeedback(String feedback) { this.feedback = feedback; }
}
