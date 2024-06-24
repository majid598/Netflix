import Title from "../components/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Movie = () => {
  const movieId = useParams().id;
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    url: `https://movies-api14.p.rapidapi.com/movie/${movieId}`,
    headers: {
      "X-RapidAPI-Key": "973c977febmsh4e375fb11fe9a4fp118970jsncdfce3fd0579",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response?.data?.movie);
        setData(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="w-full">
      <Title
        title={`Netflix / Movie - ${data?.movie?.title}`}
        description={"sdfas"}
      />
      <div className="w-full grid gap-10 p-20">
        <img
          src={data?.movie?.poster_path}
          controls
          className="w-[60rem] h-[60vh] border-2 border-black rounded-lg"
        />
      </div>
    </div>
  );
};

export default Movie;
