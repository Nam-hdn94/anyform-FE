import React, { useState } from 'react';

const FormApproval = () => {
  const [approvals, setApprovals] = useState([{ level: 1, approver: '' }]);
  const [formDescription, setFormDescription] = useState('');
  const [attachments, setAttachments] = useState([]);

  // Handle adding more approval levels
  const addApprovalLevel = () => {
    setApprovals([...approvals, { level: approvals.length + 1, approver: '' }]);
  };

  // Handle input changes for each approval level
  const handleApprovalChange = (index, value) => {
    const updatedApprovals = approvals.map((approval, i) =>
      i === index ? { ...approval, approver: value } : approval
    );
    setApprovals(updatedApprovals);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  return (
    <div className="form-approval">
      <h2>Approval Workflow</h2>
      {approvals.map((approval, index) => (
        <div key={index} className="approval-level">
          <label>Approval Level {approval.level}:</label>
          <input
            type="text"
            placeholder="Enter approver email or username"
            value={approval.approver}
            onChange={(e) => handleApprovalChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addApprovalLevel}>Add More Approvals</button>

      <h3>Form Description:</h3>
      <textarea
        placeholder="Enter form description"
        value={formDescription}
        onChange={(e) => setFormDescription(e.target.value)}
      />

      <h3>Attachments (Max 5 files, 25MB each):</h3>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {attachments.map((file, idx) => (
          <p key={idx}>{file.name}</p>
        ))}
      </div>

      <button>Send for Approval</button>
      <button>Save Draft</button>
    </div>
  );
};

export default FormApproval;
