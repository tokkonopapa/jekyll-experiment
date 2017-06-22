# Connect and Control

## Flash an Operating System

Like its older sibling C.H.I.P., C.H.I.P. Pro's GR8 SiP runs mainline Linux by default. This provides security, flexibility, robust tools, and open-source options. In the interest of power consumption and storage space, we have two OS options to best fit your needs: 

**Debian** is a classic amongst embedded Linux board users for rapid prototyping. It offers a full package manager and loads of precompiled software and familiar command-line tools. 

**Buildroot** is simple and stripped down making it efficient and ideal for permanent deployment and high-reliability embedded systems. 

C.H.I.P. Pro has 512MB of high-reliability SLC NAND storage onboard for holding the core operating system and a limited amount of user and program data. While the storage is faster and more reliable it has less capacity. Because of this, it's a good idea to know how much storage software will take before flashing and installing. Where needed, additional high-speed storage can be added through C.H.I.P. Pro’s SDIO bus.

Grab these items to flash C.H.I.P. Pro:

 * C.H.I.P. Pro 
 * USB A to Micro-USB B cable
 * Separate computer with [Chrome](https://www.google.com/chrome/browser/desktop/index.html) or [Chromium](https://www.chromium.org/getting-involved/download-chromium) browser and an internet connection.

### Flashing Process
Head over to the web flasher at [flash.getchip.com/pro](http://flash.getchip.com/pro). If it's your first time flashing, when you arrive you will be asked to install the NTC Flasher Chrome Extension.

After installing the extension, the main page will give you the option to either download an image or follow the wizard to flash C.H.I.P. Pro. For a smooth automated process, click **FLASH** to flash C.H.I.P. Pro.

![flasher home page](images/main.png)

You will then arrive at the "Flasher First Time Setup" page which will have setup instructions dependent on the operating system of your computer. After you have setup your computer, press **START!**.

![first time setup](images/firstsetup.png)
  
Plug the micro USB cable into the micro USB port on C.H.I.P. Pro. Hold down the FEL button (a pencil eraser works nicely) and with the other hand plug the USB cable into the computer. When the pink power and white status LEDs on C.H.I.P. Pro light up, you can release the FEL button.

![pushing FELL button](images/hold_plugPro800.gif)

The web flasher will search for and recognize C.H.I.P. Pro.

![searching page](images/searchFlash.png) 

You will then be directed to the page with the example images. Hover over each image to see a description and click to see more details such as file size and kernel version. When you have chosen your adventure, click **FLASH TO C.H.I.P. PRO**.

[![image page](images/imagesPage.png)] (images/imagesPage.jpg) | [![flash to board](images/imageDetail.png)] (images/imageDetail.png) | 
|:---:|:---:|
| Choose image | Click FLASH TO CHIP PRO |

Watch the flashing process progress and leave the browser tab open in order for it to complete. You will be notified when C.H.I.P. Pro has been flashed successfully. You are then free to unplug the C.H.I.P. Pro or connect to it via [serial](https://docs.getchip.com/chip_pro.html#usb-serial-uart1-connection). 

![succeeded page](images/flashFinish.png)

If you are having problems with the flashing process follow the troubleshooting instructions given by the web flasher or check out the [Web Flasher OS-Specific Issues](https://docs.getchip.com/chip.html#web-flasher-os-specific-issues) troubleshooting section. 

## Examples
You can select an OS by flashing one of our examples using the web flasher [flash.getchip.com/pro](http://flash.getchip.com) in Chrome or Chromium browser. 

We have built examples based on Buildroot that implement features exposed on the CHIP Pro [Dev Board](https://docs.getchip.com/chip_pro_devkit.html) such as its two MICs, and array of GPIOs. If you are building a circuit that incorporates mics and LEDs with a bare C.H.I.P. Pro you can start with these examples. 

#### Blinkenlights (Buildroot)
Size: ~60MB

This Python based example provides easy-to-understand code with exciting results. Flash C.H.I.P. Pro with this image and LEDs connected to **GPIO D0-D7** turn on and off in a cascading pattern. LEDs connected to the **PWM0 and PWM1 pins** will pulse from dim to bright. 

#### VU Meter (Buildroot)
Size: ~60MB

Want to make sure your mics are working? Use this handy VU Meter example. LEDs connected to GPIO D0 - D7 will light proportional to the volume of the noise captured by two mics connected to the **MICIN1 and MICIN2 pins**.

### Pro
Size: ~180MB

We provide a standard Debian distribution. Once flashed connect to the C.H.I.P. Pro via [serial](https://docs.getchip.com/chip_pro.html#make-a-serial-connection) and log in with the default username `chip` and password `chip`.

If you want to configure and build the rootfs for the Debian image, take a look at our [github repo](https://github.com/NextThingCo/chip-os-pro) 

## Make a Serial Connection

C.H.I.P. Pro is a headless computer, so you will need a separate computer in order to interact with it. This section will go over how to connect via USB-serial to UART, connect to a WiFi network and where to find example scripts.

### USB-Serial to UART Pins

A UART to USB-serial connection between C.H.I.P. Pro and your computer offers the most comprehensive look at what's happening in C.H.I.P. Pro since you can get all message output from the moment it starts booting. 

#### Things you will need

* USB-UART cable ([for example](https://www.amazon.com/JBtek-WINDOWS-Supported-Raspberry-Programming/dp/B00QT7LQ88/ref=sr_1_6?srs=9123049011&ie=UTF8&qid=1488833574&sr=8-6))
* Drivers (if required)
* Soldering Iron + solder
* Pin headers
* Computer with monitor (for example, a [C.H.I.P.](http://www.getchip.com/)!)
* Terminal emulation software for Windows such as [PuTTY](http://www.chipkin.com/using-putty-for-serial-com-connections-hyperterminal-replacement/) (OS X and Linux have `screen` built-in)

#### Install USB-UART Cable Drivers

Not only will you need a USB-UART cable but you will need to install the appropriate drivers that go with the cable. 

For example, [this](https://www.amazon.com/JBtek-WINDOWS-Supported-Raspberry-Programming/dp/B00QT7LQ88/ref=sr_1_6?srs=9123049011&ie=UTF8&qid=1488833574&sr=8-6) cable uses the Prolific hardware. The drivers are [available on their site](http://www.prolific.com.tw/US/ShowProduct.aspx?pcid=41&showlevel=0041-0041). If you are on Windows the driver can be installed after connecting C.H.I.P. Pro to your computer and navigating to Device Manager, finding **Ports (COM & LPT)** and double-clicking on the unrecognized USB-serial port. From the window that pops up, you will be able to tell the computer to go find the device's driver online and install it.


#### Solder Headers to C.H.I.P. Pro

To connect the USB-UART cable to C.H.I.P. Pro you will need to solder headers onto the board for a reliable connection. 

![UART connection](images/solderHeaders_800.jpg)

The below connections work for the cable linked to in the above material list. Make sure to check the manufacturer's product description for the correct pinout for whichever cable you are using.
 
* black -  GND
* green - RX
* white - TX


![UART connection](images/UARTconnect_800.jpg)

#### Power C.H.I.P. Pro 

C.H.I.P. Pro can be powered through a computer's USB port. However, some power intensive applications might require more current than the average computers provide via their USB port. A reliable way to power C.H.I.P. Pro is through the **micro USB port using an AC/DC adapter** (we recommend getting one that supplies 5V and 1 amp).

### OS X & Linux

Mac systems and most flavors of Linux come with the terminal emulator software Screen. In case Screen is missing, it can be installed using apt-get on Debian-based systems: 

```
sudo apt-get install screen
```

With C.H.I.P. Pro connected to your computer check to see if the usbserial port has appeared: 

**Mac**

```
ls /dev/tty.*
```

The port name will be `/dev/tty.usbserial` or something similar.

**Linux** 

```
ls /dev/ttyUSB*
```

The port name will be `ttyUSB0` or something similar.

#### Connect 

Use Screen to create a serial terminal connection at 115200 bps:

**Mac**

```
screen /dev/tty.usbserial 115200
```
**Linux**

```
screen /dev/ttyUSB0 115200
```

Once a terminal window pops up, hit the Enter key. 

* For a Buildroot example you will automatically be logged in as ```root```. 
* For the Debian example, log in with the default username and password ```chip```.

#### Exit Screen

When done with Screen, press Ctrl+A then Ctrl+k to kill all windows and terminate Screen. 

If you get the error **"Cannot open line... Resource busy"** when trying to connect via Screen it's because the last session was not properly exited. Here is how kill an open session that was not disconnected:

Search for the open file and active process using usbserial:

```
lsof | grep usbserial
```

You will get an output that looks something like this:

```
screen	27127 Sefi	5u 	CHR           	18,0    	0t0   	605 /dev/tty.usbserial
```

Note the process ID. In this case, it's 27127. Then run:

```
screen -x 27127 
```

This will return you to the previous screen session. Then use Ctrl+A Ctrl+K to close it (will ask you to confirm).


### Windows

Download the [PuTTY terminal emulator](http://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

In Windows, open the **Device Manager**. Find and expand **Ports (COM & LPT)**. Find the port labeled **USB-to-Serial Port (COMx)** and take note of the COMx port number. This is the port that the C.H.I.P. Pro is connected to.

In PuTTY choose **Serial** as the **Connection type**. Plug the following items in and click **Open**. 

* COMx number as the **Serial Line**  
* 115200 as the **Speed** (baud rate)

[![Com Port](images/ComPort.PNG)] (images/ComPort.PNG) | [![puTTY](images/puTTYsetM.jpg)] (images/puTTYsetM.jpg) | 
|:---:|:---:|
| In Device Manager find COM port # | Plug port # and baud rate into puTTY | 

Once a terminal window pops up, press Enter. 

* For a Buildroot example you will automatically be logged in as ```root```. 
* For the Debian example, log in with the default username and password ```chip```.


## WiFi Antenna
C.H.I.P. Pro has an onboard ceramic antenna that is intended for debugging purposes only. We recommend the use of an external antenna for all product applications. Use the antenna that comes with the C.H.I.P. Pro Dev Kit or obtain any of these officially supported ones:

| Antenna Model | Manufacturer | Gain | Antenna Type | Connection Type | Freq. Range (GHz) | Cable Length (mm) |
|------------|-----|-----|-----|-----|-----|-----|
| AA107       | Unictron | 3.3 dBi | PCB | IPEX | 2.4 - 2.5 | 100 | 
| HCX-P321   | Wacosun | 2 dBi | PCB | IPEX | 2.4 - 2.5 | 150 |
| FXP73.07.0100A | Taoglas | 2.5 dBi | PCB | IPEX | 2.4 - 2.483 | 100 |
| AA055   | Unictron | 2.5 dBi | Ceramic | SMT | 2.4 - 2.5 | n/a |

### Connect Antenna
C.H.I.P. Pro uses a standard 50Ω IPEX (Hirose U.FL compatible) connector for the external antenna path.

To connect an antenna, come straight from the top and push the antenna onto the connector. Keep in mind the connector will wear out over time. We suggest keeping the disconnect/connect cycle down to 10 or less. 

[![wifi antenna connector](images/wifiConnectB.jpg)] (images/wifiConnectB.jpg) | [![push antenna on](images/wifiPush.jpg)] (images/wifiPush.jpg) | 
|:---:|:---:|
| WiFi antenna connector | Push antenna onto connector |

![wifi antenna connected](images/wifiOn.jpg)

### Enable Wifi Antenna
In order to use it, you need to set the path of the external antenna.

**Buildroot**

With the Buildroot C.H.I.P. Pro images comes a [set_antenna script](https://raw.githubusercontent.com/NextThingCo/CHIP-buildroot/34a8cfdab2bbecd6741c435d6c400e46848436f1/package/rtl8723ds_mp_driver/set_antenna) which accepts two arguments of either `pcb` or `ufl` depending on which you want enable. 

```
sh set_antenna pcb|ufl
``` 

**Debian**

In Debian, there are two ways to set the antenna path:

* The RF switch is connected to logic pin PB17. Manually set the logic states to choose either the onboard or external antenna.

0 = onboard-antenna 

1 = external-antenna


* `wget` set_antenna script found [here](https://raw.githubusercontent.com/NextThingCo/CHIP-buildroot/34a8cfdab2bbecd6741c435d6c400e46848436f1/package/rtl8723ds_mp_driver/set_antenna). Run and pass either the `pcb` or `ufl` argument, as stating above.  

## Edit Buildroot Examples

After connecting to the Dev Kit via [USB-serial](https://docs.getchip.com/chip_pro_devkit#usb-serial-uart1-connection) you can check out and edit the scripts for each Buildroot example. Use the Vi command-line editor to read and edit example scripts found in /usr/bin. 

**Blinkenlights**

```
vi /usr/bin/blink-leds
vi /usr/bin/fade-pwms
```

**VU-Meter**

```
vi /usr/bin/vu-meter
```


### Basic Vi Editor Commands

To **edit text** take Vi from command mode (default) to insert mode. Press the following keys to edit text.

* i - go into insert mode (to edit text)
* Esc - exit insert mode

Vi was built for Qwerty keyboards without arrow keys. They may work but if not, use these keys to **move cursor**:

* J - move down one line
* K - move up one line
* H - move left one character
* L - move right one character

Other helpful commands:

* u - undo last action
* :x then Enter - save and exit
* :q! then Enter - exit without saving


## WiFi Setup: Buildroot

The Buildroot operating system uses the ConnMan command-line network manager to connect and manage your network connections. 

**Requirements**

  * C.H.I.P. Pro running Buildroot OS
  * [Serial connection](https://docs.getchip.com/chip_pro.html#make-a-serial-connection) to C.H.I.P. Pro
    
### Step 1: Enable WiFi and Find a Network

These three commands will in turn, enable wifi, scan for access points, and list what networks are available:

```shell
connmanctl enable wifi 
connmanctl scan wifi
connmanctl services
```

The `services` command has output similar to:

```shell
WaffleHouse          wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
                	 wifi_xxxxxxxxxxxx_hidden_managed_psk
YOUR_NETWORK         wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
    				 wifi_xxxxxxxxxxxx_xxxxxx_managed_none
Donut_Hut            wifi_xxxxxxxxxxxx_xxxxxxxxx_managed_psk
```

### Step 2: Connect 

Copy the string that starts with "wifi_' to the right of the network name you want to connect to. If it has `psk` at the end, that means it is password protected (short for Wi-Fi Protected Access 2 - Pre-Shared Key) and you need to scroll further down to the " Password Protected" section.

#### No Password

To connect to YOUR_NETWORK, which has no password, `services` shows two choices. We want the one without `psk` in the string. Use the `connect` command:

```shell
connmanctl connect wifi_xxxxxxxxxxxx_xxxxxx_managed_none
```

If your network is not password protected, you'll get some output that will indicate a successful connection, such as:

```shell
[  961.780000] RTL871X: rtw_set_802_11_connect(wlan0)  fw_state=0x00000008
[  962.070000] RTL871X: start auth
[  962.080000] RTL871X: auth success, start assoc
[  962.090000] RTL871X: rtw_cfg80211_indicate_connect(wlan0) BSS not found !!
[  962.100000] RTL871X: assoc success
[  962.110000] RTL871X: send eapol packet
[  962.290000] RTL871X: send eapol packet
[  962.300000] RTL871X: set pairwise key camid:4, addr:xx:xx:xx:xx:xx:xx, kid:0, type:AES
[  962.320000] RTL871X: set group key camid:5, addr:xx:xx:xx:xx:xx:xx, kid:1, type:AES
```

If your network is password protected you'll get an error.

#### Password Protected
To deal with passwords you'll need to put ConnMan into interactive mode:

```shell
connmanctl
```

This command gives a `connmanctl` prompt:

```shell
connmanctl>
```

In the shell, turn the agent on so it can process password requests:

```shell
  agent on
```

Now use the `connect` command with your pasted wifi network string:

```shell
  connect wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
```

Enter your password when prompted:

```shell
  Agent RequestInput wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
  Passphrase?
```

You will be notified that you are connected:

```shell
  Connected wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
```

Exit connmanctl interactive mode:

```shell
  quit
```

### Step 3: Test Connection

Finally, you can test your connection to the internet with `ping`. Google's DNS server at the IP address 8.8.8.8 is probably the most reliable computer on the internet, so:

```shell
ping -c 4 8.8.8.8
```

Expect ping to output some timing messages:

```shell
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: seq=0 ttl=60 time=7.631 ms
64 bytes from 8.8.8.8: seq=1 ttl=60 time=7.474 ms
64 bytes from 8.8.8.8: seq=2 ttl=60 time=7.697 ms
64 bytes from 8.8.8.8: seq=3 ttl=60 time=9.004 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 7.474/7.951/9.004 ms
```
The `-c 4` option means it will happen only 4 times.

&#10024; **Congratulations! You are now Connected to a Network** &#10024;

If your connection is not successful, then ping will tell you your network is down:

```shell
PING 8.8.8.8 (8.8.8.8): 56 data bytes
ping: sendto: Network is unreachable
```

#### Troubleshooting Connection Problems

* Review any messages that the connect command gave you. Did they look like the examples of a successful connection?

* Double check that you used the right network with the `connect` command.

* If everything checked out until you got to `ping`, there's a good chance the problem is with your router or connection to the internet. Some networks have firewalls on them that will allow you to connect but prevent foreign devices from transferring information. 

* Connman not Installed Error

	If you try to use ConnMan and you get an error that it is not found or is not a 	command, chances are that you are using the Debian image. The ConnMan commands only apply to C.H.I.P. Pros running the Buildroot OS.

### Disconnect from Network with Connman
To disconnect from your network, you might first want a reminder of the unfriendly string used to describe your access point:

```shell
connmanctl services
```

This command will output information about your current connection:

```shell
YOUR_NETWORK         wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
```

Copy and paste the string ID along with the `disconnect` command:

```shell
connmanctl disconnect wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
```

You will be notified when it has disconnected: 

```shell
Disconnected wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
```

### Forget Network with Connman
Generally, ConnMan will remember and cache setup information. This means that if you reboot in the vicinity of a known network, it will attempt to connect. However, if you need to forget a network setup, navigate to:

```shell
cd /var/lib/connman/
```

You can delete a single connection by seeing which are stored and copying the one you want to delete:

```shell
/var/lib/connman # ls
settings
wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
wifi_xxxxxxxxxxxx_xxxxxx_managed_none
```

Then delete that connection:

```shell
rm -r wifi_xxxxxxxxxxxx_xxxxxx_managed_psk
```

You can delete all the “wifi” connections with:

```shell
rm -r wifi*
```
The `-r` is needed because these are directories you are deleting and the star at the end of `wifi*` assumes your connection IDs all start with the string “wifi”.

## WiFi Setup: Debian

If you are using the Debian OS you will find that ConnMan is not installed, you will need to use Networking/CLI or the command `nmcli` instead. 

**Requirements**

  * C.H.I.P. Pro loaded with Debian
  * [Serial connection](https://docs.getchip.com/chip_pro.html#usb-serial-uart1-connection) to C.H.I.P. Pro

### Step 1: List available Wi-Fi networks
In terminal type:

```shell
nmcli device wifi list
```

The output will list available access points:

```shell
*  SSID      MODE   CHAN  RATE       SIGNAL  BARS  SECURITY
*  YOUR_NETWORK    Infra  11    54 Mbit/s  100     ▂▄▆█  --
   CatCafe         Infra  6     54 Mbit/s  30      ▂___  WPA1 WPA2
   2WIRE533        Infra  10    54 Mbit/s  44      ▂▄__  WPA1 WPA2
```
### Step 2: Connect 

You can connect to password protected or open access points.

#### No Password
To connect to an open network with no password:

```shell
sudo nmcli device wifi connect "YOUR_NETWORK_SSID" ifname wlan0
```
These commands will respond with information about the connection. A successful connection looks like:

```shell
Connection with UUID 'xxxxxxxx-yyyy-zzzz-xxxx-yyyyyyyyyyyy' created and activated on device 'wlan0'
```

#### Password Protected

To connect to a password protected network, use this command inserting your own network name and password:

```shell
sudo nmcli device wifi connect "YOUR_NETWORK_SSID" password "UR_NETWORK_PASSWORD" ifname wlan0
```

These commands will respond with information about the connection. A successful connection looks like:

```shell
Connection with UUID 'xxxxxxxx-yyyy-zzzz-xxxx-yyyyyyyyyyyy' created and activated on device 'wlan0'
```
#### Hidden SSID and Password Protected

To connect to a hidden and password-protected network:
 
 ```shell
sudo nmcli device wifi connect "YOUR_NETWORK_SSID" password "UR_NETWORK_PASSWORD" ifname wlan0 hidden yes
```

### Step 3: Test your Connection

You can verify and test your wireless network connection.

#### Verify

```shell
nmcli device status
```

This outputs a list of the various network devices and their connections. For example, a successful connection would look like this:

```shell
DEVICE   TYPE      STATE         CONNECTION
wlan0    wifi      connected     YOUR_NETWORK
wlan1    wifi      disconnected  --
ip6tnl0  ip6tnl    unmanaged     --
lo       loopback  unmanaged     --
sit0     sit       unmanaged     --
```

Because it is worth knowing that Linux offers many ways of doing things, another command that shows your current active connection is:

```shell
nmcli connection show --active
```

Which outputs:

```shell
NAME  		   UUID                                  TYPE             DEVICE
YOUR_NETWORK   xxxxxxxx-yyyy-zzzz-xxxx-yyyyyyyyyyyy  802-11-wireless  wlan0
```

After you have connected once, C.H.I.P. Pro will automatically connect to this network next time you reboot (or start NetworkManager services).

#### Test
Expect ping to output some timing messages:

```shell
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: seq=0 ttl=60 time=7.631 ms
64 bytes from 8.8.8.8: seq=1 ttl=60 time=7.474 ms
64 bytes from 8.8.8.8: seq=2 ttl=60 time=7.697 ms
64 bytes from 8.8.8.8: seq=3 ttl=60 time=9.004 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 7.474/7.951/9.004 ms
```
The `-c 4` option means it will happen only 4 times.

&#10024; **Congratulations! You are now Connected to a Network** &#10024;

If your connection is not successful, then ping will tell you your network is down:

```shell
PING 8.8.8.8 (8.8.8.8): 56 data bytes
ping: sendto: Network is unreachable
```

### Disconnect Network with Nmcli

Disconnect from the wireless device:

```shell
sudo nmcli dev disconnect wlan0
```

### Forget Network with Nmcli
You may want to prevent auto-connection to a network. If so, you want the device to forget the a specific network. First, list the connections:

```shell
nmcli c
```

Which outputs something like:

```shell
NAME           UUID                                  TYPE             DEVICE 
YOUR_NETWORK   xxxxxxxx-yyyy-zzzz-xxxx-yyyyyyyyyyyy  802-11-wireless  wlan0
```

Then, delete the network specified between quotes to forget it:

```shell
sudo nmcli connection delete id "YOUR_NETWORK"
```

### Troubleshooting Connection Problems

* No Network Found

No network within range. If there's no network, you can't connect. Go find a network!

* Incorrect Password

If you type in the wrong password, you'll get some errors like this:

```shell
[32258.690000] RTL871X: rtw_set_802_11_connect(wlan0) fw_state=0x00000008
[32258.800000] RTL871X: start auth
[32263.720000] RTL871X: rtw_set_802_11_connect(wlan0) fw_state=0x00000008
[32263.820000] RTL871X: start auth
[32264.430000] RTL871X: auth success, start assoc
[32269.850000] RTL871X: rtw_set_802_11_connect(wlan0) fw_state=0x00000008
[32269.970000] RTL871X: start auth
Error: Timeout 90 sec expired.
```

Try connecting again with the correct password.

* Failed Ping

If you don't have access to the internet, your ping to an outside IP will fail.
It is possible that you can connect to a wireless network, but have no access to the internet, so you'd see a connection when you request device status, but have a failed ping. This indicates a problem or restriction with the router or the access point.

A failed ping looks something like:

```shell
From 192.133.2.10 icmp_seq=14 Destination Host Unreachable
From 192.133.2.10 icmp_seq=15 Destination Host Unreachable
From 192.133.2.10 icmp_seq=16 Destination Host Unreachable
18 packets transmitted, 0 received, +9 errors, 100% packet loss, time 17013ms
pipe 4
```
Change the router or access point permissions to allow a foreign board to connect to it. Alternatively, a personal mobile hotspot can obtained and used if you are in a work environment that can not change its network security settings.

* Loss of Wireless Network

A sudden, unplanned disconnection will post an error in the terminal window:

```shell
[30863.880000] RTL871X: linked_status_chk(wlan0) disconnect or roaming
```

The Network Manager will periodically try to reconnect. If the access point is restored, you'll get something like this in your terminal window:

```shell
[31798.970000] RTL871X: rtw_set_802_11_connect(wlan0)
[31799.030000] RTL871X: start auth
[31799.040000] RTL871X: auth success, start assoc
[31799.050000] RTL871X: rtw_cfg80211_indicate_connect(wlan0) BSS not found !!
[31799.060000] RTL871X: assoc success
```

* Nmcli not Installed Error

If you try to use `nmcli` and you get an error that it is not found or is not a command, chances are that you are using a C.H.I.P. Pro Buildroot image. The `nmcli` commands only apply to C.H.I.P. Pro using Debian linux.

## SSH 

Once you connect to an network you can ssh into the C.H.I.P. Pro in order to program and control it. Our **Debian example comes with ssh servers**, our **Buildroot examples do not**. If you want to ssh while using Buildroot you will need to do a manual build. 

### Find IP

```
ip addr
``` 
The IP is on `wlan0` or sometimes on `wlan1`.

### Connect

```
ssh root@<CHIPproIP>
```

## Access I/O via sysfs	

C.H.I.P. Pro has a total of 27 GPIO pins ready for use:

* 2 PWM
	* pins 9 & 10
* 3 input
	* pins 39 - 41
* 22 input/output
	* pins 11-16, 21-25, 30-38, 43 & 44


To see all the functions C.H.I.P. Pro pins offer check out the [Multiplexing table](https://docs.getchip.com/chip_pro.html#gr8-pins-and-multiplexing-on-c-h-i-p-pro).

![pin out](images/Pro_Pinout.jpg)

GPIO is accessed through Linux's [sysfs interface](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt).  

Depending on the image that is flashed to C.H.I.P. Pro, the commands used to interact with the sysfs interface will differ. If using a **Pro** image, you need to act as root and use `sudo sh -c` with quotes around the command string. For example:

**Pro (Debian)**

```shell
sudo sh -c 'echo 132 > /sys/class/gpio/export
```

**Buildroot**:

```shell
echo 132 > /sys/class/gpio/export
```

All PWM examples are done using one of NTC's **Buildroot** based images.

### GPIO Sysfs Numbers 

To address a GPIO port via sysfs, you do not use the C.H.I.P. Pro or GR8 pin name. Sysfs sees the pins as another set of numbers. To find out what number to use for each GPIO pin reference the tables below. 

**Sysfs Pin Numbers**

D0 - D7:

| C.H.I.P. Pro Pin # | 37 | 36 | 35 | 34 | 33 | 32 | 31 | 30 | 
|------------|-----|-----|-----|-----|-----|-----|------|------|
| sysfs #    | 132 | 133 | 134 | 135 | 136 | 137 | 138  | 139  |

TWI1, UART2:

| C.H.I.P. Pro Pin # | 11 | 12 | 13 | 14 | 15 | 16 |  
|------------|-----|-----|-----|-----|-----|-----|
| sysfs #    | 47 | 48 | 98 | 99 | 100 | 101 | 

I2S:

| C.H.I.P. Pro Pin # | 21 | 22 | 23 | 24 | 25 |   
|------------|-----|-----|-----|-----|-----|
| sysfs #    | 37 | 38 | 39 | 40 | 41 |

SPI2:

| C.H.I.P. Pro Pin # | 41 | 40 | 39 | 38 |   
|------------|-----|-----|-----|-----|
| sysfs #    | 128 | 129 | 130 | 131 | 

PWM:

| C.H.I.P. Pro Pin # | 9 | 10 | 
|------------|-----|-----|
| sysfs #    | 0 | 1 | 

UART1:

** These pins are connected to the FE1.1S USB hub controller IC which is connected to the micro USB providing USB serial functionality. To use them as GPIO disable the USB hub controller by cutting the "UART Disconnect" [traces](https://docs.getchip.com/chip_pro_devkit.html#cuttable-traces). 

| C.H.I.P. Pro Pin # | 44 | 43 | 
|------------|-----|-----|
| sysfs #    | 195 | 196 | 

**Calculate sysfs Number**

If a pin is not listed above you can calculate the sysfs number starting with the GR8 port number. All port numbers are printed on C.H.I.P. Pro for your convenience. They can also be found in the [Allwinner R8 Datasheet](https://github.com/NextThingCo/CHIP_Pro-Hardware/blob/master/Datasheets/GR8_Datasheet_v1.0.pdf) starting on page 15. 

As an example, take a look at **D0** which is port **PE4**. Look at the letter that follows the "P", in this case it's "E". Starting with A = 0, count up in the alphabet until you arrive at "E" and that is the letter index. For example, **E=4**.

Multiply the letter index by 32, then add the number that follows "PE":

(4*32)+4 = 132

### Digital Input Example

To access the GPIO pins through sysfs there is a process that must be adhered to. The following lines of code are an example that reads the changing state of pin **PE4** which corresponds to **132** in sysfs.

When connecting a switch, we recommend adding a external pull-up or pull-down resistor to prevent a floating pin logic state.

![pull-down resistor](images/buttonUART_800.jpg)

In terminal, tell the system you want to listen to a pin by exporting it:

```shell
echo 132 > /sys/class/gpio/export
```

Next, the pin mode needs to be set. By default, the pin modes are set to input. So, the following command that views the mode will return “in” unless the pin mode was changed to "out" previously:

```shell
cat /sys/class/gpio/gpio132/direction
```

Connect a switch between pin PE4 and GND. Use this line of code to read the value:

```shell
cat /sys/class/gpio/gpio132/value
```

Continuously poll a switch on pin PE4(132) for its state change:

```shell
while ( true ); do cat /sys/class/gpio/gpio132/value; sleep 1; done;
```

### Digital Output Example

Attach an LED to pin PE4 and ground. We recommend placing a current-limiting resistor in series to protect the GR8 module and LED from overcurrent or a potential short.

![UART connection](images/blink.gif)

Change the mode of the pin from "in” to “out”:

```shell
echo out > /sys/class/gpio/gpio132/direction
```

Now that it's in output mode, you can write a value to the pin and turn the LED on and off:

```shell
echo 1 > /sys/class/gpio/gpio132/value
echo 0 > /sys/class/gpio/gpio132/value
```


#### Blink an LED on Pin PE4(132)

```
while ( true ); do echo 1 > /sys/class/gpio/gpio132/value; cat /sys/class/gpio/gpio132/value; sleep 1; echo 0 >  /sys/class/gpio/gpio132/value; cat /sys/class/gpio/gpio132/value; sleep 1; done;
```


### Unexport GPIO 

When you are done experimenting, always tell the system to stop listening to the gpio pin by unexporting it:

```shell
echo 132 > /sys/class/gpio/unexport
```

If pins are not unexported, the pins will be "busy" the next time you go to export them. 

