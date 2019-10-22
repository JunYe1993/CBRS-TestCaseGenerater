var data = [
     {"Id":"6.1.4.1.1","CBSD":"O","DP":"X","Condition":"C1","Title":"WINNF.FT.C.REG.1","Content":"Multi-Step registration"},
     {"Id":"6.1.4.1.2","CBSD":"X","DP":"O","Condition":"C1","Title":"WINNF.FT.D.REG.2","Content":"Domain Proxy Multi-Step registration"},
     {"Id":"6.1.4.1.3","CBSD":"O","DP":"X","Condition":"C2","Title":"WINNF.FT.C.REG.3","Content":"Single-Step registration for Category A CBSD"},
     {"Id":"6.1.4.1.4","CBSD":"X","DP":"O","Condition":"C2","Title":"WINNF.FT.D.REG.4","Content":"Domain Proxy Single-Step registration for Cat A CBSD"},
     {"Id":"6.1.4.1.5","CBSD":"O","DP":"X","Condition":"C3","Title":"WINNF.FT.C.REG.5","Content":"Single-Step registration for CBSD with CPI signed data"},
     {"Id":"6.1.4.1.6","CBSD":"X","DP":"O","Condition":"C3","Title":"WINNF.FT.D.REG.6","Content":"Domain Proxy Single-Step registration for CBSD with CPI signed data"},
     {"Id":"6.1.4.1.7","CBSD":"O","DP":"O","Condition":"C6","Title":"WINNF.FT.C.REG.7","Content":"Registration due to change of an installation parameter"},
     {"Id":"6.1.4.2.1","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.REG.8","Content":"Missing Required parameters (responseCode 102)"},
     {"Id":"6.1.4.2.2","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.REG.9","Content":"Domain Proxy Missing Required parameters (responseCode 102)"},
     {"Id":"6.1.4.2.3","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.REG.10","Content":"Pending registration (responseCode 200)"},
     {"Id":"6.1.4.2.4","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.REG.11","Content":"Domain Proxy Pending registration (responseCode 200)"},
     {"Id":"6.1.4.2.5","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.REG.12","Content":"Invalid parameter (responseCode 103)"},
     {"Id":"6.1.4.2.6","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.REG.13","Content":"Domain Proxy Invalid parameters (responseCode 103)"},
     {"Id":"6.1.4.2.7","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.REG.14","Content":"Blacklisted CBSD (responseCode 101)"},
     {"Id":"6.1.4.2.8","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.REG.15","Content":"Domain Proxy Blacklisted CBSD (responseCode 101)"},
     {"Id":"6.1.4.2.9","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.REG.16","Content":"Unsupported SAS protocol version (responseCode 100)"},
     {"Id":"6.1.4.2.10","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.REG.17","Content":"Domain Proxy Unsupported SAS protocol version responseCode 100)"},
     {"Id":"6.1.4.2.11","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.REG.18","Content":"Group Error (responseCode 201)"},
     {"Id":"6.1.4.2.12","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.REG.19","Content":"Domain Proxy Group Error (responseCode 201)"},
     {"Id":"6.1.4.3.1","CBSD":"O","DP":"O","Condition":"C2","Title":"WINNF.FT.C.REG.20","Content":"Category A CBSD location update"},
     {"Id":"6.3.4.2.1","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.GRA.1","Content":"Unsuccessful Grant responseCode=400 (INTERFERENCE)"},
     {"Id":"6.3.4.2.2","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.GRA.2","Content":"Unsuccessful Grant responseCode=401 (GRANT_CONFLICT)"},
     {"Id":"6.4.4.1.1","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.HBT.1","Content":"Heartbeat Success Case (first Heartbeat Response)"},
     {"Id":"6.4.4.1.2","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.HBT.2","Content":"Domain Proxy Heartbeat Success Case (first Heartbeat Response)"},
     {"Id":"6.4.4.2.1","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.HBT.3","Content":"Heartbeat responseCode=105 (DEREGISTER)"},
     {"Id":"6.4.4.2.2","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.HBT.4","Content":"Heartbeat responseCode=500 (TERMINATED_GRANT)"},
     {"Id":"6.4.4.2.3","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.HBT.5","Content":"Heartbeat responseCode=501 (SUSPENDED_GRANT) in First Heartbeat Response"},
     {"Id":"6.4.4.2.4","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.HBT.6","Content":"Heartbeat responseCode=501 (SUSPENDED_GRANT) in Subsequent Heartbeat Response"},
     {"Id":"6.4.4.2.5","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.HBT.7","Content":"Heartbeat responseCode=502 (UNSYNC_OP_PARAM)"},
     {"Id":"6.4.4.2.6","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.HBT.8","Content":"Domain Proxy Heartbeat responseCode=500 (TEMINATED_GRANT)"},
     {"Id":"6.4.4.3.1","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.HBT.9","Content":"Heartbeat Response Absent (First Heartbeat)"},
     {"Id":"6.4.4.3.2","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.HBT.10","Content":"Heartbeat Response Absent (Subsequent Heartbeat)"},
     {"Id":"6.4.4.4.1","CBSD":"O","DP":"O","Condition":"O","Title":"WINNF.FT.C.HBT.11","Content":"Successful Grant Renewal in Heartbeat Test Case"},
     {"Id":"6.5.4.2.1","CBSD":"O","DP":"X","Condition":"C4","Title":"WINNF.FT.C.MES.1","Content":"Registration Response contains measReportConfig"},
     {"Id":"6.5.4.2.2","CBSD":"X","DP":"O","Condition":"C4","Title":"WINNF.FT.D.MES.2","Content":"Domain Proxy Registration Response contains measReportConfig"},
     {"Id":"6.5.4.2.3","CBSD":"O","DP":"O","Condition":"C5","Title":"WINNF.FT.C.MES.3","Content":"Grant Response contains measReportConfig"},
     {"Id":"6.5.4.2.4","CBSD":"O","DP":"X","Condition":"C5","Title":"WINNF.FT.C.MES.4","Content":"Heartbeat Response contains measReportConfig"},
     {"Id":"6.5.4.2.5","CBSD":"X","DP":"O","Condition":"C5","Title":"WINNF.FT.D.MES.5","Content":"Domain Proxy Heartbeat Response contains measReportConfig"},
     {"Id":"6.6.4.1.1","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.RLQ.1","Content":"Successful Relinquishment"},
     {"Id":"6.6.4.1.2","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.RLQ.2","Content":"Domain Proxy Successful Relinquishment"},
     {"Id":"6.6.4.2.1","CBSD":"O","DP":"X","Condition":"O","Title":"WINNF.FT.C.RLQ.3","Content":"Unsuccessful Relinquishment, responseCode=102"},
     {"Id":"6.6.4.2.2","CBSD":"X","DP":"O","Condition":"O","Title":"WINNF.FT.D.RLQ.4","Content":"Domain Proxy Unsuccessful Relinquishment, responseCode=102"},
     {"Id":"6.6.4.3.1","CBSD":"O","DP":"X","Condition":"O","Title":"WINNF.FT.C.RLQ.5","Content":"Unsuccessful Relinquishment, responseCode=103"},
     {"Id":"6.6.4.3.2","CBSD":"X","DP":"O","Condition":"O","Title":"WINNF.FT.D.RLQ.6","Content":"Domain Proxy Unsuccessful Relinquishment, responseCode=103"},
     {"Id":"6.7.4.1.1","CBSD":"O","DP":"X","Condition":"M","Title":"WINNF.FT.C.DRG.1","Content":"Successful Deregistration"},
     {"Id":"6.7.4.1.2","CBSD":"X","DP":"O","Condition":"M","Title":"WINNF.FT.D.DRG.2","Content":"Domain Proxy Successful Deregistration"},
     {"Id":"6.7.4.2.1","CBSD":"O","DP":"X","Condition":"O","Title":"WINNF.FT.C.DRG.3","Content":"Deregistration responseCode=102"},
     {"Id":"6.7.4.2.2","CBSD":"X","DP":"O","Condition":"O","Title":"WINNF.FT.D.DRG.4","Content":"Domain Proxy Deregistration responseCode=102"},
     {"Id":"6.7.4.3.1","CBSD":"O","DP":"O","Condition":"O","Title":"WINNF.FT.C.DRG.5","Content":"Deregistration responseCode=103"},
     {"Id":"6.8.4.1.1","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.SCS.1","Content":"Successful TLS connection between UUT and SAS Test Harness"},
     {"Id":"6.8.4.2.1","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.SCS.2","Content":"TLS failure due to revoked certificate"},
     {"Id":"6.8.4.2.2","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.SCS.3","Content":"TLS failure due to expired server certificate"},
     {"Id":"6.8.4.2.3","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.SCS.4","Content":"TLS failure when SAS Test Harness certificate is issue by unknown CA"},
     {"Id":"6.8.4.2.4","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.FT.C.SCS.5","Content":"TLS failure when certificate at the SAS Test Harness is corrupted"},
     {"Id":"7.1.4.1.1","CBSD":"O","DP":"O","Condition":"M","Title":"WINNF.PT.C.HBT","Content":"UUT RF Transmit Power Measurement"}
]