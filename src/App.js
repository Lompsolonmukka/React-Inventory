import "./App.css";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import { useEffect, useState } from "react";
import ItemsDisplay from "./ItemsDisplay";


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ services: [] });

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((response) => response.json())
      .then((data) => setData({ services: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (service) => {
    let services = data["services"];
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service)
    };
    fetch("http://localhost:3000/services", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        services.push(data);
        setData({ services: services });
      }
    );
    
  };
  const filterData = (data) => {
    const filteredData = [];
  
    if (!filters) {
      return data;
    }
    for (const service of data) {
      if (filters.serviceId !== "" && service.serviceId !== filters.serviceId) {
        continue;
      }/*
      if (filters.serviceStatus !== "" && service.serviceStatus !== filters.serviceStatus) {
        continue;
      }*/

      console.log(filters);
      console.log(typeof serviceStatus);
      filteredData.push(service);
    }
    console.log(filteredData);
    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay services={filterData(data["services"])} />
      </div>

      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
        {/*For the childcomponent SearchBar to update the parent by callback */}
      </div>

      {/*<div className="row mt-3">
        <AddItem addItem={addItemToData} />
  </div>*/}
    </div>
  );
}

export default App;
