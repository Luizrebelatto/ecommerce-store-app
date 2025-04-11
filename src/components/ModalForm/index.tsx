import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

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
              rules={{ required: "Required Title" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter a Title"
                  value={value}
                  onChangeText={onChange}
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
                <TextInput
                  style={styles.input}
                  placeholder="Enter an author"
                  value={value}
                  onChangeText={onChange}
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
              rules={{ required: "Description Required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, { height: 80 }]}
                  placeholder="Enter a description"
                  value={value}
                  onChangeText={onChange}
                  multiline
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
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: " Invalid price format",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 29.90"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.price && (
              <Text style={styles.error}>{errors.price.message}</Text>
            )}

            <View style={styles.actions}>
              <Button title="Salvar" onPress={handleSubmit(onSubmit)} />
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.cancel}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    maxHeight: "90%",
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold",
  },
  label: {
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
  actions: {
    marginTop: 20,
  },
  cancel: {
    marginTop: 10,
    color: "#555",
    textAlign: "center",
  },
});
