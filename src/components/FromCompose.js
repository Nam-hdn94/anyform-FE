import React, {useState} from "react";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        subject: '',
        description: '',
        approvals: [],
    });

    const handleChange = (e) => {
        setFormDetail({...FormDetail, [e.target.name]: e.target.value});
    };

    return (
        <div className="form-compose">
          <h2>Compose New Form</h2>
          <input 
            name="subject" 
            placeholder="Enter subject" 
            value={formDetails.subject} 
            onChange={handleChange} 
          />
          <textarea 
            name="description" 
            placeholder="Enter form description"
            value={formDetails.description} 
            onChange={handleChange} 
          />
          <button>Send</button>
          <button>Save as Draft</button>
        </div>
      );
}
export default FormCompose;