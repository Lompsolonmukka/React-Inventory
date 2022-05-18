function ItemsDisplay(props) {

    const showItem = (service) => {
        return (
          <tr>
            <th scope="row">{service.serviceId}</th>
            
            <td>{service.customerId}</td>
            <td>{service.serviceStatus}</td>
            
          </tr>
        );
    };

  return (
    <div className="container">
      <div className="row">
        <h2>Services</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              
              <th scope="col">ServiceId</th>
              <th scope="col">CustomerId</th>
              <th scope="col">ServiceStatus</th>
              
            </tr>
          </thead>
          <tbody>{props.services.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}
export default ItemsDisplay;