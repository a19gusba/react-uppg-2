function App({ ort, climateCode, forecast }) {
  /*   console.log(ort)
    console.log(climateCode) */

  function getCityData() {
    var data = { info: { cityName: "City", country: "Sweden", geodata: "asd", type: "type", zipCode: "12345", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, atque!" }, climateCode: { code: "Af", name: "Tropical rainforest climate Tropical Rainforest", color: "#960000" } }
    return data
  }

  function getChatData() {
    var data = { show: "show" }

    return data
  }

  function getClimateCodeData() {
    for (var e of climateCode) {
      if (e.code == ort.climatecode)
        return e
    }
  }

  return (
    <div>
      <div className="table-chat-container">
        <WeatherTable ort={ort} climateCode={getClimateCodeData()} forecast={forecast}></WeatherTable>
        <ChatWindow data={getChatData()}></ChatWindow>
      </div>
    </div>
  );
}

