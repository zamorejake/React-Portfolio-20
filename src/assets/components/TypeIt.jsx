import React, { useEffect } from "react";
import TypeIt from "typeit";

const TypeItText = () => {
  useEffect(() => {
    const instance = new TypeIt("#typeit", {
      lifeLike: false,
      speed: 0,
    })
      .type("H")
      .pause(128)
      .type("i")
      .pause(160)
      .type("!")
      .pause(208)
      .delete(1)
      .pause(112)
      .delete(1)
      .pause(143)
      .delete(1)
      .pause(343)
      .type("H")
      .pause(208)
      .type("e")
      .pause(39)
      .type("l")
      .pause(128)
      .type("l")
      .pause(96)
      .type("o")
      .pause(416)
      .type("!")
      .pause(272)
      .delete(1)
      .pause(507)
      .delete(1)
      .pause(32)
      .delete(1)
      .pause(31)
      .delete(1)
      .pause(31)
      .delete(1)
      .pause(32)
      .delete(1)
      .pause(512)
      .type("C")
      .pause(56)
      .type("l")
      .pause(88)
      .type("i")
      .pause(20)
      .type("c")
      .pause(64)
      .type("k")
      .pause(44)
      .type(" ")
      .pause(76)
      .type("h")
      .pause(28)
      .type("e")
      .pause(45)
      .type("r")
      .pause(60)
      .type("e")
      .pause(176)
      .type(" ")
      .pause(52)
      .type("t")
      .pause(52)
      .type("o")
      .pause(28)
      .type(" ")
      .pause(48)
      .type("v")
      .pause(52)
      .type("i")
      .pause(28)
      .type("e")
      .pause(52)
      .type("w")
      .pause(64)
      .type(" ")
      .pause(76)
      .type("m")
      .pause(44)
      .type("y")
      .pause(28)
      .type(" ")
      .pause(56)
      .type("w")
      .pause(44)
      .type("o")
      .pause(37)
      .type("r")
      .pause(48)
      .type("k")
      .pause(48)
      .type("!")
      .pause(152);

    instance.go();

    return () => {
      instance.destroy();
    };
  }, []);

  return <div id="typeit"></div>;
};

export default TypeItText;