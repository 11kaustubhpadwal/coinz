import { Modal, Pressable, View } from "react-native";
import { FilterStyles } from "./stylesheet";
import Typography from "../../../components/Typography";
import { FilterProps, Filters } from "./types";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import { Colors } from "../../../utils/colors";
import React, { useMemo, useState } from "react";
import { getFilterOptions } from "./utils";
import { FlatList } from "react-native";
import Button from "../../../components/Button";
import CloseIcon from "../../../assets/icons/CloseIcon";

const Filter = ({
  filterName,
  setQueryParams,
  queryParams,
  ...rest
}: FilterProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const defaultValue = useMemo(
    () => ({
      name:
        filterName === Filters.OrderBy
          ? queryParams.orderBy
          : queryParams.timePeriod,
      value:
        filterName === Filters.OrderBy
          ? queryParams.orderBy
          : queryParams.timePeriod,
    }),
    [queryParams, filterName]
  );

  const [filterValue, setFilterValue] = useState(defaultValue);

  const handleSubmit = () => {
    const orderBy =
      filterName === Filters.OrderBy ? filterValue.value : queryParams.orderBy;
    const timePeriod =
      filterName === Filters.TimePeriods
        ? filterValue.value
        : queryParams.timePeriod;

    setQueryParams({ orderBy, timePeriod });
    closeModal();
  };

  return (
    <View>
      <Pressable {...rest} onPress={openModal}>
        <View style={FilterStyles.wrapper}>
          <View style={FilterStyles.column1}>
            <Typography variant={"h6"} color={Colors.Secondary}>
              {filterName}
            </Typography>
          </View>
          <ArrowDownIcon />
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent
        onRequestClose={closeModal}
        statusBarTranslucent
      >
        <View style={FilterStyles.modalWrapper}>
          <View style={FilterStyles.modal}>
            <View style={FilterStyles.modalHeader}>
              <View style={FilterStyles.modalHeaderColumn1}>
                <Typography variant={"h3"}>{filterName}</Typography>
              </View>
              <Pressable onPress={closeModal}>
                <CloseIcon />
              </Pressable>
            </View>
            <View style={FilterStyles.divider} />
            <FlatList
              data={getFilterOptions(filterName)}
              renderItem={({ item, index }) => (
                <Pressable
                  key={item.value}
                  style={
                    index !== getFilterOptions(filterName).length - 1
                      ? FilterStyles.modalItem
                      : FilterStyles.modalItemLast
                  }
                  onPress={() => setFilterValue(item)}
                >
                  <Typography
                    variant={"h6"}
                    color={
                      filterValue.value === item.value
                        ? Colors.Primary
                        : Colors.Secondary
                    }
                  >
                    {item.name}
                  </Typography>
                </Pressable>
              )}
            />
            <View style={FilterStyles.button}>
              <Button
                variant={"primary"}
                text={"Update Market"}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Filter;
