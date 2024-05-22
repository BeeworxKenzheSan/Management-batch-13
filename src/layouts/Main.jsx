import { useLoaderData, Link, useNavigate } from "react-router-dom";

export const getData = async ({ request, params }) => {
  const response = await fetch(
    `https://batch-13-baa03-default-rtdb.firebaseio.com/managment.json`
  );
  const result = await response.json();
  let data = [];
  for (const items in result) {
    const elem = result[items];
    data.push({
      id: items,
      name: elem.name,
      username: elem.username,
      birthDate: elem.birthDate,
    });
  }

  return data;
};

export default function Main() {
  const management = useLoaderData();
  const navigate = useNavigate();
  const navigateToOtherPage = () => {
    navigate("/", {
      state: "Ahhh ushunday barby",
    });
  };
  const element = management.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.birthDate}</td>
        <td>
          <button onClick={navigateToOtherPage}>Navigate</button>
          <Link to={`${item.id}/update`}>Edit</Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Birth date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </table>
    </div>
  );
}
