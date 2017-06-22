# Pin Descriptions

![C.H.I.P. Pro Pins](images/Pinout_Diagram_sm.png)

C.H.I.P. Pro has a number of specialized pins for input and output, plus 27 general purpose input and output (GPIO) pins. The image above shows the pin location and muxing on C.H.I.P. Pro, and the tables below organize pins according to their specialized functions.

* Pin Number
* Port 
* GR8 Pin Name 
* Signal Description
* Type

For more detailed information about pins on C.H.I.P. Pro and the GR8, please see the data sheets available [here](https://github.com/NextThingCo/CHIP_Pro-Hardware/).

## BATTEMP
Pin Number | Port | AXP209 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
7 | NA | BATTEMP | Thermistor connection for battery heat detection | I

## PWM
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
9 | PB2 | PWM0 | Pulse Width Module Channel0 Output | O
10 | PG13 | PWM1 | Pulse Width Module Channel1 Output | O

## TWI1
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
11 | PB15 | TWI1-SCK | TWI0 Clock | I/O
12 | PB16 | TWI1-SDA | TWI0 Data/Address | I/O

## UART – Universal Asynchronous Receiver/Transmitter
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
44 | PG3 | UART1-TX | UART1 Data Transmit | O
43 | PG4 | UART1-RX | UART1 Data Receive | I
13 | PD2 | UART2-TX | UART2 Data Transmit | I
14 | PD3 | UART2-RX | UART2 Data Receive | O
15 | PD4 | UART2-CTS | UART2 Data Clear to Send | I
16 | PD5 | UART2-RTS | UART2 Data Request to Send | I

## Audio Codec
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
26 | NA | AGND | Audio Codec Analog Ground | G
19 | NA | HPCOM | Headphone Common Reference Output | AO
18 | NA | HPL | Headphone Left Channel Output | AO
20 | NA | HPR | Headphone Right Channel Output | AO
27 | NA | MICIN1 | Microphone Input | AI
28 | NA | MICIN2 | Microphone Input | AI
29 | NA | VMIC | Bias Voltage Out | AO

## I2S
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
21 | PB5 | I2S-MCLK | I2S Master Clock | O
22 | PB6 | I2S-BCLK | I2S Bit Clock | I/O
23 | PB7 | I2S-LRCK | I2S Left/Right Channel Select Clock | I/O
24 | PB8 | I2S-DO | I2S Data Output | O
25 | PB9 | I2S-DI | I2S Data Input | I

## OWA – One Wire Audio 
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
9 | PB2 | OWA-DO | OWA Data Output | O

## LRADC
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
42 | NA | LRADC0 | ADC Input Channel0 for Multi-Button Input | I

## SPI – Serial Peripheral Interface 
Pin Number | Port | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
41 | PE0 | SPI2-CS0 | SPI2 Chip Select Signal (active low) | I/O
40 | PE1 | SPI2-CLK | SPI2 Clock Signal | I/O
39 | PE2 | SPI2-MISO | SPI2 Master Data In, Slave Data Out | I/O
38 | PE3 | SPI2-MOSI | SPI2 Master Data Out, Slave Data In | I/O

## D0-D7 – General Purpose In/Out
Pin Number | Port Name | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
37-30 | D0-D7 | GPIO | Digital I/O | I/O

## CSI – Camera Sensor Interface
Pin Number | Port Name | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
41 | PE0 | CSI-PCLK | CSI Pixel Clock | I
40 | PE1 | CSI-MCLK | CSI Master Clock | O
39 | PE2 | CSI-HSYNC | CSI Horizontal Sync | I
38 | PE3 | CSI-VSYNC | CSI Vertical Sync | I
37-30 | PE4-PE11 | CSI-Data[7:0] | CSI Data Bit | I

## SD/MMC
Pin Number | Port Name | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
37-34 | PE4-PE7 | SDC2-D[3:0] | SDC2 Data Bit [3:0] | I/O
33 | PE8 | SDC2-CMD | SDC2 Command Signal | I/O
32 | PE9 | SDC2-CLK | SDC2 Clock | O

## External Interrupt
Pin Number | Port Name | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
44 | PG3 | EINT3 | External Interrupt Input | I
43 | PG4 | EINT4 | External Interrupt Input | I
10 | PG13|EINT13 | External Interrupt Input | I
21 | PB5 | EINT19 | External Interrupt Input | I
25 | PB9 | EINT24 | External Interrupt Input | I

## USB1 and USB0
Pin Number | Port Name | GR8 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
52 | UDM0 | USB0-DM | USB0 D- Signal | A I/O
51 | UDP0 | USB0-DP | USB0 D+ Signal | A I/O
48 | UDM1 | USB1-DM | USB1 D- Signal | A I/O
47 | UDP1 | USB1-DP | USB1 D+ Signal | A I/O

Pin Number | Port Name | AXP209 Pin Name | Signal Description | Type 
-------------- | -------------- | -------------- | -------------- | --------------
50 | VUSB | VBUS-USB |  VBUS Power Supply | P

Note: The on-board micro-USB connector is wired in parallel with the castellated edge points at VBUS, UDP0, UDM0, and GND. If you connect a USB host to both the castellated edges AND the connector, at best your USB will no longer work, at worst you may damage your equipment. 
