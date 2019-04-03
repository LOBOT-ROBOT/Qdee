/*
 qdee package
*/
//% weight=10 icon="\uf013" color=#2896ff
namespace qdee {

    export enum qdee_Colors {
        //% block="Red"
        Red = 0x01,
        //% block="Green"
        Green = 0x02,
        //% block="Blue"
        Blue = 0x03,
        //% block="Black"
        Black = 0x04,
        //% block="White"
        White = 0x05,
        //% block="None"
        None = 0x06
    }

    export enum qdee_RGBValue {
        //% block="Red"
        Red = 0x01,
        //% block="Green"
        Green = 0x02,
        //% block="Blue"
        Blue = 0x03  
    }

    export enum extPins {
        //% block="PA6"
        pa6 = 0x06,
        //% block="PA7"
        pa7 = 0x07,
        //% block="PB0"
        pb0 = 0x10,
        //% block="PB1"
        pb1 = 0x11,
        //% block="PB10"        
        pb10 = 0x1a,
        //% block="PB11"
        pb11 = 0x11,
        //% block="PC13"
        pc13 = 0x23
    }

    export enum qdee_lineFollower {
        //% blockId="S1_OUT_S2_OUT" block="Sensor1 and sensor2 are out black line"
        S1_OUT_S2_OUT = 0x00,
        //% blockId="S1_OUT_S2_IN" block="Sensor2 in black line but sensor1 not"
        S1_OUT_S2_IN = 0x01,
        //% blockId="S1_IN_S2_OUT" block="Sensor1 in black line but sensor2 not"
        S1_IN_S2_OUT = 0x02,
        //% blockId="S1_IN_S2_IN" block="Sensor1 and sensor2 are in black line "
        S1_IN_S2_IN = 0x03
    }

    export enum colorSensorPort {
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 9"
        port9 = 0x09
    }

    export enum fanPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
    }

    export enum Servos {
        //% block="servo 1"
        Servo1 = 0x01,
        //% block="servo 2"
        Servo2 = 0x02
    }

    export enum ultrasonicPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02
    }

    export enum lightbeltPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03
    }

    export enum busServoPort {
        //% block="Port 10"
        port10 = 0x0A
    }

    export enum knobPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 6"
        port6 = 0x06,
        //% block="Port 8"
        port8 = 0x08
    }

    export enum touchKeyPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 6"
        port6 = 0x06,
        //% block="Port 8"
        port8 = 0x08
    }

    export enum lineFollowPort {
        //% block="Port 1"
        port1 = 0x01
    }

    export enum extAddress {
        //% block="address 1"
        adress_1 = 0xFE,
        //% block="address 2"
        adress_2 = 0xFD,
        //% block="address 3"
        adress_3 = 0xFC,
        //% block="address 4"
        adress_4 = 0xFB,
        //% block="address 5"
        adress_5 = 0xFA,
        //% block="address 6"
        adress_6 = 0xF9,
        //% block="address 7"
        adress_7 = 0xF8,
        //% block="address 8"
        adress_8 = 0xF7,
        //% block="address 9"
        adress_9 = 0xF6,
        //% block="address 10"
        adress_10 = 0xF5
    }
    export enum LineFollowerSensor {
        //% block="Sensor 1"
        LFSensor_1 = 0x00,
        //% block="Sensor 2"
        LFSensor_2 = 0x01
    }
    export enum IRKEY {
        //% block="CH-"
        CH_MINUS = 162,
        //% block="CH"
        CH = 98,
        //% block="CH+"
        CH_ADD = 226,
        //% block="PREV"
        PREV = 34,
        //% block="NEXT"
        NEXT = 2,
        //% block="PLAY/PAUSE"
        PLAY_PAUSE = 194,
        //% block="+"
        ADD = 168,
        //% block="-"
        MINUS = 224,
        //% block="EQ"
        EQ = 144,
        //% block="100+"
        _100 = 152,
        //% block="200+"
        _200 = 176,
        //% block="R0"
        R0 = 104,
        //% block="R1"
        R1 = 48,
        //% block="R2"
        R2 = 24,
        //% block="R3"
        R3 = 122,
        //% block="R4"
        R4 = 16,
        //% block="R5"
        R5 = 56,
        //% block="R6"
        R6 = 90,
        //% block="R7"
        R7 = 66,
        //% block="R8"     
        R8 = 74,
        //% block="R9"
        R9 = 82
    }
    export enum LightPort {
        //% block="Port 1"
        port1 = 0x01,
       //% block="Port 6"
        port6 = 0x06,     
       //% block="Port 8"
        port8 = 0x08            
    }
    
    export enum TempSensor { 
        //% block="Port 4"
        port4 = 0x04,       
        //% block="Port 9"
        port9 = 0x09              
     }

     export enum WaterPumPort {
        //% block="M1"
        port1 = 0x01,       
        //% block="M2"
        port2 = 0x02  
   }  
     export enum Qdee_IOTCmdType {
        //% block="led color"
        LED_COLOR = 1,
        //% block="Buzzer"
        BUZZER = 2,
        //% block="Show"
        SHOW = 3,
        //% block="Shake"
         SHAKE = 4,
        //% block="IR remote"
         IR_REMOTE = 5,
        //% block="Sound level"
         SOUND = 6,
        //% block="Light"
        LIGHT = 7,        
        //% block="Temperature"
        TEMP = 8,
        //% block="Humidity"
         HUMI = 9,
        //% block="Soil humidity"
        SOIL_HUMI = 10,   
        //% block="Ultrasonic"
        ULTRASONIC = 11,
        //% block="Water pump on"
        WATERPUMP_ON = 12,
        //% block="Water pump off"
        WATERPUMP_OFF = 13         
     }
     
     export enum Qdee_MusicName {
        //% block="stop"
        Stop = 0x00,
        //% block="dadadum"
        Dadadum = 0x01,
        //% block="little star"
        Star = 0x02,
        //% block="ringtone"
        Ring = 0x03,
        //% block="brithday"
        Birth = 0x04,
        //% block="wedding"        
        Wedding = 0x05,
        //% block="jump up"
        JumpUp = 0x06,
        //% block="jump down"
        JumpDown = 0x07,
        //% block="power up"
        PowerUp = 0x08,
        //% block="power down"
        PowerDown = 0x09
    }
     
     export enum Temp_humi {
        //% block="Temperature"
        Temperature = 0x01,
        //% block="Humidity"
        Humidity = 0x02
    }
    
    let versionNum: number = -1;//-1为未定义
    let readTimes: number = 0;


    /**
     * Qdee initialization, please execute at boot time
    */
    //% weight=100 blockId=qdee_Init block="Initialize Qdee"
    export function qdee_Init() {
        serial.redirect(
            SerialPin.P12,
            SerialPin.P8,
            BaudRate.BaudRate115200);

        basic.forever(() => {
            getHandleCmd();
        });
        while (readTimes < 10 && versionNum == -1) {
            readTimes++;
            sendVersionCmd();
            basic.pause(30)
        }
        basic.pause(1500);
        initExtPins();
    }

    function sendVersionCmd() {
        let buf = pins.createBuffer(4);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x02;
        buf[3] = 0x12;//cmd type
        serial.writeBuffer(buf);
    }

    function initExtPins() {
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x01;
        buf[5] = 0x00;
        serial.writeBuffer(buf);
    }
    let handleCmd: string = "";
    let currentVoltage: number = 0;
    let volume: number = 0;

    let PA6 = 2;
    let PA7 = 2;
    let PB0 = 2;
    let PB1 = 2;
    let PB10 = 2;
    let PB11 = 2;
    let PC13 = 2;

    let PA6_ad = 0;
    let PA7_ad = 0;
    let PB0_ad = 0;
    let PB1_ad = 0;

    let MESSAGE_HEAD = 0xff;
    let MESSAGE_IOT_HEAD = 0x102;

    let servo1Angle: number = 0xfff;
    let servo2Angle: number = 0xfff;

    let MESSAGE_HEAD_LONG: number = 0x100;
    let MESSAGE_HEAD_STOP: number = 0x101;

    let cntIr = 0;
    let adress = 0;
    let sendFlag = false;
    /**
    * Get the handle command.
    */
    function getHandleCmd() {
        let charStr: string = serial.readString();
        handleCmd = handleCmd.concat(charStr);
        let cnt: number = countChar(handleCmd, "$");
        if (cnt == 0)
            return;
        let index = findIndexof(handleCmd, "$", 0);
        if (index != -1) {
            let cmd: string = handleCmd.substr(0, index);
            if (cmd.charAt(0).compare("A") == 0) {
                if (cmd.length == 13)
                {
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    let arg2Int: number = strToNumber(cmd.substr(3, 2));
                    let arg3Int: number = strToNumber(cmd.substr(5, 2));
                    let arg4Int: number = strToNumber(cmd.substr(7, 2));
                    let arg5Int: number = strToNumber(cmd.substr(9, 2));
                    let arg6Int: number = strToNumber(cmd.substr(11, 2));
    
                    PA6_ad = arg1Int;
                    PA7_ad = arg2Int;
                    PB0_ad = arg3Int;
                    PB1_ad = arg4Int;   
    
                    if (arg5Int != -1)
                    {
                        currentVoltage = arg5Int*10353/200;
                    }  
    
                    if (arg6Int != -1)
                    {
                        volume = arg6Int;
                    }   
                    
                    PA6 = checkADPortValue(arg1Int);
                    PA7 = checkADPortValue(arg2Int);
                    PB0 = checkADPortValue(arg3Int);
                    PB1 = checkADPortValue(arg4Int);
                }
                else if (cmd.length == 9)//彩灯颜色
                {
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    let arg2Int: number = strToNumber(cmd.substr(3, 2));
                    let arg3Int: number = strToNumber(cmd.substr(5, 2));
                    let arg4Int: number = strToNumber(cmd.substr(7, 2));
     
                    control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.LED_COLOR);
                    
                    if (arg1Int != -1 && arg2Int != -1 && arg3Int != -1 && arg4Int != -1)
                    {
                        qdee_sendSensorData(Qdee_IOTCmdType.LED_COLOR,arg1Int);
                        qdeelight.qdee_setPixelRGBSerial(arg1Int, arg2Int, arg3Int, arg4Int);   
                    }    
                }

            }
           else if (cmd.charAt(0).compare("B") == 0) {
                if (cmd.length == 16)
                {
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    let arg2Int: number = strToNumber(cmd.substr(3, 2));
                    let arg3Int: number = strToNumber(cmd.substr(5, 2));
                    let arg4Int: number = strToNumber(cmd.substr(7, 2));
                    let arg5Int: number = strToNumber(cmd.substr(9, 4));
                    let arg6Int: number = strToNumber(cmd.charAt(9));
                    let arg7Int: number = strToNumber(cmd.charAt(10));
                    let arg8Int: number = strToNumber(cmd.charAt(11));
                    PA6_ad = arg1Int;
                    PA7_ad = arg2Int;
                    PB0_ad = arg3Int;
                    PB1_ad = arg4Int;
                    PA6 = checkADPortValue(arg1Int);
                    PA7 = checkADPortValue(arg2Int);
                    PB0 = checkADPortValue(arg3Int);
                    PB1 = checkADPortValue(arg4Int);
    
                    if (arg5Int != -1) {
                        let high = (arg5Int >> 8) & 0xff;
                        let low = arg5Int & 0xff;
                        if (high == 0)
                        {
                            if (adress != 0) {
                                control.raiseEvent(MESSAGE_HEAD_STOP, 0);
                            }    
                            sendFlag = false;
                            adress = 0;
                        }
                        else
                        {
                            if (low >= extAddress.adress_10 && low <= extAddress.adress_1)
                            {
                                control.raiseEvent(low, high);
                            }
                            else if (low == 0xff)
                            {
                                if (adress != high) {
                                    if (!sendFlag) {
                                        control.raiseEvent(MESSAGE_HEAD, high);
                                        sendFlag = true;
                                    }
                                    adress = high
                                }
                                else {
                                    cntIr++;
                                }
                                if (cntIr >= 3) {
                                    cntIr = 0;
                                    control.raiseEvent(MESSAGE_HEAD_LONG, high);
                                }
                            }                                   
                        }
                    }
                    if (arg6Int != -1) {
                        PC13 = arg6Int;
                    }
                    if (arg7Int != -1) {
                        PB11 = arg7Int;
                    }
                    if (arg8Int != -1) {
                        PB10 = arg8Int;
                    }    
                }
                else if (cmd.length == 3)
                {
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    if (arg1Int != -1)
                    {
                        control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.BUZZER);
                        qdee_sendSensorData(Qdee_IOTCmdType.BUZZER,arg1Int);
                        qdee_playMusic(arg1Int);
                    }  
                }

            }
           else if (cmd.charAt(0).compare("C") == 0) {
                if (cmd.length == 3)//显示
                {
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    if (arg1Int != -1)
                    {
                        control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.SHOW);
                        qdee_sendSensorData(Qdee_IOTCmdType.SHOW,arg1Int);
                        qdee_show_expressions(arg1Int);
                    }    
                }
            }
            else if (cmd.charAt(0).compare("E") == 0)//远程遥控按键
            {
                if (cmd.length == 3)//显示
                {
                    music.playTone(988, music.beat(BeatFraction.Quarter));
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    if (arg1Int != -1)
                    {
                        music.playTone(392, music.beat(BeatFraction.Quarter));
                        control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.IR_REMOTE);
                        qdee_sendSensorData(Qdee_IOTCmdType.IR_REMOTE, arg1Int);
                        qdee_send_learn_data(arg1Int);
                    }      
                }
            }
            else if (cmd.charAt(0).compare("F") == 0 && cmd.length == 1)//查询音量
            {
                control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.SOUND);
            }
            else if (cmd.charAt(0).compare("G") == 0 && cmd.length == 1)//查询光线
            {
                control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.LIGHT);
            }
            else if (cmd.charAt(0).compare("H") == 0 && cmd.length == 1)//查询温度
            {
                control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.TEMP);
            }
            else if (cmd.charAt(0).compare("I") == 0 && cmd.length == 1)//查询湿度
            {
                control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.HUMI);
            }
            else if (cmd.charAt(0).compare("J") == 0 && cmd.length == 1)//查询土壤湿度
            {
                control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.SOIL_HUMI);
            }   
            else if (cmd.charAt(0).compare("K") == 0 && cmd.length == 1)//查询超声波
            {
                control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.ULTRASONIC);
            }
            else if (cmd.charAt(0).compare("L") == 0 && cmd.length == 2)//水泵
            {
                let arg1Int: number = strToNumber(cmd.substr(1, 1));
                if (arg1Int != -1)
                {
                    qdee_sendSensorData(Qdee_IOTCmdType.WATERPUMP_ON, arg1Int);
                    if (arg1Int == 1)
                    {
                        control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.WATERPUMP_ON);
                    }
                    else if (arg1Int == 0)
                    {
                        control.raiseEvent(MESSAGE_IOT_HEAD, Qdee_IOTCmdType.WATERPUMP_OFF);

                    }
                }    
            }            
            if (cmd.compare("IROK") == 0) {
                music.playTone(988, music.beat(BeatFraction.Quarter));
            }
            if (cmd.charAt(0).compare("V") == 0 && cmd.length == 4) {
                let arg1Int: number = strToNumber(cmd.substr(1, 1));
                let arg2Int: number = strToNumber(cmd.substr(3, 1));
                if (arg1Int != -1 && arg2Int != -1) {
                    versionNum = arg1Int * 10 + arg2Int;
                }
            }
            if (cmd.charAt(0).compare("S") == 0 && cmd.length == 5) {
                let arg1Int: number = strToNumber(cmd.substr(1, 1));
                let arg2Str = cmd.substr(2, 3);
                if (arg2Str.compare("XXX") == 0) {
                    return;
                }
                let arg2Int: number = 0;
                if (arg2Str.charAt(0).compare("F") != 0) {
                    arg2Int = strToNumber(arg2Str);
                }
                if (arg2Int > 1000)
                    arg2Int = 1000;
                if (arg1Int == 1) {
                    servo1Angle = mapRGB(arg2Int, 0, 1000, 0, 240);
                    servo1Angle -= 120;
                }
                else if (arg1Int == 2) {
                    servo2Angle = mapRGB(arg2Int, 0, 1000, 0, 240);
                    servo2Angle -= 120;
                }
            }
        }
        handleCmd = "";
    }

    function checkADPortValue(value: number): number {
        if (value == -1)
            return 2;
        if (value <= 0x2E)
            return 0;
        else if (value >= 0xAA)
            return 1;
        else
            return 2;//未识别电平状态
    }

    function findIndexof(src: string, strFind: string, startIndex: number): number {
        for (let i = startIndex; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                return i;
            }
        }
        return -1;
    }

    function countChar(src: string, strFind: string): number {
        let cnt: number = 0;
        for (let i = 0; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                cnt++;
            }
        }
        return cnt;
    }

    function strToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++) {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;
            if (i > 0)
                num *= 16;
            num += tmp;
        }
        return num;
    }

    function converOneChar(str: string): number {
        if (str.compare("0") >= 0 && str.compare("9") <= 0) {
            return parseInt(str);
        }
        else if (str.compare("A") >= 0 && str.compare("F") <= 0) {
            if (str.compare("A") == 0) {
                return 10;
            }
            else if (str.compare("B") == 0) {
                return 11;
            }
            else if (str.compare("C") == 0) {
                return 12;
            }
            else if (str.compare("D") == 0) {
                return 13;
            }
            else if (str.compare("E") == 0) {
                return 14;
            }
            else if (str.compare("F") == 0) {
                return 15;
            }
            return -1;
        }
        else
            return -1;
    }

    /**
    * Set the angle of bus servo 1 to 8, range of -120~120 degree
    */
    //% weight=99 blockId=qdee_setBusServo block="Set bus servo|port %port|index %index|angle(-120~120) %angle|duration %duration"
    //% angle.min=-120 angle.max=120
    //% inlineInputMode=inline
    //% subcategory=Control
    export function qdee_setBusServo(port: busServoPort, index: number, angle: number, duration: number) {
        angle = angle * -1;
        if (angle > 120 || angle < -120) {
            return;
        }
        angle += 120;
        let position = mapRGB(angle, 0, 240, 0, 1000);
        let buf = pins.createBuffer(10);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x08;
        buf[3] = 0x03;//cmd type
        buf[4] = 0x01;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        buf[7] = index;
        buf[8] = position & 0xff;
        buf[9] = (position >> 8) & 0xff;
        serial.writeBuffer(buf);
    }

    /**
    * Set the number of the servo.
    */
    //% weight=98 blockId=qdee_setBusServoNum block="Set bus servo|number %port|"
    //% subcategory=Control
    export function qdee_setBusServoNum(index: number) {
        let buf = pins.createBuffer(5);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x03;
        buf[3] = 0x36;//cmd type
        buf[4] = index;
        serial.writeBuffer(buf);
    }
    /**
     * Send read qdee servos angle command
     */
    //% weight=97 blockId=qdee_readAngle block="Read|%servo|angle command "
    //% subcategory=Control
    export function qdee_readAngle(servo: Servos): number {
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x05;
        buf[5] = servo;
        serial.writeBuffer(buf);
        basic.pause(200);

        let value = 0;
        if (servo == Servos.Servo1) {
            if (servo1Angle != 0xfff) {
                value = servo1Angle;
                servo1Angle = 0xfff;
                return value;
            }
            else {
                basic.pause(200);
                if (servo1Angle != 0xfff) {
                    value = servo1Angle;
                    servo1Angle = 0xfff;
                    return value;
                }
            }
        }
        else if (servo == Servos.Servo2) {
            if (servo2Angle != 0xfff) {
                value = servo2Angle;
                servo2Angle = 0xfff;
                return value;
            }
            else {
                basic.pause(200);
                if (servo2Angle != 0xfff) {
                    value = servo2Angle;
                    servo2Angle = 0xfff;
                    return value;
                }
            }
        }
        return 0;
    }

    /**
    *	Set the speed of the number 1 motor and number 2 motor, range of -100~100, that can control the tank to go advance or turn of.
    */
    //% weight=96 blockId=qdee_setMotorSpeed block="Set motor1 speed(-100~100)|%speed1|and motor2|speed %speed2"
    //% speed1.min=-100 speed1.max=100
    //% speed2.min=-100 speed2.max=100
    //% subcategory=Control
    export function qdee_setMotorSpeed(speed1: number, speed2: number) {
        if (speed1 > 100 || speed1 < -100 || speed2 > 100 || speed2 < -100) {
            return;
        }
        speed1 = speed1 * -1;
        speed2 = speed2 * -1;
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x32;//cmd type
        buf[4] = speed2;
        buf[5] = speed1;
        serial.writeBuffer(buf);
    }
    
    /**
   * Set fan speed
   * @param speed the speed of the fan in -100~100. eg: 80
   */
    //% weight=95 blockId=qdee_fan_speed block="Set the fan|port %port|speed %speed"
    //% speed.min=-100 speed.max=100
    //% subcategory=Control
    export function qdee_fan_speed(port: fanPort, speed: number) {
        let pin1Clock = 0;
        let pin2Clock = 0;
        if (speed > 100)
            speed = 100;
        else if (speed < -100)
            speed = -100;
        speed = speed * 1023 / 100;
        if (speed > 0)//正转
        {
            pin1Clock = speed;
        }
        else {
            pin2Clock = -1 * speed;
        }
        switch (port) {
            case fanPort.port1:
                pins.analogWritePin(AnalogPin.P1, pin1Clock);
                pins.analogWritePin(AnalogPin.P2, pin2Clock);
                break;
            case fanPort.port2:
                pins.analogWritePin(AnalogPin.P13, pin1Clock);
                pins.analogWritePin(AnalogPin.P14, pin2Clock);
                break;
        }
    }

     /**
    *	Set the water pump on/off
    */
    //% weight=94 blockId=qdee_setWaterPump block="Set water pump|%port|speed(0~100) %speed|"
    //% speed.min=0 speed.max=100
    //% subcategory=Control
    export function qdee_setWaterPump(port: WaterPumPort, speed: number) {
        if (speed > 100) {
            speed = 100;
        }
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x32;//cmd type
        if (port == WaterPumPort.port1)
        {
            buf[4] = 0;
            buf[5] = speed;
        }
        else if (port == WaterPumPort.port2)
        {
            buf[4] = speed;
            buf[5] = 0;    
        }
        serial.writeBuffer(buf);
    }
    
    /**
     * Do someting when Qdee receive custom ir code
     * @param address the message id
     * @param code the button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=93 blockId=onQdee_custom_ir_pressed block="on ir receive|%address|code %code"
    //% subcategory=IR
    export function onQdee_custom_ir_pressed(address: extAddress, code: number, body: Action) {
        control.onEvent(address, code, body);
    }

    /**
    * Let Qdee send ir custom data
    */
    //% weight=92 blockId=qdee_send_ir_data block="Let Qdee send custom ir|%address|code %num"
    //% num.min=0 num.max=254  
    //% subcategory=IR
    export function qdee_send_ir_data(address: extAddress, num: number) {
        if (num < 0 || num > 254)
            return;
        let buf = pins.createBuffer(8);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x06;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x04;
        buf[5] = num;
        buf[6] = address;
        buf[7] = 0;
        serial.writeBuffer(buf);
    }

    /**
     * Do someting when Qdee receive remote-control code
     * @param code the ir key button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=91 blockId=onQdee_remote_ir_pressed block="on remote-control|%code|pressed"
    //% subcategory=IR
    export function onQdee_remote_ir_pressed(code: IRKEY, body: Action) {
        control.onEvent(MESSAGE_HEAD, code, body);
}
    
    /**
     * Do someting when remote-control longpress
     * @param code the ir key button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=90 blockId=onQdee_remote_ir_longpressed block="on remote-control|%code|long pressed"
    //% subcategory=IR
    export function onQdee_remote_ir_longpressed(code: IRKEY, body: Action) {
        control.onEvent(MESSAGE_HEAD_LONG, code, body);
    }

    /**
     * Do someting when remote-control stop send
     * @param code the ir key button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=89 blockId=onQdee_remote_no_ir block="on remote-control stop send"
    //% subcategory=IR    
    export function onQdee_remote_no_ir(body: Action) {
        control.onEvent(MESSAGE_HEAD_STOP, 0, body);
    }

    /**
    * Let Qdee send ir remote-control data
    */
    //% weight=88 blockId=qdee_send_remote_data block="Let Qdee send ir remote-control|key %irKey|"
    //% subcategory=IR
    export function qdee_send_remote_data(irKey: IRKEY) {
        let buf = pins.createBuffer(8);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x06;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x04;
        buf[5] = irKey;
        buf[6] = 0xFF;
        buf[7] = 0;
        serial.writeBuffer(buf);
    }
    /**
    * Let Qdee send ir remote-control data from phone
    */
    //% weight=87 blockId=qdee_send_remote_phone_data block="Let Qdee send phone ir remote-control|key %data|"
    //% subcategory=IR
    export function qdee_send_remote_phone_data(data: number) {
        let irKey: IRKEY;
        switch (data) {
            case 0:irKey = IRKEY.R0;break;
            case 1:irKey = IRKEY.R1;break;
            case 2:irKey = IRKEY.R2;break;
            case 3:irKey = IRKEY.R3;break;
            case 4:irKey = IRKEY.R4;break;
            case 5:irKey = IRKEY.R5;break;
            case 6:irKey = IRKEY.R6;break;
            case 7: irKey = IRKEY.R7; break;
            case 8: irKey = IRKEY.R8; break;
            case 9: irKey = IRKEY.R9; break;
            case 10: irKey = IRKEY.ADD; break;
            case 11:irKey = IRKEY.MINUS;break;
        }
        let buf = pins.createBuffer(8);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x06;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x04;
        buf[5] = irKey;
        buf[6] = 0xFF;
        buf[7] = 0;
        serial.writeBuffer(buf);
    }

    /**
    * Set ir enter learn mode
    * @param num number of the learn code in 1-10. eg: 1
    */
    //% weight=86 blockId=qdee_ir_learn_mode block="Set ir enter learning mode,code number(1~10) %num|"   
    //% num.min=1 num.max=10    
    //% subcategory=IR
    export function qdee_ir_learn_mode(num: number) {
        if (num < 1 || num > 10)
            return;
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x03;
        buf[5] = num - 1;
        serial.writeBuffer(buf);
    }
    /**
    * Let Qdee send ir learn data
    * @param num number of the learn code in 1-10. eg: 1
    */
    //% weight=85 blockId=qdee_send_learn_data block="Let Qdee send ir learning code,code|number(1~10) %num|"
    //% num.min=1 num.max=10  
    //% subcategory=IR
    export function qdee_send_learn_data(num: number) {
        if (num < 1 || num > 10)
            return;
        let buf = pins.createBuffer(8);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x06;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x04;
        buf[5] = 0xFF;
        buf[6] = 0xFF;
        buf[7] = num - 1;
        serial.writeBuffer(buf);
    }


    /**
    * Get the volume level detected by the sound sensor, range 0 to 255
    */
    //% weight=84 blockId=qdee_getSoundVolume block="Sound volume"
    //% subcategory=Sensor
    export function qdee_getSoundVolume(): number {
        return volume;
    }

    /**
     *  Get Qdee current voltage,the unit is mV
    */
    //% weight=83 blockId=qdee_getBatVoltage block="Get Qdee current voltage (mV)"
    //% subcategory=Sensor
    export function qdee_getBatVoltage(): number {
        return currentVoltage;
    }

    const APDS9960_I2C_ADDR = 0x39;
    const APDS9960_ID_1 = 0xA8;
    const APDS9960_ID_2 = 0x9C;
    /* APDS-9960 register addresses */
    const APDS9960_ENABLE = 0x80;
    const APDS9960_ATIME = 0x81;
    const APDS9960_WTIME = 0x83;
    const APDS9960_AILTL = 0x84;
    const APDS9960_AILTH = 0x85;
    const APDS9960_AIHTL = 0x86;
    const APDS9960_AIHTH = 0x87;
    const APDS9960_PERS = 0x8C;
    const APDS9960_CONFIG1 = 0x8D;
    const APDS9960_PPULSE = 0x8E;
    const APDS9960_CONTROL = 0x8F;
    const APDS9960_CONFIG2 = 0x90;
    const APDS9960_ID = 0x92;
    const APDS9960_STATUS = 0x93;
    const APDS9960_CDATAL = 0x94;
    const APDS9960_CDATAH = 0x95;
    const APDS9960_RDATAL = 0x96;
    const APDS9960_RDATAH = 0x97;
    const APDS9960_GDATAL = 0x98;
    const APDS9960_GDATAH = 0x99;
    const APDS9960_BDATAL = 0x9A;
    const APDS9960_BDATAH = 0x9B;
    const APDS9960_POFFSET_UR = 0x9D;
    const APDS9960_POFFSET_DL = 0x9E;
    const APDS9960_CONFIG3 = 0x9F;
    /* LED Drive values */
    const LED_DRIVE_100MA = 0;

    /* ALS Gain (AGAIN) values */
    const AGAIN_4X = 1;

    /* Default values */
    const DEFAULT_ATIME = 219;    // 103ms
    const DEFAULT_WTIME = 246;    // 27ms
    const DEFAULT_PROX_PPULSE = 0x87;    // 16us, 8 pulses
    const DEFAULT_POFFSET_UR = 0;       // 0 offset
    const DEFAULT_POFFSET_DL = 0;       // 0 offset      
    const DEFAULT_CONFIG1 = 0x60;    // No 12x wait (WTIME) factor
    const DEFAULT_AILT = 0xFFFF;  // Force interrupt for calibration
    const DEFAULT_AIHT = 0;
    const DEFAULT_PERS = 0x11;    // 2 consecutive prox or ALS for int.
    const DEFAULT_CONFIG2 = 0x01;    // No saturation interrupts or LED boost  
    const DEFAULT_CONFIG3 = 0;       // Enable all photodiodes, no SAI
    const DEFAULT_LDRIVE = LED_DRIVE_100MA;
    const DEFAULT_AGAIN = AGAIN_4X;

    const OFF = 0;
    const POWER = 0;
    const AMBIENT_LIGHT = 1;
    const ALL = 7;

    const red_wb = 2500;
    const green_wb = 3900;
    const blue_wb = 5820;

    function i2cwrite(reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf);
    }

    function i2cread(reg: number): number {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE);
        return val;
    }


    function InitColor(): boolean {
        let id = i2cread(APDS9960_ID);
        //  serial.writeLine("id:")
        //  serial.writeNumber(id); 
        setMode(ALL, OFF);
        i2cwrite(APDS9960_ATIME, DEFAULT_ATIME);
        i2cwrite(APDS9960_WTIME, DEFAULT_WTIME);
        i2cwrite(APDS9960_PPULSE, DEFAULT_PROX_PPULSE);
        i2cwrite(APDS9960_POFFSET_UR, DEFAULT_POFFSET_UR);
        i2cwrite(APDS9960_POFFSET_DL, DEFAULT_POFFSET_DL);
        i2cwrite(APDS9960_CONFIG1, DEFAULT_CONFIG1);
        setLEDDrive(DEFAULT_LDRIVE);
        setAmbientLightGain(DEFAULT_AGAIN);
        setLightIntLowThreshold(DEFAULT_AILT);
        setLightIntHighThreshold(DEFAULT_AIHT);
        i2cwrite(APDS9960_PERS, DEFAULT_PERS);
        i2cwrite(APDS9960_CONFIG2, DEFAULT_CONFIG2);
        i2cwrite(APDS9960_CONFIG3, DEFAULT_CONFIG3);
        return true;
    }

    function setLEDDrive(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        /* Set bits in register to given value */
        drive &= 0b00000011;
        drive = drive << 6;
        val &= 0b00111111;
        val |= drive;
        i2cwrite(APDS9960_CONTROL, val);
    }

    function setLightIntLowThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AILTL, val_low);
        i2cwrite(APDS9960_AILTH, val_high);
    }

    function setLightIntHighThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AIHTL, val_low);
        i2cwrite(APDS9960_AIHTH, val_high);
    }

    function rgb2hue(r: number, g: number, b: number): number {
        let max = Math.max(r, Math.max(g, b))
        let min = Math.min(r, Math.min(g, b))
        let c = max - min;
        let hue = 0;
        let segment = 0;
        let shift = 0;
        if (c == 0)
            return 0;
        if ((r > g) && (r > b)) {
            segment = (60.0 * (g - b)) / c;
            if (segment < 0)
                hue = segment + 360;
        }
        else if ((g > b) && (g > r)) {
            segment = (60.0 * (b - r)) / c;
            hue = segment + 120;
        }
        else if ((b > g) && (b > r)) {
            segment = (60.0 * (r - g)) / c;
            hue = segment + 240;
        }
        return hue;
    }

    function setMode(mode: number, enable: number) {
        let reg_val = getMode();
        /* Change bit(s) in ENABLE register */
        enable = enable & 0x01;
        if (mode >= 0 && mode <= 6) {
            if (enable > 0) {
                reg_val |= (1 << mode);
            }
            else {
                //reg_val &= ~(1 << mode);
                reg_val &= (0xff - (1 << mode));
            }
        }
        else if (mode == ALL) {
            if (enable > 0) {
                reg_val = 0x7F;
            }
            else {
                reg_val = 0x00;
            }
        }
        i2cwrite(APDS9960_ENABLE, reg_val);
    }

    function getMode(): number {
        let enable_value = i2cread(APDS9960_ENABLE);
        return enable_value;
    }

    function enableLightSensor(interrupts: boolean) {
        setAmbientLightGain(DEFAULT_AGAIN);
        if (interrupts) {
            setAmbientLightIntEnable(1);
        }
        else {
            setAmbientLightIntEnable(0);
        }
        enablePower();
        setMode(AMBIENT_LIGHT, 1);
    }

    function setAmbientLightGain(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        /* Set bits in register to given value */
        drive &= 0b00000011;
        val &= 0b11111100;
        val |= drive;
        i2cwrite(APDS9960_CONTROL, val);
    }

    function enablePower() {
        setMode(POWER, 1);
    }

    function setAmbientLightIntEnable(enable: number) {
        let val = i2cread(APDS9960_ENABLE);
        /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 4;
        val &= 0b11101111;
        val |= enable;
        i2cwrite(APDS9960_ENABLE, val);
    }
    /**
     * Initialize the color sensor,please execute at boot time
     */
    //% weight=82 blockGap=20 blockId=qdee_init_colorSensor block="Initialize color sensor port at %port"
    //% subcategory=Sensor
    export function qdee_init_colorSensor(port: colorSensorPort) {
        InitColor();
        enableLightSensor(true);
        control.waitMicros(100);
    }

    /**
	 *  Color sensor return the color.
	 */
    //% weight=81 blockId=qdee_checkCurrentColor block="Current color %color"
    //% subcategory=Sensor
    export function qdee_checkCurrentColor(color: qdee_Colors): boolean {
        let c = i2cread(APDS9960_CDATAL) + i2cread(APDS9960_CDATAH) * 256;
        let r = i2cread(APDS9960_RDATAL) + i2cread(APDS9960_RDATAH) * 256;
        let g = i2cread(APDS9960_GDATAL) + i2cread(APDS9960_GDATAH) * 256;
        let b = i2cread(APDS9960_BDATAL) + i2cread(APDS9960_BDATAH) * 256;

        if (r > red_wb)
            r = red_wb;
        if (g > green_wb)
            g = green_wb;
        if (b > blue_wb)
            b = blue_wb;

        r = Math.round(mapRGB(r, 0, red_wb, 0, 255));
        g = Math.round(mapRGB(g, 0, green_wb, 0, 255));
        b = Math.round(mapRGB(b, 0, blue_wb, 0, 255));

        let hsv = rgb2hue(r, g, b)
        let t = qdee_Colors.None;
        if (c > 2200 && r > 65 && g > 65 && b > 65) {
            t = qdee_Colors.White;
        }
        else if (c > 800) {
            if (hsv < 8 || hsv > 350)
                t = qdee_Colors.Red;
            else if (hsv > 60 && hsv < 170) {
                t = qdee_Colors.Green;
            }
            else if (hsv > 210 && hsv < 230) {
                t = qdee_Colors.Blue;
            }
        }
        else if (c > 200 && r > 10 && g > 7 && b > 7 && r < 16.5 && g < 15 && b < 14) {
            t = qdee_Colors.Black;
        }
        return (color == t);
    }
    /**
	 *  Color sensor return the color.
	 */
    //% weight=80 blockId=qdee_get_color block="color %color value(0~255)"
    //% subcategory=Sensor
    export function qdee_get_color(color: qdee_RGBValue): number {
        let value = 0;
        let r = i2cread(APDS9960_RDATAL) + i2cread(APDS9960_RDATAH) * 256;
        let g = i2cread(APDS9960_GDATAL) + i2cread(APDS9960_GDATAH) * 256;
        let b = i2cread(APDS9960_BDATAL) + i2cread(APDS9960_BDATAH) * 256;

        if (r > red_wb)
            r = red_wb;
        if (g > green_wb)
            g = green_wb;
        if (b > blue_wb)
            b = blue_wb;

        r = Math.round(mapRGB(r, 0, red_wb, 0, 255));
        g = Math.round(mapRGB(g, 0, green_wb, 0, 255));
        b = Math.round(mapRGB(b, 0, blue_wb, 0, 255));

        switch (color)
        {
            case qdee_RGBValue.Red:
                value = r;
                break;
            
            case qdee_RGBValue.Green:
                value = g;
                break;
            
            case qdee_RGBValue.Blue:
                value = b;
                break;
        }
        return value;
    }
    /**
    * Get the condition of the line follower sensor
    */
    //% weight=79 blockGap=20 blockId=qdee_readLineFollowerStatus block="Line follower status|port %port|%status"
    //% subcategory=Sensor
    export function qdee_readLineFollowerStatus(port: lineFollowPort, status: qdee_lineFollower): boolean {
        let s1 = 0;
        let s2 = 0;

        s1 = pins.analogReadPin(AnalogPin.P1);
        s2 = pins.analogReadPin(AnalogPin.P2);
        s1 = s1 * 255 / 1023;
        s2 = s2 * 255 / 1023;

        if (s1 < 100)
            s1 = 0;
        else
            s1 = 1;
        if (s2 < 100)
            s2 = 0;
        else
            s2 = 1;

        let s = ((1 & s1) << 1) | s2;
        if (s == status) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Get the line follower sensor port ad value
     */
    //% weight=78 blockId=qdee_lineSensorValue block="Get line follower sensor|port %port|%sensor|ad value"
   //% subcategory=Sensor
    export function qdee_lineSensorValue(port: lineFollowPort, sensor: LineFollowerSensor): number {
        let s1 = 0;
        let s2 = 0;
        s1 = pins.analogReadPin(AnalogPin.P1);
        s2 = pins.analogReadPin(AnalogPin.P2);
        s1 = s1 * 255 / 1023;
        s2 = s2 * 255 / 1023;

        if (sensor == LineFollowerSensor.LFSensor_1) {
            return 255 - s1;
        }
        else {
            return 255 - s2;
        }

    }
    /**
    * Get the condition of the touch button,press return 1,or return 0
    */
    //% weight=76 blockGap=20 blockId=qdee_touchButton block=" Touch button|port %port|is pressed"    
    //% subcategory=Sensor    
    export function qdee_touchButton(port: touchKeyPort): boolean {
        let status: boolean = false;
        switch (port) {
            case touchKeyPort.port1:
                pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
                status = !pins.digitalReadPin(DigitalPin.P1);
                break;
            case touchKeyPort.port2:
                pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                status = !pins.digitalReadPin(DigitalPin.P13);
                break;
            case touchKeyPort.port3:
                pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
                status = !pins.digitalReadPin(DigitalPin.P16);
                break;
            case touchKeyPort.port6:
                status = !PA6;
                break;
            case touchKeyPort.port8:
                status = !PB0;
                break;
        }
        return status;
    }

    let distanceBak = 0;
    /**
     * Get the distance of ultrasonic detection to the obstacle 
     */
    //% weight=74 blockId=qdee_ultrasonic  block="Ultrasonic|port %port|distance(cm)"
    //% subcategory=Sensor    
    export function qdee_ultrasonic(port: ultrasonicPort): number {
        let trigPin: DigitalPin = DigitalPin.P1;
        let echoPin: DigitalPin = DigitalPin.P2;
        let distance: number = 0;
        let d: number = 0;
        if (versionNum == -1)//没有读取到版本号
        {
            switch (port) {
                case ultrasonicPort.port1:
                    trigPin = DigitalPin.P1;
                    break;
                case ultrasonicPort.port2:
                    trigPin = DigitalPin.P13;
                    break;
            }
            pins.setPull(trigPin, PinPullMode.PullNone);
            pins.digitalWritePin(trigPin, 0);
            control.waitMicros(2);
            pins.digitalWritePin(trigPin, 1);
            control.waitMicros(10);
            pins.digitalWritePin(trigPin, 0);

            d = pins.pulseIn(trigPin, PulseValue.High, 15000);
            distance = d;
            // filter timeout spikes
            if (distance == 0 || distance >= 13920) {
                distance = distanceBak;
            }
            else
                distanceBak = d;

        }
        else {
            switch (port) {
                case ultrasonicPort.port1:
                    trigPin = DigitalPin.P1;
                    echoPin = DigitalPin.P2;
                    break;
                case ultrasonicPort.port2:
                    trigPin = DigitalPin.P13;
                    echoPin = DigitalPin.P14;
                    break;
            }
            pins.setPull(echoPin, PinPullMode.PullNone);
            pins.setPull(trigPin, PinPullMode.PullNone);

            // send pulse
            pins.digitalWritePin(trigPin, 0);
            control.waitMicros(2);
            pins.digitalWritePin(trigPin, 1);
            control.waitMicros(10);
            pins.digitalWritePin(trigPin, 0);
            // read pulse
            d = pins.pulseIn(echoPin, PulseValue.High, 15000);
            distance = d;
            // filter timeout spikes
            if (distance == 0 || distance >= 13920) {
                distance = distanceBak;
            }
            else
                distanceBak = d;
        }

        return Math.round(distance * 10 / 6 / 58);
    }
    /**
    * Get the ad value of the knob moudule
    */
    //% weight=73 blockId=qdee_getKnobValue blockGap=50 block="Get knob|port %port|value(0~255)"
    //% subcategory=Sensor    
    export function qdee_getKnobValue(port: knobPort): number {
        let adValue = 0;
        switch (port) {
            case knobPort.port1:
                adValue = pins.analogReadPin(AnalogPin.P1);
                adValue = adValue * 255 / 1023;
                break;
            case knobPort.port6:
                adValue = PA6_ad;
                break;
            case knobPort.port8:
                adValue = PB0_ad;
                break;
        }
        return adValue;
    }
    /**
     * Get light level
     */
    //% weight=72 blockId=qdee_getLightLevel block="Get|%port|light level(0~255)"
    //% subcategory=Sensor   
    export function qdee_getLightLevel(port: LightPort): number
    {
        let value = 0;
        switch (port)
        {
            case LightPort.port1:
                value = pins.analogReadPin(AnalogPin.P1);
                value = mapRGB(value, 0, 1023, 0, 255);
                break;
            
            case LightPort.port6:
                value = PA6_ad;
                break;
            
            case LightPort.port8:
                value = PB0_ad;
                break;
        }
        return Math.round(255-value);
     }
    /**
     * Get soil humidity
     */
    //% weight=71 blockId="qdee_getsoilhumi" block="Qdee|%port|get soil humidity"
    //% subcategory=Sensor 
     export function qdee_getsoilhumi(port: LightPort): number {
         let value: number = 0;
         if (port == LightPort.port1) {
             value = pins.analogReadPin(AnalogPin.P1);
             value = mapRGB(value, 0, 1023, 0, 100);
         }
         else if (port == LightPort.port6) {
             value = PA6_ad;
             value = mapRGB(value, 0, 255, 0, 100);
         }
         else if (port == LightPort.port8) {
             value = PB0_ad;
             value = mapRGB(value, 0, 255, 0, 100);
         }
         return Math.round(value);
    }
    
    let ATH10_I2C_ADDR = 0x38;
    function temp_i2cwrite(value: number): number {
         let buf = pins.createBuffer(3);
         buf[0] = value >> 8;
         buf[1] = value & 0xff;
         buf[2] = 0;
         basic.pause(80);
         let rvalue = pins.i2cWriteBuffer(ATH10_I2C_ADDR, buf);
         // serial.writeString("writeback:");
         // serial.writeNumber(rvalue);
         // serial.writeLine("");
         return rvalue;
     }
 
     function temp_i2cread(bytes: number): Buffer {
         let val = pins.i2cReadBuffer(ATH10_I2C_ADDR, bytes);
         return val;
    }
    
    function qdee_initTempHumiSensor(): boolean {
        for (let i = 0; i < 10; i++) {
            if (qdee_GetInitStatus()) {
                return true;
            }
            basic.pause(500);
        }
       // serial.writeString("init erro");
        return false;
    }

    function qdee_GetInitStatus(): boolean {
        temp_i2cwrite(0xe108);
        let value = temp_i2cread(1);
        if ((value[0] & 0x68) == 0x08)
            return true;
        else
            return false;
    }

    function qdee_getAc() {
        temp_i2cwrite(0xac33);
        basic.pause(100)
        let value = temp_i2cread(1);
        for (let i = 0; i < 100; i++) {
            if ((value[0] & 0x80) != 0x80) {
                basic.pause(20)
            }
            else
                break;
        }
    }

    function readTempHumi(select: Temp_humi): number {
        while (!qdee_GetInitStatus()) {
            basic.pause(30);
        }
        qdee_getAc();
        let buf = temp_i2cread(6);
        if (buf.length != 6) {
            return 0;
        }
        let humiValue: number = 0;
        humiValue = (humiValue | buf[1]) << 8;
        humiValue = (humiValue | buf[2]) << 8;
        humiValue = humiValue | buf[3];
        humiValue = humiValue >> 4;

        let tempValue: number = 0;
        tempValue = (tempValue | buf[3]) << 8;
        tempValue = (tempValue | buf[4]) << 8;
        tempValue = tempValue | buf[5];
        tempValue = tempValue & 0xfffff;

        if (select == Temp_humi.Temperature) {
            tempValue = tempValue * 200 * 10 / 1024 / 1024 - 500;
            return Math.round(tempValue);
        }
        else {
            humiValue = humiValue * 1000 / 1024 / 1024;
            return Math.round(humiValue);
        }
    }

    /**
   * Qdee iot initialization, please execute at boot time
  */
    //% weight=70 blockGap=20 blockId=qdee_temphumi_Init block="Initialize Qdee temperature and humidity sensor %port"
    //% subcategory=Sensor     
    export function qdee_temphumi_Init(port: TempSensorPort) {
        qdee_initTempHumiSensor();
    }

    /**
      * Get sensor temperature and humidity
      */
    //% weight=69 blockId="qdee_gettemperature" block="Qdee get %select"
    //% subcategory=Sensor  
    export function qdee_gettemperature(select: Temp_humi): number {
        return readTempHumi(select);
    }

    function mapRGB(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    function qdee_show_expressions(type: number) {
        switch (type) {
            case 0:
                basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `);
            break;
            case 1:basic.showIcon(IconNames.Heart);break;
            case 2:basic.showIcon(IconNames.Yes);break;
            case 3:basic.showIcon(IconNames.No);break;
            case 4: basic.showIcon(IconNames.Happy);break;
            case 5:basic.showIcon(IconNames.Sad);break;
            case 6:basic.showIcon(IconNames.Angry)break;
            case 7:
                basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
            break;
            case 8:
                basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
            break;

            case 9:
                basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
            break;

            case 10:
                basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
            break;
        }
    }    

    function littleStarMelody(): string[] {
        return ["C4:4", "C4:4", "G4:4", "G4:4", "A4:4", "A4:4", "G4:4", "F4:4", "F4:4", "E4:4", "E4:4", "D4:4", "D4:4", "C4:4", "G4:4", "G4:4", "F4:4", "F4:4", "E4:4", "E4:4", "D4:4", "G4:4", "G4:4", "F4:4", "F4:4", "E4:4", "E4:4", "D4:4", "C4:4", "C4:4", "G4:4", "G4:4", "A4:4", "A4:4", "G4:4", "F4:4", "F4:4", "E4:4", "E4:4", "D4:4", "D4:4", "C4:4"];
    }

    function qdee_playMusic(num: Qdee_MusicName) {
        switch (num)
        {
            case Qdee_MusicName.Stop:
                music.playTone(262, music.beat(BeatFraction.Sixteenth));
                break;
            case Qdee_MusicName.Dadadum:
                music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once);
                break;
            
            case Qdee_MusicName.Star:
                music.beginMelody(littleStarMelody(), MelodyOptions.Once)
                break;       
            
            case Qdee_MusicName.Ring:
                music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
                break;          
            
            case Qdee_MusicName.Birth:
                music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
                break; 
            
            case Qdee_MusicName.Wedding:
                music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
                break; 
            
            case Qdee_MusicName.JumpUp:
                music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
                break; 
            
            case Qdee_MusicName.JumpDown:
                music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
                break; 
            
            case Qdee_MusicName.PowerUp:
                music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
                break; 
            
            case Qdee_MusicName.PowerDown:
                music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
                break; 
        }
    }
    
    /**
         * Do someting when Qdee receive remote-control code
         * @param code the ir key button that needs to be pressed
         * @param body code to run when event is raised
         */
    //% weight=68 blockId=onQdeeGetCmd block="on Qdee get|%code|Command"
    //% subcategory=IoT    
    export function onQdeeGetCmd(code: Qdee_IOTCmdType, body: Action) {
        control.onEvent(MESSAGE_IOT_HEAD, code, body);
    }
    /**
     * Send sensor data 
     * 
     */
    //% weight=66 blockId="qdee_sendSensorData" block="Send|%cmd|sensor data %data"
    //% subcategory=IoT     
    export function qdee_sendSensorData(cmd: Qdee_IOTCmdType, data: number) {
        let cmdStr: string;
        switch (cmd) {
            case Qdee_IOTCmdType.LED_COLOR:
                cmdStr = "A";
                break;
            case Qdee_IOTCmdType.BUZZER:
                cmdStr = "B";
                break;
            case Qdee_IOTCmdType.SHOW:
                cmdStr = "C";
                break;
            case Qdee_IOTCmdType.SHAKE:
                cmdStr = "D";
                break;  
            case Qdee_IOTCmdType.IR_REMOTE:
                cmdStr = "E";
                break;  
            case Qdee_IOTCmdType.SOUND:
                cmdStr = "F";
                break;
            case Qdee_IOTCmdType.LIGHT:
                cmdStr = "G";
                break;
            case Qdee_IOTCmdType.TEMP:
                cmdStr = "H";
                break;
            case Qdee_IOTCmdType.HUMI:
                cmdStr = "I";
                break;
            case Qdee_IOTCmdType.SOIL_HUMI:
                cmdStr = "J";
                break;
            case Qdee_IOTCmdType.ULTRASONIC:
                cmdStr = "K";
                break;
            case Qdee_IOTCmdType.WATERPUMP_ON:
            case Qdee_IOTCmdType.WATERPUMP_OFF:
                cmdStr = "L";
                break;
        }
        cmdStr += data.toString();
        cmdStr += "$";

        let buf = pins.createBuffer(cmdStr.length + 5);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = (cmdStr.length + 3) & 0xff;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x09;
        for (let i = 0; i < cmdStr.length; i++) {
            buf[5 + i] = cmdStr.charCodeAt(i);
        }
        serial.writeBuffer(buf);
    }
}
