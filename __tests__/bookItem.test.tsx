import React from "react";
import { render, screen } from "@testing-library/react-native";
import ItemProduct from "../src/components/BookItem"; // ajuste o caminho conforme necessário

describe("BookItem Component", () => {
    it("should render correctly with the data provided", () => {
        const mockItem = {
            id: 1,
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K ROWLING",
            description: "Harry Potter is a wizard and has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
            price: 49.99,
        };

        render(
            <ItemProduct  
                author={mockItem.author}
                description={mockItem.description}
                price={mockItem.price}
                title={mockItem.title}
            />
        );

        expect(screen.getByText(mockItem.title)).toBeTruthy();
        expect(screen.getByText(`Author: ${mockItem.author}`)).toBeTruthy();
        expect(screen.getByText(`Price: US$${mockItem.price}`)).toBeTruthy();
        expect(screen.getByText(mockItem.description)).toBeTruthy();
    });

    it("Price always has two decimal places", () => {
        const mockItem = {
            id: 2,
            title: "Outro Livro",
            author: "Outro Autor",
            year: 2024,
            description: "Outra descrição.",
            price: 50,
        };
    
        render(<ItemProduct {...mockItem} />);
    
        expect(screen.getByText(/Price: US\$\d+\.\d{2}/)).toBeTruthy();
    });
});
