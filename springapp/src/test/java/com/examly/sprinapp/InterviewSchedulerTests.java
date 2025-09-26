package com.examly.sprinapp;

import java.io.File;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.examly.springapp.SpringappApplication;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
public class InterviewSchedulerTests {

    @Autowired
    private MockMvc mockMvc;

    // === API TESTS ===

    @Test
    void test_Add_Interview() throws Exception {
        String json = """
        {
            "candidateName": "John Doe",
            "interviewerName": "Jane Smith",
            "date": "2025-08-10",
            "time": "14:00",
            "status": "Scheduled",
            "feedback": "N/A"
        }
        """;

        mockMvc.perform(post("/api/interviews/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void test_Get_All_Interviews() throws Exception {
        mockMvc.perform(get("/api/interviews/list")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    // === DIRECTORY CHECKS ===

    @Test
    void test_Controller_Directory_Exists() {
        File dir = new File("src/main/java/com/examly/springapp/controller");
        assertTrue(dir.exists() && dir.isDirectory());
    }

    @Test
    void test_Model_Directory_Exists() {
        File dir = new File("src/main/java/com/examly/springapp/model");
        assertTrue(dir.exists() && dir.isDirectory());
    }

    @Test
    void test_Repository_Directory_Exists() {
        File dir = new File("src/main/java/com/examly/springapp/repository");
        assertTrue(dir.exists() && dir.isDirectory());
    }

    @Test
    void test_Service_Directory_Exists() {
        File dir = new File("src/main/java/com/examly/springapp/service");
        assertTrue(dir.exists() && dir.isDirectory());
    }

    // === FILE CHECKS ===

    @Test
    void test_InterviewController_File_Exists() {
        File file = new File("src/main/java/com/examly/springapp/controller/InterviewController.java");
        assertTrue(file.exists());
    }

    @Test
    void test_Interview_File_Exists() {
        File file = new File("src/main/java/com/examly/springapp/model/Interview.java");
        assertTrue(file.exists());
    }

    // === CLASS EXISTENCE CHECK ===

    @Test
    void test_InterviewController_Class_Exists() {
        checkClassExists("com.examly.springapp.controller.InterviewController");
    }

    @Test
    void test_InterviewRepository_Class_Exists() {
        checkClassExists("com.examly.springapp.repository.InterviewRepository");
    }

    @Test
    void test_InterviewService_Class_Exists() {
        checkClassExists("com.examly.springapp.service.InterviewService");
    }

    @Test
    void test_InterviewModel_Class_Exists() {
        checkClassExists("com.examly.springapp.model.Interview");
    }

    // === FIELD EXISTENCE CHECK ===

    @Test
    void test_Interview_Model_Has_CandidateName_Field() {
        checkFieldExists("com.examly.springapp.model.Interview", "candidateName");
    }

    @Test
    void test_Interview_Model_Has_InterviewerName_Field() {
        checkFieldExists("com.examly.springapp.model.Interview", "interviewerName");
    }

    @Test
    void test_Interview_Model_Has_Date_Field() {
        checkFieldExists("com.examly.springapp.model.Interview", "date");
    }

    @Test
    void test_Interview_Model_Has_Time_Field() {
        checkFieldExists("com.examly.springapp.model.Interview", "time");
    }

    @Test
    void test_Interview_Model_Has_Status_Field() {
        checkFieldExists("com.examly.springapp.model.Interview", "status");
    }

    @Test
    void test_Interview_Model_Has_Feedback_Field() {
        checkFieldExists("com.examly.springapp.model.Interview", "feedback");
    }

    // === REPO INTERFACE IMPLEMENTATION ===

    @Test
    void test_InterviewRepository_Extends_JpaRepository() {
        checkClassImplementsInterface(
            "com.examly.springapp.repository.InterviewRepository",
            "org.springframework.data.jpa.repository.JpaRepository"
        );
    }

    // === UTILITY METHODS ===

    private void checkClassExists(String className) {
        try {
            Class.forName(className);
        } catch (ClassNotFoundException e) {
            fail("Class " + className + " does not exist.");
        }
    }

    private void checkFieldExists(String className, String fieldName) {
        try {
            Class<?> clazz = Class.forName(className);
            clazz.getDeclaredField(fieldName);
        } catch (ClassNotFoundException | NoSuchFieldException e) {
            fail("Field " + fieldName + " not found in " + className);
        }
    }

    private void checkClassImplementsInterface(String className, String interfaceName) {
        try {
            Class<?> clazz = Class.forName(className);
            Class<?> iface = Class.forName(interfaceName);
            assertTrue(iface.isAssignableFrom(clazz));
        } catch (ClassNotFoundException e) {
            fail("Missing class or interface.");
        }
    }
}
