import React, { useState } from "react";
import yulduz from "../../assets/yulduz.svg";
import savat from "../../assets/savat.png";
import like from "../../assets/like.png";
import like1 from "../../assets/like1.png";
import logo from "../../assets/logo.svg";
import button from "../../assets/button.png";
import search from "../../assets/search.svg";
import kirish from "../../assets/kirish.png";
import yureca from "../../assets/yureca.png";
import savatca from "../../assets/savatca.png";
import "../home/stayl.css";

function userId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function Home() {
  const [selectedProducts, setSelectedProducts] = useState([]);
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
      img: 'https://images.uzum.uz/csmasldpq3go3q2ic1lg/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/cs75ovliie4iga07dg2g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/csmasldpq3go3q2ic1lg/original.jpg'
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
      img: 'https://images.uzum.uz/csmasldpq3go3q2ic1lg/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/cs75ovliie4iga07dg2g/original.jpg'
    },
    {
      id: userId(),
      desc: `Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f`,
      ball: '4.9 (21748ta sharh)',
      bolbt: `2 975 so'm/oyiga`,
      skidka: '55 000',
      narx: `42 000 so'm`,
      img: 'https://images.uzum.uz/csmasldpq3go3q2ic1lg/original.jpg'
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
      img: 'https://images.uzum.uz/csmasldpq3go3q2ic1lg/original.jpg'
    },
  ];

  const addToSelectedProducts = (product) => {
    if (!selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div>
      <NavCard />
      <div className="cards-asosiy">
        {data.map((item, index) => (
          <UserCard
            key={index}
            data={item}
            addToSelectedProducts={addToSelectedProducts}
          />
        ))}
      </div>

      <div className="selected-products">
        {selectedProducts.map((product) => (
          <>
            <div key={product.id} className="selected-product ">
              <img className="productss" src={product.img} alt={product.desc} />
              <div className="select-div">
                <h3>{product.desc}</h3>
                <p>{product.narx}</p>
              </div>
              <button className="delete-btnn">delete</button>
            </div>
          </>
        ))}
        <div className="delete-btn">
          <button
            onClick={() => {
              setSelectedProducts([])
            }}
          >Delete</button>
          <button>Umumiy: <span>{selectedProducts.length}</span></button>
        </div>
      </div>
    </div>
  );
}

const NavCard = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo-div">
          <img src={logo} alt="" />
          <button>
            <img src={button} alt="" />
          </button>
        </div>
        <div className="search-div">
          <input
            className="search-inp"
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
          />
          <button className="search-btn">
            <img src={search} alt="" />
          </button>
        </div>
        <div className="btn-div">
          <button className="kirish-btn">
            <img src={kirish} alt="" /> Kirish
          </button>
          <button className="like-btn">
            <img src={yureca} alt="" /> Saralangan
          </button>
          <button className="savat-btn">
            <img src={savatca} alt="" /> Savat
          </button>
        </div>
      </nav>
    </div>
  );
};

const UserCard = ({ data, addToSelectedProducts }) => {
  const [number, setNumber] = useState(0);
  const [bosildi, setBosildi] = useState("");

  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <>
      <div className="container">
        <div className="cards">
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
                <span className="skidka">{data.skidka || ""}</span>
                <p>{data.narx}</p>
              </div>
              <div className="cards-count">
                <button onClick={increment} className="text-[20px] w-8 rounded-full">
                  +
                </button>
                <h2>{number}</h2>
                <button onClick={decrement} className="text-[20px] w-8 rounded-full">
                  -
                </button>
              </div>
            </div>
            <div className="savat-img">
              <button
                onClick={() => addToSelectedProducts(data)}
                className="savat-btnn"
              >
                <img src={savat} alt="" />
              </button>
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
        </div>
      </div>
    </>
  );
};

export default Home;
