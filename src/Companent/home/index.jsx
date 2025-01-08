import React from "react";
import yulduz from "../../assets/yulduz.svg";
import savat from "../../assets/savat.png";
import "../home/stayl.css";
function Home() {
  const data = [
    {
      id: 1,
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
    },
    {
      id: 2,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 3,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 4,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 5,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 6,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 7,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 8,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 9,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
    {
      id: 10,
      name: "Smartfon Xiaomi Redmi Note 13,6/128 GB, 8/128 GB, 8/256GB,",
      imgs: "https://object.pscloud.io/cms/cms/Uploads/30_433626.jpg",
    },
  ];
  return (
    <>
      <div className="card_grid">
        {data.map((itme) => {
          return (
            <div className="carta">
              <div key={itme.id}>
                <div>
                  <img className=" imgs" src={itme.imgs} alt="" />
                  <h2 className=" cart_text text-xs max-w-[200px] ">
                    {itme.name}{" "}
                  </h2>
                  <div className=" flex text-xs ">
                    <img src={yulduz} alt="" />
                    < p className="  opacity-[70%]">4.9 (4092 sharsh)</p>
                  </div>
                  <p className="som">1 560 so'm/oyiga</p>
                  <div className=" flex justify-between">
                    <div>
                      <p><del className="del opacity-[70%]  mt-8">3 010 000 so'm</del></p>
                      <p className=" font-bold"> 2 499 000 so'm</p>
                    </div>
                    <div className="border">
                    <img className=" p-3" src={savat} alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
