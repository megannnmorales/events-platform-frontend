import Homepage from "./pages/HomePage";

export default function App() {
  const test = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/events");

    const data = response.json();
    console.log(data);
  };

  test();

  return (
    <>
      <Homepage />
    </>
  );
}
