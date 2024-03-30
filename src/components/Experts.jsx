import React from "react";
import laptop from "../assets/laptop.jpg";

const Experts = () => {
  return (
    <section className="max-w-[1240px] p-2 my-10 mx-auto h-[200px] md:grid grid-cols-3">
      <div className="col-span-1 w-[100%] text-center">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className="col-span-2 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
        <button className="w-[30%] bg-black text-white p-3 rounded my- mx-auto md:mx-0">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Experts;
