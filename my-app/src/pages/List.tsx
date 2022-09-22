import React from "react";
import { GraphQLClient } from "graphql-request";
import { CountriesQuery, useCountriesQuery } from "../generated";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Location } from "../images/Location";
import { ScrollUp } from "../images/ScrollUp";

const graphqlClient = new GraphQLClient(
  "https://countries.trevorblades.com/graphql"
);

const List = () => {

    const navigate = useNavigate();


    const { data, isLoading, error } = useCountriesQuery<CountriesQuery, Error>(
        graphqlClient,
        {}
    );
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error!</div>;
    }

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <>
            <div className='App font-link'>
                <div className="container my-5 bg-white border rounded">
                    <div className="w-100 p-3 container-fluid">
                        <button type="button" className="btn btn-link" onClick={() => refreshPage()}>
                            <Location />
                        </button>
                        <h1 className='header'>Countries</h1>
                    </div>                 
                    
                
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Continent</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data?.countries?.map((country,i) =>
                                <tr key={i} onClick={() => {
                                    navigate(`/item/${i}`, {
                                        state: country
                                    });
                                }}>
                                    <td>{i}</td>
                                    <td>{country.name}</td>
                                    <td>{country.capital}</td>
                                    <td>{country.continent.name}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>

                    
                    <button type="button" className="btn btn-link" onClick={() => handleClick()}>
                        <ScrollUp />
                    </button>
                </div>
            </div>
    </>
  );
};

export default List;