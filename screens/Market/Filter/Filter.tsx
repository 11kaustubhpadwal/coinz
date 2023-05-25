import { Modal, Pressable, View } from "react-native";
import { FilterStyles } from "./stylesheet";
import Typography from "../../../components/Typography";
import { FilterProps } from "./types";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import { Colors } from "../../../utils/colors";
import React, { useState } from "react";
import { getFilterOptions } from "./utils";
import { FlatList } from "react-native";
import Button from "../../../components/Button";
import CloseIcon from "../../../assets/icons/CloseIcon";

const Filter = ({ name, ...rest }: FilterProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View>
      <Pressable {...rest} onPress={openModal}>
        <View style={FilterStyles.wrapper}>
          <View style={FilterStyles.column1}>
            <Typography variant={"h6"} color={Colors.Secondary}>
              {name}
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
                <Typography variant={"h3"}>{name}</Typography>
              </View>
              <Pressable onPress={closeModal}>
                <CloseIcon />
              </Pressable>
            </View>
            <View style={FilterStyles.divider} />
            <FlatList
              data={getFilterOptions(name)}
              renderItem={({ item, index }) => (
                <Pressable
                  key={item.value}
                  style={
                    index !== getFilterOptions(name).length - 1
                      ? FilterStyles.modalItem
                      : FilterStyles.modalItemLast
                  }
                >
                  <Typography variant={"h6"}>{item.name}</Typography>
                </Pressable>
              )}
            />
            <View style={FilterStyles.button}>
              <Button variant={"primary"} text={"Update Market"} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Filter;
