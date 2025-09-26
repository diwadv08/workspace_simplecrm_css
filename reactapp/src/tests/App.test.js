import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { within } from '@testing-library/react';

import Home from '../components/Home';
import AddInterview from '../components/AddInterview';
import ViewInterviews from '../components/ViewInterviews';
import UpdateInterview from '../components/UpdateInterview';

jest.mock('axios');

// Test 1: Home component renders with static text
test('renders_Home_component_with_static_text', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const title = screen.getByText(/Interview Scheduler/i);
  expect(title).toBeInTheDocument();
});

// Test 2: AddInterview form fields with placeholders
test('renders_AddInterview_form_fields_with_placeholders', () => {
  render(
    <BrowserRouter>
      <AddInterview />
    </BrowserRouter>
  );

  expect(screen.getByPlaceholderText(/Candidate Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Interviewer Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Status/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Feedback/i)).toBeInTheDocument();
});

// Test 3: AddInterview heading renders correctly
test('renders_AddInterview_heading_text', () => {
  render(
    <BrowserRouter>
      <AddInterview />
    </BrowserRouter>
  );
  expect(screen.getByText(/Add Interview/i)).toBeInTheDocument();
});

// Test 4: ViewInterviews renders all expected table headers
test('renders_ViewInterviews_table_headers', () => {
  render(
    <BrowserRouter>
      <ViewInterviews />
    </BrowserRouter>
  );

  // Look within the table for column headers
  const table = screen.getByRole('table');
  const headers = within(table).getAllByRole('columnheader');

  expect(headers.map(h => h.textContent)).toEqual(
    expect.arrayContaining([
      'ID',
      'Candidate',
      'Interviewer',
      'Date',
      'Time',
      'Status',
      'Feedback',
      'Actions'
    ])
  );
});

// Test 5: UpdateInterview component renders without crashing
test('renders_UpdateInterview_component_without_crashing', async () => {
  // Mock axios.get to prevent API crash
  axios.get.mockResolvedValueOnce({
    data: [
      { id: 1, candidate: 'Test', interviewer: 'John', date: '2025-08-01', time: '09:00', status: 'Scheduled', feedback: 'Pending' }
    ]
  });

  render(
    <BrowserRouter>
      <UpdateInterview />
    </BrowserRouter>
  );

  // Wait for heading
  const heading = await screen.findByText(/Update Interview/i);
  expect(heading).toBeInTheDocument();
});
