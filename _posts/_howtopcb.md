# PCB Design Tips 

C.H.I.P. Pro was created to be seamlessly embedded into products and we at NTC are here to help you do that. If you are ready to go from breadboard to PCB, read on. This section gives recommendations and provides resources and tips to help plan a successful PCB design. 

![C.H.I.P. Pro PCBs](images/boards.jpg)

## From 1 to 1MM 

To make scaling up efficient and easy, C.H.I.P. Pro is offered in small and large quantities. Purchase from the online [store](https://nextthing.co/pages/store) or, for larger orders, email sales@nextthing.co. 

## Tech Documents

NTC hardware and software is open source for development. You will find the following design and technical documents for [C.H.I.P. Pro](https://github.com/NextThingCo/CHIP_Pro-Hardware) and [C.H.I.P. Pro Dev Kit](https://github.com/NextThingCo/CHIP_Pro-Dev-Kit) on our Github account. 

* C.H.I.P. Pro datasheet
* Component datasheets
* Mechanical documents
* C.H.I.P. Pro schematics
* C.H.I.P. Pro Dev Kit schematics
* PCB board files
* Eagle Footprint
	
## C.H.I.P. Pro Footprint

Create a C.H.I.P. Pro footprint with the EDA (Electronic Design Automation) software of your choice using the measurements provided in our footprint diagrams. For SMT manufacturing, you will also find a solder paste stencil.

### SMT Footprint

![C.H.I.P. Pro SMT footprint](images/Pro_Footprint_SMT.jpg)

### Solder Paste Stencil

![C.H.I.P. Pro SMT stencil](images/Pro_stencil.jpg)

### Hand Solder Footprint

![C.H.I.P. Pro footprint](images/Pro_Footprint_hand.jpg)


<aside class="notice">
C.H.I.P. Pro footprints include an open space in the middle allowing for the 1.4mm height extending from the bottom of C.H.I.P. Pro. **It's important to include this negative space measuring 43mm x 26mm** in the design of your PCB. C.H.I.P. Pro is populated on both sides and needs this open space to sit properly on the finished PCB.
</aside>

If using Eagle software to design your PCB with, we've taken away the need to design one. Find our ready-made Eagle footprint [here](https://github.com/NextThingCo/CHIP_Pro-Hardware/tree/master/Footprint/EAGLE).
	
Do you want to share a footprint that you have created with us? We would like to include it here for others to use. Send your footprint to docs@nextthing.co. 

## PCB Software and Services 

There are many software packages and services to design and manufacture a PCB with. If you are just starting out in PCB design or want to explore other options we offer suggestions below. 

The tools and services chosen are based on what we have seen used in the field and community across all levels of development. NTC does not officially recommend one EDA software package. The effectiveness of a design tool will depend on the user's preferences and skill level. 

### EDA Software

* [OrCAD](http://www.orcad.com/products/orcad-overview)

	OrCAD is a collection of tools used to design PCBs, schematics, analyze circuits with and more. Learn how to use their schematic design tool Capture through [interactive tutorials](http://www.orcadmarketplace.com/Capture-Tutorial/captutor.htm).  

*  [KiCad](http://kicad-pcb.org/)

	A free and open source software suite. Design schematics, layout PCBs, and verify design for manufacturing. There are plenty of tutorials to learn from on their [website](http://kicad-pcb.org/help/tutorials/). 

* [EasyEDA](https://easyeda.com/)

	A cloud-based software suite that has free and professional priced packages. Not only can you design PCBS, they offer circuit simulation and take PCB fabrication orders through their website. Footprints to components can be designed and contributed by community members for use by anyone. A user contributed footprint for C.H.I.P. Pro can be found by searching CHIP_Pro in libraries. Get started with EasyEDA's online [tutorials](https://easyeda.com/Doc/Tutorial/). 

* [Eagle](https://www.autodesk.com/products/eagle/overview) 

	Eagle is powerful PCB design and schematic layout software. It's well used and has a strong community behind it. There are plenty of tutorials found online, such as at [Sparkfun](https://www.sparkfun.com/tutorials/108), [Adafruit](https://learn.adafruit.com/ktowns-ultimate-creating-parts-in-eagle-tutorial/introduction), and [YouTube](https://www.youtube.com/user/EAGLECadSoftComputer). Start by reading an overview of the software and finding links to tutorials, example projects and more on [Eagle's product page](https://www.autodesk.com/products/eagle/overview). Find our C.H.I.P. Pro Eagle compatible footprint for download above. 
	
* [Altium](http://www.altium.com/)

	Used by professionals and advanced hobbyists. A bigger learning curve comes with Altium but it is worth the time invested if you plan on continuing to design production ready PCBs.

### PCB Fabrication Services

When you are ready to get your board fabricated you will need to choose a PCB manufacturer. Your choice will be based on a number of factors including, turn around time, board features (flex and color options) and scale of order. All of the services listed do small quantities to get you started. Some do large scale and offer multi-layer boards and other advanced services.

* [Advanced Circuits](http://www.4pcb.com/)

	Several pricing options to choose from depending on what your board design specifications are. Many board features available with no minimum quantity. Design and assembly services are also offered.
	
* [PCBWay](https://www.pcbway.com/)

	No minimums, fast turn around and easy to use interface for uploading board designs and getting a quote. They offer flexible pcbs, SMD (surface mount device) stencils and assembly services. 
	
* [AllPCB](http://www.allpcb.com/)
	
	AllPCB offers low prices and quality services in small and large scale batches. Their website is comprehensive with instant quote services and a way to upload your BOM and search for specific components.
	
* [Seeed Fusion PCB & PCB Assembly](https://www.seeedstudio.com/fusion.html)

	They offer layout, manufacturing and assembly services along with other CNC services such as 3D printing and milling. They even offer several PCB colors options with their cheapest fabrication option.
	
* [OSH Park](https://oshpark.com/)

	OSH Park does batch manufacturing meaning that your board gets created with others on the same panel. This affects the turn around time making them the slowest option on the list. However, their straight forward and simple ordering interface makes it very easy to upload and check a board design in minutes.
	
### Verify Manufacturer Design Rules

PCB manufacturers have specifications outlining their production capabilities called "design rules". These design rules include smallest possible traces, drill hole size, spacing, etc. Most PCB design software have an automated process that checks your design against these design rules using files. This is called the DRC (design rule checking) process. If the design software you are using does not have this feature some board manufacturers offer the service or you can use DRC specific software. 
 
As an example, OSH Park's PCB design rules are found on their OSH Park [Design Submission Guidelines](https://oshpark.com/guidelines) page. Conveniently, they provide a file for checking PCB designs using Eagle software. OSH Park also provides [design guideline documents](http://docs.oshpark.com/design-tools/) for many of the EDA software people submit designs with. To get you started, below are some design rule resources for software linked to in this doc.

* [Altium](https://techdocs.altium.com/display/ADOH/Design+Rules#) 
* [KiCad](http://kicadhowto.wikidot.com/co1drc)
* [Eagle](https://www.youtube.com/user/EAGLECadSoftComputer/videos)
* [EasyEDA](https://easyeda.com/Doc/Tutorial/introduction.htm) 


## Power Considerations

### Supplying Power to C.H.I.P. Pro

Powering C.H.I.P. Pro via the *CHG-IN* pin at 5-5.5V is the suggested route for all embedded applications. A reliable 2A+ rated power supply works well to power C.H.I.P. Pro.

C.H.I.P. Pro can also be battery powered through *BAT*, and by a USB charger/supply connected to *VBUS*. 

#### Recommended Operating Voltage

| Pin    | Min | Typical | Max        | Unit |
|--------|-----|---------|------------|------|
| CHG-IN | 3.8 | 5-5.5   | 6.3        | V    |
| BAT    | 3.0 | 3.8     | 4.2+/-0.5% | V    |
| VBUS   | 3.8 | 5-5.5   | 6.3        | V    |

#### PMU (Power Management Unit) Vout Current Available Before Loading Battery

| Iout         | Min    | Typical | Max     |
|--------------|--------|---------|---------|
| PMU Vout | 500 mA | 900 mA  | 2500 mA |

A programmable current limit can be set in software allowing for safe attachment to USB 2.0, USB 3.0, or high-current CHG-In sources. Check the [AXP209 datasheet](https://github.com/NextThingCo/CHIP-Hardware/blob/master). 
 for more information starting on page 33. The current set options are 100mA, 500mA, 900mA and "no limit". C.H.I.P. Pro is set to 900mA upon boot by default. 
 
Keep in mind that if the current draw spikes and exceeds the threshold even momentarily this will cause a brownout and C.H.I.P. Pro will shut down. 

### Power Consumption

Like any feature-loaded SOM, how much current C.H.I.P. Pro draws depends on what you need it to do. The following measurements are offered as a rough starting point with which to begin to understand the range of power budgets relevant to a CHIP Pro-based device operated from a battery. Exact power consumption is significantly influenced by factors such as software power optimizations (or lack thereof), power source quality, external peripheral circuitry, and ambient operating conditions. 

| System State    | Measurement | Value |
|--------|-----|---------|
| Idle at Linux Shell | Supply (BAT) | 4.17V  |	
|     | Current | 125.90 mA    |
|    | Power | 525.00 mW   | 
| Playing Local Audio | Supply (BAT) | 4.17V  |	
|     | Current | 209.40 mA    |
|    | Power | 873.62 mW   |
| WiFi Pinging | Supply (BAT) | 4.17V  |	
|     | Current | 184.70 mA    |
|    | Power | 770.20 mW   |
| Standby | Supply (BAT) | 4.17V  |	
|     | Current | 5.30 mA    |
|    | Power | 22.10 mW   |
| Shutdown | Supply (BAT) | 4.17V  |	
|     | Current | 1.60 mA    |
|    | Power | 6.67 mW   |
  

### Battery and BTS Pin

Thinking of including a rechargeable battery as a product feature? Read on to learn more about the BTS pin. 

Pin 7 on C.H.I.P. Pro is marked **BATTEMP or BTS** and is directly connected to the **TS** pin on the AXP209 PMU. This pin supports a 10KΩ 1% thermistor to monitor the battery temperature when the battery is charging or discharging.  If you do not incorporate a thermistor into your circuit the pin may float from ground interfering with how much charge current is throttled to the **BAT** pin and the **JST connector**. 

To ensure maximum charge current without a thermistor disable the battery temperature monitoring system by one of two ways:

* Connect BTS pin to ground
* Disable the temperature functionality in software:

```shell
sudo i2cset -y -f 0 0x34 0x82 0x82
````

You can find more information on this setup in the [AXP209 Datasheet](https://github.com/NextThingCo/CHIP-Hardware/blob/master) starting on page 21. 

### Power Button 

The PWRON pin can be connected to GND through a button as a Power Enable Key (PEK) or hibernation/wake button. The AXP209 can automatically identify long and short button presses. Read more about this on page 10 of the [AXMP209 datasheet](https://github.com/NextThingCo/CHIP-Hardware/blob/master).  

## Additional USB Port

Whether you want to add a micro USB 5V source or a host USB-A port, here are some points on power to consider while designing your PCB.

* Standard USB peripherals operate at 5 volts and can draw a good amount of current so, budget a power supply appropriately.
* IPSOUT on C.H.I.P. Pro can provide 5 volts to the 5V pin of the additional USB port if there's a 5 volt input via VBUS or CHG-IN. If a battery is connected and power is not available through VBUS or CHG-IN, IPSOUT will provide 3.7 volts which is most likely not sufficient for a USB peripheral.
	* To avoid IPSOUT dropping to 3.7V in battery mode consider using a 5V DC/DC buck/boost converter to maintain a 5 volt rail to your additional USB port. To avoid a brownout set the VBUS current limit appropriate for your USB peripheral. 
	
## Analog Input

If your product requires analog input for sensors, keypads or potentiometers there a few ways to utilize an ADC.

* An I2C controlled ADC can be added to your product's circuit.
* There is a 12-bit ADC integrated in the AXP209's temperature sensor circuit. More info on [page 25 of the AXP209 datasheet](https://github.com/NextThingCo/CHIP_Pro-Hardware/blob/master).
* C.H.I.P. Pro has a 6-bit LRADC (Low Resolution ADC) accessible through pin 42 suitable for multi-button input. 

## WiFi Signal

The onboard ceramic WiFi antenna is meant for debugging purposes only. For product applications use the antenna that comes with the C.H.I.P. Pro Dev Kit or obtain any of these pre-certified options:

| Antenna Model | Manufacturer | Gain | Antenna Type | Connection Type | Freq. Range (GHz) | Cable Length (mm) |
|------------|-----|-----|-----|-----|-----|-----|
| AA107       | Unictron | 3.3 dBi | PCB | IPEX | 2.4 - 2.5 | 100 | 
| HCX-P321   | Wacosun | 2 dBi | PCB | IPEX | 2.4 - 2.5 | 150 |
| FXP73.07.0100A | Taoglas | 2.5 dBi | PCB | IPEX | 2.4 - 2.483 | 100 |
| AA055   | Unictron | 2.5 dBi | Ceramic | SMT | 2.4 - 2.5 | n/a |

## Make Use of Modular Certification 

To provide fast integration time into your product NTC has done most of the heavy lifting when it comes to certification.

* C.H.I.P. Pro is CE, IC, and FCC Part 15 Modular Transmitter certified for use with multiple commercially available external antennas as well as the onboard ceramic SMT antenna. 

* Any product with C.H.I.P. Pro as the only active radio transmitter will not require your company to run certification testing for the Intentional Radiator portion of FCC tests, specifically FCC Part 15C. This lessens the workload of taking your product through full FCC certification. You will still need to test and state compliance with FCC Part 15B Unintentional Radiation limits. 

* You will not need to apply for a new FCC-ID for your product. When you process your application with a certified test lab, they will file a Class II Permissive Change under NTC's FCC ID. For any questions on this, reach out to us at pro@nextthing.co. The FCC ID can be found etched on the WiFi module. 

![C.H.I.P. Pro FCC ID](images/CHIP_Pro_FCC.png)

## Do Something GR8

Are you thinking of going into mass production, but not sure what path to take? We offer services at several production stages.

* Custom flashing 
* NRE software 
* Custom engineering support
* PCB material and manufacturer recommendations

If you would like to learn more about how we can help you make a GR8 product, contact us at pro@nextthing.co.





