# Get Started With C.H.I.P. Pro

![C.H.I.P. Pro](images/CHIP_ProMain.jpg)

The C.H.I.P. Pro System-on-Module (SOM) is designed to get you making great products instead of re-inventing computers. It's a low-cost, high-capability module that lets you focus on fast iterations of brilliant ideas that will be ready to manufacture. 

To get the most out of developing and designing for C.H.I.P. Pro we recommend prototyping with the [C.H.I.P. Pro Development Kit](http://docs.getchip.com/chip_pro_devkit.html). 

This document provides technical details that will make integrating C.H.I.P. Pro module into your designs a breeze, along with technical specifications and basic guides to get you connected and working with software on C.H.I.P. Pro. 

**At a Glance C.H.I.P. Pro's Features:**

* 512MB of NAND storage
* 2.4GHz WiFi and Bluetooth connectivity
* Onboard power and battery charging management
* Pins for popular I/O busses
* 2x USB Port (1x USB 2.0 Host, 1x OTG)
* Security and flexibility of mainline Linux 
* Breadboard and SMT compatible
* Dimensions: 45mm x 30mm

Comprehensive audio handling includes:

* 24-bit ADC/DAC for stereo audio in and out
* one-wire audio digital out
* I2S digital audio for interfacing with industry standard audio codecs.

To learn more, go to our [Specification](https://docs.getchip.com/chip_pro.html#specifications) section.

## Certifications

C.H.I.P. Pro is officially certified for CE, IC and FCC for use with multiple commercially available [external antennas](https://docs.getchip.com/chip_pro_devkit.html#wifi-antenna) as well as the onboard ceramic SMT antenna. 

C.H.I.P. Pro has FCC Modular Transmitter certification meaning any product with C.H.I.P. Pro as the only active radio transmitter will not require your company to run certification testing for the Intentional Radiator portion of FCC tests, specifically FCC Part 15C. 

This greatly lessens the workload of taking your product through FCC certification. You will still need to test and state compliance with FCC Part 15B Unintentional Radiation limits. 

With C.H.I.P. Pro, you can avoid the need to apply for a new FCC-ID for your product, instead listing that your product contains our FCC-ID'd module.

For any questions, reach out to us at pro@nextthing.co.


## GR8 SiP

![GR8](images/CHIP-Pro-Exploded-View.png)

C.H.I.P. Pro is powered by Next Thing Co’s GR8 SiP (System in Package). GR8 features a 1GHz Allwinner R8 ARMv7 Cortex-A8 processor with NEON SIMD extensions and a Mali-400 GPU. 256MB of Nanya DDR3 SDRAM is combined with the R8 processor into a 14mm x 14mm, 0.8mm pitch 252 ball FBGA package. 

In addition to the Mali-400 graphic engine that supports OpenGL ES 1.0 and 2.0. GR8 includes a video engine for encoding and decoding codecs such as VP6/8, AVS, H.264, H.263, MPEG-1/2/4 and a display engine for a hardware cursor, alpha blending, and anti-flicker.

More information about the GR8 SiP can be found in the [GR8 data sheet.](https://github.com/NextThingCo/CHIP_Pro-Hardware/raw/master/Datasheets/GR8_Datasheet_v1.0.pdf)

## Block Diagram

![C.H.I.P. Pro Block Diagram](images/blockDiagram.jpg)
