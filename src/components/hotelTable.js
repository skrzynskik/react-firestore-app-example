export default function DocumentTable({ hotels }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        {hotels.map((hotel) => {
          return <tr key={hotel.id}>
            <td>{hotel.name}</td>
            <td>
              {hotel.address.street} {hotel.address.number},{" "}
              {hotel.address.postal_code} {hotel.address.city},{" "}
              {hotel.address.country}
            </td>
            <td>
              <ul>
                {hotel.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}
