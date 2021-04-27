import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCovidData } from "../../service/get";
import { nations } from "../../utils/nationList";
import ChartComponent from "../chart";
import Error from "../common/error";
import Loading from "../common/loading";
import SelectInput from "../selectInput";

const CovidData = () => {
  const [selectedOption, setSelectedOption] = useState("england");
  const { isLoading, error, data } = useQuery(["nation", selectedOption], () =>
    getCovidData(selectedOption)
  );

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <SelectInput
        select={setSelectedOption}
        list={nations}
        selected={selectedOption}
      />
      <ChartComponent data={data} />
    </>
  );
};

export default CovidData;
