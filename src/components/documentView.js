import { useEffect, useRef, useState } from "react";
import DocumentTable from "./documentTable";
import { firebaseGet } from "../services/firebaseGet";

export default function DocumentView() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    firebaseGet("hotels").then((data) => {
      setHotels(data);
    });
		setLoading(false)
  }, []);

	if(isLoading){
		return 'loading'
	}

  return (
    <div>
      <h3 className="text-center">Product List:</h3>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h4 className="text-center">Beverages:</h4>
            {hotels.length && <DocumentTable products={hotels} />}
          </div>
        </div>
      </div>
    </div>
  );
}
