import { users_data } from "../../data/data"

import "./index.css"

const UsersList=()=>(
  <legend> Users Information
    <table className="table" border=''>
              <tr>
                <th>user_id</th>
                <th>username</th>
                <th>name</th>
                <th>email</th>
                <th></th>
              </tr>
              {users_data.users.map((each)=>(
                <tr key={each.User_id}>
                  <td>{each.User_id}</td>
                  <td>{each.username}</td>
                  <td>{each.name}</td>
                  <td>{each.email}</td>
                  <td className="btns-cont-td">
                    <button className="btns-cont-td-btn">{each.controls[0]}</button>
                    <button className="btns-cont-td-btn">{each.controls[1]}</button>
                  </td>
                </tr>
              ))}
            </table>
            </legend>
)

export default UsersList