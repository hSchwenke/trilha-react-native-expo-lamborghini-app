import axios from "axios";
import { CarModel } from "../components/CardView/props";
import { CAR_API_BASE_URL } from "../constants/car";

export interface ApiResponse {
  cars: CarModel[];
}

// In-memory cache to prevent redundant network requests
let cachedCars: CarModel[] | null = null;

/**
 * Fetches the full list of cars from the API (with in-memory caching).
 */
export const fetchCarsList = async (): Promise<CarModel[]> => {
  if (cachedCars && cachedCars.length > 0) {
    return cachedCars;
  }

  try {
    const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);
    if (response.data && Array.isArray(response.data.cars)) {
      cachedCars = response.data.cars;
      return cachedCars;
    }
    return [];
  } catch (error) {
    console.error("Erro ao buscar lista de carros da API:", error);
    throw error;
  }
};

/**
 * Fetches a single car by its ID.
 */
export const fetchCarById = async (id: number): Promise<CarModel | null> => {
  try {
    const cars = await fetchCarsList();
    const car = cars.find((item) => item.id === id);
    return car || null;
  } catch (error) {
    console.error(`Erro ao buscar dados do carro ID ${id}:`, error);
    return null;
  }
};

/**
 * Legacy-compatible function that fetches car data and optionally updates state.
 */
export const fetchGetCarData = async (
  id: number,
  setCarDataCallback?: React.Dispatch<React.SetStateAction<CarModel | null>>
): Promise<CarModel | null> => {
  const carData = await fetchCarById(id);
  if (setCarDataCallback) {
    setCarDataCallback(carData);
  }
  return carData;
};
