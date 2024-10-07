import React, { useState } from 'react';

const Workspace = () => {
  const [newWorkspace, setNewWorkspace] = useState('');
  const [existingWorkspace, setExistingWorkspace] = useState('');

  return (
    <div className="workspace">
      <h2>Create a New Workspace</h2>
      <input 
        type="text" 
        placeholder="Enter new workspace name" 
        value={newWorkspace} 
        onChange={(e) => setNewWorkspace(e.target.value)} 
      />
      <button>Create Workspace</button>

      <h2>Sign In to Existing Workspace</h2>
      <input 
        type="text" 
        placeholder="Enter workspace name" 
        value={existingWorkspace} 
        onChange={(e) => setExistingWorkspace(e.target.value)} 
      />
      <button>Sign In</button>
    </div>
  );
};

export default Workspace;
