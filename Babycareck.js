#!name=Babycare
#!desc=Babycare
#!category=羊毛

[Script]
Babycare_获取cookie = type=http-response,pattern=^https:\/\/api\.bckid\.com\.cn\/operation\/front\/bonus\/userSign,script-path=https://raw.githubusercontent.com/AZ-Y/scriptable/main/Babycarerw.js,requires-body=1,max-size=0
Babycare = type=cron,cronexp="8 8,16 * * *",script-path=https://raw.githubusercontent.com/AZ-Y/scriptable/main/Babycarerw.js,script-update-interval=0,timeout=3600,wake-system=1,engine=jsc

[MITM]
hostname = %APPEND% api.bckid.com.cn
