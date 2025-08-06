import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App bileşeni", () => {
  it("Başlık görünür olmalı", () => {
    render(<App />);
    expect(screen.getByText(/Yapılacaklar Listesi/i)).toBeTruthy();
  });

  it("Henüz görev yok mesajı liste boşken görünür", () => {
    render(<App />);
    expect(screen.getByText(/Henüz görev yok./i)).toBeTruthy();
  });

  it("Görev eklenince listeye yeni öğe eklenir", async () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const ekleButton = screen.getByRole("button", { name: /ekle/i });

    await userEvent.type(input, "Test Görevi");
    await userEvent.click(ekleButton);

    expect(screen.queryByText(/Henüz görev yok./i)).toBeNull();
    expect(screen.getByText("Test Görevi")).toBeTruthy();
  });

  it("Görev sil butonuna tıklayınca görev listeden çıkar", async () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const ekleButton = screen.getByRole("button", { name: /ekle/i });

    await userEvent.type(input, "Silinecek Görev");
    await userEvent.click(ekleButton);

    expect(screen.getByText("Silinecek Görev")).toBeTruthy(); // toBeInTheDocument();

    const silButton = screen.getByRole("button", { name: /sil/i });
    await userEvent.click(silButton);

    expect(screen.queryByText("Silinecek Görev")).toBeNull();
  });
});
