import React from 'react';
import { Link } from 'react-router-dom';

const FormCard = ({ form }) => {
  return (
    <div className="form-card">
      <h3>{form.subject}</h3>
      <p>{form.description.slice(0, 100)}...</p>
      <p>Approval Level: {form.approvalLevel}</p>
      <p>Status: {form.status}</p>
      <Link to={`/form/${form.id}`}>View Details</Link>
    </div>
  );
};

export default FormCard;
