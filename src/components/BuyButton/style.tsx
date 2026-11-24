import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01A6B3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    shadowColor: "#01A6B3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    marginVertical: 4,
  },
  iconText: {
    fontSize: 18,
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 0.5,
  },
});
