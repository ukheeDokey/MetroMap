import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

export default function Search() {
  const [recentSearches, setRecentSearches] = useState([
    { id: "1", station: "211" },
    { id: "2", station: "118" },
    { id: "3", station: "617" },
    { id: "4", station: "410" },
  ]);

  // 전체 삭제 핸들러
  const handleClearAll = () => {
    setRecentSearches([]);
  };

  // 개별 삭제 핸들러
  const handleDeleteItem = (id) => {
    setRecentSearches(recentSearches.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.searchItem}>
      <View style={styles.searchItemLeft}>
        <Image source={require("./assets/location.png")} style={styles.locationIcon} />
        <Text style={styles.stationText}>{item.station}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
        <Image source={require("./assets/x_icon.png")} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 상단 여백 */}
      <View style={styles.topSpace} />

      {/* 검색 입력란 */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="역 검색"
          style={styles.searchInput}
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity>
          <Image source={require("./assets/x_icon.png")} style={styles.clearIcon} />
        </TouchableOpacity>
      </View>

      {/* 최근 기록 및 즐겨찾기 탭 */}
      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>최근기록</Text>
        <Text style={styles.tabText}>즐겨찾기</Text>
      </View>

      {/* 광고 배너 */}
      <Image source={require("./assets/ADBanner.png")} style={styles.banner} />

      {/* 전체 삭제 버튼 */}
      <View style={styles.clearAllContainer}>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAllText}>전체삭제</Text>
        </TouchableOpacity>
      </View>

      {/* 최근 검색 기록 리스트 */}
      <FlatList
        data={recentSearches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>최근 검색 기록이 없습니다.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topSpace: {
    height: 65,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    borderRadius: 25,
    margin: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333333",
  },
  clearIcon: {
    width: 20,
    height: 20,
    tintColor: "#A9A9A9",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
    paddingBottom: 10,
    marginHorizontal: 15,
  },
  tabText: {
    fontSize: 16,
    color: "#A9A9A9",
  },
  activeTab: {
    fontWeight: "bold",
    color: "#333333",
  },
  banner: {
    width: "100%",
    height: 70,
    resizeMode: "cover",
    marginVertical: 10,
  },
  clearAllContainer: {
    alignItems: "flex-end",
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 5,
  },
  clearAllText: {
    fontSize: 14,
    color: "#A9A9A9",
    textDecorationLine: "underline",
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  searchItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
    tintColor: "#87CEEB",
  },
  stationText: {
    fontSize: 16,
    color: "#333333",
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: "#A9A9A9",
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  emptyText: {
    fontSize: 14,
    color: "#A9A9A9",
  },
});