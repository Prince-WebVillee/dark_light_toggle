import "./App.css";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(true);
  const getData = async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="App">
      <button
        id="btnMode"
        onClick={() => setTheme(!theme)}
        className="btn btn-warning"
      >
        {theme ? "light" : "dark"}
      </button>
      <Header theme={theme} />
      <table
        className={theme ? "table table-dark hover" : "table table-light hover"}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No Data
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
