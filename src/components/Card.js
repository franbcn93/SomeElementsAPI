import React, { Fragment } from "react";

export const Card = ({ datos }) => {
  const {
    name,
    capital,
    region,
    population,
    nativeName,
    languages,
    flag,
    currencies,
  } = datos;

  return (
    <Fragment>
      <div className="col-8 mb-4 mycard" style={{ textAlign: "center" }}>
        <div className="card border-dark">
          <div className="card-header">
            <h4>{name}</h4>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="">
                <p>
                  Capital:<b> {capital} </b>{" "}
                </p>
                <p>
                  Region:<b> {region} </b>{" "}
                </p>
                <p>
                  Population:<b> {population} </b>{" "}
                </p>
                <p>
                  NativeName:<b> {nativeName} </b>{" "}
                </p>
                <p>
                  Languages:
                  {languages.map((el) => (
                    <b key={el.name}> {el.name} </b>
                  ))}
                </p>
                <p>
                  Currencies:
                  {currencies.map((el) => (
                    <b key={el.name}> {el.name} </b>
                  ))}
                </p>
                <p>
                  NativeName:<b> {nativeName} </b>{" "}
                </p>

                <a
                  href={flag}
                  target="flag"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                >
                  {" "}
                  Look his flag
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
