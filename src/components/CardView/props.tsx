export interface CarModel {
  id: number;
  carName: string;
  releaseYear: number;
  price: string;
}

export interface CardViewProps {
  initialCarId?: number;
}
