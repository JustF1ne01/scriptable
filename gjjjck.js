#!name=顾家家居
#!desc=顾家家居
#!category=羊毛

[Script]
囯乐酱酒_获取cookie = type=http-response,pattern=^https:\/\/mc\.kukahome\.com\/club-server\/member\/insertMemberLogin,script-path=https://raw.githubusercontent.com/AZ-Y/scriptable/main/gjjjrw.js,requires-body=1,max-size=0
囯乐酱酒 = type=cron,cronexp="8 8,16 * * *",script-path=https://raw.githubusercontent.com/AZ-Y/scriptable/main/gjjjrw.js,script-update-interval=0,timeout=3600,wake-system=1,engine=jsc

[MITM]
hostname =  mc.kukahome.com
