import React from "react";
import yulduz from "../../assets/yulduz.svg";
import savat from "../../assets/savat.png";
import like from "../../assets/like.png";
import like1 from "../../assets/like1.png";
import { useState } from 'react'
import "../home/stayl.css";

function userId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}


function Home() {
  const data = [
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/ctg2kjdpb7faledbod7g/original.jpg'
    },
  ]


  return (
    <div>
      <div className="cards-asosiy">
        {data.map((item, index) => (
          <UserCard key={index} data={item} />
        ))}
      </div>
    </div>
  );

}

const UserCard = ({ data }) => {

  const [bosildi, setBosildi] = useState("");


  const [number, setNumber] = useState(0);
  function decriment() {
    setNumber((qosh) => (qosh === 0 ? 0 : qosh - 1));
  }



  return (
    <div className="cards-asosiy">
      <div key={data.id} className="cards">
        <img src={data.img} alt={data.desc} className="products" />
        <div>
          <h3>{data.desc}</h3>
          <div className="cards-sharh">
            <img src={yulduz} alt="" />
            <p>{data.ball}</p>
          </div>
          <span className="cards-bolbt">{data.bolbt}</span>
          <div className="cards-narx">
            <div className="cards-skidka">
              <span className="skidka">{data.skidka || ''}</span>
              <p>{data.narx}</p>
            </div>
            <div className="cards-count">
              <button
                onClick={() => {
                  setNumber(number + 1);
                }}
                className="text-[20px] w-8 rounded-full">+
              </button>
              <h2 className="text-[26px]">{number}</h2>
              <button
                onClick={decriment}
                className="text-[20px] w-8 rounded-full">-
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="like-content">
        <img
          onClick={() => {
            if (bosildi) {
              setBosildi(false);
            } else {
              setBosildi(true)
            }
          }}
          className="like" src={
            bosildi
            ? "https://img.icons8.com/?size=100&id=83166&format=png&color=000000"
            : "https://img.icons8.com/?size=100&id=82788&format=png&color=000000"

          } alt="" />
      </div>
    </div>
  );

}

export default Home;
