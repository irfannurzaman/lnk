import React, { useState, useEffect } from "react";
import Calendar from "../components/Calendar";
import EmailList from "../components/EmailList";
import CreateModal from "../components/CreateModal";
import Navbar from "../components/Navbar";
import { getEmails } from "../services/api";
import { Event } from "../types";
import { useAuth } from "../contexts/AuthContext";
const HomePage: React.FC = () => {
  const { logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emails, setEmails] = useState<any[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchEmails = async () => {
    try {
      const response = await getEmails();
      const emailEvents: Event[] = response.data.map((email: any) => ({
        start: new Date(email.start),
        end: new Date(email.end),
        title: email.title,
      }));
      setEvents(emailEvents);
      setEmails(response.data);
    } catch (error) {
      console.error("Failed to fetch emails:", error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div style={{ display: "flex" }}>
        <Calendar events={events} />
        <EmailList emails={emails} handleOpenModal={handleOpenModal} />
      </div>

      <CreateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onEmailSent={fetchEmails}
      />
    </div>
  );
};

export default HomePage;
