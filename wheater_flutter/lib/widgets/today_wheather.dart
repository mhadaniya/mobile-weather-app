// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:hexcolor/hexcolor.dart';

import '../utils/weather_codes.dart';

class TodayWheather extends StatefulWidget {
  final dynamic weather;
  const TodayWheather({super.key, required this.weather});

  @override
  State<TodayWheather> createState() => _TodayWheatherState();
}

class _TodayWheatherState extends State<TodayWheather> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      width: 343,
      height: 217,
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
                "Today",
                style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.w700),
              ),
              Text(
                "Mar, 10",
                style: TextStyle(
                    fontSize: 18,
                    color: Colors.white,
                    fontWeight: FontWeight.w400),
              )
            ],
          ),
          SizedBox(
            height: 25,
          ),
          Expanded(
            child: ListView(
              scrollDirection: Axis.horizontal,
              children: widget.weather["time"].map<Widget>((time) {
                dynamic index = widget.weather["time"].indexOf(time);
                return Container(
                  width: 100,
                  //color: Colors.red,
                  child: Column(
                    children: [
                      // ignore: prefer_const_constructors
                      Text(
                        '${widget.weather["temperature_2m"][index].toString()}ºC',
                        style: TextStyle(color: Colors.white, fontSize: 18),
                      ),
                      Icon(
                        getIconData(weatherInterpretation[
                                widget.weather["weathercode"][index].toString()]
                            ["icon"]),
                        color: Colors.yellow,
                      ),
                      Text(
                        time.toString().split("T")[1],
                        style: TextStyle(color: Colors.white, fontSize: 18),
                      )
                    ],
                  ),
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }
}
