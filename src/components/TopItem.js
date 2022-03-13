import React, { Component } from "react";
import Slider from "react-slick";
import Dress2 from "./img/dress2.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class TopItem extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <div className="mx-12">
          <div className="flex flex-row mb-12">
            <h2 className="text-3xl font-primaryFont ml-8 font-bold">
              {" "}
              Top Products of The Week{" "}
            </h2>
            <p className="text-xl ml-auto"> See More </p>
          </div>
          <Slider {...settings}>
            <div className="ml-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
          </Slider>
        </div>

        <div className="mx-12">
          <div className="flex flex-row mb-12 mt-12">
            <h2 className="text-3xl font-primaryFont ml-8 font-bold">
              {" "}
              Flowers for The loved ones{" "}
            </h2>
            <p className="text-xl ml-auto"> See More </p>
          </div>
          <Slider {...settings}>
            <div className="ml-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
          </Slider>
        </div>

        <div className="mx-12">
          <div className="flex flex-row mb-12 mt-12">
            <h2 className="text-3xl font-primaryFont ml-8 font-bold">
              {" "}
              Now Trending{" "}
            </h2>
            <p className="text-xl ml-auto"> See More </p>
          </div>
          <Slider {...settings}>
            <div className="ml-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
            <div className="mr-8">
              <img src={Dress2}></img>
              <h3 className="font-primaryFont font-bold text-2xl text-brandblack">
                White Knit Top
              </h3>
              <p className="line-through text-xs font-logoFont">
                {" "}
                Rp 100.000 (-25%){" "}
              </p>
              <p className="font-logoFont font-bold text-xl">Rp 75.000 </p>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
