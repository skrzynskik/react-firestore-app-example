import { useEffect, useRef, useState } from "react";
import DocumentTable from "./documentTable";
import { firebaseGet } from "../services/firebaseGet";

export default function DocumentView() {
  const [beverages, setBeverages] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [items, setItems] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    firebaseGet("beverages").then((data) => {
      setBeverages(data);
    });
    firebaseGet("electronics").then((data) => {
      setElectronics(data);
    });
    firebaseGet("items").then((data) => {
      setItems(data);
    });
    firebaseGet("snacks").then((data) => {
      setSnacks(data);
    });
		setLoading(false)
  }, [beverages, electronics, items, snacks]);

  console.log(beverages);
  console.log(electronics);
  console.log(items);
  console.log(snacks);
  console.log(isLoading);

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
            {beverages.length && <DocumentTable products={beverages} />}
          </div>
          <div className="col">
            <h4 className="text-center">Electronics:</h4>
            {electronics.length && <DocumentTable products={electronics} />}
          </div>
          <div className="col">
            <h4 className="text-center">Snacks:</h4>
            {snacks.length && <DocumentTable products={snacks} />}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="text-center">Other items:</h4>
            {items.length && <DocumentTable products={items} />}
          </div>
        </div>
      </div>
    </div>
  );
}
