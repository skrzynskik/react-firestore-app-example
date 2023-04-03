export default function ReportTable({ hotels }) {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => {
            if(hotel.reports.length){
            return <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>
                <ul>
                  {hotel.reports.map((report, index) => 
                    {if(report.length !== 0){
                        return <li key={index}>{report}</li>}
                    }
                  )}
                </ul>
              </td>
            </tr>;
            }
          })}
        </tbody>
      </table>
    );
  }
  