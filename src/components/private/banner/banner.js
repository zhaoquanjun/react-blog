import React, { Component } from "react";
import "./banner.css";

import { Carousel } from "antd";

const pitLists = [
  { img: require("../../../assets/1.jpg"), key: "banner_01" },
  { img: require("../../../assets/2.jpg"), key: "banner_02" },
  { img: require("../../../assets/3.png"), key: "banner_03" },
  { img: require("../../../assets/4.jpg"), key: "banner_04" },
  { img: require("../../../assets/5.jpg"), key: "banner_05" }
];

const bannerContent = pitLists.map(item => (
  <div key={item.key}>
    <img src={item.img} alt={item.key} />
  </div>
));

class Banner extends Component {
  constructor(props) {
    super(props);

    this.bannerChange = this.bannerChange.bind(this);
  }

  bannerChange() {
    //alert("gogogo");
  }

  render() {
    return (
      <div className="b-banner">
        <Carousel afterChange={this.bannerChange} dots autoplay effect="fade">
          {bannerContent}
        </Carousel>
      </div>
    );
  }
}

export default Banner;
