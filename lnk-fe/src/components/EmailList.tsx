import React from "react";
import "./EmailList.css";

interface Email {
  id: number;
  title: string;
  email: string;
  allDay: boolean;
  start: string;
  end: string;
}

interface EmailListProps {
  emails: Email[];
  handleOpenModal: () => void;
}

const EmailList: React.FC<EmailListProps> = ({ emails, handleOpenModal }) => {
  return (
    <div className="email-list">
      <button
        style={{
          marginBottom: 50,
        }}
        onClick={handleOpenModal}
      >
        Create
      </button>
      <h1>Daftar Email</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Email</th>
            <th>All Day</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.id}</td>
              <td>{email.title}</td>
              <td>{email.email}</td>
              <td>{email.allDay ? "Yes" : "No"}</td>
              <td>{new Date(email.start).toLocaleString()}</td>
              <td>{new Date(email.end).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailList;
