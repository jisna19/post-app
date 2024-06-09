import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
  const [data, changeData] = useState([])
  const fetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response)=>{
        changeData(response.data)
      }
    ).catch().finally()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">userid</th>
                  <th scope="col">id</th>
                  <th scope="col">title</th>
                  <th scope="col">body</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(
                    (value, index) => {
                      return <tr>
                        <th scope="row">{value.userId}</th>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>
                      </tr>
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  )
}



export default View