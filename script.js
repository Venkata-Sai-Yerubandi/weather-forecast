let temp = document.getElementById("details");
async function getWeatherDetails(e) {
  let location = document.getElementById("location-name");

  let place = location.value;
  let btnElem = e.target;
  btnElem.innerText = "loading...";
  let api = `https://api.weatherapi.com/v1/current.json/forecast.json?key=8e18167c35ad4cb7907133007262801&q=${place}&days=5&aqi=yes`;
  try {
    let res = await axios.get(api);
    weatherDetails(res.data);
    console.log(res.data);
  } catch (err) {
    alert(err.response.data.error.message);
    dataerror();
  } finally {
    location.value = "";
    btnElem.innerText = "Search";
  }
}

function dataerror() {
  let d = ` <h1></h1>`;
}
function weatherDetails(dt) {
  let weatherData = `
       
<div class="container-fluid px-2 px-md-4">

    <!-- Main Weather Section -->
    <div class="row g-3">

        <!-- Main Weather Card -->
        <div class="col-12 col-lg-8">

            <div class="card card-dark p-3 p-md-4 h-100">

                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">

                    <div>
                        <h3>${dt.location.name}</h3>

                        <div class="small-text">
                            ${dt.current.condition.text}
                        </div>

                        <div class="temp-big mt-3">
                            ${dt.current.temp_c}°c
                        </div>
                    </div>

                    <i class="bi bi-sun-fill sun-icon"></i>

                </div>


                <!-- Hourly Forecast -->
                <div class="hour-box-color mt-4 p-3 rounded">

                    <div class="mb-3">
                        Today's Forecast
                    </div>

                    <!-- Horizontal scroll on small screens -->
                    <div class="d-flex flex-nowrap overflow-auto gap-2 pb-2">

                        <div class="hour-box d-flex flex-column align-items-center p-2 flex-shrink-0">
                            <div>6:00 AM</div>
                            <img
                                src="${dt.forecast.forecastday[0].hour[6].condition.icon}"
                                class="img-fluid"
                                alt="6 AM"
                            />
                            <div>
                                ${dt.forecast.forecastday[0].hour[6].temp_c}°c
                            </div>
                        </div>


                        <div class="hour-box d-flex flex-column align-items-center p-2 flex-shrink-0">
                            <div>9:00 AM</div>
                            <img
                                src="${dt.forecast.forecastday[0].hour[9].condition.icon}"
                                class="img-fluid"
                                alt="9 AM"
                            />
                            <div>
                                ${dt.forecast.forecastday[0].hour[9].temp_c}°c
                            </div>
                        </div>


                        <div class="hour-box d-flex flex-column align-items-center p-2 flex-shrink-0">
                            <div>12:00 PM</div>
                            <img
                                src="${dt.forecast.forecastday[0].hour[12].condition.icon}"
                                class="img-fluid"
                                alt="12 PM"
                            />
                            <div>
                                ${dt.forecast.forecastday[0].hour[12].temp_c}°c
                            </div>
                        </div>


                        <div class="hour-box d-flex flex-column align-items-center p-2 flex-shrink-0">
                            <div>3:00 PM</div>
                            <img
                                src="${dt.forecast.forecastday[0].hour[15].condition.icon}"
                                class="img-fluid"
                                alt="3 PM"
                            />
                            <div>
                                ${dt.forecast.forecastday[0].hour[15].temp_c}°c
                            </div>
                        </div>


                        <div class="hour-box d-flex flex-column align-items-center p-2 flex-shrink-0">
                            <div>6:00 PM</div>
                            <img
                                src="${dt.forecast.forecastday[0].hour[18].condition.icon}"
                                class="img-fluid"
                                alt="6 PM"
                            />
                            <div>
                                ${dt.forecast.forecastday[0].hour[18].temp_c}°c
                            </div>
                        </div>


                        <div class="hour-box d-flex flex-column align-items-center p-2 flex-shrink-0">
                            <div>9:00 PM</div>
                            <img
                                src="${dt.forecast.forecastday[0].hour[21].condition.icon}"
                                class="img-fluid"
                                alt="9 PM"
                            />
                            <div>
                                ${dt.forecast.forecastday[0].hour[21].temp_c}°c
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


        <!-- 3-Day Forecast -->
        <div class="col-12 col-lg-4">

            <div class="card p-3 p-md-4 h-100">

                <h5 class="mb-4 text-center">
                    3-Day Forecast
                </h5>

                <div class="table-responsive">

                    <table class="table text-center align-middle mb-0">

                        <tbody>

                            <tr>
                                <td>Today</td>

                                <td>
                                    <img
                                        src="${dt.forecast.forecastday[0].day.condition.icon}"
                                        class="img-fluid"
                                        width="50"
                                        alt="Today"
                                    >
                                </td>

                                <td>
                                    ${dt.forecast.forecastday[0].day.avgtemp_c}°C
                                </td>
                            </tr>


                            <tr>
                                <td>Tomorrow</td>

                                <td>
                                    <img
                                        src="${dt.forecast.forecastday[1].day.condition.icon}"
                                        class="img-fluid"
                                        width="50"
                                        alt="Tomorrow"
                                    >
                                </td>

                                <td>
                                    ${dt.forecast.forecastday[1].day.avgtemp_c}°C
                                </td>
                            </tr>


                            <tr>
                                <td>Day After Tomorrow</td>

                                <td>
                                    <img
                                        src="${dt.forecast.forecastday[2].day.condition.icon}"
                                        class="img-fluid"
                                        width="50"
                                        alt="Day After Tomorrow"
                                    >
                                </td>

                                <td>
                                    ${dt.forecast.forecastday[2].day.avgtemp_c}°C
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </div>

    </div>


    <!-- Air Conditions -->
    <div class="row mt-3">

        <div class="col-12">

            <div class="hour-box-color p-3 rounded">

                <div class="mb-3">
                    Air Conditions
                </div>

                <div class="row g-3">

                    <!-- Chance of Rain -->
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-center text-center">
                            <div>Chance of Rain</div>
                            <div>${dt.current.chance_of_rain}%</div>
                        </div>
                    </div>


                    <!-- UV Index -->
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-center text-center">
                            <div>UV Index</div>
                            <div>${dt.current.uv}</div>
                        </div>
                    </div>


                    <!-- Wind Speed -->
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-center text-center">
                            <div>Wind Speed</div>
                            <div>${dt.current.wind_kph} km/h</div>
                        </div>
                    </div>


                    <!-- Real Feel -->
                    <div class="col-6 col-md-3">
                        <div class="d-flex flex-column align-items-center text-center">
                            <div>Real Feel</div>
                            <div>${dt.current.feelslike_c}°</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>

</div>
   
`;
  temp.innerHTML = weatherData;
}
