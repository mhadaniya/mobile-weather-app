import 'package:flutter/material.dart';

class DropDown extends StatefulWidget {
  DropDown({super.key});

  @override
  State<DropDown> createState() => _DropDownState();
}

class _DropDownState extends State<DropDown> {
  List<String> list = <String>['Fortaleza', 'Two', 'Three', 'Four'];

  @override
  Widget build(BuildContext context) {
    String dropdownValue = list.first;

    return DropdownButton<String>(
      value: dropdownValue,
      // ignore: prefer_const_constructors
      icon: Padding(
        padding: const EdgeInsets.only(left: 10),
        child: const Icon(
          Icons.keyboard_arrow_down_outlined,
          color: Colors.white,
        ),
      ),
      elevation: 16,
      style: const TextStyle(
          color: Colors.white, fontSize: 18, fontWeight: FontWeight.w600),
      onChanged: (String? value) {
        // This is called when the user selects an item.
        setState(() {
          dropdownValue = value!;
        });
      },
      items: list.map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
    );
  }
}
