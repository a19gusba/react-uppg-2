function App({ codes }) {
  console.log(codes)

  function getCityData() {
    var data = { info: { cityName: "City", country: "Sweden", geodata: "asd", type: "type", zipCode: "12345", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, atque!" }, climateCode: { code: "Af", name: "Tropical rainforest climate Tropical Rainforest", color: "#960000" } }
    return data
  }

  function getChatData() {
    var data = { show: "show" }

    return data
  }

  return (
    <div>
      <div className="table-chat-container">
        <WeatherTable data={getCityData()}></WeatherTable>
        <ChatWindow data={getChatData()}></ChatWindow>
      </div>
    </div>
  );
}

