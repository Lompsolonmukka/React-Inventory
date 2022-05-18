import { useState } from "react";

function AddItem(props) {
    const [serviceId, setServiceId] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [serviceStatus, setServiceStatus] = useState("");
  
    
    const addItemButtonPressed = () => {
        props.addItem({ serviceId: serviceId, customerId: customerId, serviceStatus: serviceStatus });
        setServiceId("");
        setCustomerId("");
        setServiceStatus("");
        
    };


  return (
    <div className="container">
      <div className="row">
        <h2>Add service</h2>
      </div>

      <div className="row">
        <label htmlFor="serviceId-field">ServiceId:</label>
        <input
          id="serviceId-field"
          type="text"
          className="form-control"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
        />
        <label htmlFor="customerId-field">CustomerId:</label>
        <input
          id="customerId-field"
          type="text"
          className="form-control"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <label htmlFor="serviceStatus-field">ServiceStatus:</label>
        <input
          id="serviceStatus-field"
          type="text"
          className="form-control"
          value={serviceStatus}
          onChange={(e) => setServiceStatus(e.target.value)}
        />
        
      </div>
      <div className="row mt-3">
        <button type="button" className="btn btn-secondary" onClick={addItemButtonPressed}>
          Add Service
        </button>
      </div>
    </div>
  );
}

export default AddItem;