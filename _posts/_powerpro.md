# Power

## Power C.H.I.P. Pro

C.H.I.P. Pro can be powered in a few ways that are all managed by the AXP209 power management IC. 

![power LED USB](images/powerLED_800.jpg)

Below is a list of the ports and pins to provide power to and pins that are necessary to initiate power in some instances. 

* **Micro USB port** - Use a 5V AC/DC adapter (we recommend getting one that supplies 5V and 1 amp).

Pins

* **CHG-IN** - Connect 5 - 5.5 volts of power to this pin (and GND) to provide power for C.H.I.P. Pro. If you have a Lithium Polymer (LiPo) battery connected to BAT, then power provided to CHG-IN will also charge the battery. 
* **BAT** - Connect a  single-cell 3.7V LiPo battery to this pin (and GND) to provide power to C.H.I.P. Pro and receive charge from power inputs. 
* **PWR (PWRON)** - Connect to ground for 1 second to turn C.H.I.P. Pro on when a battery is attached to the **BAT** pin. 

![PWR on](images/PWRon_800.jpg)

* **VBUS** - Connect 5 volts to this pin (and GND to pin 53) to provide power to C.H.I.P. Pro. Power connected to VBUS will also charge a battery, just at a slower rate than from **CHG-IN**. The VBUS pin is the same one than in the microUSB connector.

## Battery Charging and BTS Pin

C.H.I.P. Pro uses the **AXP209 IC** to manage battery charging. Pin 7 marked **BATTEMP or BTS** is directly connected to the **TS** pin on the AXP209. This pin supports a thermistor to monitor the battery temperature when the battery is charging or discharging.  If you do not incorporate a thermistor into your setup the pin may float from ground interfering with how much charge current is throttled to the **BAT** pin and the **JST connector**. To ensure maximum charge current without a thermistor disable the battery temperature monitoring system.

There are two ways to do this:

* Connect BTS pin to ground
* Disable the temperature functionality in software:

```shell
sudo i2cset -y -f 0 0x34 0x82 0x82
````

The AXP209 IC is seen as a I2C device on C.H.I.P. Pro. By default the AXP209 is tuned for a 10KΩ 1% thermistor at 25°C with a programmable register for thermistor current to adapt to different devices. You can find more information on this setup in the [AXP209 Datasheet](https://github.com/NextThingCo/CHIP-Hardware/blob/master/CHIP%5Bv1_0%5D/CHIPv1_0-BOM-Datasheets/AXP209_Datasheet_v1.0en.pdf). Search "ts pin" to quickly find information.

## Power Out 

C.H.I.P. Pro also has options for providing power to peripherals and sensors.

* **VCC-3V3** - Provides 3.3V for sensors.
* **IPSOUT** - The **I**ntelligent **P**ower **S**elect provides up to 2.5 amps at up to 5 volts, depending on power provided at **CHG-IN** or **VBUS** pins. If a 3.7V LiPo battery is the only source of power, **IPSOUT** will provide a bit less than 3.7 volts. In general, the voltage at **IPSOUT** is a bit less than voltage in, with a max voltage of 5 volts.

If you need to provide power to a USB device connected to USB1, connect **IPSOUT** to an appropriate switching regulator to the USB connector pad on your circuit board. 

## Powering Off

There are two ways to power off C.H.I.P. Pro: 

**1)** Ideally, C.H.I.P. Pro should be powered off through a terminal window using the `poweroff` command. This will end all processes safely	 protecting your data. 

**2)** On the board, connect **PWR** pin to **GND** for 3+ seconds to power off. 


![PWR off](images/PWRoff_800.gif)