// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:wheater_flutter/widgets/wheather_summary.dart';

import '../widgets/drop_down.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  dynamic apiData = {};

  Future<dynamic> fetchWeather() async {
    final response = await http.get(Uri.parse(
        'https://api.open-meteo.com/v1/forecast?latitude=-9.66625&longitude=-35.7351&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo'));

    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      dynamic data = jsonDecode(response.body);
      print(data);
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
    return Scaffold(
      backgroundColor: Colors.blue,
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
      body: Column(
        children: [
          WheatherSummary(
              temperature: apiData["current_weather"]["temperature"].toString(),
              min: apiData["daily"]["temperature_2m_min"][0].toString(),
              max: apiData["daily"]["temperature_2m_max"][0].toString())
        ],
      ),
    );
  }
}
