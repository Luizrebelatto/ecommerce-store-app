import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./styles";
import InputField from "../InputField";
import { validatePrice, validateDescription, validateTitle } from "../../utils/validateInputs";

interface FormModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmitForm: (data: FormData) => void;
}

type FormData = {
  title: string;
  author: string;
  description: string;
  price: string;
};

export default function ModalForm({
  visible,
  onClose,
  onSubmitForm,
}: FormModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      price: "",
    },
  });

  const onSubmit = (data: FormData) => {
    onSubmitForm(data);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.title}>New Item</Text>

            <Text style={styles.label}>Title</Text>
            <Controller
              control={control}
              name="title"
              rules={{ 
                required: "Required Title",
                validate: (value) => validateTitle(value) || "Invalid Title" 
              }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Enter a title"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="default"
                />
              )}
            />
            {errors.title && (
              <Text style={styles.error}>{errors.title.message}</Text>
            )}

            <Text style={styles.label}>Author</Text>
            <Controller
              control={control}
              name="author"
              rules={{ required: "Author Required" }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Enter an author"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="default"
                />
              )}
            />
            {errors.author && (
              <Text style={styles.error}>{errors.author.message}</Text>
            )}

            <Text style={styles.label}>Description</Text>
            <Controller
              control={control}
              name="description"
              rules={{ 
                required: "Description Required",
                validate: (value) => validateDescription(value) || "Invalid description"
              }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  placeholder="Enter a description"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="default"
                />
              )}
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description.message}</Text>
            )}

            <Text style={styles.label}>Price</Text>
            <Controller
              control={control}
              name="price"
              rules={{
                required: "Price required",
                validate: (value) => validatePrice(value) || "Invalid price format"
              }}
              render={({ field: { onChange, value } }) => (
                <InputField
                  onChangeText={onChange}
                  value={value}
                  placeholder="Enter a price"
                  keyboardType="numeric"
                />
              )}
            />
            {errors.price && (
              <Text style={styles.error}>{errors.price.message}</Text>
            )}

            <View style={styles.actions}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text style={styles.cancel}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}