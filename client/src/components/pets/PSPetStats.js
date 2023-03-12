import { Flex } from "@chakra-ui/react";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { COLOR_BLUE, COLOR_PINK } from "../../helper/constants/colors";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
import { convertDateToAge } from "../../helper/functions";
import PSStats from "../layout/PSStats";

const PSPetStats = ({ pet }) => {
  if (pet)
    return (
      <Flex gap={SPACING_SMALL} flexWrap="wrap">
        <PSStats title="Peso" value={pet.weight ? pet.weight + "KG" : "N/A"} />
        <PSStats
          title="Idade"
          value={pet.birthDay ? convertDateToAge(pet.birthDay) : "N/A"}
        />
        <PSStats
          title="Gênero"
          icon={
            pet.gender === "MALE" ? (
              <IoMaleSharp color={COLOR_BLUE} />
            ) : (
              <IoFemaleSharp color={COLOR_PINK} />
            )
          }
        />
      </Flex>
    );
  else return null;
};

export default PSPetStats;
