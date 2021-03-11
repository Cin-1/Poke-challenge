import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Box, Container } from "@material-ui/core";

const Pagination = (props) => {
  const { leftClick, rightClick, page, totalPages } = props;
  return (
    <Container>
      <Box justifyContent="center" display="flex" pt={3}>
        <button onClick={leftClick}>
          <ArrowBackIcon />
        </button>
        {page} - {totalPages}
        <button onClick={rightClick}>
          <ArrowForwardIcon />
        </button>
      </Box>
    </Container>
  );
};

export default Pagination;
