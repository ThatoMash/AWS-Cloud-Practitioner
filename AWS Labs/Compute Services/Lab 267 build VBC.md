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

**Duration:** ~45 minutes

---

## 1. VPC Creation

- **VPC CIDR:** 10.0.0.0/16  
- **Subnets:** 2 Public, 2 Private across 2 AZs  
- **Internet Gateway:** Enabled for public access  
- **NAT Gateway:** Enabled for private subnet internet access  

![VPC Creation](screenshots/01-vpc-creation.png)  
*TODO: Add screenshot of VPC creation*

---

## 2. Subnet Configuration

| Subnet Name | Type    | CIDR Block  | Availability Zone |
|-------------|---------|------------|-----------------|
| Public Subnet 1  | Public  | 10.0.0.0/24 | us-west-2a |
| Private Subnet 1 | Private | 10.0.1.0/24 | us-west-2a |
| Public Subnet 2  | Public  | 10.0.2.0/24 | us-west-2b |
| Private Subnet 2 | Private | 10.0.3.0/24 | us-west-2b |

![Subnets Overview](screenshots/02-subnets.png)  
*TODO: Add screenshot of subnets*

---

## 3. Route Table Configuration

- **Public Route Table:** Routes 0.0.0.0/0 → Internet Gateway  
- **Private Route Table:** Routes 0.0.0.0/0 → NAT Gateway  

![Route Tables](screenshots/03-route-tables.png)  
*TODO: Add screenshot of route tables*

---

## 4. Security Group

- **Name:** Web Security Group  
- **Inbound Rule:** HTTP (Port 80) from anywhere (0.0.0.0/0)  

![Security Group](screenshots/04-security-group.png)  
*TODO: Add screenshot of security group configuration*

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
