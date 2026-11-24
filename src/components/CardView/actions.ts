import { fetchCarsList, fetchCarById, fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

/**
 * Loads car data by ID and updates component state.
 */
export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    await fetchGetCarData(id, setCarData);
  } catch (error) {
    console.error("Erro ao buscar dados da api:", error);
  }
};

/**
 * Navigates to the previous car in the list dynamically.
 */
export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>,
  totalCars: number = 10
) => {
  if (!carData) return;

  // Cycle to the last car if currently at the first car, or go to previous
  const prevId = carData.id > 1 ? carData.id - 1 : totalCars;
  await fetchGetCarData(prevId, setCarData);
};

/**
 * Navigates to the next car in the list dynamically.
 */
export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>,
  totalCars: number = 10
) => {
  if (!carData) return;

  // Cycle to the first car if currently at the last car, or go to next
  const nextId = carData.id < totalCars ? carData.id + 1 : 1;
  await fetchGetCarData(nextId, setCarData);
};
