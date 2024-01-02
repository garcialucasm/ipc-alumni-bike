import { BikeSize, BikeStatus } from "@/types/BikeType";
import Button from "../atoms/Button";
import Link from "next/link";
import { SingleBookingSection } from "@/types/NavigationSections";
import { useState } from "react";
import BikeChooserContainer from "../organisms/BikeChooserContainer";

//TODO get the number of bikes for each BikeStatus
const countFreeByType = { standardType: 5, classicType: 10, smallType: 3 };

function InputStudentBikeSize(props: {
  onSizeSelection: (bikeSizeButton: { selectedSize: BikeSize }) => void;
  onNavigation: (navigationButton: {
    buttonName: SingleBookingSection;
  }) => void;
}) {
  const [radioBikeSizeValue, setRadioBikeSizeValue] = useState<BikeSize>(
    BikeSize.CLASSIC
  );

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedRadio = event.target.value as BikeSize;
    setRadioBikeSizeValue(selectedRadio);
    console.log("Selected Bike Size: ", selectedRadio);
  }

  function handleClick() {
    props.onSizeSelection({ selectedSize: radioBikeSizeValue });
    props.onNavigation({ buttonName: SingleBookingSection.inputUserData });
  }
  return (
    <>
      <div className="w-11/12 flex flex-col items-center">
        <div className="instruction-label">
          Select the bike type
        </div>
        <ul className="w-full mb-5 border border-slate-200 shadow-lg rounded-xl">
          <div>
            <BikeChooserContainer
              bikeCountFree={{
                bikeSize: radioBikeSizeValue,
                countFree: countFreeByType,
              }}
            />
          </div>
          <div className="flex justify-around bg-gradient-to-b from-white from-40% via-slate-200 via-60% to-slate-200 border-b-4 rounded-b-xl">
            <li className="w-full">
              <input
                type="radio"
                id="standard-bike-size"
                name="bike-size"
                value={BikeSize.STANDARD}
                className="hidden peer"
                checked={radioBikeSizeValue === BikeSize.STANDARD}
                onChange={handleRadioChange}
              />
              <label
                htmlFor="standard-bike-size"
                className={`bike-type-chooser-item`}
              >
                <div
                  className={`w-full py-2 rounded-b-xl text-lg bg-inherit ${
                    radioBikeSizeValue == BikeSize.CLASSIC
                      ? "rounded-tr-xl"
                      : ""
                  }`}
                >
                  Standard
                </div>
              </label>
            </li>
            <li className="w-full">
              <input
                type="radio"
                id="classic-bike-size"
                name="bike-size"
                value={BikeSize.CLASSIC}
                className="hidden peer"
                checked={radioBikeSizeValue === BikeSize.CLASSIC}
                onChange={handleRadioChange}
              />
              <label
                htmlFor="classic-bike-size"
                className="bike-type-chooser-item"
              >
                <div
                  className={`w-full py-2 rounded-b-xl text-lg bg-inherit ${
                    radioBikeSizeValue == BikeSize.STANDARD
                      ? "rounded-tl-xl"
                      : ""
                  } ${
                    radioBikeSizeValue == BikeSize.SMALL ? "rounded-tr-xl" : ""
                  }`}
                >
                  Classic
                </div>
              </label>
            </li>
            <li className="w-full">
              <input
                type="radio"
                id="small-bike-size"
                name="bike-size"
                value={BikeSize.SMALL}
                className="hidden peer"
                checked={radioBikeSizeValue === BikeSize.SMALL}
                onChange={handleRadioChange}
              />
              <label
                htmlFor="small-bike-size"
                className="bike-type-chooser-item"
              >
                <div
                  className={`w-full py-2 rounded-b-xl text-lg bg-inherit ${
                    radioBikeSizeValue == BikeSize.CLASSIC
                      ? "rounded-tl-xl"
                      : ""
                  }`}
                >
                  Small
                </div>
              </label>
            </li>
          </div>
        </ul>
        <div className="w-full">
          <Button onClick={handleClick} name="next" className="btn-primary">
            <span>Next</span>
          </Button>
        </div>
        <div className="w-full">
          <Link href="/home-app">
            <div className="btn-return">Return</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default InputStudentBikeSize;
