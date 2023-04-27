// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';

class WheatherSummary extends StatefulWidget {
  final String temperature;
  final String min;
  final String max;

// color variable

  const WheatherSummary(
      {super.key,
      required this.temperature,
      required this.min,
      required this.max});

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
            child: Image.asset("./assets/images/sun_cloud.png"),
          ),
        ),
        Column(
          children: [
            Text(
              widget.temperature + "º",
              style: TextStyle(
                  fontSize: 64,
                  fontWeight: FontWeight.w600,
                  color: Colors.white),
            ),
            Text(
              "Precipitations",
              style: TextStyle(fontSize: 18, color: Colors.white),
            ),
            SizedBox(
              height: 5,
            ),
            Text(
              "Max.: ${widget.max}º Min.: ${widget.min}º",
              style: TextStyle(fontSize: 18, color: Colors.white),
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
                        "5%",
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
                        "65%",
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
                        "25 Km/h",
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
