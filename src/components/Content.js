import React, { useState, useEffect } from "react";
import Card from "./Card";
import SkeletonContainer from "../skeleton/SkeletonContainer";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import Subnav from "./Subnav";

function Content({ data,error, searchvalue, category, ordervalue, datevalue }) {
  let ordersortvalue, datesortvalue;
  console.log(error)

  const filteredData = data.filter((res) => {
      return res.name.search(searchvalue) !== -1;
    }),
    [page, setPage] = useState(1),
    [pageAmount] = useState(15),
    [pgLimit, setpgLimit] = useState(1),
    [maxPgLimit, setmaxPgLimit] = useState(1),
    [minPgLimit, setminPgLimit] = useState(0);

  // sort category
  if (category === "all") {
    category = "All";
  } else if (category === "health") {
    category = "Health";
  } else if (category === "education") {
    category = "Education";
  } else {
    category = "E-commerce";
  }
  //   sort alphabetically
  if (ordervalue === "Ascending") {
    ordersortvalue = filteredData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (ordervalue === "Descending") {
    ordersortvalue = filteredData.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  } else {
    ordersortvalue = filteredData;
  }

  //   sort by date
  if (datevalue === "Ascending") {
    datesortvalue = filteredData.sort((a, b) => {
      return new Date(a.created) - new Date(b.created);
    });
  } else if (datevalue === "Descending") {
    datesortvalue = filteredData.sort((a, b) => {
      return new Date(b.created) - new Date(a.created);
    });
  } else {
    datesortvalue = filteredData;
  }

  // Get current page
  const lastContent = page * pageAmount,
    firstContent = lastContent - pageAmount,
    currentContent = ordersortvalue.slice(firstContent, lastContent);

  // next page
  const paginate = () => {
    setPage(page + 1);
    if (page + 1 > maxPgLimit) {
      setmaxPgLimit(maxPgLimit + pgLimit);
      setminPgLimit(minPgLimit + pgLimit);
    }
  };

  // previous page
  const prevPaginate = () => {
    setPage(page - 1);
    if ((page - 1) % pgLimit === 0) {
      setmaxPgLimit(maxPgLimit - pgLimit);
      setminPgLimit(minPgLimit - pgLimit);
    }
  };

  return (
    <div>
      <Subnav />

      <div>
        {data.length > 0 && (
          <div className="card-container">
            {currentContent.map((data, id) => (
              <Card key={id} info={data} />
            ))}
          </div>
        )}

        {data <= 0 && (
          <div className="card-container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
              <SkeletonContainer key={i} />
            ))}
          </div>
        )}

        {data <= 0 && error !='' && (
            <div className="card-container">
                <h1 className='text-4xl text-blue-400 font-semibold'>Oops! an error occurred</h1>
            </div>
        )}

        <Pagination
          pageAmount={pageAmount}
          totalContent={data.length}
          paginate={paginate}
          prevPage={prevPaginate}
          pgLimit={pgLimit}
          maxPgLimit={maxPgLimit}
          minPgLimit={minPgLimit}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.Data,
    error: state.error,
    searchvalue: state.searchfield,
    category: state.categoryfield,
    ordervalue: state.orderfield,
    datevalue: state.datefield,
  };
};

export default connect(mapStateToProps)(Content);
