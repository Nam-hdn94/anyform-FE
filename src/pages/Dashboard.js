import React, { useState } from 'react';
import FormCard from '../components/FormCard';

const Dashboard = () => {
  // Place useState inside the component
  const [forms] = useState([
    {
      id: 1,
      subject: 'Form 1',
      description: 'This is the description for form 1',
      approvalLevel: 2,
      status: 'Pending'
    },
    {
      id: 2,
      subject: 'Form 2',
      description: 'This is the description for form 2',
      approvalLevel: 1,
      status: 'Approved'
    }
  ]);

  return (
    <div className="dashboard">
      <h2>Your Forms</h2>
      <div className="form-list">
        {forms.map((form) => (
          <FormCard key={form.id} form={form} />
        ))}
      </div>

      <div className="pending-items">
        <h3>Pending Items</h3>
        {/* List of pending items */}
        <p>You have {forms.filter(form => form.status === 'Pending').length} pending items.</p>
      </div>

      <div className="drafts">
        <h3>Drafts</h3>
        {/* List of draft forms */}
        <p>You have 0 drafts.</p>
      </div>
    </div>
  );
};

export default Dashboard;

