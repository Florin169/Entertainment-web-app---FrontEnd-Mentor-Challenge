import axios from "axios";
import React, { useEffect, useState } from "react";

const useContent = (text) => {
  const [trending, setTrending] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [searchData, setSearchData] = useState([]);
  console.log(text);

  const fetchTrending = () => {
    axios({
      method: "GET",
      url: `
            https://api.themoviedb.org/3/trending/all/day?api_key=8a36975b4bc70fda85b6386d1ad3d4ed`,
    }).then((res) => setTrending(res.data.results));
  };

  const fetchReccomended = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1",
    }).then((res) => setRecommended(res.data.results));
  };

  useEffect(() => {
    let cancel;

    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&query=${text}&page=1&include_adult=false`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    }).then((res) => setSearchData(res.data.results));

    return () => cancel();
  }, [text]);

  console.log(searchData);

  useEffect(() => {
    fetchTrending();
    fetchReccomended();
  }, []);

  return { trending, recommended, searchData };
};

export default useContent;
