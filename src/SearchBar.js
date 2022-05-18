import { useState } from "react";
import Select from "react-select";

function SearchBar(props) {
  const [serviceId, setServiceId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [serviceStatus, setServiceStatus] = useState("");
  

  const searchButtonPressed = () => {
    props.updateSearchParams({
      serviceId: serviceId,
      customerId: customerId,
      serviceStatus: serviceStatus,
      
    });
  };

  const statuses = ["NEW", "ACTIVE", "MODIFIED"];


  return (
    <div className="container">
      <div className="row">
        <h2>Search for service</h2>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="serviceId-field">ServiceId:</label>
          <input
            id="serviceId-field"
            type="text"
            className="form-control"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="customerId-field">CustomerId:</label>
          <input
            id="customerId-field"
            type="text"
            className="form-control"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="serviceStatus-field">ServiceStatus:</label>
          <Select
            id="serviceStatus-field"
            options={statuses.map((opt) => ({ label: opt, value: opt }))}
            value={serviceStatus}
            onChange={setServiceStatus}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-5" />
        <button
          type="button"
          className="btn btn-secondary col-2"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
