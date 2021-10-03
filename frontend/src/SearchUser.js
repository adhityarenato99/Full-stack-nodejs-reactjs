import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchUser() 
{
    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);

    // Load display all records
    const loadUserDetail = async () =>
    {
        var response = fetch('http://localhost:5000/api/v1/user')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            setRecord(myJson);
        });
    }

    useEffect(() => {
        loadUserDetail();
    }, []);

    // search records here
    const searchRecord = () => {
        axios.get(
            `http://localhost:5000/api/v1/user/searchRecord/${search}`
        ).then(response => {
            setRecord(response.data)
        });
    }

    const loadRecordAgain = () =>
    {
        var response = fetch('http://localhost:5000/api/v1/user')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            setRecord(myJson);
        });
    }
    useEffect(() => {
        loadRecordAgain();
    }, []);

    return(
        <section>
            <div class="container">
                <h4 className="mb-3 text-center mt-4">List User Data using Node.JS and React.JS</h4>
                <div class="row mt-3">
                    <div class="col-sm-12">
                        <div class="input-group mb-2 mt-3">
                            <div class="form-outline">
                                <input type="text" id="form1" onKeyDown={loadRecordAgain} onKeyUp={searchRecord} onChange={(e) => setSearch(e.target.value)} class="form-control" placeholder="Search First Name" style={{backgroundColor:"#ececec"}}/>
                            </div>
                        </div>
                        <h5 class="text-center">Total record is <strong>{record.length}</strong></h5>
                        <table class="table table-hover table-dark table-bordered ml-4 mt-3">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!record.length ?
                                <tr>
                                    <td colspan="5">Sorry, we found no record...</td>
                                    </tr> :
                                    record.map((user) => 
                                    <tr>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                        <img class="img-fluid" src={"/images/" + user.image} style={{maxWidth:"40px"}}  alt=""/> 
                                        </td>
                                    </tr>
                                    )
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchUser;