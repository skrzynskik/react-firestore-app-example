export default function RatingTable({ hotels }) {
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
          if (hotel.rating.length) {
            return (
              <tr key={hotel.id}>
                <td>{hotel.name}</td>
                <td>
                  <ul>
                    {hotel.rating.map((rating, index) => (
                      <li key={index}>{rating}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}
