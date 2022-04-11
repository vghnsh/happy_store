import React from "react";
import Button from "@material-ui/core/Button";
import "./Filter.style.scss";

import { useStateValue } from "../../StateProvider";
function Filter() {
  const [, dispatch] = useStateValue();
  const [{ product }] = useStateValue();

  const setMen = (e) => {
    dispatch({
      type: "FILTER",
      filter: product?.filter((pd) => pd.category === "men's clothing"),
    });
  };

  const setWomen = (e) => {
    dispatch({
      type: "FILTER",
      filter: product?.filter((pd) => pd.category === "women's clothing"),
    });
  };

  const setJew = (e) => {
    dispatch({
      type: "FILTER",
      filter: product?.filter((pd) => pd.category === "jewelery"),
    });
  };

  const setElectro = (e) => {
    dispatch({
      type: "FILTER",
      filter: product?.filter((pd) => pd.category === "electronics"),
    });
  };

  const clear = (e) => {
    dispatch({
      type: "FILTER",
      filter: "",
    });
  };

  return (
    <div className="filterw">
      <b>
        <h2>Filter</h2>
      </b>
      <div className="Filter">
        <Button
          onClick={clear}
          className="btn_filter"
          variant="contained"
          color="primary"
        >
          Clear
        </Button>
        <Button
          onClick={setWomen}
          className="btn_filter"
          variant="contained"
          color="primary"
        >
          Women Clothing
        </Button>
        <Button
          onClick={setMen}
          className="btn_filter"
          variant="contained"
          color="primary"
        >
          Men Clothing
        </Button>
        <Button
          onClick={setJew}
          className="btn_filter"
          variant="contained"
          color="primary"
        >
          Jewelery
        </Button>
        <Button
          onClick={setElectro}
          className="btn_filter"
          variant="contained"
          color="primary"
        >
          electronics
        </Button>
      </div>
    </div>
  );
}

export default Filter;
