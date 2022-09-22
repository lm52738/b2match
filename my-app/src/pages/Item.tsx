import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BestPlace } from "../images/BestPlace";

interface Language {
  name: string;
}

function Item() {
  const { id } = useParams();
  console.log(id);

  const location = useLocation();
  const country = location.state;

  const languages: Language[] = country.languages;
  

  return (
    <div className='App font-link'>
            <div className="container p-5 my-5 bg-white border rounded">
                <h1 className='header'>Country </h1>
                <div className="d-flex justify-content-center flex-row">
                  <dl className="row w-50 p-3">
                    <dt className="col-sm-3">Country code</dt>
                    <dd className="col-sm-9">{country.code}</dd>

                    <dt className="col-sm-3">Native name</dt>
                    <dd className="col-sm-9">{country.native}</dd>

                    <dt className="col-sm-3">Country name</dt>
                    <dd className="col-sm-9">{country.name}</dd>

                    <dt className="col-sm-3">Capital city</dt>
                    <dd className="col-sm-9">{country.capital}</dd>

                    <dt className="col-sm-3">Continent</dt>
                    <dd className="col-sm-9">{country.continent.name}</dd>

                    <dt className="col-sm-3">Languages</dt>
                    <dd className="col-sm-9">
                        { languages.map((Language) => (
                          <p className="d-inline">{Language.name}, </p>
                        ))}
                    </dd>

                    <dt className="col-sm-3">Currency</dt>
                    <dd className="col-sm-9">{country.currency}</dd>

                    <dt className="col-sm-3">Phone</dt>
                    <dd className="col-sm-9">{country.phone}</dd>

                  </dl>
                  <div>
                    <BestPlace />
                  </div>
                </div>
            </div>
        </div>
  );
};

export default Item;