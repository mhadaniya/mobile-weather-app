import 'package:flutter/material.dart';

import '../widgets/drop_down.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue,
      appBar: AppBar(
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 10),
            child: Icon(
              Icons.notifications_outlined,
            ),
          ),
        ],
        leading: Icon(Icons.pin_drop),
        shadowColor: Colors.transparent,
        bottomOpacity: 0.0,
        elevation: 0.0,
        title: DropDown(),
        backgroundColor: Colors.transparent,
        toolbarHeight: 50,
      ),
    );
  }
}
