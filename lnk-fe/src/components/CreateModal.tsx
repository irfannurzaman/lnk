import React, { useState } from "react";
import "./modal.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sendEmail } from "../services/api";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailSent: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onEmailSent }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const emailData = {
        id: Date.now(),
        title: description,
        allDay: true,
        email: email,
        start: selectedDate ? selectedDate : new Date(),
        end: selectedDate
          ? new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000)
          : new Date(),
      };

      await sendEmail(
        emailData.id,
        emailData.title,
        emailData.allDay,
        emailData.email,
        emailData.start,
        emailData.end
      );
      onClose();
      onEmailSent();
      alert("sukses kirim email");
    } catch (err) {
      setError("Failed to send email.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Send Email</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            <span className="label">Email address</span>
            <div className="input-icon">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label>
            <span className="label">Date</span>
            <div className="input-icon">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
                placeholderText="Select a date"
                className="date-picker-input"
                dateFormat="dd/MM/yyyy"
                showPopperArrow={false}
                required
              />
            </div>
          </label>
          <label>
            <span className="label">Description</span>
            <div className="input-icon">
              <textarea
                placeholder="Write something about yourself..."
                rows={4}
                style={{
                  backgroundColor: "#fff",
                  width: "100%",
                  color: "#000",
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
          </label>
          {error && <div className="error-message">{error}</div>}
          <div className="modal-actions">
            <div className="action-buttons">
              <button type="submit" className="save-button" disabled={loading}>
                {loading ? "Sending..." : "Send Email"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
