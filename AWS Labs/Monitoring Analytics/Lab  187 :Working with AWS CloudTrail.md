# AWS CloudTrail: Security Investigation and Incident Response

![AWS](https://img.shields.io/badge/AWS-CloudTrail-orange?style=for-the-badge&logo=amazon-aws)
![Security](https://img.shields.io/badge/Security-Incident_Response-red?style=for-the-badge&logo=security)
![Athena](https://img.shields.io/badge/Athena-Query_Service-blue?style=for-the-badge&logo=amazon-aws)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📋 Project Overview

This comprehensive hands-on lab demonstrates real-world security incident investigation using AWS CloudTrail. The project simulates a security breach where a café website is hacked, requiring forensic analysis of CloudTrail logs to identify the attacker, understand the attack vector, and implement remediation measures. The lab showcases multiple investigation techniques including command-line analysis, AWS CLI queries, and SQL-based investigation using Amazon Athena.

## 🎯 Objectives

By completing this lab, the following capabilities were demonstrated:

- ✅ Configure CloudTrail trails for comprehensive audit logging
- ✅ Investigate security incidents using CloudTrail logs
- ✅ Analyze logs using Linux grep utility and AWS CLI
- ✅ Import CloudTrail data into Amazon Athena
- ✅ Execute SQL queries in Athena to filter log entries
- ✅ Identify unauthorized access and security vulnerabilities
- ✅ Perform incident response and remediation
- ✅ Remove malicious users from AWS accounts
- ✅ Secure EC2 instances against future attacks
- ✅ Implement security best practices



## 🏗️ Architecture Overview

### Security Investigation Infrastructure

```
┌──────────────────────────────────────────────────────────────────────┐
│                    AWS Account - Security Incident                   │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │              BEFORE INCIDENT                                   │ │
│  │                                                                 │ │
│  │  ┌──────────────────────────────────────────────────────────┐ │ │
│  │  │   EC2 Instance: Café Web Server                          │ │ │
│  │  │   Public IP: X.X.X.X                                     │ │ │
│  │  │   OS User: ec2-user                                      │ │ │
│  │  │                                                           │ │ │
│  │  │   Security Group: WebSecurityGroup                       │ │ │
│  │  │   Inbound Rules:                                         │ │ │
│  │  │   • Port 80 (HTTP) - 0.0.0.0/0 ✅                       │ │ │
│  │  │   • Port 22 (SSH) - Your IP/32 ✅                       │ │ │
│  │  │                                                           │ │ │
│  │  │   Website Status: ✅ Normal                              │ │ │
│  │  │   SSH Config: Password Auth = No ✅                      │ │ │
│  │  └──────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                 │                                     │
│                                 │ CloudTrail Enabled                  │
│                                 ▼                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │         AWS CloudTrail: "monitor" Trail                        │ │
│  │                                                                 │ │
│  │  Configuration:                                                │ │
│  │  • Trail Name: monitor                                         │ │
│  │  • Region: Multi-region                                        │ │
│  │  • Log Storage: S3 bucket (monitoring####)                    │ │
│  │  • Encryption: AWS KMS (custom key)                           │ │
│  │  • Log Format: JSON                                            │ │
│  │  • Log Delivery: ~5 minute intervals                          │ │
│  │                                                                 │ │
│  │  Captured Events:                                              │ │
│  │  • Management events (API calls)                               │ │
│  │  • User identity information                                   │ │
│  │  • Source IP addresses                                         │ │
│  │  • Timestamp data                                              │ │
│  │  • Request parameters                                          │ │
│  │  • Response elements                                           │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                 │                                     │
│                                 │ ⚠️ ATTACK OCCURS ⚠️                │
│                                 ▼                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │              AFTER INCIDENT (Compromised)                      │ │
│  │                                                                 │ │
│  │  ┌──────────────────────────────────────────────────────────┐ │ │
│  │  │   EC2 Instance: Café Web Server                          │ │ │
│  │  │   Attacker IP: [IDENTIFIED IN INVESTIGATION]             │ │ │
│  │  │   OS Users:                                              │ │ │
│  │  │   • ec2-user ✅ (legitimate)                             │ │ │
│  │  │   • chaos-user ❌ (malicious - active login!)            │ │ │
│  │  │                                                           │ │ │
│  │  │   Security Group: WebSecurityGroup                       │ │ │
│  │  │   Inbound Rules:                                         │ │ │
│  │  │   • Port 80 (HTTP) - 0.0.0.0/0 ✅                       │ │ │
│  │  │   • Port 22 (SSH) - Your IP/32 ✅                       │ │ │
│  │  │   • Port 22 (SSH) - 0.0.0.0/0 ❌ (UNAUTHORIZED!)        │ │ │
│  │  │                                                           │ │ │
│  │  │   Website Status: ❌ HACKED (inappropriate image!)       │ │ │
│  │  │   SSH Config: Password Auth = Yes ❌ (MODIFIED!)        │ │ │
│  │  │                                                           │ │ │
│  │  │   Files Modified:                                        │ │ │
│  │  │   • /etc/ssh/sshd_config (PasswordAuthentication=yes)   │ │ │
│  │  │   • /var/www/html/cafe/images/Coffee-and-Pastries.jpg   │ │ │
│  │  └──────────────────────────────────────────────────────────┘ │ │
│  │                                                                 │ │
│  │  ┌──────────────────────────────────────────────────────────┐ │ │
│  │  │   IAM User: chaos ❌ (Malicious User)                    │ │ │
│  │  │   Actions Performed:                                     │ │ │
│  │  │   • AuthorizeSecurityGroupIngress                        │ │ │
│  │  │   • Opened SSH to 0.0.0.0/0                              │ │ │
│  │  │   • Used programmatic access (AWS CLI)                   │ │ │
│  │  └──────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                 │                                     │
│                                 │ Logs Stored                         │
│                                 ▼                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │         S3 Bucket: monitoring####                              │ │
│  │                                                                 │ │
│  │  └── AWSLogs/                                                  │ │
│  │      └── [account-id]/                                         │ │
│  │          └── CloudTrail/                                       │ │
│  │              └── us-west-2/                                    │ │
│  │                  └── 2024/01/15/                               │ │
│  │                      ├── log-file-1.json.gz                    │ │
│  │                      ├── log-file-2.json.gz                    │ │
│  │                      └── log-file-3.json.gz                    │ │
│  │                                                                 │ │
│  │  Log Entry Structure (JSON):                                   │ │
│  │  {                                                              │ │
│  │    "eventVersion": "1.08",                                     │ │
│  │    "userIdentity": { "userName": "chaos" },                   │ │
│  │    "eventTime": "2024-01-15T14:32:17Z",                       │ │
│  │    "eventSource": "ec2.amazonaws.com",                         │ │
│  │    "eventName": "AuthorizeSecurityGroupIngress",              │ │
│  │    "sourceIPAddress": "X.X.X.X",                              │ │
│  │    "requestParameters": { ... }                                │ │
│  │  }                                                              │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                 │                                     │
│         ┌───────────────────────┴────────────────────┐               │
│         │                                              │               │
│         ▼                                              ▼               │
│  ┌──────────────────────────┐        ┌─────────────────────────────┐ │
│  │  Investigation Method 1  │        │   Investigation Method 2    │ │
│  │  Linux grep Utility      │        │   AWS CLI CloudTrail        │ │
│  │                          │        │   Commands                  │ │
│  │  • SSH to web server     │        │                             │ │
│  │  • Download logs from S3 │        │  aws cloudtrail             │ │
│  │  • Extract .gz files     │        │    lookup-events            │ │
│  │  • grep for patterns     │        │                             │ │
│  │  • Filter by IP, event   │        │  Filter by:                 │ │
│  │                          │        │  • EventName                │ │
│  │  Pros: Direct access     │        │  • ResourceType             │ │
│  │  Cons: Manual, tedious   │        │  • UserName                 │ │
│  └──────────────────────────┘        └─────────────────────────────┘ │
│                                 │                                     │
│                                 ▼                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │           Investigation Method 3 (BEST)                        │ │
│  │           Amazon Athena - SQL Query Service                    │ │
│  │                                                                 │ │
│  │  ┌──────────────────────────────────────────────────────────┐ │ │
│  │  │  Step 1: Create Athena Table from CloudTrail Logs       │ │ │
│  │  │                                                           │ │ │
│  │  │  CREATE EXTERNAL TABLE cloudtrail_logs_monitoring####   │ │ │
│  │  │  (                                                        │ │ │
│  │  │    eventversion STRING,                                  │ │ │
│  │  │    useridentity STRUCT<userName:STRING>,                 │ │ │
│  │  │    eventtime STRING,                                     │ │ │
│  │  │    eventsource STRING,                                   │ │ │
│  │  │    eventname STRING,                                     │ │ │
│  │  │    sourceipaddress STRING,                               │ │ │
│  │  │    requestparameters STRING                              │ │ │
│  │  │  )                                                        │ │ │
│  │  │  LOCATION 's3://monitoring####/AWSLogs/...'              │ │ │
│  │  └──────────────────────────────────────────────────────────┘ │ │
│  │                              │                                  │ │
│  │                              ▼                                  │ │
│  │  ┌──────────────────────────────────────────────────────────┐ │ │
│  │  │  Step 2: SQL Queries to Identify Attacker               │ │ │
│  │  │                                                           │ │ │
│  │  │  SELECT useridentity.userName,                           │ │ │
│  │  │         eventtime,                                       │ │ │
│  │  │         eventsource,                                     │ │ │
│  │  │         eventname,                                       │ │ │
│  │  │         sourceipaddress                                  │ │ │
│  │  │  FROM cloudtrail_logs_monitoring####                     │ │ │
│  │  │  WHERE eventsource = 'ec2.amazonaws.com'                 │ │ │
│  │  │    AND eventname LIKE '%Security%'                       │ │ │
│  │  │                                                           │ │ │
│  │  │  Results:                                                │ │ │
│  │  │  • User: chaos                                           │ │ │
│  │  │  • Event: AuthorizeSecurityGroupIngress                  │ │ │
│  │  │  • Time: [Exact timestamp]                               │ │ │
│  │  │  • Source IP: [Attacker's IP]                            │ │ │
│  │  │  • Method: Programmatic (AWS CLI)                        │ │ │
│  │  └──────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                 │                                     │
│                                 │ Attacker Identified!                │
│                                 ▼                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │              REMEDIATION ACTIONS                               │ │
│  │                                                                 │ │
│  │  1. ❌ Kill active SSH session (chaos-user)                    │ │
│  │  2. ❌ Delete OS user (chaos-user)                             │ │
│  │  3. 🔒 Fix SSH config (PasswordAuthentication=no)              │ │
│  │  4. 🔒 Remove malicious security group rule (SSH 0.0.0.0/0)   │ │
│  │  5. ✅ Restore website image file                              │ │
│  │  6. ❌ Delete IAM user (chaos)                                 │ │
│  │  7. ✅ Verify no other suspicious access                       │ │
│  │  8. 📊 Continue CloudTrail monitoring                          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                 │                                     │
│                                 ▼                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │              AFTER REMEDIATION (Secured)                       │ │
│  │                                                                 │ │
│  │  ✅ Website Restored                                            │ │
│  │  ✅ Malicious User Removed                                      │ │
│  │  ✅ SSH Hardened                                                │ │
│  │  ✅ Security Group Fixed                                        │ │
│  │  ✅ CloudTrail Active for Future Monitoring                     │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘

INCIDENT TIMELINE:
═══════════════════════════════════════════════════════════════════════
T-0:00  → Initial state: Website normal, security proper
T+0:01  → CloudTrail "monitor" trail created
T+0:05  → ATTACK: chaos user modifies security group via AWS CLI
T+0:06  → Attacker enables SSH password authentication
T+0:07  → Attacker creates chaos-user OS account
T+0:08  → Attacker logs in via SSH, modifies website
T+0:10  → Investigation begins using CloudTrail logs
T+0:45  → Attacker identified using Athena SQL queries
T+0:50  → Remediation: Remove attacker, fix vulnerabilities
T+0:60  → Website restored, security hardened
T+0:75  → Post-incident review, continued monitoring
```

## 📸 Screenshots Documentation

### Task 1: Initial Security Group Configuration

**Screenshot 1: EC2 Console Navigation**
- *Caption: Navigating to EC2 service from AWS Console*
- File: `01-ec2-console-navigation.png`

**Screenshot 2: Instances List**
- *Caption: Café Web Server instance visible in instances list*
- File: `02-instances-list.png`

**Screenshot 3: Select Café Web Server**
- *Caption: Selecting Café Web Server (WebSecurityGroup) instance*
- File: `03-select-cafe-webserver.png`

**Screenshot 4: Security Tab**
- *Caption: Clicking Security tab to view security groups*
- File: `04-security-tab.png`

**Screenshot 5: Security Group Link**
- *Caption: Clicking sg-xxxxxxxxxx security group link*
- File: `05-security-group-link.png`

**Screenshot 6: Inbound Rules - Original**
- *Caption: Original inbound rule showing only HTTP (port 80) access*
- File: `06-inbound-rules-original.png`

**Screenshot 7: Edit Inbound Rules**
- *Caption: Clicking "Edit inbound rules" button*
- File: `07-edit-inbound-rules.png`

**Screenshot 8: Add SSH Rule**
- *Caption: Clicking "Add rule" to create new inbound rule*
- File: `08-add-ssh-rule.png`

**Screenshot 9: SSH Rule Configuration**
- *Caption: Configuring SSH rule - Type: SSH, Port: 22, Source: My IP*
- File: `09-ssh-rule-config.png`

**Screenshot 10: Verify My IP CIDR**
- *Caption: Confirming source shows specific IP with /32 (not 0.0.0.0/0)*
- File: `10-verify-my-ip-cidr.png`

**Screenshot 11: Save Rules**
- *Caption: Clicking "Save rules" button*
- File: `11-save-rules.png`

**Screenshot 12: Rules Saved Successfully**
- *Caption: Success message showing rules updated*
- File: `12-rules-saved-success.png`

**Screenshot 13: Copy Public IPv4 Address**
- *Caption: Copying Public IPv4 address from instance details*
- File: `13-copy-public-ip.png`

**Screenshot 14: Café Website - Normal**
- *Caption: Website displayed normally with appropriate bakery images*
- File: `14-cafe-website-normal.png`

**Screenshot 15: Website Images Normal**
- *Caption: Close-up of normal website photos (coffee, pastries)*
- File: `15-website-images-normal.png`

### Task 2: CloudTrail Configuration and Hack Discovery

#### Task 2.1: Create CloudTrail Log

**Screenshot 16: CloudTrail Console**
- *Caption: Navigating to CloudTrail service*
- File: `16-cloudtrail-console.png`

**Screenshot 17: Trails Navigation**
- *Caption: Clicking "Trails" in left navigation pane*
- File: `17-trails-navigation.png`

**Screenshot 18: Create Trail Button**
- *Caption: Clicking "Create trail" button*
- File: `18-create-trail-button.png`

**Screenshot 19: Trail Name Configuration**
- *Caption: Entering trail name as "monitor" (critical for lab)*
- File: `19-trail-name-monitor.png`

**Screenshot 20: Create New S3 Bucket**
- *Caption: Selecting "Create a new S3 bucket" option*
- File: `20-create-new-s3-bucket.png`

**Screenshot 21: S3 Bucket Name**
- *Caption: Entering bucket name "monitoring####" with random digits*
- File: `21-s3-bucket-name.png`

**Screenshot 22: KMS Key Configuration**
- *Caption: Entering AWS KMS alias (initials-KMS)*
- File: `22-kms-key-config.png`

**Screenshot 23: Trail Configuration Next**
- *Caption: Clicking "Next" on trail configuration page*
- File: `23-trail-config-next.png`

**Screenshot 24: Choose Log Events**
- *Caption: Log events page - clicking "Next" with defaults*
- File: `24-choose-log-events.png`

**Screenshot 25: Review and Create**
- *Caption: Review page showing all trail configuration details*
- File: `25-review-and-create.png`

**Screenshot 26: CREATE TABLE SQL**
- *Caption: Analyzing CREATE TABLE statement structure*
- File: `26-create-table-sql.png`

**Screenshot 27: Trail Created**
- *Caption: Success - "monitor" trail created and active*
- File: `27-trail-created.png`

**Screenshot 28: Trail Status**
- *Caption: Trail showing "Logging" status*
- File: `28-trail-status.png`

#### Task 2.2: Discover the Hack

**Screenshot 29: Refresh Café Website**
- *Caption: Refreshing website after 1 minute (Shift + Refresh)*
- File: `29-refresh-cafe-website.png`

**Screenshot 30: Website HACKED!**
- *Caption: Website showing inappropriate/suspicious image - HACKED!*
- File: `30-website-hacked.png`

**Screenshot 31: Inappropriate Image**
- *Caption: Close-up of hacked image (not bakery-appropriate)*
- File: `31-inappropriate-image.png`

**Screenshot 32: EC2 Instance Details Check**
- *Caption: Returning to EC2 console to investigate instance*
- File: `32-ec2-instance-check.png`

**Screenshot 33: Security Group Review**
- *Caption: Clicking security group to review rules again*
- File: `33-security-group-review.png`

**Screenshot 34: Inbound Rules - MODIFIED!**
- *Caption: NEW unauthorized rule visible: SSH from 0.0.0.0/0!*
- File: `34-inbound-rules-modified.png`

**Screenshot 35: Suspicious SSH Rule**
- *Caption: Highlighting malicious SSH rule allowing access from anywhere*
- File: `35-suspicious-ssh-rule.png`

**Screenshot 36: Investigation Begins**
- *Caption: Need to find who added this security hole!*
- File: `36-investigation-begins.png`

### Task 3: Analyzing Logs with grep

#### Task 3.1 & 3.2: SSH Connection

**Screenshot 37: Details Panel - Show**
- *Caption: Clicking "Details" and "Show" to reveal credentials*
- File: `37-details-panel-show.png`

**Screenshot 38: Download PEM/PPK**
- *Caption: Downloading SSH key file (labsuser.pem or .ppk)*
- File: `38-download-ssh-key.png`

**Screenshot 39: Note Public IP**
- *Caption: Copying PublicIP address for SSH connection*
- File: `39-note-public-ip.png`

**Screenshot 40: PuTTY Configuration (Windows)**
- *Caption: Configuring PuTTY session with instance IP*
- File: `40-putty-config.png`

**Screenshot 41: Terminal SSH Command (Mac/Linux)**
- *Caption: Running 'ssh -i labsuser.pem ec2-user@<ip>' command*
- File: `41-terminal-ssh-command.png`

**Screenshot 42: SSH Connection Established**
- *Caption: Successfully connected to Café Web Server via SSH*
- File: `42-ssh-connected.png`

**Screenshot 43: EC2 User Prompt**
- *Caption: Terminal showing ec2-user@ip prompt*
- File: `43-ec2-user-prompt.png`

#### Task 3.3: Download CloudTrail Logs

**Screenshot 44: Create ctraillogs Directory**
- *Caption: Running 'mkdir ctraillogs' command*
- File: `44-create-ctraillogs-dir.png`

**Screenshot 45: Change to Directory**
- *Caption: Running 'cd ctraillogs' command*
- File: `45-cd-ctraillogs.png`

**Screenshot 46: List S3 Buckets**
- *Caption: Running 'aws s3 ls' to find monitoring bucket*
- File: `46-list-s3-buckets.png`

**Screenshot 47: S3 Bucket Output**
- *Caption: Output showing monitoring#### bucket name*
- File: `47-s3-bucket-output.png`

**Screenshot 48: Download Logs Command**
- *Caption: Running 'aws s3 cp s3://monitoring####/ . --recursive'*
- File: `48-download-logs-command.png`

**Screenshot 49: Logs Downloading**
- *Caption: CloudTrail log files downloading from S3*
- File: `49-logs-downloading.png`

**Screenshot 50: Download Complete**
- *Caption: All log files successfully downloaded*
- File: `50-download-complete.png`

**Screenshot 51: Navigate to Logs Directory**
- *Caption: Using 'cd' and 'ls' to find subdirectory with logs*
- File: `51-navigate-logs-dir.png`

**Screenshot 52: List Compressed Logs**
- *Caption: Running 'ls' showing .json.gz files*
- File: `52-list-compressed-logs.png`

**Screenshot 53: Extract Logs**
- *Caption: Running 'gunzip *.gz' to extract log files*
- File: `53-extract-logs.png`

**Screenshot 54: List Extracted Logs**
- *Caption: Running 'ls' showing .json files (uncompressed)*
- File: `54-list-extracted-logs.png`

#### Task 3.4: Analyze with grep

**Screenshot 55: Cat JSON File**
- *Caption: Running 'cat <filename.json>' to view raw log*
- File: `55-cat-json-file.png`

**Screenshot 56: Raw JSON Output**
- *Caption: Unformatted JSON log entry (difficult to read)*
- File: `56-raw-json-output.png`

**Screenshot 57: Format with Python**
- *Caption: Running 'cat <file> | python -m json.tool' for formatting*
- File: `57-format-with-python.png`

**Screenshot 58: Formatted JSON**
- *Caption: Readable JSON showing log entry structure*
- File: `58-formatted-json.png`

**Screenshot 59: Log Entry Structure**
- *Caption: Highlighting key fields (eventName, sourceIPAddress, userIdentity)*
- File: `59-log-entry-structure.png`

**Screenshot 60: Set WebServerIP Variable**
- *Caption: Running 'ip=<WebServerIP>' to set variable*
- File: `60-set-webserver-ip-var.png`

**Screenshot 61: Grep sourceIPAddress**
- *Caption: For loop grepping sourceIPAddress across all logs*
- File: `61-grep-sourceip.png`

**Screenshot 62: Source IP Results**
- *Caption: Output showing log entries matching web server IP*
- File: `62-source-ip-results.png`

**Screenshot 63: Grep eventName**
- *Caption: For loop grepping eventName across all logs*
- File: `63-grep-eventname.png`

**Screenshot 64: Event Names Output**
- *Caption: List of various events (Describe, List, Update actions)*
- File: `64-event-names-output.png`

**Screenshot 65: Update Actions Visible**
- *Caption: Highlighting "Update" and "Authorize" events (suspicious)*
- File: `65-update-actions-visible.png`

#### Task 3.5: AWS CLI CloudTrail Commands

**Screenshot 66: CloudTrail CLI Reference**
- *Caption: Viewing AWS CLI CloudTrail documentation page*
- File: `66-cloudtrail-cli-reference.png`

**Screenshot 67: lookup-events Documentation**
- *Caption: Reading lookup-events command details*
- File: `67-lookup-events-docs.png`

**Screenshot 68: Console Login Query**
- *Caption: Running lookup-events for ConsoleLogin*
- File: `68-console-login-query.png`

**Screenshot 69: Console Login Results**
- *Caption: Output showing no suspicious console logins*
- File: `69-console-login-results.png`

**Screenshot 70: Security Group Events**
- *Caption: Running lookup-events for AWS::EC2::SecurityGroup resource type*
- File: `70-security-group-events.png`

**Screenshot 71: SG Events Output**
- *Caption: Many security group events returned (need filtering)*
- File: `71-sg-events-output.png`

**Screenshot 72: Get Security Group ID**
- *Caption: Running commands to find web server security group ID*
- File: `72-get-sg-id.png`

**Screenshot 73: Echo Security Group ID**
- *Caption: Output showing sg-xxxxxxxxxx ID*
- File: `73-echo-sg-id.png`

**Screenshot 74: Filter by SG ID**
- *Caption: Piping lookup-events output through grep with SG ID*
- File: `74-filter-by-sg-id.png`

**Screenshot 75: Filtered SG Results**
- *Caption: Narrowed results showing only web server SG events*
- File: `75-filtered-sg-results.png`

### Task 4: Athena Investigation

#### Task 4.1: Create Athena Table

**Screenshot 76: CloudTrail Event History**
- *Caption: Navigating to Event history in CloudTrail console*
- File: `76-cloudtrail-event-history.png`

**Screenshot 77: Event History Page**
- *Caption: Event history interface with filter options*
- File: `77-event-history-page.png`

**Screenshot 78: Create Athena Table Button**
- *Caption: Clicking "Create Athena table" button*
- File: `78-create-athena-table-button.png`

**Screenshot 79: Select S3 Storage Location**
- *Caption
