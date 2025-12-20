# 📊 Working with AWS Lambda – Sales Analysis Report

## 📌 Introduction
In this lab, I deployed and configured an **AWS Lambda–based serverless solution** that automatically generates a **daily sales analysis report**.  
The solution retrieves data from a MySQL database hosted on an Amazon EC2 LAMP instance, processes it using AWS Lambda, and delivers the report via **Amazon SNS email notifications**.

This project focuses on **SysOps and serverless configuration tasks**, allowing me to gain hands-on experience with IAM roles, Lambda layers, VPC networking, scheduled automation, and monitoring.

---

## 🧩 Lab Overview
The solution is built using the following AWS services:

- **AWS Lambda** – Serverless compute
- **Amazon EC2 (LAMP stack)** – Hosts the café MySQL database
- **AWS Systems Manager Parameter Store** – Secure storage of database credentials
- **Amazon SNS** – Email notifications
- **Amazon EventBridge (CloudWatch Events)** – Scheduled execution
- **AWS IAM** – Permissions and access control
- **Amazon CloudWatch Logs** – Monitoring and troubleshooting

---

## 🏗 Architecture Diagram

📷 **Image Placeholder:** `architecture-diagram.png`

![Architecture Diagram](architecture-diagram.png)

---

## 🔁 Solution Flow
1. An EventBridge rule triggers the report Lambda function on a schedule.
2. The Lambda function retrieves database credentials from Parameter Store.
3. It invokes a second Lambda function to extract sales data.
4. Sales data is formatted into a report.
5. The report is published to an SNS topic.
6. SNS sends the report to the administrator via email.

---

## 🎯 Objectives
By completing this lab, I was able to:

- Apply correct **IAM policies** for Lambda-to-service communication
- Create and use a **Lambda Layer** for external Python dependencies
- Configure Lambda functions to access resources inside a **VPC**
- Automate reporting using **EventBridge schedules**
- Send notifications using **Amazon SNS**
- Troubleshoot Lambda issues using **CloudWatch Logs**

---

## 🛠 AWS Services Used
- AWS Lambda  
- Amazon EC2  
- AWS Systems Manager  
- Amazon SNS  
- Amazon EventBridge  
- AWS IAM  
- Amazon CloudWatch  

---

## 🧪 Implementation Steps

### 1️⃣ IAM Role Configuration
I reviewed and verified IAM roles required by each Lambda function to ensure least-privilege access.

📷 **Image Placeholder:** `iam-roles.png`

---

### 2️⃣ Lambda Layer Creation
I created a Lambda layer to package the **PyMySQL** library so it could be reused across functions.

📷 **Image Placeholder:** `lambda-layer-pymysql.png`

---

### 3️⃣ Data Extractor Lambda Function
I deployed a Lambda function responsible for:
- Connecting to the MySQL database
- Running analytical queries
- Returning aggregated sales data

📷 **Image Placeholder:** `data-extractor-lambda.png`

---

### 4️⃣ Troubleshooting & Testing
The function initially timed out due to a missing **MySQL (3306) inbound rule** on the database security group.  
After correcting the security group configuration, the function executed successfully.

📷 **Image Placeholder:** `lambda-timeout-error.png`  
📷 **Image Placeholder:** `lambda-success-logs.png`

---

### 5️⃣ SNS Topic & Email Subscription
I created an SNS topic and subscribed an email address to receive the daily sales reports.

📷 **Image Placeholder:** `sns-topic.png`  
📷 **Image Placeholder:** `email-confirmation.png`

---

### 6️⃣ Sales Report Lambda Function
I created the main Lambda function using the **AWS CLI**.  
This function orchestrates the reporting process and publishes results to SNS.

📷 **Image Placeholder:** `sales-report-lambda.png`

---

### 7️⃣ Scheduled Automation
I configured an **EventBridge cron rule** to trigger the report **Monday through Saturday at 8 PM (UTC)**.

📷 **Image Placeholder:** `eventbridge-schedule.png`

---

## 📧 Sample Email Output

📷 **Image Placeholder:** `sales-report-email.png`

---

## ✅ Final Outcome
This lab demonstrates a fully automated **serverless reporting solution** built on AWS.  
It strengthened my understanding of **Lambda orchestration, IAM permissions, VPC networking, monitoring, and event-driven automation**.

---

## 📌 Conclusion
This project shows how AWS serverless services can be combined to automate real-world business workflows efficiently and securely without managing servers.

---

📁 **Status:** Completed  
⏱ **Duration:** ~60 minutes  
☁ **Category:** AWS Lambda | Serverless | SysOps  
