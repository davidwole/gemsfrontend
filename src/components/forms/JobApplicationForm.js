import { useState } from "react";
import "../../styles/JobApplicationForm.css";

export default function JobApplicationForm() {
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="job_form">
      <div className="header_container">
        <h1 className="job_form_header">Gems Learning Academy Union City GA</h1>
        <h4>Employee Application</h4>
        <div>
          <h5>Applicant Information</h5>
        </div>
      </div>
    </div>
  );
}
