## I2C

C.H.I.P. Pro has a TWI (Two Wire Interface) controller at pins 11 and 12. 

List all the I2C devices on C.H.I.P. Pro:

```shell
ls /dev/i2c*
```
Two devices will be listed:

```shell
/dev/i2c-0 /dev/i2c-1
```
To find the device in sysfs:

```shell 
ls /sys/bus/i2c/devices/
```
You will see:

```shell
0-0034 /dev/i2c-0 /dev/i2c-1
```

```0-0034``` is the AXP209 power management unit connected to i2c-0. Pins 11 and 12 connect to i2c-1. To see a table of what devices are on the i2c-1 bus:

```shell
i2cdetect -y 1
```

You can see the address of the ADS1015 module at 0x48. 

```shell
/ # i2cdetect -y 1
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- -- 
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- 48 -- -- -- -- -- -- -- 
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
70: -- -- -- -- -- -- -- --                         
/ # 
```




