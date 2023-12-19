import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useParams } from "react-router-dom";

const tersimpan = [
    {
      id: 1,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 2,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 3,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 4,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 5,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
    {
      id: 6,
      img: "/img/imgtersimpan/buburmanado.png",
      title: "Sup Kubis",
      desc: "Makanan Utama",
      more: "Lihat",
    },
  ];
  const CardTersimpan = () => {

    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [userId, setUserId] = useState();
    const [saved, setSaved] = useState([]);
    const {user_id} = useParams();
    console.log(user_id)
    // const navigate = useNavigate();
    // console.log(userId)
    useEffect(() => {
      refreshToken();
      getUsers();
      getSaved();
    },[]);

    const refreshToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/token');
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        // console.log(decoded)
        // setName(decoded.name);
        setExpire(decoded.exp);
      } catch (error) {
        if(error.response) {
          // navigate("/login")
        }
      }
    };

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
      const currentDate = new Date();
      if(expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        // console.log(decoded)
        setUserId(decoded.userId);
        // setUsername(decoded.username);
        // setEmail(decoded.phone_number);
        // setExpire(decoded.exp);
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    })

    const getUsers = async() => {
      const response = await axiosJWT.get('http://localhost:5000/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // console.log(response.data.data);
    }

    const getSaved = async () => {
      try {
        axios
          .get(`http://localhost:5000/saved/${user_id}`)
          .then((res) => setSaved(res.data))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        {saved.map((card) => (
          <div className="col-lg-6 my-lg-1 ">
            <div className="d-flex gap-3 tersimpan">
              <div key={card.id}>
                <img src={`http://localhost:5000/${card.img}`} alt="hay" />
              </div>
              <div className="content-tersimpan d-flex ">
                <div className="my-auto">
                  <h5 className="fw-bold">{card.food_name}</h5>
                  <p>{card.category}</p>
                  <button>Lihat</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  export default CardTersimpan;
  