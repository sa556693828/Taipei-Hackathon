import React, { useCallback, useState } from "react";
// import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import Image from "next/image";
// import { decode } from "js-base64";

export default function DemoSvg() {
  const [windowStyle, setWindowStyle] = useState<string>("0");
  const [windowStyleName, setWindowStyleName] = useState<string>("Office");
  const [activeLevel, setActiveLevel] = useState<string>("0");
  const [svg, setSvg] = useState<any>("");

  const getData = useCallback(
    async (activeLevel: string, windowStyle: string) => {
      const url = `http://172.104.90.55/svg/${activeLevel}/${windowStyle}`;
      try {
        const res = await axios.get(url);
        console.log(res.data);
      } catch (error: any) {
        console.log(error);
      }
    },
    []
  );

  return (
    <div className="flex h-[100vh] w-[100vw] justify-center items-center">
      <div className="h-full py-36">
        {/* <div className="flex gap-10">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="hover:bg-gray-800"
            >
              activeLevel: {activeLevel}
            </MenuButton>
            <MenuList className="text-black">
              <MenuItem value="0" onClick={() => setActiveLevel("0")}>
                1
              </MenuItem>
              <MenuItem value="1" onClick={() => setActiveLevel("1")}>
                2
              </MenuItem>
              <MenuItem value="2" onClick={() => setActiveLevel("2")}>
                3
              </MenuItem>
              <MenuItem value="3" onClick={() => setActiveLevel("3")}>
                4
              </MenuItem>
              <MenuItem value="4" onClick={() => setActiveLevel("4")}>
                5
              </MenuItem>
              <MenuItem value="5" onClick={() => setActiveLevel("5")}>
                6
              </MenuItem>
              <MenuItem value="6" onClick={() => setActiveLevel("6")}>
                7
              </MenuItem>
              <MenuItem value="7" onClick={() => setActiveLevel("7")}>
                8
              </MenuItem>
              <MenuItem value="8" onClick={() => setActiveLevel("8")}>
                9
              </MenuItem>
              <MenuItem value="9" onClick={() => setActiveLevel("9")}>
                10
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="hover:bg-gray-800"
            >
              windowStyle:{windowStyleName}
            </MenuButton>
            <MenuList className="text-black">
              <MenuItem
                value="0"
                onClick={() => {
                  setWindowStyle("0");
                  setWindowStyleName("Office");
                }}
              >
                Office
              </MenuItem>
              <MenuItem
                value="1"
                onClick={() => {
                  setWindowStyle("1");
                  setWindowStyleName("Skyscraper");
                }}
              >
                Skyscraper
              </MenuItem>
              <MenuItem
                value="2"
                onClick={() => {
                  setWindowStyle("2");
                  setWindowStyleName("Apartment");
                }}
              >
                Apartment
              </MenuItem>
              <MenuItem
                value="3"
                onClick={() => {
                  setWindowStyle("3");
                  setWindowStyleName("Monument");
                }}
              >
                Monument
              </MenuItem>
              <MenuItem
                value="4"
                onClick={() => {
                  setWindowStyle("4");
                  setWindowStyleName("Hotel");
                }}
              >
                Hotel
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            className="bg-black hover:bg-gray-800"
            onClick={() => getData(windowStyle, activeLevel)}
          >
            get pngss
          </Button>
        </div> */}
        <div className="pt-96">
          <img
            src={`http://172.104.90.55/svg/${activeLevel}/${windowStyle}`}
            alt="none"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
