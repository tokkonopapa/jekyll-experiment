# GR8 Pins and Multiplexing on C.H.I.P. Pro

**Key**

_italics_ = default pin function

In the "On C.H.I.P. Pro" column:

* C.H.I.P. Pro pin number = exposed external pins on C.H.I.P. Pro 
* NAND = available internal pins on C.H.I.P. Pro 
* "n/e" = not exposed for use on C.H.I.P. Pro

| Function | Pin Name | On C.H.I.P. Pro | Multi2    | Multi3    | Multi4    | Multi5    | Multi6 | Multi7 |            | 
|----------|----------|-----------|-----------|-----------|-----------|-----------|--------|--------|------------| 
| PB(21)   | PB0      |n/e        | TWI0_SCK  |           |           |           |        |        |            | 
|          | PB1      |n/e        | TWI0_SDA  |           |           |           |        |        |            | 
|          | PB2      | 9         |_PWM0_     | SPDIF_DO  |           |           | EINT16 |        |            | 
|          | PB3      |n/e        | IR_TX     |           |           |           | EINT17 |        |            | 
|          | PB4      |n/e        | IR_RX     |           |           |           | EINT18 |        |            | 
|          | PB5      | 21        |_I2S_MCLK_ |           |           |           | EINT19 |        |            | 
|          | PB6      | 22        |_I2S_BCLK_ |           |           |           | EINT20 |        |            | 
|          | PB7      | 23        |_I2S_LRCK_ |           |           |           | EINT21 |        |            | 
|          | PB8      | 24        |_I2S_DO_   |           |           |           | EINT22 |        |            | 
|          | PB9      | 25        |_I2S_DI_   | SPDIF_DI  |           |           | EINT23 |        |            | 
|          | PB10     |n/e        | SPI2_CS1  | SPDIF_DO  |           |           | EINT24 |        |            | 
|          | PB11     |n/e        | SPI2_CS0  | JTAG_MS0  |           |           | EINT25 |        |            | 
|          | PB12     |n/e        | SPI2_CLK  | JTAG_CK0  |           |           | EINT26 |        |            | 
|          | PB13     |n/e        | SPI2_MOSI | JTAG_DO0  |           |           | EINT27 |        |            | 
|          | PB14     |n/e        | SPI2_MISO | JTAG_DI0  |           |           | EINT28 |        |            | 
|          | PB15     | 11        |_TWI1_SCK_ |           |           |           |        |        |            | 
|          | PB16     | 12        |_TWI1_SDA_ |           |           |           |        |        |            | 
|          | PB17     |n/e        | TWI2_SCK  |           |           |           |        |        |            | 
|          | PB18     |n/e        | TWI2_SDA  |           |           |           |        |        |            | 
| PC(20)   | PC0      | NAND      |_NWE_      | SPI0_MOSI |           |           |        |        |            | 
|          | PC1      | NAND      |_NALE_     | SPI0_MISO |           |           |        |        |            | 
|          | PC2      | NAND      |_NCLE_     | SPI0_CLK  |           |           |        |        |            | 
|          | PC3      | NAND      |_NCE1_     | SPI0_CS0  |           |           |        |        |            | 
|          | PC4      | NAND      |_NCE0_     |           |           |           |        |        |            | 
|          | PC5      | NAND      |_NRE_      |           |           |           |        |        |            | 
|          | PC6      | NAND      |_NRB0_     | SDC2_CMD  |           |           |        |        |            | 
|          | PC7      | NAND      |_NRB1_     | SDC2_CLK  |           |           |        |        |            | 
|          | PC8      | NAND      |_NDQ0_     | SDC2_D0   |           |           |        |        |            | 
|          | PC9      | NAND      |_NDQ1_     | SDC2_D1   |           |           |        |        |            | 
|          | PC10     | NAND      |_NDQ2_     | SDC2_D2   |           |           |        |        |            | 
|          | PC11     | NAND      |_NDQ3_     | SDC2_D3   |           |           |        |        |            | 
|          | PC12     | NAND      |_NDQ4_     | SDC2_D4   |           |           |        |        |            | 
|          | PC13     | NAND      |_NDQ5_     | SDC2_D5   |           |           |        |        |            | 
|          | PC14     | NAND      |_NDQ6_     | SDC2_D6   |           |           |        |        |            | 
|          | PC15     | NAND      |_NDQ7_     | SDC2_D7   |           |           |        |        |            | 
|          | PC19     | NAND      |_NDQS_     | UART2_RX  | UART3_RTS |           |        |        |            | 
|          | PD2      | 13        | LCD_D2    |_UART2_TX_ |           |           |        |        |            | 
|          | PD3      | 14        | LCD_D3    |_UART2_RX_ |           |           |        |        |            | 
|          | PD4      | 15        | LCD_D4    |_UART2_CTS_|           |           |        |        |            | 
|          | PD5      | 16        | LCD_D5    |_UART2_RTS_|           |           |        |        |            | 
|          | PD6      |n/e        | LCD_D6    | ECRS      |           |           |        |        |            | 
|          | PD7      |n/e        | LCD_D7    | ECOL      |           |           |        |        |            | 
|          | PD10     |n/e        | LCD_D10   | ERXD0     |           |           |        |        |            | 
|          | PD11     |n/e        | LCD_D11   | ERXD1     |           |           |        |        |            | 
|          | PD12     |n/e        | LCD_D12   | ERXD2     |           |           |        |        |            | 
|          | PD13     |n/e        | LCD_D13   | ERXD3     |           |           |        |        |            | 
|          | PD14     |n/e        | LCD_D14   | ERXCK     |           |           |        |        |            | 
|          | PD15     |n/e        | LCD_D15   | ERXERR    |           |           |        |        |            | 
|          | PD18     |n/e        | LCD_D18   | ERXDV     |           |           |        |        |            | 
|          | PD19     |n/e        | LCD_D19   | ETXD0     |           |           |        |        |            | 
|          | PD20     |n/e        | LCD_D20   | ETXD1     |           |           |        |        |            | 
|          | PD21     |n/e        | LCD_D21   | ETXD2     |           |           |        |        |            | 
|          | PD22     |n/e        | LCD_D22   | ETXD3     |           |           |        |        |            | 
|          | PD23     |n/e        | LCD_D23   | ETXEN     |           |           |        |        |            | 
|          | PD24     |n/e        | LCD_CLK   | ETXCK     |           |           |        |        |            | 
|          | PD25     |n/e        | LCD_DE    | ETXERR    |           |           |        |        |            | 
|          | PD26     |n/e        | LCD_HSYNC | EMDC      |           |           |        |        |            | 
|          | PD27     |n/e        | LCD_VSYNC | EMDIO     |           |           |        |        |            | 
| PE(12)   | PE0      | 41        | TS_CLK    | CSI_PCLK  |_SPI2_CS0_ |           | EINT14 |        |            | 
|          | PE1      | 40        | TS_ERR    | CSI_MCLK  |_SPI2_CLK_ |           | EINT15 |        |            | 
|          | PE2      | 39        | TS_SYNC   | CSI_HSYNC |_SPI2_MOSI_|           |        |        |            | 
|          | PE3      | 38        | TS_DVLD   | CSI_VSYNC |_SPI2_MISO_|           |        |        |            | 
|          | PE4      | 37        | TS_D0     | CSI_D0    |_SDC2 D0_  |           |        |        |            | 
|          | PE5      | 36        | TS_D1     | CSI_D1    |_SDC2 D1_  |           |        |        |            | 
|          | PE6      | 35        | TS_D2     | CSI_D2    |_SDC2 D2_  |           |        |        |            | 
|          | PE7      | 34        | TS_D3     | CSI_D3    |_SDC2 D3_  |           |        |        |            | 
|          | PE8      | 33        | TS_D4     | CSI_D4    |_SDC2 CMD_ |           |        |        |            | 
|          | PE9      | 32        | TS_D5     | CSI_D5    |_SDC2 CLK_ |           |        |        |            | 
|          | PE10     | 31        | TS_D6     | CSI_D6    |_UART1 TX_ |           |        |        |            | 
|          | PE11     | 30        | TS_D7     | CSI_D7    |_UART1 RX_ |           |        |        |            | 
| PF(6)    | PF0      |n/e        | SDC0_D1   |           | JTAG_MS1  |           |        |        |            | 
|          | PF1      |n/e        | SDC0_D0   |           | JTAG_DI1  |           |        |        |            | 
|          | PF2      |n/e        | SDC0_CLK  |           | UART0_TX  |           |        |        |            | 
|          | PF3      |n/e        | SDC0_CMD  |           | JTAG_DO1  |           |        |        |            | 
|          | PF4      |n/e        | SDC0_D3   |           | UART0_RX  |           |        |        |            | 
|          | PF5      |n/e        | SDC0_D2   |           | JTAG_CK1  |           |        |        |            | 
| PG(14)   | PG0      |n/e        | GPS_CLK   |           |           |           | EINT0  |        |            | 
|          | PG1      |n/e        | GPS_SIGN  |           |           |           | EINT1  |        |            | 
|          | PG2      |n/e        | GPS_MAG   |           |           |           | EINT2  |        | USB0-IDDET | 
|          | PG3      |n/e        | SDC1_CMD  | MS_BS     | UART1_TX  |           | EINT3  |        |            | 
|          | PG4      |n/e        | SDC1_CLK  | MS_CLK    | UART1_RX  |           | EINT4  |        |            | 
|          | PG5      |n/e        | SDC1_D0   | MS_D0     | UART1_CTS |           | EINT5  |        |            | 
|          | PG6      |n/e        | SDC1_D1   | MS_D1     | UART1_RTS | UART2_RTS | EINT6  |        |            | 
|          | PG7      |n/e        | SDC1_D2   | MS_D2     |           | UART2_TX  | EINT7  |        |            | 
|          | PG8      |n/e        | SDC1_D3   | MS_D3     |           | UART2_RX  | EINT8  |        |            | 
|          | PG9      |n/e        | SPI1_CS0  | UART3_TX  |           |           | EINT9  |        |            | 
|          | PG10     |n/e        | SPI1_CLK  | UART3_RX  |           |           | EINT10 |        |            | 
|          | PG11     |n/e        | SPI1_MOSI | UART3_CTS |           |           | EINT11 |        |            | 
|          | PG12     |n/e        | SPI1_MISO | UART3_RTS |           |           | EINT12 |        |            | 
|          | PG13     | 10        | SPI1_CS1  |_PWM1_     |           | UART2_CTS | EINT13 |        |            | 
| TVOUT    | TVOUT    |n/e        |           |           |           |           |        |        |            | 
| USB      | UDM0     | 52        |           |           |           |           |        |        |            | 
|          | UDP0     | 51        |           |           |           |           |        |        |            | 
|          | UDM1     | 48        |           |           |           |           |        |        |            | 
|          | UDP1     | 47        |           |           |           |           |        |        |            | 
|          | VCC_USB  |n/e        |           |           |           |           |        |        |            | 
| TP       | TPX1     |n/e        |           |           |           |           |        |        |            | 
|          | TPX2     |n/e        |           |           |           |           |        |        |            | 
|          | TPY1     |n/e        |           |           |           |           |        |        |            | 
|          | TPY2     |n/e        |           |           |           |           |        |        |            | 
|          | LINEINL  |n/e        |           |           |           |           |        |        |            | 
|          | LINEINR  |n/e        |           |           |           |           |        |        |            | 
|          | MIC1OUTP |n/e        |           |           |           |           |        |        |            | 
|          | MIC1OUTN |n/e        |           |           |           |           |        |        |            | 
|          | VMIC     |n/e        |           |           |           |           |        |        |            | 
|          | MICIN2   | 28        |           |           |           |           |        |        |            | 
|          | MICIN1   | 27        |           |           |           |           |        |        |            | 
|          | VRA1     |n/e        |           |           |           |           |        |        |            | 
|          | VRA2     |n/e        |           |           |           |           |        |        |            | 
|          | AVCC     |n/e        |           |           |           |           |        |        |            | 
|          | VRP      |n/e        |           |           |           |           |        |        |            | 
|          | AGND     |n/e        |           |           |           |           |        |        |            | 
|          | HPR      | 20        |           |           |           |           |        |        |            | 
|          | HPCOM    | 19        |           |           |           |           |        |        |            | 
|          | HPCOMFB  |n/e        |           |           |           |           |        |        |            | 
|          | VCC_HP   |n/e        |           |           |           |           |        |        |            | 
|          | HPBP     |n/e        |           |           |           |           |        |        |            | 
|          | HPL      | 18        |           |           |           |           |        |        |            | 
| LRADC    | LRADC0   | 42        |           |           |           |           |        |        |            | 
|          | LRADC1   |n/e        |           |           |           |           |        |        |            | 
