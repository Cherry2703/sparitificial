import { posts_data } from "../../data/data"

import "./index.css"

const PostsList=()=>(
    <table className="table" border=''>
              <tr border=''>
                <th>post_id</th>
                <th>post_caption</th>
                <th>media_url</th>
                <th></th>
              </tr>
              {posts_data.posts.map((each)=>(
                <tr key={each.User_id} border>
                  <td>{each.post_id}</td>
                  <td>{each.post_caption}</td>
                  <td>{each.media_url}</td>
                  <td className="btns-cont-td">
                    <button className="btns-cont-td-btn">{each.controls[0]}</button>
                    <button className="btns-cont-td-btn">{each.controls[1]}</button>
                  </td>
                </tr>
              ))}
            </table>
)

export default PostsList