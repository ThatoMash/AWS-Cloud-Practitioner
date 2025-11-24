# AWS VPC: Build Your VPC and Launch a Web Server

## Project Overview

This lab demonstrates the creation of a **custom AWS VPC** with public and private subnets, security groups, route tables, and launching a functional **EC2 web server**.

---

## Lab Objectives

After completing this lab, you will be able to:

- Create a Virtual Private Cloud (VPC)  
- Configure public and private subnets across multiple Availability Zones  
- Set up Internet Gateway and NAT Gateway  
- Configure route tables for network traffic management  
- Create and configure security groups  
- Launch and configure an EC2 instance as a web server  
- Deploy a web application on the EC2 instance  

<img width="872" height="470" alt="image" src="https://github.com/user-attachments/assets/950f2fa8-1e51-4870-984f-f1dafde20d66" />


---

## 1. VPC Creation

- **VPC CIDR:** 10.0.0.0/16  
- **Subnets:** 2 Public, 2 Private across 2 AZs  
- **Internet Gateway:** Enabled for public access  
- **NAT Gateway:** Enabled for private subnet internet access  

<img width="1352" height="561" alt="image" src="https://github.com/user-attachments/assets/2cfe1f8d-925c-4e1f-8b6f-88d7668914f5" />



---

## 2. Subnet Configuration

| Subnet Name | Type    | CIDR Block  | Availability Zone |
|-------------|---------|------------|-----------------|
| Public Subnet 1  | Public  | 10.0.0.0/24 | us-west-2a |
| Private Subnet 1 | Private | 10.0.1.0/24 | us-west-2a |
| Public Subnet 2  | Public  | 10.0.2.0/24 | us-west-2b |
| Private Subnet 2 | Private | 10.0.3.0/24 | us-west-2b |

<img width="1121" height="547" alt="image" src="https://github.com/user-attachments/assets/d07227e3-dc76-4176-8c28-135ff1bc69f9" />


---

## 3. Route Table Configuration

- **Public Route Table:** Routes 0.0.0.0/0 → Internet Gateway  
- **Private Route Table:** Routes 0.0.0.0/0 → NAT Gateway  

<img width="1084" height="553" alt="image" src="https://github.com/user-attachments/assets/b5b3680b-7d70-4b54-8e8c-60478df4f4b1" />

<img width="1123" height="561" alt="image" src="https://github.com/user-attachments/assets/0e5d82e7-9c98-4867-b346-48d7bc3206e4" />



---

## 4. Security Group

- **Name:** Web Security Group  
- **Inbound Rule:** HTTP (Port 80) from anywhere (0.0.0.0/0)  

<img width="1340" height="551" alt="image" src="https://github.com/user-attachments/assets/a9af3706-7066-48da-94a4-b120241cc5fe" />


---

## 5. EC2 Instance & Web Server

- **Instance Type:** t3.micro  
- **AMI:** Amazon Linux 2  
- **User Data Script:** Installs Apache web server and PHP, downloads lab files  

```bash
#!/bin/bash
yum install -y httpd mysql php
wget https://aws-tc-largeobjects.s3.us-west-2.amazonaws.com/CUR-TF-100-RESTRT-1/267-lab-NF-build-vpc-web-server/s3/lab-app.zip
unzip lab-app.zip -d /var/www/html/
chkconfig httpd on
service httpd start
