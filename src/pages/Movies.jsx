import Title from "../components/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Movies = () => {
  const [data, setData] = useState([null]);
  const options = {
    method: 'GET',
    url: `https://movies-api14.p.rapidapi.com/shows`,
    headers: {
      'X-RapidAPI-Key': '973c977febmsh4e375fb11fe9a4fp118970jsncdfce3fd0579',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="w-full">
      <Title title={"Netflix / Movies"} description={"sdfas"} />
      <div className="w-full grid grid-cols-5 gap-10 p-20">
        {data?.movies?.map((movie) => (
          <Link to={`/movie/${movie?._id}`} className="w-full h-72 rounded-lg overflow-hidden border-2">
            <div className="w-full h-5/6">
              <img
                src={movie?.poster_path}
                alt=""
                className="w-full h-full"
              />
            </div>
            <h2>{movie?.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
