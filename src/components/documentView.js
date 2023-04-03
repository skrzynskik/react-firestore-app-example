import { useEffect, useRef, useState } from "react";
import DocumentTable from "./hotelTable";
import { firebaseGet } from "../services/firebaseGet";
import RatingTable from "./ratingTable";
import ReportTable from "./reportTable";

export default function DocumentView() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setLoading] = useState(true);
	
  useEffect(() => {
    firebaseGet().then((data) => {
      setHotels(data);
    });
    setLoading(false);
  }, []);

  if (isLoading) {
    return "loading";
  }

  return (
    <div>
      <div className="container text-center">
        <div className="row">
				<h3 className="text-center">Hotels:</h3>
          <div className="col">
						<DocumentTable hotels={hotels} />
          </div>
        </div>
        <div className="row">
					<h3 className="text-center">Ratings:</h3>
          <div className="col">
						<RatingTable hotels={hotels} />
          </div>
        </div>
        <div className="row">
					<h3 className="text-center">Reports:</h3>
          <div className="col">
						<ReportTable hotels={hotels} />
          </div>
        </div>
      </div>
    </div>
  );
}
