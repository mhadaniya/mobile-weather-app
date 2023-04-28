// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:http/http.dart' as http;
import 'package:wheater_flutter/widgets/forecast.dart';
import 'package:wheater_flutter/widgets/today_wheather.dart';
import 'package:wheater_flutter/widgets/wheather_summary.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import '../widgets/drop_down.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  dynamic apiData;

  Future<dynamic> fetchWeather() async {
    final response = await http.get(Uri.parse(
        'https://api.open-meteo.com/v1/forecast?latitude=-9.66625&longitude=-35.7351&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=America%2FSao_Paulo'));

    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      dynamic data = jsonDecode(response.body);

      setState(() {
        apiData = data;
      });

      return jsonDecode(response.body);
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.

      print("fail");
      throw Exception('Failed to load album');
    }
  }

  @override
  void initState() {
    super.initState();
    fetchWeather();
  }

  @override
  Widget build(BuildContext context) {
    dynamic time;
    dynamic index;
    if (apiData != null) {
      time = apiData["current_weather"]["time"];
      index = apiData["hourly"]["time"].indexOf(time);
    }
    return apiData != null
        ? Scaffold(
            backgroundColor: apiData["current_weather"]["weathercode"] > 60
                ? Color.fromARGB(255, 12, 2, 52)
                : Colors.blue,
            appBar: AppBar(
              actions: [
                Padding(
                  padding: const EdgeInsets.only(right: 10),
                  // ignore: prefer_const_constructors
                  child: Icon(
                    Icons.notifications_outlined,
                    size: 27,
                  ),
                ),
              ],
              leading: Icon(
                Icons.pin_drop,
                size: 27,
              ),
              shadowColor: Colors.transparent,
              bottomOpacity: 0.0,
              elevation: 0.0,
              title: DropDown(),
              backgroundColor: Colors.transparent,
              toolbarHeight: 50,
            ),
            body: SingleChildScrollView(
              child: Column(
                children: [
                  WheatherSummary(
                    temperature:
                        apiData["current_weather"]["temperature"].toString(),
                    min: apiData["daily"]["temperature_2m_min"][0].toString(),
                    max: apiData["daily"]["temperature_2m_max"][0].toString(),
                    windSpeed:
                        apiData["current_weather"]["windspeed"].toString(),
                    humidity: apiData["hourly"]["relativehumidity_2m"][index]
                        .toString(),
                    precipitationPercentage: apiData["hourly"]
                            ["precipitation_probability"][index]
                        .toString(),
                    weatherCode:
                        apiData["current_weather"]["weathercode"].toString(),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  TodayWheather(weather: apiData["hourly"]),
                  SizedBox(
                    height: 20,
                  ),
                  Forecast(weather: apiData["daily"]),
                  SizedBox(
                    height: 100,
                  )
                ],
              ),
            ),
          )
        : Container(
            child: SpinKitCircle(
              size: 140,
              itemBuilder: (context, index) {
                final colors = [Colors.white, Colors.pink, Colors.yellow];
                final color = colors[index % colors.length];
                return DecoratedBox(
                    decoration: BoxDecoration(
                  color: color,
                ));
              },
            ),
          );
  }
}
