# Specifications

## C.H.I.P. Pro Exposed Interfaces

* 1x Two Wire Interface
* 2x UART (1x 2-wire and 1x 4-wire)
* SPI enabling SD card interface 
* SPI Bus
* 2x PWM
* 6-bit ADC
* I2S Digital Audio
* S/PDIF IEC-60958 Digital Audio Input and Output 
* 2x USB HS/FS/LS
	* USB 2.0 Host
	* USB 2.0 OTG
* Parallel Camera Interface 
* 3.3V DC supply
* IPS dynamic power pass-through
* 27 GPIO

## Audio

Stereo audio in and out is handled by an on-die 24-bit audio codec in GR8. 

* 24-bit ADC/DAC for stereo audio in and out
* One-wire Audio (S/PDIF Compatible) digital out
* Supports 44.1 kHz, 48 kHz, 96 kHz, and 192 kHz sample rates
* Bi-directional I2S digital audio for interfacing with industry standard audio codecs
* Full-Duplex synchronous serial digital audio interfaces
* I2S Audio data sample rate from 8-192kHz
* Transmit and Receive FIFO buffers with programmable thresholds

## Power and Battery Management

* **AXP209 power management IC** connected to a dedicated I2C bus
* **Operating Voltage** - 3.8V - 6.3V
* **Operating Temp** - 40C - 130C 

* **1.8A max** battery charging current with programmable limits
* **2.5A max** power distribution to system

C.H.I.P. Pro can be powered by battery, USB or AC/DC adapter. On-board Power management with the AXP209 provides plenty of power options to better match your applications: mobile, commercial, and low-power are all possible with C.H.I.P. Pro. 

For more details, the AXP209 datasheet can be found [here](https://github.com/NextThingCo/CHIP_Pro-Hardware/blob/master/v0.9/Component%20Datasheets/AXP209_Datasheet_v1.0en.pdf). 

## WiFi

* Realtek 8723DS Combination Module
* Bluetooth 4.2 LE
* 2.4GHz Wifi 802.11 b/g/n
* IPEX (U.FL) antenna connector
* FCC/CE/IC certified

A software controlled antenna path selects between the onboard chip antenna or a IPEX (U.FL) antenna connector where several pre-certified antennas can be added. 

FCC Modular certification (47 CFR 15.212) limits the need for final device 	                      “intentional radiator” certification under 47 CFR 15.247, so long as pre-certified      antennas are used with CHIP Pro. 

To learn more, find the FN-Link Module datasheet [here](https://github.com/NextThingCo/CHIP_Pro-Hardware/blob/master/v0.9/Component%20Datasheets/Fn-Link%206223A-SRD_datasheet_V1%200_09262016.pdf). 

## Mechanical Drawing

![Mechanical Drawing](images/Mech_Draw_sm.jpg)

You can download a high resolution version of this image [here](https://github.com/NextThingCo/CHIP_Pro-Hardware/tree/master/Mechanical_Documents).

## PCB Footprint

C.H.I.P. Pro is designed for prototyping and dropping in to a production assembly line. To inform your PCB designs, we have detailed diagrams for mounting C.H.I.P. Pro by hand soldering and by SMT pick-and-place machines. 

* 

More detailed information on how to design a PCB for C.H.I.P. Pro is found here. The stencil and footprints are also included in C.H.I.P. Pro's datasheet.

![C.H.I.P. Pro PCB Footprint](images/CHIP-Pro-Footprint.png)

## Datasheet

The complete datasheet for C.H.I.P. Pro is available [on our C.H.I.P. Pro Hardware GitHub repo](https://github.com/NextThingCo/CHIP_Pro-Hardware/raw/master/Datasheets).

## Open Source Hardware

C.H.I.P. Pro is open source. Find all you need to build a C.H.I.P. Pro in our [Github repo](https://github.com/NextThingCo/CHIP_Pro-Hardware).

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

