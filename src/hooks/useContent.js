import axios from "axios";
import React, { useEffect, useState } from "react";

const useContent = () => {
  const [trending, setTrending] = useState([]);
  console.log(trending);

  const fetchTrending = () => {
    axios({
      method: "GET",
      url: `
            https://api.themoviedb.org/3/trending/all/day?api_key=8a36975b4bc70fda85b6386d1ad3d4ed`,
    }).then((res) => setTrending(res.data.results));
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return { trending };
};

export default useContent;
