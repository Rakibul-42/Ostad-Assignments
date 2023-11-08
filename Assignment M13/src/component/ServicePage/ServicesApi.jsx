import React, { useEffect, useState } from "react";
import Services from "./Services";

function ServicesApi() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch(`https://dummyjson.com/products`);
      let data = await res.json();
      setServices(data.products);
    })();
  }, []);
  console.log(services);
  return (
    <div >
      <Services services={services} />
    </div>
  );
}

export default ServicesApi;