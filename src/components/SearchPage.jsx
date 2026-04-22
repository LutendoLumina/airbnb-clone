import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 August to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-1614329430880861128/original/f8e767ba-f8ca-4ae6-acb5-ce316d98cdde.jpeg?im_w=1200"
        location="Entire home in Cape Town, South Africa"
        title="Large quiet 4 bedroom house with sea view and A/C"
        star={4.76}
        price="R8644 for 2 nights"
        total="R24000 total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-1614329430880861128/original/f8e767ba-f8ca-4ae6-acb5-ce316d98cdde.jpeg?im_w=1200"
        location="Entire home in Cape Town, South Africa"
        title="Large quiet 4 bedroom house with sea view and A/C"
        star={4.76}
        price="R8644 for 2 nights"
        total="R24000 total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-1614329430880861128/original/f8e767ba-f8ca-4ae6-acb5-ce316d98cdde.jpeg?im_w=1200"
        location="Entire home in Cape Town, South Africa"
        title="Large quiet 4 bedroom house with sea view and A/C"
        star={4.76}
        price="R8644 for 2 nights"
        total="R24000 total"
      />
      <SearchResults
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-1614329430880861128/original/f8e767ba-f8ca-4ae6-acb5-ce316d98cdde.jpeg?im_w=1200"
        location="Entire home in Cape Town, South Africa"
        title="Large quiet 4 bedroom house with sea view and A/C"
        star={4.76}
        price="R8644 for 2 nights"
        total="R24000 total"
      />
    </div>
  );
};

export default SearchPage;
