// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'package:flutter/material.dart';

class WheatherSummary extends StatefulWidget {
  final String temperature;
  final String min;
  final String max;

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
          child: SizedBox(
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
            )
          ],
        )
      ],
    );
  }
}
