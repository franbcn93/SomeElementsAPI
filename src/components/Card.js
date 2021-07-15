import React, { Fragment, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [bandera, guardarBandera] = useState(null);

  const classes = useStyles();

  const handleOpen = () => {
    console.log(flag);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    guardarBandera(flag);
                    handleOpen();
                  }}
                >
                  Show his flag
                </button>
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={open}
                  onClose={() => {
                    handleClose();
                    guardarBandera(null);
                  }}
                >
                  <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">{name}</h2>
                    <img className="img-fluid my-4" src={bandera} />
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
