# AWS CloudTrail Lab – Café Website Investigation (Simplified)

## Overview
This lab teaches you how to use AWS CloudTrail to track account activity and identify who hacked the Café website.

---

## Architecture Diagram
<img width="884" height="430" alt="image" src="https://github.com/user-attachments/assets/bc609547-a029-4db8-9098-5b93d3e01846" />


---

## Task 1 – Modify Security Group & View Website
1. Open **EC2 → Instances**  
2. Select **Café Web Server**  
3. Edit inbound rules → Add:  
   - Type: SSH  
   - Port: 22  
   - Source: My IP (/32)  
4. Visit the website:  
   `http://<WebServerIP>/cafe/`

<img width="1356" height="564" alt="image" src="https://github.com/user-attachments/assets/f730078f-c37f-4c5d-a63e-fbc5caaaab75" />

<img width="1359" height="562" alt="image" src="https://github.com/user-attachments/assets/7d220ab1-fdba-4afb-95e6-b5c4c471276d" />

<img width="1361" height="558" alt="image" src="https://github.com/user-attachments/assets/0cc31d83-1558-402b-9f0d-1f1e5902f4d4" />

<img width="830" height="497" alt="image" src="https://github.com/user-attachments/assets/7e17f895-050f-48fe-848d-5ce1995cad06" />





---

## Task 2 – Create CloudTrail Trail & Observe Hack
1. Go to **CloudTrail → Trails → Create trail**  
2. Trail name: `monitor`  
3. S3 bucket: `monitoring####`  
4. Refresh the website and observe the hacked image.

<img width="1348" height="557" alt="image" src="https://github.com/user-attachments/assets/a92dd78f-6bb2-4e41-875f-336204bf132d" />


---

## Task 3 – Analyze Logs Using Grep & AWS CLI
### Download Logs
```bash
mkdir ctraillogs
cd ctraillogs
aws s3 cp s3://<monitoring####>/ . --recursive
gunzip *.gz
```
<img width="651" height="410" alt="image" src="https://github.com/user-attachments/assets/adb31780-39ff-4c06-95c6-68c5454e52a9" />

<img width="1303" height="249" alt="image" src="https://github.com/user-attachments/assets/3e479c70-b298-4871-be60-2e6247958bef" />

<img width="646" height="418" alt="image" src="https://github.com/user-attachments/assets/843e55b0-cce4-48fa-ab0c-353eef413b90" />




### Search for Events
```bash
for i in $(ls); do cat $i | python -m json.tool | grep eventName ; done
```

### Look Up Security Group Events
```bash
aws cloudtrail lookup-events \
--lookup-attributes AttributeKey=ResourceType,AttributeValue=AWS::EC2::SecurityGroup
```

📷 **Placeholder:** `./images/task3.png`

---

## Task 4 – Analyze Logs in Athena
### Example SQL Queries
```sql
SELECT *
FROM cloudtrail_logs_monitoring####
LIMIT 5;
```

```sql
SELECT useridentity.userName, eventtime, eventsource, eventname
FROM cloudtrail_logs_monitoring####
LIMIT 30;
```

📷 **Placeholder:** `./images/athena.png`

---

## Task 5 – Remove Hacker & Secure System
### Check Logged-In Users
```bash
sudo aureport --auth
who
```

### Remove Hacker User & Process
```bash
sudo userdel -r chaos-user
sudo kill -9 <PID>
```

### Disable Password SSH Access
```bash
sudo vi /etc/ssh/sshd_config
sudo service sshd restart
```

### Restore Website Image
```bash
cd /var/www/html/cafe/images/
sudo mv Coffee-and-Pastries.backup Coffee-and-Pastries.jpg
```

📷 **Placeholder:** `./images/task5.png`

---

## Summary
- CloudTrail created  
- Logs analyzed with grep, AWS CLI, and Athena  
- Hacker identified and removed  
- Website restored and SSH secured  

---

## Placeholder Image List
Place these in `./images/`:

```
architecture.png
task1.png
task2.png
task3.png
athena.png
task5.png
```
