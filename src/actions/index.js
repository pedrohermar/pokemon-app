export const colorType = (type) => {
  switch (type) {
    case "normal":
      return "bg-gray-300";
    case "fighting":
      return "bg-orange-400";
    case "flying":
      return "bg-blue-200";
    case "poison":
      return "bg-purple-400";
    case "ground":
      return "bg-yellow-200";
    case "rock":
      return "bg-gray-500 text-white";
    case "bug":
      return "bg-green-700 text-white";
    case "ghost":
      return "bg-purple-700 text-white";
    case "steel":
      return "bg-gray-400";
    case "fire":
      return "bg-orange-600 text-white";
    case "water":
      return "bg-blue-400";
    case "grass":
      return "bg-green-500";
    case "electric":
      return "bg-yellow-400";
    case "psychic":
      return "bg-pink-600 text-white";
    case "ice":
      return "bg-blue-300";
    case "dragon":
      return "bg-blue-700 text-white";
    case "dark":
      return "bg-gray-800 text-white";
    case "fairy":
      return "bg-pink-300";
    case "shadow":
      return "bg-black text-white";
    default:
      break;
  }
};

export const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};
