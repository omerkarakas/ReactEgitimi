// src/App.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { describe, it, expect } from "vitest"; // Jest kullanıyorsan vitest yerine jest kullan

describe("Todo App", () => {
  it("başlık doğru şekilde render edilir", () => {
    render(<App />);
    expect(screen.getByText("Todo App")).toBeInTheDocument();
  });

  it("girdi alanı çalışır durumda olmalı", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Yeni görev");
    await userEvent.type(input, "Kitap oku");
    expect(input).toHaveValue("Kitap oku");
  });

  it("yeni görev listeye eklenmeli", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Yeni görev");
    const button = screen.getByText("Ekle");

    await userEvent.type(input, "Yürüyüş yap");
    await userEvent.click(button);

    expect(screen.getByText("Yürüyüş yap")).toBeInTheDocument();
  });

  it("boş görev eklenmemeli", async () => {
    render(<App />);
    const button = screen.getByText("Ekle");

    await userEvent.click(button);
    const listItems = screen.queryAllByRole("listitem");

    expect(listItems.length).toBe(0);
  });
});
