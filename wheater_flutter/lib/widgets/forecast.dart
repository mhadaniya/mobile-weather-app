// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:intl/intl.dart';

import '../utils/weather_codes.dart';

class Forecast extends StatefulWidget {
  final dynamic weather;

  Forecast({
    super.key,
    required this.weather,
  });

  @override
  State<Forecast> createState() => _ForecastState();
}

class _ForecastState extends State<Forecast> {
  String getDayName(String date) {
    DateTime parsedDate = DateTime.parse(date);
    return DateFormat('EEEE').format(parsedDate);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      width: 343,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: HexColor("#104084").withOpacity(0.3),
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                "Next Forecast",
                style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.w700),
              ),
              Icon(
                Icons.event_outlined,
                color: Colors.white,
              ),
            ],
          ),
          SizedBox(
            height: 25,
          ),
          Container(
            margin: EdgeInsets.only(bottom: 50),
            child: Column(
                children: widget.weather["time"].map<Widget>((day) {
              dynamic index = widget.weather["time"].indexOf(day);

              return Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    getDayName(day.toString()),
                    style: TextStyle(
                        color: Colors.white,
                        fontFamily: 'AlegreySans-Regular',
                        fontSize: 18,
                        fontWeight: FontWeight.w700),
                  ),
                  Icon(
                    getIconData(weatherInterpretation[
                            widget.weather["weathercode"][index].toString()]
                        ["icon"]),
                    color: Colors.yellow,
                  ),
                  SizedBox(
                    width: 120,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "${widget.weather["temperature_2m_max"][index]}ºc",
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 16,
                              fontFamily: 'AlegreySans-Regular',
                              fontWeight: FontWeight.w500),
                        ),
                        Text(
                          "${widget.weather["temperature_2m_max"][index]}ºc",
                          style: TextStyle(
                              color: Colors.white70,
                              fontFamily: 'AlegreySans-Regular',
                              fontSize: 16,
                              fontWeight: FontWeight.w500),
                        )
                      ],
                    ),
                  ),
                ],
              );
            }).toList()),
          )
        ],
      ),
    );
  }
}
