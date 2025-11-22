# AWS VPC: Build Your VPC and Launch a Web Server

![AWS](https://img.shields.io/badge/AWS-VPC-orange?style=for-the-badge&logo=amazon-aws)
![EC2](https://img.shields.io/badge/EC2-Instance-green?style=for-the-badge&logo=amazon-aws)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📋 Project Overview

This hands-on lab demonstrates the creation of a custom Virtual Private Cloud (VPC) infrastructure on AWS for a Fortune 100 customer. The project involves building a complete networking environment from scratch, including subnets, security groups, route tables, and deploying a functional web server on an EC2 instance.

## 🎯 Objectives

Upon completion of this lab, the following skills were demonstrated:

- ✅ Create a Virtual Private Cloud (VPC)
- ✅ Configure public and private subnets across multiple Availability Zones
- ✅ Set up Internet Gateway and NAT Gateway
- ✅ Configure route tables for network traffic management
- ✅ Create and configure security groups
- ✅ Launch and configure an EC2 instance as a web server
- ✅ Deploy a web application on the EC2 instance

## ⏱️ Duration

**Approximately 45 minutes**

## 🏗️ Architecture Overview

The final architecture includes:

- **1 VPC** (10.0.0.0/16)
- **4 Subnets** (2 Public, 2 Private) across 2 Availability Zones
- **Internet Gateway** for public internet access
- **NAT Gateway** for private subnet internet connectivity
- **2 Route Tables** (Public and Private)
- **Security Group** with HTTP access rules
- **EC2 Instance** (t3.micro) running Apache web server

```
┌─────────────────────────────────────────────────────────────────┐
│                          Lab VPC (10.0.0.0/16)                  │
│                                                                   │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │   AZ us-west-2a     │         │   AZ us-west-2b     │       │
│  │                     │         │                     │       │
│  │  ┌───────────────┐  │         │  ┌───────────────┐  │       │
│  │  │ Public Sub 1  │  │         │  │ Public Sub 2  │  │       │
│  │  │ 10.0.0.0/24   │  │         │  │ 10.0.2.0/24   │  │       │
│  │  │               │  │         │  │  [Web Server] │  │       │
│  │  └───────────────┘  │         │  └───────────────┘  │       │
│  │                     │         │                     │       │
│  │  ┌───────────────┐  │         │  ┌───────────────┐  │       │
│  │  │ Private Sub 1 │  │         │  │ Private Sub 2 │  │       │
│  │  │ 10.0.1.0/24   │  │         │  │ 10.0.3.0/24   │  │       │
│  │  └───────────────┘  │         │  └───────────────┘  │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                   │
│         [Internet Gateway]  ←→  [NAT Gateway]                   │
└─────────────────────────────────────────────────────────────────┘
```

## 📸 Screenshots Documentation

### Task 1: VPC Creation

**Screenshot 1: VPC Configuration**
- *Caption: VPC Wizard configuration showing VPC and more option selected with IPv4 CIDR block 10.0.0.0/16*
- File: `01-vpc-configuration.png`

**Screenshot 2: Subnet CIDR Configuration**
- *Caption: Customized subnet CIDR blocks for public and private subnets*
- File: `02-subnet-cidr-configuration.png`

**Screenshot 3: VPC Creation Success**
- *Caption: Successfully created Lab VPC with all components*
- File: `03-vpc-creation-success.png`

**Screenshot 4: VPC Details**
- *Caption: Lab VPC details showing resource map and configuration*
- File: `04-vpc-details.png`

### Task 2: Additional Subnets

**Screenshot 5: Public Subnet 2 Creation**
- *Caption: Creating Public Subnet 2 with CIDR 10.0.2.0/24*
- File: `05-public-subnet-2-creation.png`

**Screenshot 6: Private Subnet 2 Creation**
- *Caption: Creating Private Subnet 2 with CIDR 10.0.3.0/24*
- File: `06-private-subnet-2-creation.png`

**Screenshot 7: All Subnets Overview**
- *Caption: Complete list of all 4 subnets in Lab VPC*
- File: `07-all-subnets-overview.png`

### Task 3: Route Table Configuration

**Screenshot 8: Public Route Table**
- *Caption: Public Route Table showing routes and subnet associations*
- File: `08-public-route-table.png`

**Screenshot 9: Public Subnet Associations**
- *Caption: Both public subnets associated with Public Route Table*
- File: `09-public-subnet-associations.png`

**Screenshot 10: Private Route Table**
- *Caption: Private Route Table with NAT Gateway route*
- File: `10-private-route-table.png`

**Screenshot 11: Private Subnet Associations**
- *Caption: Both private subnets associated with Private Route Table*
- File: `11-private-subnet-associations.png`

### Task 4: Security Group

**Screenshot 12: Security Group Creation**
- *Caption: Web Security Group configuration with HTTP inbound rule*
- File: `12-security-group-creation.png`

**Screenshot 13: Security Group Rules**
- *Caption: Inbound rules showing HTTP access from anywhere (0.0.0.0/0)*
- File: `13-security-group-rules.png`

### Task 5: EC2 Instance & Web Server

**Screenshot 14: EC2 Launch Configuration**
- *Caption: EC2 instance configuration - Name, AMI, and instance type selection*
- File: `14-ec2-launch-config.png`

**Screenshot 15: Network Settings**
- *Caption: Network settings showing Lab VPC, Public Subnet 2, and Web Security Group*
- File: `15-ec2-network-settings.png`

**Screenshot 16: User Data Script**
- *Caption: User data script for Apache web server installation and configuration*
- File: `16-user-data-script.png`

**Screenshot 17: EC2 Instance Running**
- *Caption: Web Server 1 instance in running state with 2/2 status checks passed*
- File: `17-ec2-instance-running.png`

**Screenshot 18: Web Server Success Page**
- *Caption: Successfully accessed web application via public DNS showing lab completion page*
- File: `18-web-server-success.png`

**Screenshot 19: Final Architecture**
- *Caption: Complete VPC architecture with all components deployed*
- File: `19-final-architecture.png`

## 🛠️ Technologies Used

- **Amazon VPC** - Virtual Private Cloud
- **Amazon EC2** - Elastic Compute Cloud (t3.micro instance)
- **Amazon Linux 2 AMI** - Operating System
- **Apache HTTP Server** - Web server
- **PHP & MySQL** - Web application dependencies
- **Internet Gateway** - Public internet connectivity
- **NAT Gateway** - Private subnet internet access
- **Security Groups** - Virtual firewall

## 📝 Implementation Steps

### Step 1: Create VPC
```
VPC Name: Lab VPC
IPv4 CIDR: 10.0.0.0/16
Availability Zones: 2
Public Subnets: 2
Private Subnets: 2
NAT Gateways: 1
```

### Step 2: Configure Subnets
| Subnet Name | Type | CIDR Block | Availability Zone |
|-------------|------|------------|-------------------|
| Public Subnet 1 | Public | 10.0.0.0/24 | us-west-2a |
| Private Subnet 1 | Private | 10.0.1.0/24 | us-west-2a |
| Public Subnet 2 | Public | 10.0.2.0/24 | us-west-2b |
| Private Subnet 2 | Private | 10.0.3.0/24 | us-west-2b |

### Step 3: Configure Route Tables
- **Public Route Table**: Routes traffic to Internet Gateway (0.0.0.0/0 → igw-xxx)
- **Private Route Table**: Routes traffic to NAT Gateway (0.0.0.0/0 → nat-xxx)

### Step 4: Create Security Group
```
Name: Web Security Group
Inbound Rules:
  - Type: HTTP
  - Port: 80
  - Source: 0.0.0.0/0 (Anywhere IPv4)
```

### Step 5: Launch EC2 Instance
```bash
# User Data Script
#!/bin/bash
# Install Apache Web Server and PHP
yum install -y httpd mysql php
# Download Lab files
wget https://aws-tc-largeobjects.s3.us-west-2.amazonaws.com/CUR-TF-100-RESTRT-1/267-lab-NF-build-vpc-web-server/s3/lab-app.zip
unzip lab-app.zip -d /var/www/html/
# Turn on web server
chkconfig httpd on
service httpd start
```

## 🔒 Security Considerations

- Security group configured to allow HTTP traffic only (port 80)
- Private subnets isolated from direct internet access
- NAT Gateway provides outbound internet access for private instances
- Public subnets use Internet Gateway for bidirectional internet access
- Key pair authentication required for SSH access

## ✅ Validation & Testing

1. **VPC Creation**: Verified Lab VPC created with correct CIDR block
2. **Subnet Configuration**: Confirmed all 4 subnets created in correct AZs
3. **Route Tables**: Validated proper route associations for public and private subnets
4. **Security Group**: Tested HTTP inbound rule configuration
5. **EC2 Instance**: Verified instance status checks (2/2 passed)
6. **Web Server**: Successfully accessed web application via public DNS

## 🎓 Key Learnings

- **VPC Design**: Understanding of VPC architecture and component relationships
- **High Availability**: Multi-AZ deployment strategy for fault tolerance
- **Network Segmentation**: Proper use of public vs private subnets
- **Security Best Practices**: Implementing least-privilege access with security groups
- **Infrastructure as Code**: Automated web server setup using user data scripts
- **Routing**: Configuration of route tables for different subnet types

## 🌟 Project Outcomes

- Successfully built a production-ready VPC architecture
- Deployed a functional web server accessible from the internet
- Implemented security best practices with proper network isolation
- Demonstrated understanding of AWS networking fundamentals
- Created a scalable foundation for multi-tier applications

## 📚 Additional Resources

- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/)
- [Amazon EC2 User Guide](https://docs.aws.amazon.com/ec2/)
- [VPC Security Best Practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

## 📊 Project Stats

- **Duration**: 45 minutes
- **AWS Services Used**: 6
- **Resources Created**: 15+
- **Availability Zones**: 2
- **Subnets**: 4
- **Success Rate**: 100%

## 🎯 Future Enhancements

- [ ] Add Application Load Balancer for traffic distribution
- [ ] Implement Auto Scaling for high availability
- [ ] Deplo
