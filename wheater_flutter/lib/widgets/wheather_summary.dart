// ignore_for_file: public_member_api_docs, sort_constructors_first
// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';

import '../utils/weather_codes.dart';

class WheatherSummary extends StatefulWidget {
  final String temperature;
  final String min;
  final String max;
  final String windSpeed;
  final String humidity;
  final String precipitationPercentage;
  final String weatherCode;

// color variable

  const WheatherSummary(
      {Key? key,
      required this.temperature,
      required this.min,
      required this.max,
      required this.windSpeed,
      required this.humidity,
      required this.precipitationPercentage,
      required this.weatherCode})
      : super(key: key);

  @override
  State<WheatherSummary> createState() => _WheatherSummaryState();
}

class _WheatherSummaryState extends State<WheatherSummary> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Center(
          child: Container(
            margin: EdgeInsets.only(right: 10, left: 10),
            width: 284,
            height: 207,
            child: int.parse(widget.weatherCode) > 60
                ? Image.asset("./assets/images/sun_cloud_rain.png")
                : Image.asset("./assets/images/sun_cloud.png"),
          ),
        ),
        Column(
          children: [
            Text(
              "${widget.temperature}º",
              style: TextStyle(
                  fontSize: 64,
                  fontFamily: 'SFProDisplay-regular',
                  fontWeight: FontWeight.w600,
                  //fontFamily: 'SFProDisplay-regular',
                  color: Colors.white),
            ),
            Text(
              weatherInterpretation[widget.weatherCode]["description"],
              style: TextStyle(
                fontSize: 18,
                color: Colors.white,
              ),
            ),
            SizedBox(
              height: 5,
            ),
            Text(
              "Max.: ${widget.max}º Min.: ${widget.min}º",
              style: TextStyle(
                fontSize: 18,
                color: Colors.white,
              ),
            ),
          ],
        ),
        Container(
          margin: EdgeInsets.only(
            top: 31,
          ),
          padding: EdgeInsets.only(left: 35, right: 10),
          width: 343,
          height: 47,
          decoration: BoxDecoration(
            color: HexColor("#104084").withOpacity(0.3),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                child: Row(
                  children: [
                    Image.asset("./assets/images/rain.png"),
                    Padding(
                      padding: const EdgeInsets.only(left: 5),
                      child: Text(
                        "${widget.humidity}%",
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                child: Row(
                  children: [
                    Image.asset("./assets/images/humidity.png"),
                    Padding(
                      padding: const EdgeInsets.only(left: 5),
                      child: Text(
                        "${widget.precipitationPercentage}%",
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                child: Row(
                  children: [
                    Image.asset("./assets/images/wind.png"),
                    Padding(
                      padding: const EdgeInsets.only(left: 5),
                      child: Text(
                        "${widget.windSpeed} Km/h",
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        )
      ],
    );
  }
}
