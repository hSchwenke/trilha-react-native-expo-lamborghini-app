import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Logo from "../../../assets/logo.png";
import { styles } from "./style";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { CarModel, CardViewProps } from "./props";
import { fetchCarsList } from "../../api/getCars";

export default function CardView({ initialCarId = 1 }: CardViewProps) {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [carData, setCarData] = useState<CarModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const list = await fetchCarsList();
      setCars(list);
      if (list.length > 0) {
        const found = list.find((c) => c.id === initialCarId) || list[0];
        setCarData(found);
      }
    } catch (err) {
      setError("Não foi possível carregar a garagem. Verifique sua conexão com a API.");
    } finally {
      setLoading(false);
    }
  }, [initialCarId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handlePrevious = () => {
    if (!carData || cars.length === 0) return;
    const currentIndex = cars.findIndex((c) => c.id === carData.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : cars.length - 1;
    setImageLoading(true);
    setCarData(cars[prevIndex]);
  };

  const handleNext = () => {
    if (!carData || cars.length === 0) return;
    const currentIndex = cars.findIndex((c) => c.id === carData.id);
    const nextIndex = currentIndex < cars.length - 1 ? currentIndex + 1 : 0;
    setImageLoading(true);
    setCarData(cars[nextIndex]);
  };

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={styles.carDetailsContainer}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName || "---"}</Text>
      {carData?.releaseYear ? (
        <View style={styles.yearBadge}>
          <Text style={styles.yearBadgeText}>Ano {carData.releaseYear}</Text>
        </View>
      ) : null}
    </View>
  );

  const renderCarImage = () => {
    const imageUrl = carData ? `${CAR_ASSETS_BASE_URL}${carData.id}.png` : "";

    return (
      <View style={styles.imageWrapper}>
        {imageLoading && (
          <ActivityIndicator
            style={styles.imageLoader}
            size="large"
            color="#01A6B3"
          />
        )}
        {carData && (
          <Image
            key={imageUrl}
            style={styles.image}
            source={{ uri: imageUrl }}
            onLoadStart={() => setImageLoading(true)}
            onLoadEnd={() => setImageLoading(false)}
          />
        )}
      </View>
    );
  };

  const renderPriceControls = () => {
    const currentIndex = cars.findIndex((c) => c?.id === carData?.id);
    const counterText =
      cars.length > 0 && currentIndex >= 0
        ? `${currentIndex + 1} de ${cars.length}`
        : "";

    return (
      <View style={styles.priceLabelContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={handlePrevious}
          activeOpacity={0.7}
          accessibilityLabel="Carro anterior"
        >
          <AntDesign name="left" size={20} color="#01A6B3" />
        </TouchableOpacity>

        <View style={styles.priceDetails}>
          <Text style={styles.priceLabel}>{carData?.price || "---"}</Text>
          {counterText ? (
            <Text style={styles.counterText}>{counterText}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          style={styles.navButton}
          onPress={handleNext}
          activeOpacity={0.7}
          accessibilityLabel="Próximo carro"
        >
          <AntDesign name="right" size={20} color="#01A6B3" />
        </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.centerState}>
        <ActivityIndicator size="large" color="#01A6B3" />
        <Text style={styles.loadingText}>Carregando veículos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerState}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadData}>
          <Text style={styles.retryButtonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderCarDetails()}
      {renderCarImage()}

      <Divider />
      <BuyButton car={carData} />
      {renderPriceControls()}
    </View>
  );
}
